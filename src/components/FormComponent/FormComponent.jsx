import { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import LoaderSpin from "../LoaderSpin/LoaderSpin";
import InputText from "../InputText/InputText";
import InputStyledSelect from "../InputStyledSelect/InputStyledSelect";
import formValidation from "../../helpers/formValidation";
import { infoMessage, warningMessage } from "../../services/toasts";
import InputStyledCreatableSelect from "../InputStyledCreatableSelect/InputStyledCreatableSelect";
import { addCard, updateCard } from "../../store/cards/cards-thunks";
import { selectLoader } from "../../store/cards/cards-selectors";
import s from "./FormComponent.module.css";
import Button from "../Button/Button";

const defaultInitialValues = {
  name: "",
  description: "",
  group: null,
  importance: { value: "Low", label: "Low" },
  status: { value: "TODO", label: "TODO" },
};

const FormComponent = ({ initialValues = defaultInitialValues, edited = () => {}, inEditMode = false }) => {
  const [formValues, setFormValues] = useState({
    name: initialValues.name,
    description: initialValues.description,
    group: initialValues.group,
    importance: initialValues.importance,
    status: initialValues.status,
  });

  console.log("formValues -> ", formValues);

  const dispatch = useDispatch();
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

    const { name, description, group, importance, status } = formValues;
    const cardObject = {
      name,
      description,
      group: group.value,
      importance: importance.value,
      status: status.value,
      id: nanoid(),
    };

    if (formValidation.isValid(name, description)) {
      !inEditMode ? dispatch(addCard(cardObject)) : dispatch(updateCard({ id: initialValues.id, item: cardObject }));
      !inEditMode ? infoMessage("You have just created a new card!") : infoMessage("You have just updated the card!");
      !inEditMode && resetForm();
      inEditMode && edited(false);
    } else {
      warningMessage("Please fix the validation errors before submitting.");
    }
  };

  const resetForm = () => {
    setFormValues({
      name: "",
      description: "",
      group: null,
      importance: { value: "Low", label: "Low" },
      status: { value: "TODO", label: "TODO" },
    });
  };

  const handleCancel = () => {
    resetForm();
    edited(false);
  };

  return (
    <div>
      <form className={s.formContainer} onSubmit={handleFormSubmit}>
        <InputText name={"name"} onChange={handleChange} errors={errors} value={formValues.name} />
        <InputText name={"description"} onChange={handleChange} errors={errors} value={formValues.description} />
        <InputStyledCreatableSelect name={"group"} onChange={handleChange} value={formValues.group} />
        <InputStyledSelect name="importance" value={formValues.importance} onChange={handleChange} />
        <InputStyledSelect name="status" value={formValues.status} onChange={handleChange} isDisabled={!inEditMode} />
        {!inEditMode ? (
          <div>
            <Button type={"submit"} styleButton={"blue"}>
              Add new card
            </Button>
          </div>
        ) : (
          <div className={s.buttonContainer}>
            <Button type={"submit"} styleButton={"blue"}>
              Update card
            </Button>
            <Button styleButton={"red"} onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        )}
        {}
      </form>
      {isLoading && <LoaderSpin />}
    </div>
  );
};

export default FormComponent;
