import React from 'react';
import './Home.css';
import { Container, Row, Col} from 'reactstrap';
import heroImg from '../../assets/images/hero-img01.jpg';
import heroImg02 from '../../assets/images/hero-img02.jpg';
import herovideo from '../../assets/images/hero-video.mp4';
import Subtitle from '../../shared/Subtitle';
import worldImg from '../../assets/images/world.png';
import SearchBar from '../../shared/SearchBar';
import ServicesList from './../Services/ServicesList';
import FeaturedList from '../FeaturedTour/FeaturedList';
 


const Home = () => {
    return (
<> 
        {/* // ========Hero Section Start====== */}
        <section>
            <Container> 
          <Row>
            <Col lg='6'>
                <div className="hero__content">
                 <div className="hero__subtitle d-flex align-items-center">
                    <Subtitle subtitle={'Know Before You Go'}/>
                 
                 <img src={worldImg} alt="" />
                 </div>
            <h1>Traveling opens the door to creating <span className='highlight'> memories</span></h1>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque fugiat amet dolorum officia voluptas, sint asperiores, numquam aspernatur, saepe corrupti blanditiis totam? Velit quidem perferendis incidunt, numquam eveniet quod assumenda.</p>     
                
                </div>
            </Col>
              
            <Col lg='2'>
                <div className="hero__img-box">
                    <img src={heroImg} alt="" />
                </div>
            </Col>
            <Col lg='2'>
                <div className="hero__img-box mt-4">
    
            <video src={herovideo} alt="" controls />
                </div>
            </Col>
            <Col lg='2'>
                <div className="hero__img-box mt-5">

                <img src={heroImg02} alt="" />
                </div>
            </Col>
            <SearchBar/>
            </Row> 
            </Container>
        </section>
 
                {/* // ========Hero Section end====== */}
               <section>
                <Container>
<Row>
    <Col lg='3'>
    <h5 className='services__subtitle'>What we serve</h5>
    <h5 className='services__title'>We offer our best services</h5>
    </Col>
    <ServicesList/>
</Row>
                    </Container>
               </section>


               {/* feature section start */}
             
             <section>
                <Container>
                    <Row>
                        <Col lg="12" className='mb-5'>
                            <Subtitle subtitle={"Explore"}/>
                            <h2 className='fearures__tour-title'>Our Featured tours</h2>
                             </Col>
                             <FeaturedList/>
                    </Row>
                </Container>
             </section>
             
               {/* feature section end */}
</>
    );
};

export default Home;