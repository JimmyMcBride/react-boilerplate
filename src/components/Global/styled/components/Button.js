import styled from "styled-components";
import { Button } from "reactstrap";
import theme from "../../theme";

export default styled(Button)`
  color: ${theme.color.g1};
  background: ${theme.color.g4};
  border: none;
  &:hover {
    color: ${theme.color.g4};
    background: ${theme.color.g1};
  }
`;
