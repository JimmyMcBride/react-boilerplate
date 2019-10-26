import React from "react";

import styled from "styled-components";
import { Button } from "reactstrap";
import theme from "../Global/theme";

import { increment, decrement } from "../../actions/counter";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ReduxCounter = props => {
  return (
    <CounterWrapper>
      <HomeLink to="/">Home</HomeLink>
      <CountBtn onClick={() => props.increment()}>++</CountBtn>
      <p>
        Clicked <code>{props.count}</code> times
      </p>
      <CountBtn onClick={() => props.decrement()}>--</CountBtn>
    </CounterWrapper>
  );
};

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    margin-top: 1rem;
    margin-right: 1.4rem;
    code {
      font-size: 2.5rem;
    }
  }
`;

const CountBtn = styled(Button)`
  color: ${theme.a1};
  border: 2px solid ${theme.a1};
  background: none;
  width: 3.2rem;
  &:hover {
    color: ${theme.g0};
    background: ${theme.a1};
    border-color: ${theme.a1};
    font-weight: bold;
  }
`;

const HomeLink = styled(Link)`
  margin-bottom: 2rem;
  font-size: 3rem;
  color: ${theme.a2};
  padding: 0.3rem 1rem;
  border-radius: 0.25rem;
  &:hover {
    background: ${theme.a2};
    color: ${theme.g0};
  }
`;

const mapStateToProps = state => {
  return {
    count: state.counter.count
  };
};

export default connect(
  mapStateToProps,
  { increment, decrement }
)(ReduxCounter);
