import React, { useContext, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import AlertContext from '../context/AlertContext';
import 'react-toastify/dist/ReactToastify.css';

const AlertToast = () => {
    const notify = (msg) => toast(msg);

    const { open, msg } = useContext(AlertContext);

    useEffect(() => {
        if (open && msg) {
            notify(msg);
        }
    }, [open, msg])


    return (
        <div>
            <ToastContainer />
        </div>
    );
}

export default AlertToast