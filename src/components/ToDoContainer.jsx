import ToDoButtons from './ToDoButtons';
import { useState } from 'react';
import ToDoAll from './TodoAll';
import TodoActive from './TodoActive';
import { TodoCompleted } from './TodoCompleted';

export default function ToDoContainer() {
  const [renderAll, setRenderAll] = useState(false);
  const [renderActive, setRenderActive] = useState(true);
  const [renderCompleted, setRenderCompleted] = useState(false);

  return (
    <div className=' flex flex-col items-center max-w-sm mt-7 mx-auto'>
      <p className=' text-main__gray font-bold text-4xl font-raleway'>#todo</p>
      <ToDoButtons
        setRenderAll={setRenderAll}
        setRenderActive={setRenderActive}
        setRenderCompleted={setRenderCompleted}
      />
      {renderAll && <ToDoAll />}
      {renderActive && <TodoActive />}
      {renderCompleted && <TodoCompleted />}
    </div>
  );
}
