import { Add } from '@mui/icons-material';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  ListItem,
  OutlinedInput,
} from '@mui/material';
import { useState } from 'react';

export default function TodoForm({ addTodo }) {
  const [text, setText] = useState(null);
  return (
    <ListItem
      sx={{
        mt: 2,
        width: '80%',
      }}
    >
      <form
        style={{
          width: '100%',
        }}
        onSubmit={(ev) => {
          ev.preventDefault();
          addTodo(text);
        }}
      >
        <FormControl
          variant='outlined'
          style={{
            width: '100%',
          }}
        >
          <InputLabel htmlFor='todo-new'>New</InputLabel>
          <OutlinedInput
            id='todo-new'
            value={text}
            onChange={(ev) => setText(ev.target.value)}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton type='submit' edge='end'>
                  <Add />
                </IconButton>
              </InputAdornment>
            }
            label='new'
          />
        </FormControl>
      </form>
    </ListItem>
  );
}
