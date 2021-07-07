import React from "react";
import { Container, Row, Col } from "reactstrap";
import Banner from "./Banner";
import "./Hero.css";
import Widget from "./Widget";

const Hero = () => {
  return (
    <div className="Hero">
      <Container className='Hero__container' fluid={true}>
        <Row className='Hero__Row'> 
        
          <Col className='Hero__col'>
            <div className="Hero__one">
            <img src="https://i.ibb.co/b6n3Y2T/17th-May-Bewakoof-Homepage-Jumbo-Prints-Hero-Banner-men-01-1621318809.webp" alt="17th-May-Bewakoof-Homepage-Jumbo-Prints-Hero-Banner-men-01-1621318809" border="0" />
            </div>
          </Col>

          <Col className='Hero__col'>
            <div className="Hero__one">
            <img src="https://i.ibb.co/qMn3kpr/bewakoof-buy-2-banner-men-1623395165.webp" alt="bewakoof-buy-2-banner-men-1623395165" border="0" />
            </div>
          </Col>

          <Col className='Hero__col'>
            <div className="Hero__one">
            <img src="https://i.ibb.co/LzxFY74/bewakoof-hero-banner-marvel-loki-men-1-1623395165.webp" alt="bewakoof-hero-banner-marvel-loki-men-1-1623395165" border="0" />
            </div>
          </Col>
        </Row>
      </Container>
      
      <div className='widget_slider'>
        <Container>
          <Row className='d-flex justify-content-between py-4'>
          
            
            <Widget src="https://images.bewakoof.com/uploads/grid/app/buy-2-get-1-msite-highlight-box-1614010782.png"/>
            <Widget src="https://images.bewakoof.com/uploads/grid/app/bewakoof-highlight-box-pride-collection-1623750925.jpg"/>
            <Widget src="https://images.bewakoof.com/uploads/grid/app/bewakoof-loki-marvel-thumbnail-highlight-box-1623242960.jpg"/>
            <Widget src="https://images.bewakoof.com/uploads/grid/app/brands-on-bewakoof-online-shopping-1623046863.png"/>
            <Widget  src="https://images.bewakoof.com/uploads/grid/app/friends-highlight-box-1622041781.jpg"/>
            <Widget src="https://images.bewakoof.com/uploads/grid/app/highlight-box-1621318963.jpg"/>
            <Widget src="https://images.bewakoof.com/uploads/grid/app/bewakoof-slay-at-home-collection-msite-highlight-box-1621869432.png"/>
            <Widget src="https://images.bewakoof.com/uploads/grid/app/Bestsellers-1603991978.png" />
            <Widget src="https://images.bewakoof.com/uploads/grid/app/msite-highlight-box-mask-1616496048.gif" />
            
           
          </Row>
        </Container>
      </div>

      <div className='widget_slider'>
      {/* <Container>
          <Row className='d-flex banner justify-content-between '> */}
             <Banner className='banner_img' src="https://images.bewakoof.com/uploads/grid/app/28th-June-Desktop-Banner-1624895009.jpg" />

            
           {/* </Row>
      </Container> */}
      </div>
  
     
      
        
    </div>

     
         
  );
};

export default Hero;
