import styled from "styled-components";
import PropTypes from "prop-types";

import { Row } from "reactstrap";

const StyledRow = styled(Row)`
  align-items: ${props => (props.align ? props.align : "stretch")};
  height: ${props => (props.height ? props.height : "auto")};
  /* border: 1px solid blue; */
`;

export default StyledRow;

StyledRow.propTypes = {
  // CUSTOM PROPTYPES
  align: PropTypes.oneOf([
    "stretch",
    "flex-start",
    "flex-end",
    "center",
    "baseline"
  ]),
  height: PropTypes.string,

  // DEFAULT REACTSTRAP PROPTYPES
  noGutters: PropTypes.bool,
  form: PropTypes.bool
};
