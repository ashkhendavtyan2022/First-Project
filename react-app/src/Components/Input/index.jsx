import React from "react";
import "./style.css"

/*
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
        if (this.state.number === 0) {
            return {
                ...prev,
              };
        } else {
            return {
                ...prev,
                number: +prev.number - +prev.changeBy,
              };
        }
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

*/
class Handle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        number: 0,
        value: 0,
      }
    }

    Plus = () => {
        this.setState({number: this.state.number + this.state.value})
    }
    
    Minus = () => {
        if(this.state.number <= 0) {
            this.setState({number: 0})
        } else {
            this.setState({number: this.state.number - this.state.value })
        }
    }

    handleChange = (e) => {
        if(e.target.value <= 0) {
            this.setState({value: 1})
        } else {
            this.setState({value: +e.target.value})
        }
        
    }

      render () {
        const{text, image} = this.props

        return (
            <div className="demo">
                <button onClick={this.Plus}>+</button>
                <div className={image? "block" : "block2"}>{this.state.number}</div>
                <button onClick={this.Minus}>-</button>
                <input type="number" onChange={this.handleChange} />
                <p>{text}</p>
                {image ? <img src={image} alt="nkar" /> : null}
           </div>
        )
      }
}

  export default Handle;

  