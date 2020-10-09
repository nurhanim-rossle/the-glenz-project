import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/footer.scss';

//images
import call from '../assets/images/call.png';
import mail from '../assets/images/mail.png';
import facebook from '../assets/images/facebook.png';
import insta from '../assets/images/insta.png';
import awards from '../assets/images/awards-crop.png';
import logo from '../assets/images/logo_sb.png';

const style = {
    logo : {
        maxWidth: '70px',
        paddingLeft: '10px'
    },
    alignRight : {
        textAlign: 'right'
    },
    paddingNone : {
        padding: 0
    }
}

function Footer() {
    return (
        <Container id="footer" fluid>
            <Row>
                <Col sm={3} className="first-col pb-4 pb-md-0">
                    <div>
                        <h6>The Glenz @ Glenmarie Sales Gallery</h6>
                        <p>
                            27, Jalan Juruanalisis U1/35,<br></br>
                            Hicom-Glenmarie Industrial Park,<br></br>
                            40150 Shah Alam,<br></br>
                            Selangor.
                        </p>
                    </div>
                    <div className="contact py-2">
                        <img src={call} className="img-icon pb-2"  alt="icon-call"/> +6 011 - 2826 1298<br></br>
                        <img src={mail} className="img-icon" alt="icon-mail"/> theglenzsales@gmail.com
                    </div>
                    <div className="social pt-3 pb-2">
                        <img src={facebook} className="img-icon"  alt="icon-facebook"/>
                        <img src={insta} className="img-icon"  alt="icon-insta"/>
                    </div>
                </Col>
                <Col sm={6} className="second-col py-4 py-md-0 px-md-5">
                    <div>
                        <h6>Easy Links</h6>
                        <ul>
                            <li>Overview</li>
                            <li>Facilities</li>
                            <li>Units</li>
                            <li>Gallery</li>
                            <li>Location</li>
                            <li>Developer</li>
                            <li>Floor Plan</li>
                            <li>Register</li>
                        </ul>
                    </div>
                </Col>
                <Col sm={3} className="third-col py-4 py-md-0">
                    <div>
                        <h6 className="pr-md-0">Winner of Best Commercial Suites Development</h6>
                        <img src={awards} alt="awards" className="img-awards" />
                    </div>
                </Col>
            </Row>
            <hr></hr>
            <Row className="copyright">
                <Col md={{ order: 'last' }} className="pb-2">Developed by <img src={logo} alt="SB Logo" style={style.logo}/></Col>
                <Col md={{ order: 'first' }}>Copyright 2019 The Glenz @ Glenmarie</Col>
            </Row>
        </Container>
    )
}

export default Footer;