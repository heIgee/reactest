import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Clear } from '@mui/icons-material';

export default function TodoItem({ todo, onRemove, onCheck }) {
  const labelId = `todo-label-${todo.id}`;

  return (
    <ListItem
      secondaryAction={
        <IconButton onClick={onRemove}>
          <Clear />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton>
        <ListItemIcon>
          <Checkbox checked={todo.isDone} onChange={onCheck}></Checkbox>
        </ListItemIcon>
        <ListItemText id={labelId} primary={todo.content} />
      </ListItemButton>
    </ListItem>
  );
}
