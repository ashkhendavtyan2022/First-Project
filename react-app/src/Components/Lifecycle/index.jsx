import React from "react";
//import React, {Component} from "react"

export class Life extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            changeBy: 1,
        }
    }

    componentDidMount() {
        console.log("Mount")
    }
    
    // shouldComponentUpdate() {
    //     return true
    // }

    componentDidUpdate() {
        console.log("update")
    }

    componentWillUnmount(){
        console.log("Unmount")
    }

    change = (e) => {
        this.setState({changeBy: e.target.value})
    }

    render() {

        return  (
            <div> 
                {console.log("start")}
                <input type="text" onChange={this.change}/>
            </div>
        )
    }
}