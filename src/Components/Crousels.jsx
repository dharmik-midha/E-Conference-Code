import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import img from "./img/img1.png"
import {
  Card,
  CardGroup,
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Row,
  Col,
  Carousel
} from "react-bootstrap";

const Crousels = () => {
    return (
      <>
        <hr className="featurette-divider  w-75 text-center m-auto" />
        <Container>
          <Carousel variant="dark" className="p-5 w-100 m-auto">
            <Carousel.Item>
              <img className="d-block imgc" src={img} alt="First slide" />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block imgc"
                src="https://www.lbsim.ac.in/Uploads/banner/100hbanner_banner2.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block imgc"
                src="https://cdn.npfs.co/uploads/template/247/590/publish/images/banner1.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
        <hr
          className="featurette-divider  w-75 text-center m-auto"
          id="About"
        />
      </>
    );
}

export default Crousels
