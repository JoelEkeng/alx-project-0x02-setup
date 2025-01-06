import { CardProps } from "@/interfaces";
import Image from "next/image";

const Card: React.FC<CardProps> = ({ title, content, image }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
      <Image src={image} alt={title} width={100} height={100} />
    </div>
  );
};

export default Card;
