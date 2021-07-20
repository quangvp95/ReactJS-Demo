import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    imageUrl: "https://picsum.photos/200",
    // address: {},
    tags: ["tag1", "tag2", `tag3`],
  };

  style = {
    fontSize: 20,
    // fontWeight: "itali",
  };

  constructor(props) {
    super(props);
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

    return (
      <div>
        {/* <img src={this.state.imageUrl} /> */}
        {this.props.children}
        <span>Id {this.props.counter.id}</span>
        <span style={this.style} className={classes}>
          {this.formatCount()}
        </span>
        <button
          style={{ fontSize: 15 }}
          onClick={() => {
            this.props.onIncrement(this.props.counter);
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
        {/* {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = `badge m-2 `;
    classes +=
      "badge-" + (this.props.counter.value === 0 ? "warning" : "primary");
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? <h4>Zero</h4> : count;
  }

  increment() {
    this.setState({ count: this.props.counter.value + 1 });
  }

  handleIncrement = (name, product) => {
    console.log(name + " " + product);
    this.setState({ value: this.props.counter.value + 1 });
  };

  handleDelete = () => {
    this.setState({ value: this.props.counter.value - 1 });
  };
}

export default Counter;
