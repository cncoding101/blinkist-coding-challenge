import fs from "fs";
import path from "path";
import { redisClient } from "@/data-access/redis";
import { IVariation } from "@/util/types";

const fetchVariation = async (
  page: string,
  userId: string
): Promise<{ variation: IVariation; error?: string }> => {
  try {
    const filePath = path.join(process.cwd(), "src", "data", `${page}.json`);
    if (!fs.existsSync(filePath)) {
      throw new Error("File not found");
    }
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));
    const client = await redisClient();

    let keyValue = await client.get(userId);
    if (!keyValue) {
      const variation =
        Math.random() < 0.5 ? jsonData["control"] : jsonData["test"];
      await client.set(userId, JSON.stringify({ variation }));
      return { variation };
    }

    const { variation } = JSON.parse(keyValue);
    return { variation };
  } catch (error) {
    return {
      variation: { title: "", signUpText: "" },
      error: "There seems to have been an issue",
    };
  }
};

export { fetchVariation };
