import React from "react";
import "./style.css"

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nameField: null,
            passField: null,
            confPassField: null,
            emailField: null,
            numberField: null,
            active: true,

            pName: {
                msg: "This Field is Required!",
                active: true
            },
            pPass: {
                msg: "This Field is Required!",
                active: true
            },
            pConfPass: {
                msg: "This Field is Required!",
                active: true
            },
            pEmail: {
                msg: "This Field is Required!",
                active: true
            },
            pNumber: {
                msg: "This Field is Required!",
                active: true
            }, 
        }
    }

        

    handleName = (e) => {
        this.setState({nameField: e.target.value}) 
    }

    handlePass = (e) => {
        this.setState({passField: e.target.value})
    }

    handleConfPass = (e) => {
        this.setState({confPassField: e.target.value})
    }
    
    handleEmail = (e) => {
        this.setState({emailField: e.target.value})
    }

    handleNumber = (e) => {
        this.setState({numberField: e.target.value})
    }

    handleRegister =  () => {
        if(this.state.nameField === null) {
            this.setState({pName: {...this.state.pName, active: false} })
        } else {
            this.setState({pName: {...this.state.pName, active: true} })
        }

        if(this.state.passField === null) {
            this.setState({pPass: {...this.state.pPass, active: false}})
        } else {
            this.setState({pPass: {...this.state.pPass, active: true}})
        }

        if(this.state.confPassField === null) {
            this.setState({pConfPass: {...this.state.pConfPass, active: false}})
        } else {
            if(this.state.confPassField === this.state.passField) {
                this.setState({pConfPass: {...this.state.pConfPass, active: true}})
            } else {
                this.setState({pConfPass: {...this.state.pConfPass, msg: "Passwords Are Not The Same"}})
            }
        }

        if(this.state.emailField === null) {
            this.setState({pEmail: {...this.state.pEmail, active: false}})
        } else {
            this.setState({pEmail: {...this.state.pEmail, active: true}})
        }

        if(this.state.numberField === null) {
            this.setState({pNumber: {...this.state.pNumber, active: false}})
        } else {
            this.setState({pNumber: {...this.state.pNumber, active: true}})
        }
    }
   
    render () {

        return (
            <div>
                <form className="regForm">
                    <h1 className="form-heading">Registration Form</h1>
                    <input className="form-input" type="text" name="name" value={this.state.nameField} placeholder="Name" onChange={this.handleName}/>
                    <p className={`${this.state.pName.active ? "opacity" : ""} err-msg`}>{this.state.pName.msg}</p>
                    <input className="form-input " type="password" name="password" value={this.state.passField} placeholder="Password" onChange={this.handlePass}/>
                    <p className={`${this.state.pPass.active ? "opacity" : ""} err-msg`}>{this.state.pPass.msg}</p>
                    <input className="form-input" type="password" name="confPassword" value={this.state.confPassField} placeholder="Confirm Password" onChange={this.handleConfPass}/>
                    <p className={`${this.state.pConfPass.active ? "opacity" : ""} err-msg`}>{this.state.pConfPass.msg}</p>
                    <input className="form-input" type="email" name="email" value={this.state.emailField} placeholder="Email" onChange={this.handleEmail}/>
                    <p className={`${this.state.pEmail.active ? "opacity" : ""} err-msg`}>{this.state.pEmail.msg}</p>
                    <input className="form-input" type="number" name="number" value={this.state.numberField} placeholder="Number" onChange={this.handleNumber}/>
                    <p className={`${this.state.pNumber.active ? "opacity" : ""} err-msg`}>{this.state.pNumber.msg}</p>
                    <button className="form-input" type="button" onClick={this.handleRegister}>Register</button>
                </form>
            </div>
        )
    }

    
}

export default Form