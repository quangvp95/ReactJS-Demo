import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./component/navbar";
import Counter from "./component/counter";
import Counters from "./component/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
    ],
  };

  handleReset = () => {
    this.setState({
      counters: this.state.counters.map((i) => {
        i.value = 0;
        return i;
      }),
    });
  };

  handleDelete = (id) => {
    const counters = this.state.counters.filter((i) => i.id !== id);
    this.setState({ counters });
    console.log(counters);
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(index);

    this.setState({ counters });
    console.log(counters);
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalNumber={this.state.counters.filter((t) => t.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
