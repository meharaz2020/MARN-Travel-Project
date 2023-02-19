import React from 'react';
 import {Col} from 'reactstrap';
 import weatherImg from '../../assets/images/weather.png';
 import guideImg from '../../assets/images/guide.png';
 import customizeionImg from '../../assets/images/customization.png';
import ServicesCard from './ServicesCard';
 

 const servicesdata=[
    {
        imgUrl:weatherImg,
        title:"Calculate Weather",
        desc:"Lorem...........",
    },
    {
        imgUrl:guideImg,
        title:"Best Tour Guide",
        desc:"Lorem .....",
    },
    {
        imgUrl:customizeionImg,
     title:"Customization",
     desc:"Lorem .....",   
    }
 ]
const ServicesList = () => {
    return (
        <>
          {
            servicesdata.map((item,index)=><Col lg='3' key={index}><ServicesCard item={item}/></Col>)
          }  
        </>
    );
};

export default ServicesList;