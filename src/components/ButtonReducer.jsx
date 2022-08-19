import { useContext } from 'react';
import TodoFunctions from './context/TodoFunctions';

export default function ButtonReducer({ name, setRenderAll, setRenderActive, setRenderCompleted }) {
  const clickedButton = (e) => {
    switch (e.target.name) {
      case 'All':
        setRenderAll(true);
        setRenderActive(false);
        setRenderCompleted(false);
        break;
      case 'Active':
        setRenderAll(false);
        setRenderActive(true);
        setRenderCompleted(false);
        break;
      case 'Completed':
        setRenderAll(false);
        setRenderActive(false);
        setRenderCompleted(true);
        break;
    }
  };
  return (
    <button
      className=' font-montserrat font-semibold text-sm text-main__gray mx-6 focus:border-b-2 active:border-main__cyan focus:border-main__cyan'
      name={name}
      onClick={clickedButton}
    >
      {name}
    </button>
  );
}
