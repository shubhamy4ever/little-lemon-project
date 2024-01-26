import React, { useContext } from 'react'
import LoaderContext from '../context/LoaderContext'
import { Spinner } from '@chakra-ui/react';

const Loader = () => {

    const { openLoader } = useContext(LoaderContext);

    console.log(openLoader);

    return (
        <div style={{
            display: "block",
            position: "absolute",
            zIndex: "1500",
            top: "50vh",
            left: "50vw",
        }}>
            {openLoader ? <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='yellow.500'
                size='xl'
            />
                : null}
        </div>
    )
}

export default Loader