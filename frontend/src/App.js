import './App.css';
import UpperTodo from './components/UpperTodo'
import AddTask from './components/AddTask';
import TodoCards from './components/TodoCards';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <UpperTodo/>
      <AddTask/>
      <TodoCards/>
    </>
  );
}

export default App;
