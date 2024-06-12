import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../store/cards/cards-selectors";
import { setSelectedSortAlphabetically } from "../../store/cards/cards-slice-filter";
import s from "./HeaderSortAlphabet.module.css";

const HeaderSortAlphabet = () => {
  const dispatch = useDispatch();
  const { selectedSortAlphabetically } = useSelector(selectFilters);

  const handleSortAlphabeticallyChange = (e) => {
    dispatch(setSelectedSortAlphabetically(e.target.checked));
  };
  return (
    <div>
      <h3 className={s.sortTitle}>Sort by alphabet</h3>
      <div className={s.alphabeticalSortContainer}>
        <label>
          <input type="checkbox" checked={selectedSortAlphabetically} onChange={handleSortAlphabeticallyChange} />
          Sort Alphabetically
        </label>
      </div>
    </div>
  );
};

export default HeaderSortAlphabet;
