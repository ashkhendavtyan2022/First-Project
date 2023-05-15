import React, {useEffect, useRef, useState} from "react";

export const Reder = () => {
    const ref = useRef()

    useEffect(() => {
        console.log(ref.current)
    })

    console.log('render')
    return <div>
        <div style={{width: "100px", height: "100px", backgroundColor: "orange"}}>
            ref={ref}
        </div>
    </div>
}