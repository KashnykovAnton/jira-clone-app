import { Button, styled } from "@mui/material";

const StyledActionButton = styled(Button)(({ theme }) => ({
  position: "fixed",
  top: "16px",
  right: "48px",
  zIndex: 1000,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.default,
  borderRadius: "12px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
  padding: "12px 16px",
  textTransform: "none",
  transition: "background-color 0.3s ease, color 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.button.hover,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
  },
}));

const ActionButton = ({ href, icon = null, onClick }) => {
  return (
    <StyledActionButton component="a" href={href} variant="contained" startIcon={icon} onClick={onClick}>
      Create New Sprint Item
    </StyledActionButton>
  );
};

export default ActionButton;
