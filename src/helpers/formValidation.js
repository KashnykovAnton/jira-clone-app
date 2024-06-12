const validateInput = (name, description) => {
  let errors = {};

  if (name.length > 30) {
    errors.name = true;
  }
  if (description.length > 100) {
    errors.description = true;
  }
  return errors;
};

const isValid = (name, description) => {
  return Object.keys(validateInput(name, description)).length === 0;
};

const formValidation = { validateInput, isValid };

export default formValidation;
