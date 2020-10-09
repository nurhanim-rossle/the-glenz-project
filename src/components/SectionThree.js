import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/sectionThree.scss';

import landing from '../assets/images/alt-landing-03.jpg';

const Styles = {
    display:{
        display: 'none'
    },
    none:{
        display: 'block'
    }
}

function SectionThree() {
    const { isMobile } = useDetectSize();
    const [isOpened, setIsOpened] = useState(false);

    function openDiv() {
        setIsOpened(wasOpened => !wasOpened);
    }

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    if (isMobile) {
        return (
            <Container fluid className="mobile" id="section-three" data-aos="fade">
                <Row>
                    <Col sm={12} className="px-0">
                        <div className="img-content">
                            <img src={landing} className="img-fluid" alt="Landing 3"/>
                        </div>
                    </Col>
                    <Col sm={12}>
                        <div className="content">
                            <h6 className="pb-2">The Units</h6>
                            <h2>Seamless Lifestyle</h2>
                            <p className="pb-2">
                                Built to create a holistic growth in you with access to facilities and amenities at easy reach.
                            </p>
                            <Button>VIEW LOCATION</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    } else {
        return (
            <Container fluid className="desktop" id="section-three" data-aos="fade">
                <Row>
                    <Col lg={{ span: 3, offset: 8 }}>
                        <div className={isOpened ? 'content slideUp' : 'content normalState'}>
                            <div className="inner-content">
                                <h6 className="pb-2">The Units</h6>
                                <h2 className="pb-3">Seamless Lifestyle</h2>
                                <button className="link" onClick={openDiv} style={ isOpened ? Styles.display : Styles.none }>
                                    MORE DETAILS &gt;
                                </button>
                                {isOpened && (
                                    <>
                                        <div>
                                            <p className="pb-2">
                                                Built to create a holistic growth in you with access to facilities and amenities at easy reach.
                                            </p>
                                            <Button>VIEW UNITS</Button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function useDetectSize() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

    function handleSizeChange() {
        return setIsMobile(window.innerWidth < 640);
    }

    useEffect(() => {
        window.addEventListener("resize", handleSizeChange);

        return () => {
            window.removeEventListener("resize", handleSizeChange);
        };
    }, [isMobile]);
  
    return { isMobile };
}

export default SectionThree;