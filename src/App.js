import React, { Component } from "react";
import Navbar from "./components/Navbar";
import ToDoRows from "./components/ToDoRows";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "chinku",
      todoItems: [
        { action: "buy milk", done: false },
        { action: "dentist at 5pm", done: false },
        { action: "we go jim", done: false },
      ],
      newToDo: "",
    };
  }

  updateValue = (event) => {
    this.setState({ newToDo: event.target.value });
  };

  toggleDone = (todo) => {
    this.setState({
      todoItems: this.state.todoItems.map((item) =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      ),
    });
  };

  todoRows = () =>
    this.state.todoItems.map((item) => (
      <ToDoRows item={item} callback={this.toggleDone} />
    ));
  // changeStateData = () => {
  //   this.setState({
  //     userName: this.state.userName === "name1" ? "name2" : "name1",
  //   });
  // };

  newTask = () => {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        { action: this.state.newToDo, done: false },
      ],
    });
  };

  render = () => (
    <div className="container">
      <div className="row">
        <Navbar name={this.state.userName} />

        <div className="col-12">
          <input
            className="form-control"
            value={this.state.newToDo}
            onChange={this.updateValue}
          />
          <button className="btn btn-primary" onClick={this.newTask}>
            Add
          </button>
        </div>

        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th>task</th>
                <th>complete</th>
              </tr>
            </thead>
            <tbody>{this.todoRows()}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
