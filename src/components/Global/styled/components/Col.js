import styled from "styled-components";
import PropTypes from "prop-types";

import { Col } from "reactstrap";

const StyledColumn = styled(Col)`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : "row")};
  justify-content: ${props => (props.justify ? props.justify : "flex-start")};
  align-items: ${props => (props.align ? props.align : "stretch")};
  height: ${props => (props.height ? props.height : "auto")};
`;

export default StyledColumn;

StyledColumn.propTypes = {
  // CUSTOM PROPTYPES
  direction: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse"
  ]),

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
  height: PropTypes.string
};
