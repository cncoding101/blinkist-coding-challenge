import Text from "@/components/atoms/Text";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface IProps {
  message: string;
}

const Error: React.FC<IProps> = ({ message }) => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Redirect to the homepage after 5 seconds
      router.push("/");
    }, 2000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [router]);

  return (
    <div className="flex">
      <div className="text-center w-full p-4">
        <Text variant="title" className="text-4xl font-bold text-secondary">
          Oops..
        </Text>
        <Text variant="paragraph" className="text-xl ">
          {message}
        </Text>
      </div>
    </div>
  );
};

export default Error;
