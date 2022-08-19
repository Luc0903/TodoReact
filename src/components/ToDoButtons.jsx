import ButtonReducer from './ButtonReducer';

export default function ToDoButtons({ setRenderAll, setRenderActive, setRenderCompleted }) {
  const buttons = [
    { name: 'All', id: 1 },
    { name: 'Active', id: 2 },
    { name: 'Completed', id: 3 },
  ];
  return (
    <div className=' flex mt-8 border-b border-input__border'>
      {buttons.map((btn) => {
        return (
          <ButtonReducer
            key={btn.id}
            name={btn.name}
            setRenderAll={setRenderAll}
            setRenderActive={setRenderActive}
            setRenderCompleted={setRenderCompleted}
          />
        );
      })}
    </div>
  );
}
