import Text from "@/components/atoms/Text";
import CardImage from "@/components/atoms/Image";

interface IProps {
  title: string;
  description: string;
  imageUrl?: string;
  className?: string;
}

const Card: React.FC<IProps> = ({
  title,
  description,
  imageUrl,
  className = "",
}) => {
  return (
    <div
      className={`${className} text-left rounded-md shadow-md p-4 max-w-md h-[200px]`}
    >
      <Text variant="heading" className="mb-2">
        {title}
      </Text>
      <Text variant="paragraph" className="mb-2">
        {description}
      </Text>

      {imageUrl && <CardImage url={imageUrl} width={100} height={100} />}
    </div>
  );
};

export default Card;
