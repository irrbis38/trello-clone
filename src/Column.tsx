import { ColumnContainer, ColumnTitle } from "./styles";
import { useRef } from "react";
import { useItemDrag } from "./utils/useItemDrag";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./state/AppStateContext";

import { useDrop } from "react-dnd";
import { moveList, addTask } from "./state/actions";
import { throttle } from "throttle-debounce-ts";
import { isHidden } from "./utils/isHidden";

type ColumnProps = {
  text: string;
  id: string;
};

export const Column: React.FC<ColumnProps> = ({ text, id }: ColumnProps) => {
  const { draggedItem, getTasksByListId, dispatch } = useAppState();

  const tasks = getTasksByListId(id);

  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: "COLUMN",
    hover: throttle(200, () => {
      if (!draggedItem) {
        return;
      }
      if (draggedItem.type === "COLUMN") {
        if (draggedItem.id === id) {
          return;
        }
        dispatch(moveList(draggedItem.id, id));
      }
    }),
  });

  const { drag } = useItemDrag({ type: "COLUMN", id, text });
  drag(drop(ref));
  return (
    <ColumnContainer ref={ref} isHidden={isHidden(draggedItem, "COLUMN", id)}>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card text={task.text} id={task.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another card"
        onAdd={(text) => dispatch(addTask(text, id))}
        dark
      />
    </ColumnContainer>
  );
};
