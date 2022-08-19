import './App.css';
import { TodoProvider } from './components/context/TodoFunctions';
import ToDoContainer from './components/ToDoContainer';

function App() {
  return (
    <div className='App'>
      <TodoProvider>
        <ToDoContainer />
      </TodoProvider>
    </div>
  );
}

export default App;
