import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, onIncrement, onDelete, counters } = this.props;
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map((t) => (
          <Counter
            key={t.id}
            selected={true}
            counter={t}
            onDelete={onDelete}
            onIncrement={onIncrement}
          >
            <h3>Title {t.id}</h3>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
