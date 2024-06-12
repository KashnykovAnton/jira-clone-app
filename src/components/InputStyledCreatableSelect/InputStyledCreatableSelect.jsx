import CreatableSelect from "react-select/creatable";
import { useSelector } from "react-redux";
import { selectGroups } from "../../store/cards/cards-selectors";
import withCommonStyles from "../../decorators/selectDecorator";

const InputStyledCreatableSelect = ({ name, onChange, value }) => {
  const StyledCreatableSelect = withCommonStyles(CreatableSelect);
  const customComponents = {
    ClearIndicator: null,
  };

  const groups = useSelector(selectGroups);

  const existingGroupsForSelect = (groups) => {
    return groups.map((option) => ({ value: option, label: option }));
  };

  const handleSelectChange = (name) => {
    return (event, actionMeta) => onChange(event, { name });
  };

  // Rewrite the logic of adding and deleting groups

  const handleCreateGroup = (inputValue) => {
    const newGroup = { value: inputValue, label: inputValue };
    onChange(newGroup, { name });
  };

  return (
    <StyledCreatableSelect
      components={customComponents}
      isClearable
      onChange={handleSelectChange(name)}
      onCreateOption={handleCreateGroup}
      value={value}
      options={existingGroupsForSelect(groups)}
      required
      label={name}
      placeholder="Select one of the existing groups or create a new one"
    />
  );
};

export default InputStyledCreatableSelect;
