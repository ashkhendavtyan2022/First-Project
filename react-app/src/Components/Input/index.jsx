import React from "react";
import "./style.css"

class Input extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        changeBy: 1,
        number: 0,
      };
    }
  
    enterNumber = (e) => {
      this.setState((prev) => {
        return {
          ...prev,
          number: e.target.value,
        };
      });
    };
  
    increaseNumber = () => {
      this.setState((prev) => {
        return {
          ...prev,
          number: +prev.number + +prev.changeBy,
        };
      });
    };
  
    decreaseNumber = () => {
      this.setState((prev) => {
        return {
          ...prev,
          number: +prev.number - +prev.changeBy,
        };
      });
    };
  
    newNumber = (e) => {
      this.setState((prev) => {
        return {
          ...prev,
          changeBy: e.target.value,
        };
      });
    };
  
    render() {
      return (
        <div className="input-margin">
          <button className="btn" onClick={this.increaseNumber}>
            +
          </button>
          <input
            type="number"
            onChange={this.enterNumber}
            value={this.state.number}
          />
          <button className="btn" onClick={this.decreaseNumber}>
            -
          </button>
  
          <input
            type="number"
            className="input-new-number"
            onChange={this.newNumber}
          />
        </div>
      );
    }
  }
  
  export default Input;