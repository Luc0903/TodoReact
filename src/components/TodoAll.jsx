import { useContext, useEffect } from 'react';
import TodoFunctions from './context/TodoFunctions';
import RowTodo from './RowTodo';

export default function ToDoAll() {
  const {
    handleChange,
    task,
    setTask,
    taskCollection,
    handleCompleted,
    handleDelete,
    dataToEdit,
    setDataToEdit,
    editTask,
    createData,
  } = useContext(TodoFunctions);
  function handleReset() {
    setTask({
      taskContent: '',
      completed: false,
      id: null,
    });
    setDataToEdit(null);
  }
  useEffect(() => {
    if (dataToEdit) {
      setTask(dataToEdit);
    } else {
      setTask({
        taskContent: '',
        completed: false,
        id: null,
      });
    }
  }, [dataToEdit]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.taskContent.trim() === '') {
      alert('You cannot create blank tasks');
      return;
    }
    if (task.id === null) {
      createData(task);
    } else {
      editTask(task);
    }
    handleReset();
  };
  return (
    <div className=' mt-5'>
      <form className=' flex justify-between w-80 text-xs' onSubmit={handleSubmit}>
        <input
          className=' w-64 h-8 border px-2 py-1 border-input__border rounded-xl font-montserrat font-normal focus:outline-main__cyan'
          placeholder='add details'
          type='text'
          name='taskContent'
          onChange={handleChange}
          value={task.taskContent}
          autoComplete='off'
        />
        <button
          className=' bg-main__cyan w-12 text-white h-8 font-montserrat font-semibold rounded-xl active:scale-90'
          type='submit'
        >
          Add
        </button>
      </form>
      <div className=' mt-6 font-montserrat font-medium'>
        {taskCollection.map((todo) => {
          return <RowTodo key={todo.id} todo={todo} handleCompleted={handleCompleted} handleDelete={handleDelete} />;
        })}
      </div>
    </div>
  );
}
