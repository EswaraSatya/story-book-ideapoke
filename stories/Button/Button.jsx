import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
let val = {
  small: "16px !important",
  medium: "26px !important",
  large: "36px !important",
};

const StyledButton = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  border: ${({ border }) => border};
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};
  border-radius: ${({ borderRadius }) => borderRadius};
  cursor: ${({ cursor }) => cursor};
  font-size: ${({ size }) => val[size]};

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
  }
`;

export const Button = ({
  primary,
  backgroundColor,
  size,
  label,
  onClick,
  color,
  hoverColor,
  border,
  padding,
  fontSize,
  borderRadius,
  cursor,
  ...props
}) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      color={color}
      size={size}
      hoverColor={hoverColor}
      onClick={onClick}
      border={border}
      padding={padding}
      fontSize={fontSize}
      borderRadius={borderRadius}
      cursor={cursor}
      {...props}
    >
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  border: PropTypes.string,
  padding: PropTypes.string,
  fontSize: PropTypes.string,
  borderRadius: PropTypes.string,
  cursor: PropTypes.string,
};

Button.defaultProps = {
  backgroundColor: "blue",
  size: "medium",
  onClick: () => alert("hi"),
  color: "white",
  hoverColor: "#6060f0",
  border: "none",
  padding: "10px 20px",
  fontSize: "16px",
  borderRadius: "10px",
  cursor: "pointer",
};

export default Button;
