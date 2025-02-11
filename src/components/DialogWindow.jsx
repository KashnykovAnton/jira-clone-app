import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";

const DialogWindow = ({ isDialogOpen, closeDialog, handleDeleteCard }) => {
  return (
    <Dialog open={isDialogOpen} onClose={closeDialog}>
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent>
        <Typography>Are you sure you want to delete this card?</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog} color="primary">
          No
        </Button>
        <Button onClick={handleDeleteCard} color="error">
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogWindow;
