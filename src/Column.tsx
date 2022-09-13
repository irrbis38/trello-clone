import { ColumnContainer, ColumnTitle } from "./styles";
import { Card } from "./Card";

type ColumnProps = {
  text: string;
};

export const Column: React.FC<ColumnProps> = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text="Generate app scaffold" />
      <Card text="Learn TypeScript" />
      <Card text="Begin to use static typing" />
    </ColumnContainer>
  );
};
