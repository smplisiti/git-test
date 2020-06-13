import React from "react";
import "./Entry.css";

import Carousel from 'react-bootstrap/Carousel'

  function Testimonial () {

    return (
  

    <Carousel className="third-section container-fluid">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/bruno.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/bruno.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
  </Carousel>

  )
    }
  





   
   



    




export default Testimonial;