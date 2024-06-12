import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const deleteConfirmation = (handleDeleteCard ) => {
  confirmAlert({
    title: "Confirm to submit",
    message: "Are you sure you want to delete this card?",
    buttons: [
      {
        label: "Yes",
        onClick: () => handleDeleteCard(),
      },
      {
        label: "No",
        onClick: () => {},
      },
    ],
  });
};

export default deleteConfirmation;
