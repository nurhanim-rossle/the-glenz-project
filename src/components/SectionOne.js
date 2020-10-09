import React, {useEffect} from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/sectionOne.scss';

function SectionOne() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    
    return (
        <Container fluid className="" id="section-one" data-aos="fade">
            <Row className="section">
                <Col sm={12} lg={{ span: 4, offset: 7 }}>
                    <div className="content">
                        <h1>Glenmarie's First Transit Oriented Development</h1>
                        <p className="py-3">
                            The Glenz is an integrated development with convenience built to mind with amenities just steps away.
                        </p>
                        <Button>VIEW OVERVIEW</Button>
                    </div>
                </Col>
            </Row>
            <Row className="arrow">
                <AnchorLink href='#section-two'>
                    <i className="fas fa-chevron-down"></i>
                </AnchorLink>
            </Row>
            <Row>
                <span className="space"></span>
            </Row>
        </Container>
    )
}

export default SectionOne;