import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const StyledCardButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontWeight: "400",
  fontSize: "1rem",
  lineHeight: "1.5",
  letterSpacing: "0.00938em",
  border: "1px solid #f8f8f9",
  borderRadius: "12px",
  color: "#93959c",
  width: "120px",
  backgroundColor: "#f8f8f9",
  transition: "background-color 0.3s ease, border 0.3s ease, color 0.3s ease",
  "&:hover": {
    backgroundColor: "#e0dfe7",
    border: "1px solid #d3d3d3",
    color: theme.palette.text.primary,
  },
}));

const CardButton = ({ text, onClick = () => {} }) => {
  return <StyledCardButton onClick={onClick}>{text}</StyledCardButton>;
};

export default CardButton;
