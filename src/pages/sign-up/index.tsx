import { useRouter } from "next/router";
import Cookie from "js-cookie";

import Button from "@/components/atoms/Button";
import Text from "@/components/atoms/Text";
import { trackEvent } from "@/services/analytics-api";

const SignUp: React.FC = () => {
  const router = useRouter();

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    const userId = Cookie.get("userId");
    if (userId) {
      trackEvent({
        url: window.location.pathname,
        userId,
        eventName: "redirect-home",
      });
    }

    await router.push("/");
  };

  return (
    <div className="flex flex-col items-center py-8">
      <header>
        <Text
          variant="title"
          className="laptop:text-4xl phone:text-2xl uppercase"
        >
          This is a dummy page
        </Text>
      </header>

      <section className="flex flex-col items-center">
        <Text variant="paragraph" className="text-secondary text-xl mb-6">
          Click to go back to the home page
        </Text>

        <Button
          variant="primary"
          onClick={handleClick}
          className="text-xl font-medium uppercase"
        >
          Home
        </Button>
      </section>
    </div>
  );
};

export default SignUp;
