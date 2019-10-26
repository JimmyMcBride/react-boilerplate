import React from "react";
import styled from "styled-components";
import theme from "../Global/theme";

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <HomeWrapper>
      <h1>Hello, world!</h1>
      <CounterLink to="/counter">Redux Counter</CounterLink>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const CounterLink = styled(Link)`
  color: ${theme.a1};
  &:hover {
    color: ${theme.g0};
    background: ${theme.a1};
    text-decoration: none;
    border-radius: 0.25rem;
  }
`;

export default HomePage;
