import React, { memo } from "react";

// ? 구현 형태
// ? function habitAddForm(props) {};
// ? const HabitAddForm = (props) => {};
// ?   => rsi 단축 emmet

// ! 이경우 re-redenr이 지속적으로 발생
// ? react.memo 사용
// const HabitAddForm = (props) => {
//   console.log("habitAddForm");

//   const formRef = React.createRef();
//   const inputRef = React.createRef();

//   const onSubmit = (event) => {
//     event.preventDefault();
//     const name = inputRef.current.value;
//     name && props.onAdd(name);
//     formRef.current.reset();
//   };

//   return (
//     <form ref={formRef} className="add-form" onSubmit={onSubmit}>
//       <input
//         ref={inputRef}
//         type="text"
//         className="add-input"
//         placeholder="Habit"
//       />
//       <button className="add-button">Add</button>
//     </form>
//   );
// };

const HabitAddForm = memo((props) => {
  console.log("habitAddForm");

  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
