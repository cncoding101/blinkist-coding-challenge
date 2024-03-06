import { createClient, RedisClientType } from "redis";

const url: string = process.env.REDIS_URL || "redis://localhost:6379";

let redisClient: RedisClientType | undefined;
const getRedisClient = async (): Promise<RedisClientType> => {
  if (!redisClient) {
    const client: RedisClientType = createClient({ url });
    client.on("error", (err: Error) => {
      console.log("Redis client error", err);
      throw err;
    });
    client.on("connect", () => console.log("Redis client connected"));

    await client.connect().catch((err: Error) => {
      console.log("Failed to connect to Redis:", err);
      throw err;
    });

    redisClient = client; // Save the connected client for reuse.
  }

  return redisClient;
};

export { getRedisClient as redisClient };
