import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
const Aboutus = () => {
  return (
    <>
      <Container className="mt-5 pt-4" >
        <h3 className="fs-1 text-center mb-5">About Us</h3>
        <p className="text-justify fs-sm fs-4">
          Lal Bahadur Shastri Institute of Management (LBSIM), Delhi is a premier institute for management and information technology education in the country. Established by the Lal Bahadur Shastri Educational Society in 1995, with a modest beginning, this Institute has come to be recognized as one of the pioneering business schools in India. It takes pride in providing value-based management education, thus developing professionals with a humane and pragmatic approach towards corporate excellence.
          The Institute is continuously striving to provide quality management education by adopting modern teaching methodologies and sophisticated business techniques. The business challenges that are thrown open by the process of globalization and liberalization are addressed by the Institute through upgradation in its course content and pedagogy. It aims to equip students with skill-sets required to become effective and capable corporate managers.
          The Institute has state-of-the-art infrastructure and well-equipped lecture theatres.The Institute's campus at Dwarka is located near Delhi Metro line and hence easily accessible for the students living anywhere in Delhi/NCR.
        </p>
      </Container>

      <hr className="featurette-divider  w-75 text-center m-auto my-5 " />

    </>
  );
}

export default Aboutus
