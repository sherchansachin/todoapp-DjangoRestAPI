import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { Modal, Button } from "react-bootstrap";

const AddTask = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return ( 
        <>
            <Container>
                <div className='py-5 text-center tasks'>
                    <h3>What do I need to do today?</h3>
                    <button className='btn btn-primary mt-4' onClick={handleShow}>Add a New Task</button>
                </div>
            </Container>

            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add a New Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className = 'form-group'>
                            <label>To do Title</label>
                            <input type='text' className='form-control'/>
                        </div>

                        <div className = 'form-group'>
                            <label>Description</label>
                            <textarea rows='4' className='form-control'></textarea>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Add todo
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
            </Modal>
        </>
    )
}


export default AddTask