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

const Cards = () => {
    return (
        <>
        <h3 className="fs-1 text-center mx-3">Our Management Team</h3>
      <Container className="w-80 d-flex fr justify-content-evenly p-3">
        <Card style={{ width: "22rem" }}>
          <Card.Img
            variant="top"
            src="https://media-exp1.licdn.com/dms/image/C5103AQEnmghpuukONQ/profile-displayphoto-shrink_200_200/0/1516606348775?e=1632960000&v=beta&t=4NUPcosgNwri1SZSwiJssdf8N6mMqX4EGli6pQdkQEg"
            style={{ borderRadius: 50 + "%", padding: 20 + "px" }}
          />
          <Card.Body>
            <Card.Title className="text-center">Dr. Rabins Porwal</Card.Title>
            <Card.Text>
              Some quick example text to build on the Dr. Rabins Porwal and make
              up the bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "22rem" }}>
          <Card.Img
            variant="top"
            src="https://media-exp1.licdn.com/dms/image/C5103AQEnmghpuukONQ/profile-displayphoto-shrink_200_200/0/1516606348775?e=1632960000&v=beta&t=4NUPcosgNwri1SZSwiJssdf8N6mMqX4EGli6pQdkQEg"
            style={{ borderRadius: 50 + "%", padding: 20 + "px" }}
          />
          <Card.Body>
            <Card.Title className="text-center">Dr. Rabins Porwal</Card.Title>
            <Card.Text>
              Some quick example text to build on the Dr. Rabins Porwal and make
              up the bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
       </Container>
      </>
    );
}

export default Cards
