import React, { Component } from "react";
import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";

@inject(({ Counter }) => ({
  number: Counter.number,
  increase: Counter.increase,
  decrease: Counter.decrease
}))
@observer
class Counter extends Component {
  render() {
    return (
      <div id="counter">
        <div>
          <h1>{this.props.number}</h1>
          <button onClick={this.props.increase}>+1</button>
          <button onClick={this.props.decrease}>-1</button>
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  number: PropTypes.number,
  increase: PropTypes.func,
  decrease: PropTypes.func
};

export default Counter;
