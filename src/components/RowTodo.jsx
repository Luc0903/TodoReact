import { useContext } from 'react';
import { BiTrash, BiEdit } from 'react-icons/bi';
import TodoFunctions from './context/TodoFunctions';

export default function RowTodo({ todo }) {
  const { handleCompleted, handleDelete, setDataToEdit } = useContext(TodoFunctions);
  const { taskContent, completed, id } = todo;
  return (
    <div className=' flex items-center justify-between'>
      <input type='checkbox' checked={completed} onChange={() => handleCompleted(id)} />
      <p id='style-4' className={` w-60 overflow-x-auto px-2 ${completed && ' line-through'}`}>
        {taskContent}
      </p>
      <div className=' flex mx-1 justify-between'>
        <span>
          <BiEdit fill='#BDBDBD' onClick={() => setDataToEdit(todo)} />
        </span>
        <span className=' hover:cursor-pointer mx-1'>
          <BiTrash fill='#BDBDBD' onClick={() => handleDelete(id)} />
        </span>
      </div>
    </div>
  );
}
