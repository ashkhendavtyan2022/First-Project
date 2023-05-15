import React from "react";
import { useState } from "react";
import "./style.css"

export const Admin = () => {
    const [list, setList] = useState ({
        firstName: "",
        lastName: "",
        age: "",
        position: "",
        email: "",
        img: "",
    }) 

    const Change = () => {
        setList(...list, [e.target.name]: e.target.value)
    }

    const Validation = () => {
        let valid = true

        return valid
    }

    const Call = async () => {
        if (Validation)() => {
            const result = await RegistrationUser()
            if(result.data)  {
                localStorage.setItem("token", result.data._id)
                window.location.reload(true)
            }
        }
    }
    return <div className="p-admin">
        <input type="text" name={email} onChange={Change}/>
        <input type="password" name="password" />
        <button>Sign In</button>
    </div>
}