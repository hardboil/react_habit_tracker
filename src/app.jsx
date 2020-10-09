// import React from "react";
// import "./app.css";
// import Habits from "./components/habits";

// function App() {
//   // return <h1>Hello :)</h1>;
//   return <Habits />;
// }

// export default App;

// ------------------

import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Rnning", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  // handleIncrement = (habit) => {
  //   const habits = [...this.state.habits];
  //   const index = habits.indexOf(habit);
  //   habits[index].count++;

  //   this.setState({ habits });
  // };
  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        // ? destructuring object
        // return { ...habit };
        return { ...habit, count: habit.count + 1 };
      } else {
        return item;
      }
    });

    this.setState({ habits });
  };

  // handleDecrement = (habit) => {
  //   const habits = [...this.state.habits];
  //   const index = habits.indexOf(habit);

  //   const count = habits[index].count - 1;
  //   habits[index].count = count < 0 ? 0 : count;

  //   this.setState({ habits });
  // };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      } else {
        return item;
      }
    });

    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name: name, count: 0 },
    ];
    this.setState({ habits });
  };

  // handleReset = () => {
  //   const hanbits = this.state.habits.map((habit) => {
  //     habit.count = 0;
  //     return habit;
  //   });
  //   this.setState({ hanbits });
  // };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    console.log("app");
    return (
      // <React.Fragment>
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
      // </React.Fragment>
    );
  }
}

export default App;
