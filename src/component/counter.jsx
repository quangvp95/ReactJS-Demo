import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    address: {},
    tags: ["tag1", "tag2", `tag3`],
  };

  style = {
    fontSize: 20,
    fontWeight: "bold",
  };

  constructor() {
    super();
    this.increment = this.increment.bind(this);
  }

  renderTags() {
    if (!this.state.tags || this.state.tags.length === 0)
      return <p>No tags!</p>;
    return (
      <ul>
        {this.state.tags.map((t) => (
          <li style={{ fontSize: 20 }} key={t}>
            This is {t}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let classes = this.getBadgeClasses();
    console.log("increment " + this.state.count);

    return (
      <div>
        {/* <img src={this.state.imageUrl} /> */}
        <span style={this.style} className={classes}>
          {this.formatCount()}
        </span>
        <button
          style={{ fontSize: 20 }}
          onClick={() => {
            this.handleIncrement("Test", 1);
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.renderTags()}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = `badge m-2 `;
    classes += "badge-" + (this.state.count === 0 ? "warning" : "primary");
    return classes;
  }

  formatCount() {
    const { count, address } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }

  increment() {
    console.log("increment " + this.state.count);
    this.setState({ count: this.state.count + 1 });
  }

  handleIncrement = (name, product) => {
    console.log(name + " " + product);
    this.increment();
  };
}

export default Counter;
