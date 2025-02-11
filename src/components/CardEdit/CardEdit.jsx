import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import {
  Box,
  Card,
  CardContent,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import LoaderSpin from "../LoaderSpin/LoaderSpin";
import InputStyledCreatableSelect from "../InputStyledCreatableSelect/InputStyledCreatableSelect";
import { addCard, updateCard } from "../../store/cards/cards-thunks";
import { selectCards, selectLoader } from "../../store/cards/cards-selectors";
import formValidation from "../../helpers/formValidation";
import { infoMessage, warningMessage } from "../../services/toasts";
import { importanceOptions, statusOptions, typeOptions } from "../../utils/options";
// import s from "./CardEdit.module.css";
import CardButton from "../CardButton/CardButton";
import getNextColor from "../../helpers/generateColor";

const CardEdit = ({ creationMode = false }) => {
  const { cardId } = useParams();
  const cards = useSelector(selectCards);
  const card = cards.find((card) => card.id === cardId);

  const [formValues, setFormValues] = useState({
    id: creationMode ? nanoid() : card.id,
    name: creationMode ? "" : card.name,
    description: creationMode ? "" : card.description,
    group: creationMode ? "" : card.group,
    groupColor: creationMode ? "" : card.groupColor,
    importance: creationMode ? "" : card.importance,
    status: creationMode ? "TODO" : card.status,
    type: creationMode ? "" : card.type,
  });

  // resetForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector(selectLoader);
  const errors = formValidation.validateInput(formValues.name, formValues.description);

  const handleChange = (event, actionMeta) => {
    const { name, value } = event.target ? event.target : { name: actionMeta.name, value: event };

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const { name, description, group, importance, status, id, type, groupColor } = formValues;
    const cardObject = {
      name,
      description,
      group,
      importance,
      status,
      id,
      type,
      groupColor: creationMode ? getNextColor() : groupColor,
    };

    if (formValidation.isValid(name, description)) {
      creationMode ? dispatch(addCard(cardObject)) : dispatch(updateCard({ id: cardObject.id, item: cardObject }));
      creationMode ? infoMessage("You have just created a new card!") : infoMessage("You have just updated the card!");
      resetForm();
      navigate("/");
    } else {
      warningMessage("Please fix the validation errors before submitting.");
    }
  };

  const resetForm = () => {
    setFormValues({
      name: "",
      description: "",
      group: "",
      importance: "",
      status: "",
      id: "",
      type: "",
    });
  };

  const handleCancelClick = () => {
    navigate(-1);
  };

  const charactersLength = (str) => {
    const result = str.length;
    return result;
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
        onSubmit={handleFormSubmit}
      >
        <Stack spacing={2}>
          <CardContent>
            <Stack spacing={2}>
              <TextField
                label="Name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name ? "The name must be 30 characters or fewer." : ""}
                fullWidth
              />

              <TextField
                label="Description"
                name="description"
                value={formValues.description}
                onChange={handleChange}
                error={!!errors.description}
                helperText={
                  errors.description
                    ? `The description must be 100 characters or fewer. ${charactersLength(
                        formValues.description
                      )} characters now.`
                    : `You have entered ${charactersLength(formValues.description)} characters from 100.`
                }
                fullWidth
                multiline
                rows={5}
              />
              <InputStyledCreatableSelect name={"group"} onChange={handleChange} value={formValues.group} />
              <FormControl fullWidth error={!!errors.importance}>
                <InputLabel id="importance-label">Importance</InputLabel>
                <Select
                  labelId="importance-label"
                  id="importance-select"
                  name="importance"
                  value={formValues.importance}
                  onChange={handleChange}
                  label="Importance"
                >
                  {importanceOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth error={!!errors.status} style={{ marginTop: "16px" }}>
                <InputLabel id="status-label">Status</InputLabel>
                <Select
                  disabled={creationMode}
                  labelId="status-label"
                  id="status-select"
                  name="status"
                  value={formValues.status}
                  onChange={handleChange}
                  label="Status"
                >
                  {statusOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth error={!!errors.status} style={{ marginTop: "16px" }}>
                <InputLabel id="type-label">Type</InputLabel>
                <Select
                  labelId="type-label"
                  id="type-select"
                  name="type"
                  value={formValues.type}
                  onChange={handleChange}
                  label="Type"
                >
                  {typeOptions.map((option) => {
                    console.log("option -> ", option);
                    return (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Stack>
          </CardContent>
          <Divider sx={{ my: 2 }} />
          <Stack direction="row" spacing={2} justifyContent="space-around" sx={{ mt: 2 }}>
            <CardButton text="Save" onClick={handleFormSubmit} />
            <CardButton text="Cancel" onClick={handleCancelClick} />
          </Stack>
        </Stack>
      </Card>
      {isLoading && <LoaderSpin />}
    </Box>
  );
};

export default CardEdit;
