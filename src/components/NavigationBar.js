import React, { useState } from 'react';
import { Button, Nav, Navbar, Modal, Form } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/navbar.scss';

import logo from '../assets/images/logo_white.png';

function NavigationBar() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar variant="dark" expand="lg">
                <Navbar.Brand href="#home"><img src={logo} alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">INVESTOR SHEET</Nav.Link>
                        <Nav.Link href="#link">SALES PACKAGE</Nav.Link>
                        <Button className="btn-interest" variant="primary" onClick={handleShow}>
                            REGISTER INTEREST
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    <h2>Register Now For Special Online Sales Package!</h2>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group controlId="formBasicName">
                                        <Form.Control type="text" placeholder="Name*" required/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPhoneNumber">
                                        <Form.Control type="tel" placeholder="Phone Number*" required/>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Email*" required/>
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        SEND MESSAGE
                                    </Button>
                                </Form>
                            </Modal.Body>
                        </Modal>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            

            <div id="modal-root"></div>
        </>
    )
}

export default NavigationBar;