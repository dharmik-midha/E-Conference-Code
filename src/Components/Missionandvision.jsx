import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import {
  Card,
  CardGroup,
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Row,
  Col,
} from "react-bootstrap";

const Missionandvision = () => {
    return (
        <>
        <hr className="featurette-divider  w-75 text-center m-auto mt-5" />
      <Container className="mt-5 pt-4 mb-5" >
        <h3 className="fs-1 text-center mb-5">Mission &amp; Vision</h3>
        <p className="text-justify fs-sm fs-4">
          <h4 className="fs-4 badge bg-secondary ">Mission</h4>
          <p>
          To nurture and groom socially sensitive business leaders with a global outlook, supported by research led teaching and strategic national and international partnership
          </p>

          <h4 className="fs-4 badge bg-secondary ">Vision</h4>
          <p> Leadership through Excellence in Value-Based Management and Technology Education</p>

          <h4 className="fs-4 badge bg-secondary ">Value</h4>
          <p>
          Commitment: Striving for quality and results<br/>
          Honesty &amp; Integrity: Adherence to high standards and ethics by all stakeholders in their thought, conduct and behavior
          Self-Discipline: Taking responsibility, reflecting punctuality, persistence, tenacity, patience and pro-active be
          </p>
        </p>
      </Container>
        </>
    )
}

export default Missionandvision
