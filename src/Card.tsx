import { CardContainer } from "./styles";

type CardProps = {
  text: string;
  id: string;
};

export const Card: React.FC<CardProps> = ({ text }) => {
  return <CardContainer>{text}</CardContainer>;
};
