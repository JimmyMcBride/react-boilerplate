import React from "react";

import styled from "styled-components";
import { Container, Row, Col, Button } from "../Global/styled";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../store/actions/counter";

import { Link } from "react-router-dom";

export default function ReduxCounter() {
  const dispatch = useDispatch();

  const count = useSelector(state => state.counter.count);
  return (
    <Container>
      <Row>
        <Col>
          <HomeLink to="/">Home</HomeLink>
        </Col>
      </Row>

      <Row>
        <Col>
          <CountBtn onClick={() => dispatch(increment())}>++</CountBtn>
        </Col>
      </Row>

      <Row>
        <Col>
          <CodeCount>
            Clicked <code>{count}</code> times
          </CodeCount>
        </Col>
      </Row>

      <Row>
        <Col>
          <CountBtn onClick={() => dispatch(decrement())}>--</CountBtn>
        </Col>
      </Row>
    </Container>
  );
}

const CodeCount = styled.div`
  margin-top: 1rem;
  margin-right: 1.4rem;
  code {
    font-size: 2.5rem;
  }
`;

const CountBtn = styled(Button)`
  width: 3.2rem;
  &:hover {
    font-weight: bold;
  }
`;

const HomeLink = styled(Link)`
  margin-bottom: 2rem;
  font-size: 3rem;
  padding: 0.3rem 1rem;
  border-radius: 0.25rem;
  &:hover {
  }
`;
