import Text from "@/components/atoms/Text";

interface IProps {
  message: string;
}

const ErrorComponent: React.FC<IProps> = ({ message }) => {
  return (
    <div className="flex">
      <div className="text-center w-full p-4">
        <Text variant="title" className="text-4xl font-bold text-secondary">
          Obs..
        </Text>
        <Text variant="paragraph" className="text-xl ">
          {message}
        </Text>
      </div>
    </div>
  );
};

export default ErrorComponent;
