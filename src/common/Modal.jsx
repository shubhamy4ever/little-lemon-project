import React from 'react'
import { Modal as ModalChakra, ModalBody, ModalHeader, ModalFooter } from "@chakra-ui/react";


const Modal = ({ modalProperties, modalHeader, modalFooter, children }) => {
    return (
        <ModalChakra {...modalProperties}>
            {modalHeader ? <ModalHeader>
                {modalHeader}
            </ModalHeader> : null}
            <ModalBody>
                {children}
            </ModalBody>
            {modalFooter ? <ModalFooter>
                {modalFooter}
            </ModalFooter> : null}
        </ModalChakra>
    )
}

export default Modal