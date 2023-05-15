import React from "react";
import { useState } from "react";

const Hook = () => {
    const {token, setToken} = useGlobalContext()
    const[list, handleList] = useHandle(true);

        const Handle = () => {
           setToken(25)
        }


    return <div>
        <button onClick={Handle}>Click</button>
        {token ? <ul>
            <li>text1</li>
            <li>text2</li>
            <li>text3</li>
        </ul>: null}
    </div>
}

export default Hook