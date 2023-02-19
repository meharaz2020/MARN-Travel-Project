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
// import Subtitle from './../../shared/Subtitle';
 import experienceimg from '../../assets/images/experience.png'
import MasonryImagesGallery from '../image-gallery/MasonryImagesGallery';
import Testimonial from '../testimonial/Testimonial';
import Newsletter from '../../shared/Newsletter';
 

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


<section>
    <Container>
        <Row>
            <Col lg='6'>
                <div className="experience__content">
                    <Subtitle subtitle={'Experience'}></Subtitle>
                
                <h2>With our all experience <br />we will serve you  </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem itaque similique recusandae eum enim incidunt. In quos facilis qui reiciendis soluta vitae facere iusto inventore quisquam officia? Cupiditate, in quas!
                
                </p>
                
                </div>
                <div className="counter__wrapper d-flex align-items-center gap-5">
                    <div className="counter__box">
                        <span>12k+</span>
                        <h6>Successful Trip</h6>
                    </div>
                    <div className="counter__box">
                        <span>2k+</span>
                        <h6>Regular Clients</h6>
                    </div>
                    <div className="counter__box">
                        <span>15</span>
                        <h6>Years experience</h6>
                    </div>
                </div>
            </Col>
            <Col lg='6'>
                <div className="experience__img">
                    <img src={experienceimg} alt="" />
                </div>
            </Col>
        </Row>
        </Container>
</section>


<section>
    <Container>
        <Row>
            <Col lg='12'>
            <Subtitle subtitle={'Gallery'}></Subtitle>
            <h2 className="gallery__title">
                Visit our customers tour gallery
            </h2>
            </Col>
            <Col lg='12'>
<MasonryImagesGallery></MasonryImagesGallery>
            </Col>
        </Row>
    </Container>
</section>

<section>
    <Container>
        <Row>
            <Col lg='12'>
                <Subtitle subtitle={'Fans Love'}/>    
                <h2 className='testimonial__title'>What our fans say about us</h2> 
                 
            </Col>
            <Col lg='12'>
            <Testimonial/>
            </Col>
        </Row>
    </Container>
</section>

<Newsletter></Newsletter>

</>
    );
};

export default Home;