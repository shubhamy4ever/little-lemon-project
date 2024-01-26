import React from 'react';
import Modal from 'react-bootstrap/Modal';

const CustomModal = ({ modalStyleProperties, modalHeader, modalFooter, children, isOpen, handleClose }) => {
    return (
        <Modal centered size='xl' onHide={handleClose} show={isOpen} style={modalStyleProperties}>
            {modalHeader ? (
                <Modal.Header>
                    {modalHeader}
                </Modal.Header>
            ) : null}
            <Modal.Body>
                {children}
            </Modal.Body>
            {modalFooter ? (
                <Modal.Footer>
                    {modalFooter}
                </Modal.Footer>
            ) : null}
        </Modal>
    );
}

export default CustomModal;
