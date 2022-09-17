import { useDrag } from 'react-dnd';
import { useAppState } from '../state/AppStateContext';
import { DragItem } from '../DragItem';
import { setDraggetItem } from '../state/actions';

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();
  const [, drag] = useDrag({
    type: item.type,
    item: () => {
      dispatch(setDraggetItem(item));
      return item;
    },
    end: () => dispatch(setDraggetItem(null)),
  });
  return { drag };
};
