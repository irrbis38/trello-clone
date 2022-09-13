import { CardContainer } from "./styles";

type CardProps = {
  text: string;
};

export const Card: React.FC<CardProps> = ({ text }) => {
  return <CardContainer>{text}</CardContainer>;
};
