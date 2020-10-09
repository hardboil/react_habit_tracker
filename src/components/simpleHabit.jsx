import React, { useCallback, useEffect, useRef, useState } from "react";

// ! TODO
// * useRef()
// * useCallback()

const SimpleHabit = () => {
  // ! class 인 경우
  // * state = {
  // *  count: 0,
  // * };
  // ! react hook 인 경우
  // * const [count, setCount] = useState(0);

  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    // * class 에서 구현되었을때 this.setState({ count: this.state.count + 1 });

    setCount(count + 1);
  });

  // ? count 값이 변경 될때 마다 호출 됨
  // useEffect(() => {
  //   console.log(`mount & updated : ${count}`);
  // }, [count]);
  // ? 초기 mount 시에만 호출되고 안됨 : [] 체크할 변수를 셋팅하지 않았기 때문에
  useEffect(() => {
    console.log(`mount & updated : ${count}`);
  }, []);

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
