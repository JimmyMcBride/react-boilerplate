import React from "react";

import { Container, Row, Col } from "../Global/styled";
import styled from "styled-components";

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Hello, world!</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <CounterLink to="/counter">Redux Counter</CounterLink>
        </Col>
      </Row>
    </Container>
  );
};

const CounterLink = styled(Link)`
  &:hover {
    text-decoration: none;
    border-radius: 0.25rem;
  }
`;

export default HomePage;
