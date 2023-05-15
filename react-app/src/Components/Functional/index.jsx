import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const Functional = () => {
    const[flag, setFlag] = useState(true)
    const[list, setList] = useState(false)
    
    const Change = () => {
        setFlag(!flag)
    }

    const ChangeList = () => {
        setList(!list)
    }

    //this is the same function as ComponentDidMount - arrow function + empty array
    useEffect(() => {
        {console.log("Mounted")}
    }, []) 

    //the same as ComponentDidUpdate - funtion works when the variable changes/updates - every time flag  changes it prints Mounted
    useEffect(() => {
        {console.log("Mounted")}
    }, [flag, list])


    //the same as ComponentWillUnmount
    useEffect(() => {
        return console.log("UnMOunt")
    }, []) 


    return <div>
        {console.log(flag)}
        <button onClick={Change}>Click</button>
        <button onClick={ChangeList}>ClickList</button>

    </div>
}