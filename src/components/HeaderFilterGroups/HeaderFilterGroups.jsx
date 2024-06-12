import { useDispatch, useSelector } from "react-redux";
import { selectGroups } from "../../store/cards/cards-selectors";
import { setSelectedGroup } from "../../store/cards/cards-slice-filter";
import s from "./HeaderFilterGroups.module.css";
import Button from "../Button/Button";

const HeaderFilterGroups = () => {
  const dispatch = useDispatch();
  const groups = useSelector(selectGroups);

  const handleGroupClick = (group) => {
    dispatch(setSelectedGroup(group));
  };

  const handleResetGroupFilter = () => {
    dispatch(setSelectedGroup(null));
  };

  const renderApllicationGroups = () => {
    return groups.map((group) => (
      <li key={group} className={s.groupsItem} onClick={() => handleGroupClick(group)}>
        <p>{group}</p>
      </li>
    ));
  };

  return (
    <div className={s.groupsWrapper}>
      <ul className={s.groupsList}>
        {groups.length > 0 ? renderApllicationGroups() : <p>There is no any application group yet</p>}
      </ul>
      <Button onClick={handleResetGroupFilter} styleButton={"red"}>
        Reset group filter
      </Button>
    </div>
  );
};

export default HeaderFilterGroups;
