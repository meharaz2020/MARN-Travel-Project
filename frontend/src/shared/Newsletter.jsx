import React from 'react';
import './newsletter.css';
import { Container,Row,Col } from 'reactstrap'
import maletourist from '../assets/images/male-tourist.png'
const Newsletter = () => {
    return (
        <section className='newsletter'>
           <Container>
            <Row >
                <Col lg='6'>
                <div className="newsletter__content">
                    <h2>Subscribe now to get useful traveling information</h2>
                    <div className="newsletter__input">
                        <input type="email" placeholder='Enter your email'/>

                        <button className='btn newsletter__btn'>Subscribe</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quibusdam esse voluptate, sunt nulla laudantium accusamus quidem aperiam laboriosam tempora architecto accusantium in. Molestiae excepturi saepe quasi. Facilis, nihil similique.</p>
                </div>
                </Col>
                <Col lg='6'>
                <div className="newsletter__img">
                    <img src={maletourist} alt="" />
                </div>
                </Col>
            </Row>
            </Container> 
        </section>
    );
};

export default Newsletter;