import React from 'react';
import tourData from '../../assets/data/tours';
import {Col} from 'reactstrap'
import TourCard from '../../shared/TourCard';
const FeaturedList = () => {
    return (
        <>
       {   
        // tourData?.map(tour=>()=>{
        //     <Col lg='3' className='mb-4' key={tour.id}>
        // <TourCard tour={tour}></TourCard>

        //     </Col>
        // })
        tourData?.map((tour)=><Col lg='3' className='mb-4' key={tour.id}><TourCard tour={tour}/></Col>)

        }
        </>
    );
};

export default FeaturedList;