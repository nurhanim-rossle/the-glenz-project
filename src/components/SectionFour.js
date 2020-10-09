import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/sectionFour.scss';

import img1 from '../assets/images/alt-landing-location.jpg';
import img2 from '../assets/images/overview-06.jpg';
import img3 from '../assets/images/alt-landing-investor.jpg';

const Styles = {
    spinnerPad: {
        padding: '3rem',
        textAlign: 'center'
    }
}

function SectionFour() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("http://staging.digitalsymphony.it/frontendtest/product/read.php")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result.records);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

    const images = [img1, img2, img3];

    for(let i = 0; i < items.length; i++){
        items[i].image = images[i];
    }
      
    if (error) {
        return (
            <>
                <Container style={Styles.spinnerPad}>
                    <div>Error: {error.message}</div>
                </Container>
            </>
        );
    } else if (!isLoaded) {
        return (
            <>
                <Container style={Styles.spinnerPad}>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </Container>
            </>
        );
    } else {
        return (
            <Container fluid id="section-four">
                <h6>Why Us</h6>
                <h2>A Perfect Investment &amp; Upgrade</h2>
                    <Row className="pt-4">
                        {items.map(item => (
                            <Col sm={12} lg={4} className="py-3 py-lg-0 content-column" key={item.id}>
                                <div className="img-content">
                                    <img src={item.image} className="img-fluid" alt={item.name}/>
                                </div>
                                <div className="content">
                                    <h4>{item.name}</h4>
                                    <p>{item.description}</p>
                                    <button>READ MORE &gt;</button>
                                </div>
                            </Col>
                        ))}
                    </Row>
            </Container>
        );
    }
}

export default SectionFour;