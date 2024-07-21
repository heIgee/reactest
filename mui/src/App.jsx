import './App.css';
import TodoList from './TodoList';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <main id='App'>
        <TodoList />
      </main>
    </ThemeProvider>
  );
}
