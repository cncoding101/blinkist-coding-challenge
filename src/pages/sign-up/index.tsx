import Button from "@/components/atoms/Button";
import Link from "@/components/atoms/Link";
import Text from "@/components/atoms/Text";

const SignUp: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-8">
      <header>
        <Text variant="title" className="text-4xl uppercase">
          This is a dummy page
        </Text>
      </header>

      <section className="flex flex-col items-center">
        <Text variant="paragraph" className="text-secondary text-xl mb-6">
          Click to go back to the home page
        </Text>

        <Button variant="primary" className="w-1/2">
          <Link to="/" className="text-xl font-medium uppercase">
            Home
          </Link>
        </Button>
      </section>
    </div>
  );
};

export default SignUp;
