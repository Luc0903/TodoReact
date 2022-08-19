import { createContext, useState } from 'react';

const TodoFunctions = createContext(null);

const initialValue = { taskContent: '', completed: false, id: null };

function TodoProvider({ children }) {
  const [task, setTask] = useState(initialValue);
  const [taskCollection, setTaskCollection] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const createData = (el) => {
    el.id = Date.now();
    setTaskCollection([...taskCollection, el]);
  };

  const handleCompleted = (id) => {
    setTaskCollection(
      taskCollection.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      }),
    );
  };

  const handleDelete = (id) => {
    let userResponse = confirm('Are you sure about deleting the task?');
    if (userResponse) {
      setTaskCollection(taskCollection.filter((todo) => todo.id !== id));
    }
  };

  const deleteAllCompleted = () => {
    let userResponse = confirm('Are you sure about deleting all completed tasks?');
    if (userResponse) {
      setTaskCollection(taskCollection.filter((todo) => todo.completed !== true));
    }
  };

  const editTask = (el) => {
    let editedCollection = taskCollection.map((todo) => {
      return todo.id === el.id ? { ...todo, taskContent: el.taskContent } : todo;
    });
    setTaskCollection(editedCollection);
  };

  const data = {
    task,
    setTask,
    taskCollection,
    setTaskCollection,
    handleChange,
    handleCompleted,
    handleDelete,
    deleteAllCompleted,
    editTask,
    dataToEdit,
    setDataToEdit,
    createData,
  };
  return <TodoFunctions.Provider value={data}>{children}</TodoFunctions.Provider>;
}

export { TodoProvider };
export default TodoFunctions;
