import React, { useState } from "react";
import { List, ListItem, Chip, Box, Avatar, IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { typeIcons, priorityIcons } from "../utils/options";
import { useDispatch, useSelector } from "react-redux";
import { selectCards } from "../store/cards/cards-selectors";
import avatarImage from "../images/avatar.png";
import { deleteCard } from "../store/cards/cards-thunks";
import DeleteConfirmationDialog from "./DeleteConfirmationDialog";
import { warningMessage } from "../services/toasts";

const BacklogList = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const cards = useSelector(selectCards);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dispatch = useDispatch();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleViewClick = (id) => {
    navigate(`/view/${id}`);
  };

  const handleEditClick = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDeleteClick = () => {
    setIsDialogOpen(true);
    handleMenuClose();
  };

  const handleConfirmDelete = (id ) => {
    console.log(`Card with ID: ${id} was deleted.`);
    dispatch(deleteCard(id));
    setIsDialogOpen(false);
    warningMessage(`Card with ID: ${id} was deleted`);
  };

  const handleCancelDelete = () => {
    setIsDialogOpen(false);
  };

  return (
    <List>
      {cards.map((card) => (
        <ListItem key={card.id} sx={{ display: "flex", borderBottom: "1px solid #ddd", padding: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", width: "15%" }}>
            <Stack direction="row" spacing={1}>
              <Box
                sx={{
                  color:
                    card.importance === "High"
                      ? "error.main"
                      : card.importance === "Medium"
                      ? "warning.main"
                      : "success.main",
                }}
              >
                {priorityIcons[card.importance]}
              </Box>
              <Chip label={card.group} variant="outlined" size="small" />
            </Stack>
          </Box>
          <Stack direction="row" spacing={2} justifyContent={"space-between"} alignItems={"center"} width={"100%"}>
            <Typography variant="body1" gutterBottom sx={{ width: "45%" }}>
              {card.name}
            </Typography>
            <Stack direction="row" spacing={2}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
                {typeIcons[card.type]}
                <Avatar src={avatarImage} sx={{ width: 32, height: 32 }} />
              </Box>
              <IconButton onClick={(e) => handleMenuOpen(e, card.id)}>
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
                      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    },
                  },
                }}
              >
                <MenuItem onClick={() => handleViewClick(card.id)}>View</MenuItem>
                <MenuItem onClick={() => handleEditClick(card.id)}>Edit</MenuItem>
                <MenuItem onClick={() => handleDeleteClick(card.id)}>Delete</MenuItem>
              </Menu>
            </Stack>
          </Stack>
          <DeleteConfirmationDialog
            isOpen={isDialogOpen}
            onConfirm={() => handleConfirmDelete(card.id)}
            onCancel={handleCancelDelete}
            cardId={card.id}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default BacklogList;
