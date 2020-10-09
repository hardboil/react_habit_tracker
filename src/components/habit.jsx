import React, { PureComponent } from "react";

class Habit extends PureComponent {
  //   state = {
  //     count: 0,
  //   };

  //   handleIncrement = () => {
  //     // ! 주의
  //     // * this.state.count += 1; 과 같이 사용시 react에서는 state의 변경을 인지하지 못하여 render 호출하지 않는다

  //     // state 오브젝트 안에 있는 count 증가 한 후 state를 업데이트
  //     this.setState({ count: this.state.count + 1 });
  //   };

  //   handleDecrement = () => {
  //     const count = this.state.count - 1;
  //     this.setState({ count: count < 0 ? 0 : count });
  //   };

  componentDidMount() {
    console.log(`habit : ${this.props.habit.name} mounted`);
  }
  componentWillUnmount() {
    console.log(`habit : ${this.props.habit.name} will unmounted`);
  }
  // * mapping event
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    console.log(`habit : ${this.props.habit.name}`);
    // * habit에 정의된 변수명과 동일하게 정의하여야 한다
    // * - habit.name, habit.count
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
          // * 아래 방법은 권장하지 않음
          //   onClick={() => {
          //     this.props.onDelete(this.props.habit);
          //   }}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
