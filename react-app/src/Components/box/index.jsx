import React from "react";
import "./style.css";

// This is a Function Component
// const Boxes = () => {
//     return <div>
//         <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente facere in eius eligendi debitis, laborum?</h1>
//     </div>
// }

// export default Boxes

//This is Class Component

class Boxes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 45,
            f: 12
        }
        /* 
        state = {
            f: 7,
            number: 45
        }
        */
    }

    change = () => {
        this.setState({f : this.state.number + this.state.f}); 
    }

    render() {
        return <div>
            {console.log(this.state.f)}
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente facere in eius eligendi debitis, laborum?</h1>
        <p>{this.state.f}</p>
        <button onClick={this.change}>Change</button>
     </div>
    }
}

export default Boxes