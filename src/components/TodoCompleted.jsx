import RowTodo from './RowTodo';
import { BiTrash } from 'react-icons/bi';
import { useContext } from 'react';
import TodoFunctions from './context/TodoFunctions';

export function TodoCompleted() {
  const { taskCollection, handleCompleted, handleDelete, deleteAllCompleted } = useContext(TodoFunctions);

  const completedTasks = taskCollection.filter((todo) => {
    return todo.completed === true;
  });
  return (
    <div className=' mt-5 font-montserrat font-medium'>
      {completedTasks.map((todo) => {
        return <RowTodo key={todo.id} todo={todo} handleCompleted={handleCompleted} handleDelete={handleDelete} />;
      })}
      <button
        className=' text-white font-montserrat h-9 bg-button__red rounded-md flex text-xs items-center p-1 ml-auto mt-2'
        onClick={deleteAllCompleted}
      >
        <BiTrash /> delete all
      </button>
    </div>
  );
}
