import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CardButton from "./CardButton/CardButton";

const DeleteConfirmationDialog = ({ isOpen, onConfirm, onCancel, cardId }) => {
  return (
    <Dialog open={isOpen} onClose={onCancel} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        Delete Confirmation
        <IconButton onClick={onCancel} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          Are you sure you want to delete the card with ID: <strong>{cardId}</strong>?
        </Typography>
      </DialogContent>
      <DialogActions>
        <CardButton text="No" onClick={onCancel} />

        <CardButton text="Yes" onClick={onConfirm} />
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationDialog;
