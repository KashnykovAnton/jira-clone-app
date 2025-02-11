import React from "react";
import Select from "react-select";
import withCommonStyles from "../../decorators/selectDecorator";
import { importanceOptions, statusOptions } from "../../utils/options";

const InputStyledSelect = ({ name, value, onChange, isDisabled = false }) => {
  const StyledSelect = withCommonStyles(Select);

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
