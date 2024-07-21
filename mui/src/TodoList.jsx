import './TodoList.css';
import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Box, List, Typography } from '@mui/material';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const initTodos = [
  { id: uuid(), isDone: false, content: 'survive' },
  { id: uuid(), isDone: true, content: 'walk the cat' },
  { id: uuid(), isDone: false, content: 'get a job' },
];

export default function TodoList() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) ?? initTodos,
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (todo) => {
    setTodos((prev) =>
      prev.map((t) => {
        if (t.id === todo.id) {
          return { ...t, isDone: !t.isDone };
        } else {
          return { ...t };
        }
      }),
    );
  };

  const removeTodo = (todo) => {
    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
  };

  const addTodo = (text) => {
    setTodos((prev) => [...prev, { id: uuid(), isDone: false, content: text }]);
  };

  return (
    <Box
      id='TodoList'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant='h3' sx={{ my: 2, textAlign: 'center' }}>
        Yet Another <br></br>
        Todo List
      </Typography>
      <List
        sx={{
          width: '90%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {todos.map((t) => (
          <TodoItem
            key={t.id}
            todo={t}
            onRemove={() => removeTodo(t)}
            onCheck={() => toggleTodo(t)}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </List>
    </Box>
  );
}
