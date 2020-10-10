import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
  // ! 배열의 경우 rendering등 처리시 성능 향상을 위해 유니크한 key값 설정이 필요
  // ! 배열의 인덱스의 경우는 변경 될 수 있으므로 유니크한 값을 정의해야한다
  // * app.jsx로 에서 처리
  //   state = {
  //     habits: [
  //       { id: 1, name: "Reading", count: 0 },
  //       { id: 2, name: "Rnning", count: 0 },
  //       { id: 3, name: "Coding", count: 0 },
  //     ],
  //   };

  handleIncrement = (habit) => {
    // console.log(habit);

    // // * 배열 복사
    // // * [...배열데이터]
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits[index].count++;

    // // * 키값과 동일데이터변수명인 경우 아래와 같이 사용가능
    // // * this.setState({ habits: habits });
    // this.setState({ habits });

    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    // console.log(habit);

    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);

    // // habits[index].count--;
    // const count = habits[index].count - 1;
    // habits[index].count = count < 0 ? 0 : count;

    // this.setState({ habits });

    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    // const habits = this.state.habits.filter((item) => item.id !== habit.id);
    // this.setState({ habits });

    this.props.onDelete(habit);
  };

  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  // ! habitAddForm을 PureComponent 사용하고
  // ! console > Components 설정에서 highlight updates when components render 활성화시
  // ! <div></div> 사용시 정상적으로 보여주고 <></> 사용시 전부 highlight 되는 버그가 있는듯 함
  render() {
    console.log("habits");
    // {this.state.habits.map((habit) => ())}
    // ? 여러개의  element를 반환할 경우
    //   * <React.Fragment>
    //   * <>
    //   * </>
    //   * </React.Fragment>
    return (
      <div className="habits">
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <button className="habit-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </div>
    );
  }
}

export default Habits;
