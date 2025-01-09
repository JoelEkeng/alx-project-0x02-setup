import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content, createdAt }: CardProps) => {
  return (
    <div className="border rounded-lg p-4 mb-4 shadow-sm">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{content}</p>
      <p className="text-sm text-gray-400 mt-2">
        {new Date(createdAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export default Card;
