import Text from "@/components/atoms/Text";
import Link from "@/components/atoms/Link";
import Button from "@/components/atoms/Button";
import HeroImage from "@/components/atoms/Image";
import { usePhoneView } from "@/hoc/layout";

export default function Home() {
  const isPhoneView = usePhoneView();

  return (
    <div className="flex laptop:flex-row phone:flex-col w-full px-8">
      <div className="laptop:w-1/2 phone:w-full min-h-[400px] flex flex-col justify-center">
        <header>
          <Text
            variant="title"
            className="text-5xl font-bold text-secondary mb-6"
          >
            Elevate Your Workspace
          </Text>
        </header>

        <section>
          <Text variant="paragraph" className="text-secondary text-xl mb-6">
            Discover the perfect blend of design and function with our latest
            office collection. Transform your workspace into a hub of creativity
            and productivity.
          </Text>

          <Button variant="primary">
            <Link to="/" className="text-xl">
              Sign Up
            </Link>
          </Button>
        </section>
      </div>
      <div className="relative laptop:w-1/2 phone:w-full flex justify-center">
        <HeroImage
          url={
            isPhoneView ? "/hero-background-phone.svg" : "/hero-background.svg"
          }
          layout="fill"
          objectFit="cover"
        />
        <div className="laptop:absolute laptop:top-1/2 left-1/2 transform laptop:-translate-x-1/4 laptop:-translate-y-1/3 w-full">
          <HeroImage url="/hero.webp" width={400} height={300} />
        </div>
      </div>
    </div>
  );
}
