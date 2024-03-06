import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { useRouter } from "next/router";
import Cookie from "js-cookie";

import Text from "@/components/atoms/Text";
import Button from "@/components/atoms/Button";
import HeroImage from "@/components/atoms/Image";
import Error from "@/components/molecules/Error";
import { usePhoneView } from "@/hoc/layout";
import { IVariation } from "@/util/types";
import { fetchVariation } from "@/business/home";
import { trackEvent } from "@/services/analytics-api";

export const getServerSideProps = (async (context) => {
  const userId = context.req.cookies.userId;
  const { variation, error } = await fetchVariation("home", userId);

  return {
    props: { variation, error: error ?? null },
  };
}) satisfies GetServerSideProps<{
  error: string | null;
  variation: IVariation;
}>;

export default function Home({
  error,
  variation,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const isPhoneView = usePhoneView();

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    const userId = Cookie.get("userId");
    const signUpClicked = Cookie.get("signUpClicked");
    if (userId && signUpClicked !== "true") {
      Cookie.set("signUpClicked", "true", { path: "/" });
      // only track it if we know who it belongs to, in order to associate and draw logical marketing conclusions
      trackEvent({
        url: window.location.pathname,
        userId,
        eventName: "sign-up",
      });
    }

    await router.push("/sign-up");
  };

  if (error) return <Error message={error} />;
  return (
    <div className="space-y-12 px-8">
      <div className="flex laptop:flex-row phone:flex-col w-full">
        <div className="laptop:w-1/2 phone:w-full min-h-[400px] flex flex-col justify-center">
          <header>
            <Text
              variant="title"
              className="text-5xl font-bold text-secondary mb-6"
            >
              {variation.title}
            </Text>
          </header>

          <section>
            <Text variant="paragraph" className="text-secondary text-xl mb-6">
              {variation.signUpText}
            </Text>

            <Button
              variant="primary"
              onClick={handleClick}
              className="text-xl font-medium uppercase"
            >
              Sign Up
            </Button>
          </section>
        </div>
        <div className="relative laptop:w-1/2 phone:w-full">
          {variation.books && !isPhoneView && (
            <div className="flex flex-col w-1/2">
              {variation.books.map((book, index) => (
                <Text
                  key={index}
                  variant="heading"
                  className="font-bold mb-2 opacity-60"
                  style={{ marginLeft: `${index * 2}rem` }}
                >
                  {book.title}
                </Text>
              ))}
            </div>
          )}
          <HeroImage
            url={
              isPhoneView
                ? "/hero-background-phone.svg"
                : "/hero-background.svg"
            }
            fill={true}
            style={{ objectFit: "cover" }}
          />
          <div className="laptop:absolute laptop:top-1/2 left-1/2 transform laptop:-translate-x-1/4 laptop:-translate-y-1/3 w-full">
            <HeroImage url="/hero.webp" width={400} height={300} />
          </div>
        </div>
      </div>
    </div>
  );
}
