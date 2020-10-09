import React, {useEffect} from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/sectionTwo.scss';

import video from '../assets/images/alt-landing-02.jpg';


function SectionTwo() {
    useEffect(() => {
        AOS.init({duration : 1000});
        AOS.refresh();
    }, []);

    return (
        <Container fluid id="section-two">
            <Row>
                <Col sm={12} lg={9}>
                    <div className="bg-img">
                        <img src={video} alt="Video"/>
                    </div>
                </Col>
                <Col sm={12} lg={3}>
                    <div className="content">
                        <h6 className="pb-2">About Us</h6>
                        <h2>Strategically Located</h2>
                        <p className="py-3">
                            The Glenz is located just 50m away from the upcoming Persiaran Kerjaya LRT3 Station, making it the first transit oriented development in Glenmarie, Shah Alam.
                        </p>
                        <Button>VIEW LOCATION</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SectionTwo;