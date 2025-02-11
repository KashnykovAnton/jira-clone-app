import React, { useState } from "react";
import {
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Chip,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import HoverCard from "../HoverCard";
import { useNavigate } from "react-router-dom";
import DeleteConfirmationDialog from "../DeleteConfirmationDialog";
import styles from "./CardsListItem.module.css";
import { warningMessage } from "../../services/toasts";
import { deleteCard } from "../../store/cards/cards-thunks";
import { useDispatch } from "react-redux";
import { typeIcons, priorityIcons } from "../../utils/options";
import colors from "../../colors";
import avatarImage from "../../images/avatar.png";

const CardsListItem = ({ card }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log("card -> ", card);

  // const cardNew = {
  //   ...card,
  //   assignedTo: { avatar: "https://i.pravatar.cc/300", name: "John  Doe" },
  //   type: "Bug",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut",
  // };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleViewClick = () => {
    navigate(`/view/${card.id}`);
    handleMenuClose();
  };

  const handleEditClick = () => {
    navigate(`/edit/${card.id}`);
    handleMenuClose();
  };

  const handleDeleteClick = () => {
    setIsDialogOpen(true);
    handleMenuClose();
  };

  const handleConfirmDelete = () => {
    console.log(`Card with ID: ${card.id} was deleted.`);
    dispatch(deleteCard(card.id));
    setIsDialogOpen(false);
    warningMessage(`Card with ID: ${card.id} was deleted`);
  };

  const handleCancelDelete = () => {
    setIsDialogOpen(false);
  };

  const getChipStyle = (importance) => {
    switch (importance) {
      case "Low":
        return styles["chip-low"];
      case "Medium":
        return styles["chip-medium"];
      case "High":
        return styles["chip-high"];
      default:
        return "";
    }
  };

  return (
    <>
      <HoverCard>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Stack direction="row" spacing={1}>
            <Chip label={card.group} variant="outlined" size="small" sx={{ backgroundColor: card.groupColor }} />
            <Chip
              icon={priorityIcons[card.importance]}
              label={card.importance}
              className={`${styles.chip} ${getChipStyle(card.importance)}`}
              variant="outlined"
              size="small"
            />
            <Chip label={card.status} variant="outlined" size="small" sx={{ backgroundColor: colors.lineColor }} />
          </Stack>
          <IconButton onClick={handleMenuOpen}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            slotProps={{
              paper: {
                style: {
                  width: "100px",
                },
              },
            }}
          >
            <MenuItem onClick={handleViewClick} sx={{ fontSize: "0.8rem" }}>
              View
            </MenuItem>
            <MenuItem onClick={handleEditClick} sx={{ fontSize: "0.8rem" }}>
              Edit
            </MenuItem>
            <MenuItem onClick={handleDeleteClick} sx={{ fontSize: "0.8rem" }}>
              Delete
            </MenuItem>
          </Menu>
        </Box>

        <CardContent sx={{ p: 0 }}>
          <Typography variant="h6" gutterBottom>
            {card.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap sx={{ width: "80%" }}>
            {card.description.split("\n")[0]}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            {card.description.split("\n")[1]}
          </Typography>
        </CardContent>

        <CardActions sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>{typeIcons[card.type]}</Box>
          <Avatar src={avatarImage} sx={{ width: 32, height: 32 }} />
        </CardActions>
      </HoverCard>
      <DeleteConfirmationDialog
        isOpen={isDialogOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        cardId={card.id}
      />
    </>
  );
};

export default CardsListItem;
