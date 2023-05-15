import { useState, useContext, createContext } from "react";

const AppContext = createContext()

const AppProvider = ({children}) => {
    const [token, setToken] = useState(false)

    return <AppContext.Provider value = {{
        token,
        setToken,
    }}>
        {children}
    </AppContext.Provider>

}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, AppContext}