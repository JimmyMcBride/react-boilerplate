import styled from "styled-components";
import { Button } from "reactstrap";
import theme from "./theme";

export const AppWrapper = styled.div`
  min-height: 100vh;
  text-align: center;
  background-color: ${theme.g0};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${theme.g4};
  a:hover {
    text-decoration: none;
  }
`;

export const Clicker = styled(Button)``;
