import { Card, CardContent, Avatar, Typography, Stack, TextField, Divider, Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSingleCard } from "../../store/cards/cards-selectors";
import CardButton from "../CardButton/CardButton";
import avatarImage from "../../images/avatar.png";

const CardView = () => {
  const navigate = useNavigate();
  const { cardId } = useParams();
  const card = useSelector(selectSingleCard);

  const handleEditClick = () => {
    navigate(`/edit/${cardId}`);
  };

  const handleCancelClick = () => {
    navigate(-1);
  };

  return (
    <Box sx={{ padding: "32px" }}>
      <Card
        sx={{
          maxWidth: 600,
          margin: "auto",
          padding: 2,
          borderRadius: 3,
          boxShadow: 3,
          bgcolor: "var(--white-color)",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ position: "relative", display: "flex", justifyContent: "center", mb: 2 }}
        >
          <Avatar
            src={avatarImage}
            sx={{
              position: "absolute",
              top: 0,
              right: "16px",
              width: 40,
              height: 40,
            }}
          />
          <Stack>
            <Typography variant="h6" fontWeight="bold" sx={{ textAlign: "center", mt: 0.5 }}>
              {card.name}
            </Typography>
          </Stack>
        </Stack>
        <Divider sx={{ my: 2 }} />
        <CardContent>
          <Stack spacing={2}>
            <TextField label="Name" defaultValue={card.name} fullWidth disabled />
            <TextField label="Description" defaultValue={card.description} fullWidth multiline maxRows={6} disabled />
            <TextField label="Application Group" defaultValue={card.group} disabled fullWidth />
            <TextField label="Importance" defaultValue={card.importance} disabled fullWidth />
            <TextField label="Status" defaultValue={card.status} disabled fullWidth />
            <TextField label="Type" defaultValue={card.type} disabled fullWidth />
          </Stack>
        </CardContent>
        <Divider sx={{ my: 2 }} />
        <Stack direction="row" spacing={2} justifyContent="space-around" sx={{ mt: 2 }}>
          <CardButton text="Edit" onClick={handleEditClick} />
          <CardButton text="Cancel" onClick={handleCancelClick} />
        </Stack>
      </Card>
    </Box>
  );
};

export default CardView;
