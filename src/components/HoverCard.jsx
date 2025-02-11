import { styled } from "@mui/material/styles";
import { Card } from "@mui/material";

const HoverCard = styled(Card)(({ theme }) => ({
  maxWidth: "90%",
  flexGrow: 1,
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
  border: "1px solid #dddddd",
  borderRadius: "8px",
  boxShadow: "none",
  transition: "transform 0.2s, box-shadow 0.2s",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
  },
}));

export default HoverCard;
