import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");
    const { onReset, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={this.props.onReset} className="btn-primary btn-sm m-2">
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
