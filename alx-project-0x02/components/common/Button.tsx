import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ size, shape, label }) => {
  return (
    <button className={`${size} ${shape}`}>{label}</button>
  );
};

export default Button;

