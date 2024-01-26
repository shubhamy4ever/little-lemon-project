import React, { createContext, useState } from 'react'


const LoaderContext = createContext(null);

const LoaderProvider = ({ children }) => {


    const [openLoader, setOpenLoader] = useState(false);

    const startLoader = () => setOpenLoader(true);
    const stopLoader = () => setOpenLoader(false);


    return (
        <LoaderContext.Provider value={{
            openLoader,
            startLoader,
            stopLoader
        }}>
            {children}
        </LoaderContext.Provider>
    )

}

export default LoaderContext;
export { LoaderProvider };