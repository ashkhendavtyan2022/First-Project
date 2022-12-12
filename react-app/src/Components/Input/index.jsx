import React from "react";
import "./style.css"

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            changeBy: 1,
            number: 0
        }
    }

    enterNumber = (e) => {
        this.setState({number: e.target.value})  
    }
    
    increaseNumber = () => {
        this.setState({number: this.state.number + this.state.changeBy})
    }

    decreaseNumber = () => {
        if(this.state.number === 0) {
            this.setState({number: this.state.number})
        } else {
            this.setState({number : this.state.number - this.state.changeBy});
        }
         
    }

    // newNumber = (e) => {
    //     this.setState({changeBy: e.target.value})
    // }

    render () {
        return <div className="input-margin">
            <button className="btn" onClick={this.increaseNumber}>+</button>
            <input type="number" onChange={this.enterNumber}/>
            <button className="btn" onClick={this.decreaseNumber}>-</button>

            <input type="number" className="input-new-number" onChange={this.newNumber} />
        </div>
    }
}

export default Input