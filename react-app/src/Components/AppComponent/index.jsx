import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AdminPage } from "../AdminPages";
import { GuestPage } from "../GuestPages";

export const AppComponent = () => {
    const {token, setToken} = useGlobalConxtex();

    useEffect(() => {
        let x = localStorage.getItem("token") {
            if(x) {
                setToken(x)
            }
        }
    }, [])

    return <div>
        {token ? <GuestPage /> : <AdminPage />}
    </div>
}