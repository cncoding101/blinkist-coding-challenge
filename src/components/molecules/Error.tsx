import Text from "@/components/atoms/Text";

interface IProps {
  message: string;
}

const ErrorComponent: React.FC<IProps> = ({ message }) => {
  return (
    <div className="flex">
      <div className="text-center rounded-lg shadow-md w-full p-4">
        <Text variant="title" className="font-bold text-secondary">
          Error
        </Text>
        <Text variant="paragraph">{message}</Text>
      </div>
    </div>
  );
};

export default ErrorComponent;
