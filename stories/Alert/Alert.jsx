import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledAlert = styled.div`
  padding: ${({ padding }) => padding};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  border: ${({ border }) => border};
  width: ${({ width }) => width};
  border-radius: ${({ borderRadius }) => borderRadius};
  margin-top: ${({ marginTop }) => marginTop};
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-in-out;
`;

export const Alert = ({
  message,
  backgroundColor,
  color,
  border,
  borderRadius,
  padding,
  marginTop,
  width,
  ...props
}) => (
  <StyledAlert
    backgroundColor={backgroundColor}
    color={color}
    border={border}
    borderRadius={borderRadius}
    padding={padding}
    marginTop={marginTop}
    width={width}
    {...props}
  >
    {message}
  </StyledAlert>
);

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  padding: PropTypes.string,
  marginTop: PropTypes.string,
  width: PropTypes.string,
};

Alert.defaultProps = {
  backgroundColor: "#f8d7da",
  color: "#721c24",
  border: "1px solid #f5c6cb",
  borderRadius: "15px",
  padding: "15px 20px",
  marginTop: "20px",
  width: "auto",
};

export default Alert;
