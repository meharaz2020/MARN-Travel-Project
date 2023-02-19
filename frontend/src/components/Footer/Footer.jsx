import React from 'react';
import './Footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
const Footer = () => {
     return (
        <section>
            <Container>
                <Row className='footer__quick-links'>
                    <Col lg='3'>
                        <div className="logo">
                        <img src={logo} alt="" />                    
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi aliquid perferendis voluptatibus, reiciendis laborum maxime nobis facere nisi rem distinctio ipsum praesentium voluptates libero reprehenderit corrupti qui eveniet labore itaque.</p>
                      
                      <div className="social__links d-flex align-items-center gap-4">
                    <span>
                        <Link to='#'> <i className='ri-youtube-line'></i>
                        </Link>
                    </span>
                    <span>
                        <Link to='#'> <i className='ri-github-fill'></i>
                        </Link>
                    </span>
                    <span>
                        <Link to='#'> <i className='ri-facebook-circle-line'></i>
                        </Link>
                    </span>
                    <span>
                        <Link to='#'> <i className='ri-instragram-line'></i>
                        </Link>
                    </span>
                      </div>
                        </div>
                     </Col>

                     <Col lg='3'>
                        <h5 className='footer__link-title'>Discover</h5>
                     <ListGroupItem className='ps-0 border-0'>
                    <Link to='#'> Home

                    </Link>
                    </ListGroupItem>
                    <ListGroupItem className='ps-0 border-0'>

                    <Link to='#'> About

                    </Link>
                    </ListGroupItem>
                    <ListGroupItem className='ps-0 border-0'>

                    <Link to='#'> Tours

                    </Link>
                    </ListGroupItem>                   
                     </Col>
                     <Col lg='3'>
                     <h5 className='footer__link-title'>Quick Link</h5>
                     <ListGroupItem className='ps-0 border-0'>
                    <Link to='#'> Help

                    </Link>
                    </ListGroupItem>
                    <ListGroupItem className='ps-0 border-0'>

                    <Link to='#'> Contact

                    </Link>
                    </ListGroupItem>
                    <ListGroupItem className='ps-0 border-0'>

                    <Link to='#'> Team

                    </Link>
                    </ListGroupItem> 
                     </Col>
                     <Col lg='3'>
                     <h5 className='footer__link-title'>New Team</h5>
                     <ListGroupItem className='ps-0 border-0'>
                    <Link to='#'> Gallery

                    </Link>
                    </ListGroupItem>
                    <ListGroupItem className='ps-0 border-0'>

                    <Link to='#'> Register

                    </Link>
                    </ListGroupItem>
                    <ListGroupItem className='ps-0 border-0'>

                    <Link to='#'> Login

                    </Link>
                    </ListGroupItem> 
                     </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Footer;