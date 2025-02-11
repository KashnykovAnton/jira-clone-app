import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  color: "#555",
  margin: "0px auto",
  paddingTop: "24px",
  textAlign: "center",
}));

const Title = ({ children }) => {
  return <StyledTitle variant="h3">{children}</StyledTitle>;
};

export default Title;
