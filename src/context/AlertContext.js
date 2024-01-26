import React, { createContext, useState } from 'react'

const AlertContext = createContext();


const AlertContextProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState(null)

    function openAlert(msg) {
        setMsg(msg);
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
            setMsg(null);
        }, 2000);
    }

    return (
        <AlertContext.Provider value={{ open, openAlert, msg }}>{children}</AlertContext.Provider>
    )
}

export default AlertContext
export { AlertContextProvider };