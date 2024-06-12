import React from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../store/cards/cards-selectors";
import { setSelectedSortImportance } from "../../store/cards/cards-slice-filter";
import s from "./HeaderSortImportance.module.css";

const HeaderSortImportance = () => {
  const dispatch = useDispatch();
  const { selectedSortImportance } = useSelector(selectFilters);

  const options = [
    { value: "ascending", label: "Ascending" },
    { value: "descending", label: "Descending" },
  ];

  const handleSortChange = (selectedOption) => {
    dispatch(setSelectedSortImportance(selectedOption.value));
  };

  return (
    <div className={s.sortContainer}>
      <h3 className={s.sortTitle}>Sort by importance</h3>
      <Select
        options={options}
        onChange={handleSortChange}
        className={s.select}
        value={options.find((option) => option.value === selectedSortImportance)}
      />
    </div>
  );
};

export default HeaderSortImportance;
