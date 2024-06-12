import React from "react";
import Select from "react-select";
import withCommonStyles from "../../decorators/selectDecorator";

const InputStyledSelect = ({ name, value, onChange, isDisabled = false }) => {
  const StyledSelect = withCommonStyles(Select);

  const importanceOptions = [
    { value: "Low", label: "Low" },
    { value: "Medium", label: "Medium" },
    { value: "High", label: "High" },
  ];

  const statusOptions = [
    { value: "TODO", label: "TODO" },
    { value: "In Progress", label: "In Progress" },
    { value: "Done", label: "Done" },
  ];

  const handleSelectChange = (name) => {
    return (input, actionMeta) => onChange(input, { name });
  };

  return (
    <StyledSelect
      name={name}
      options={name === "importance" ? importanceOptions : statusOptions}
      value={value}
      onChange={handleSelectChange(name)}
      required
      label={name}
      isDisabled={isDisabled}
    />
  );
};

export default InputStyledSelect;
