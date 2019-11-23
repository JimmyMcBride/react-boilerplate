import styled from "styled-components";
import PropTypes from "prop-types";

import { Container } from "reactstrap";

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.justify ? props.justify : "flex-start")};
  align-items: ${props => (props.align ? props.align : "center")};
  height: ${props => (props.height ? props.height : "calc(100vh - (100px))")};
`;

export default StyledContainer;

StyledContainer.propTypes = {
  // CUSTOM PROPTYPES
  justify: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly"
  ]),
  align: PropTypes.oneOf([
    "stretch",
    "flex-start",
    "flex-end",
    "center",
    "baseline"
  ]),
  height: PropTypes.string,

  // DEFAULT REACTSTRAP PROPTYPES
  fluid: PropTypes.bool
};
