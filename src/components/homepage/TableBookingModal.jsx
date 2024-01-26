import React, { useContext } from 'react'
import CustomModal from '../../common/Modal'
import { Button } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import AlertContext from '../../context/AlertContext'
import LoaderContext from '../../context/LoaderContext'

const TableModalHeader = () => <h4>Reserve a table</h4>
const TableModalFooter = ({ handleClose }) => <Button colorScheme='red' onClick={handleClose}>Cancel Booking</Button>

const TableBookingModal = ({ isOpen, handleClose }) => {


    const { openAlert } = useContext(AlertContext);

    const { openLoader, startLoader,
        stopLoader } = useContext(LoaderContext);
    console.log(openLoader);

    const formik = useFormik({
        initialValues: {
            resDate: null,
            resTime: "17:00",
            guests: 1,
            occasion: "Birthday"
        },
        validationSchema: Yup.object({
            resDate: Yup.string().required("Reservation Date is Required"),
            resTime: Yup.string().required("Reservation Time is Required"),
            guests: Yup.number().required("Number of Guests is Required"),
            occasion: Yup.string().required("Ocassion is Required")
        }),
        onSubmit: (values) => {
            console.log(values);
            // api like behaviour therefore delay added
            // loader start
            startLoader();
            setTimeout(() => {
                // loader stop
                stopLoader();
                handleClose();
                // alert show
                openAlert("Your Reservation is Confirmed!");
            }, 2000);

        },
    });



    return (
        <>
            <CustomModal modalHeader={<TableModalHeader />} isOpen={isOpen} handleClose={handleClose} modalFooter={<TableModalFooter handleClose={handleClose} />}>
                <form onSubmit={formik.handleSubmit} style={{ display: 'grid', gap: '20px' }}>
                    <label htmlFor="res-date">Choose date</label>
                    <input onChange={formik.handleChange} type="date" id="res-date" name='resDate' />

                    {formik.touched.resDate && formik.errors.resDate ? <p style={{ color: "red" }}>{formik.errors.resDate}</p> : null}


                    <label htmlFor="res-time">Choose time</label>
                    <select onChange={formik.handleChange} id="res-time" name='resTime'>
                        <option value={"17:00"}>17:00</option>
                        <option value={"18:00"} >18:00</option>
                        <option value={"19:00"} >19:00</option>
                        <option value={"20:00"} >20:00</option>
                        <option value={"21:00"}> 21:00</option>
                        <option value={"22:00"} >22:00</option>
                    </select>
                    {formik.touched.resTime && formik.errors.resTime ? <p style={{ color: "red" }}>{formik.errors.resTime}</p> : null}


                    <label htmlFor="guests">Number of guests</label>
                    <input onChange={formik.handleChange} type="number" name='guests' placeholder="1" min="1" max="10" id="guests" />
                    {formik.touched.guests && formik.errors.guests ? <p style={{ color: "red" }}>{formik.errors.guests}</p> : null}


                    <label htmlFor="occasion">Occasion</label>
                    <select onChange={formik.handleChange} id="occasion" name='occasion'>
                        <option value={"Birthday"}>Birthday</option>
                        <option value={"Anniversary"} >Anniversary</option>
                    </select>
                    {formik.touched.occasion && formik.errors.occasion ? <p style={{ color: "red" }}>{formik.errors.occasion}</p> : null}

                    <Button isDisabled={openLoader} width={300} color={'white'} mt={6} colorScheme='yellow' type="submit">Make Your reservation</Button>
                </form>

            </CustomModal>
        </>
    )
}

export default TableBookingModal