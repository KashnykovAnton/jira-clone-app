import { useState } from "react";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import { selectGroups } from "../../store/cards/cards-selectors";

const InputStyledCreatableSelect = ({ name, onChange, value }) => {
  const groups = useSelector(selectGroups);
  const [options, setOptions] = useState(groups);
  const filter = createFilterOptions();

  const handleSelectChange = (event, newValue) => {
    const fakeEvent = {
      target: {
        name,
        value: newValue,
      },
    };
    if (typeof newValue === "string") {
      if (!options.includes(newValue)) {
        setOptions((prevOptions) => [...prevOptions, newValue]);
      }
      onChange(fakeEvent, { name });
    } else if (newValue?.inputValue) {
      const newGroup = newValue.inputValue;
      fakeEvent.target.value = newGroup;
      if (!options.includes(newGroup)) {
        setOptions((prevOptions) => [...prevOptions, newGroup]);
      }
      onChange(fakeEvent, { name });
    } else {
      onChange(fakeEvent, { name });
    }
  };

  return (
    <Autocomplete
      value={value}
      options={options}
      onChange={handleSelectChange}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);
        const { inputValue } = params;
        const isExisting = options.includes(inputValue);
        if (inputValue !== "" && !isExisting) {
          filtered.push({
            inputValue,
            label: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Select or create a group" placeholder="Type to search or create" />
      )}
    />
  );
};

export default InputStyledCreatableSelect;
