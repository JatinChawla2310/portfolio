import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { Header } from "../../components";
import "./Involvements.module.css";
import styles from "./Involvements.module.css";

const Involvements = () => {
  const handleSubmit = () => {
    alert("Thanks for reaching out. We will contact you soon!");
  };
  return (
    <React.Fragment>
    <Header title="Contact Me" />
      <Container fluid className={styles.container}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">            
            <Form.Control required type="text" placeholder="Enter name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">            
            <Form.Control required type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">            
            <Form.Control required  as="textarea" placeholder="Message" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </React.Fragment>
  );
};

export default Involvements;
