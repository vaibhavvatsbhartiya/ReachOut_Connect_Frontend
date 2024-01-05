import React from 'react'
import ImageWithTextOverlay from '../Components/ImageOverlay';
import imgService from '../Images/volunteer.jpg';
import Footer from "../Components/Footer";
import ContentSection from '../Components/reusable/ContentSection';


const Service = () => {
  return (
    <>
     <ImageWithTextOverlay
      image = {imgService}
      isVisible = {false}
      buttonText= "ready to help"
     />
     <ContentSection/>
      <Footer/>
    </>
  )
}

export default Service;
