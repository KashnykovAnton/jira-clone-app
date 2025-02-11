import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { selectFilters, selectGroups } from "../../store/cards/cards-selectors";
import { setSelectedGroup } from "../../store/cards/cards-slice-filter";
import styles from "./HeaderFilterGroups.module.css";

const HeaderFilterGroups = () => {
  const dispatch = useDispatch();
  const groups = useSelector(selectGroups);
  const { selectedGroup } = useSelector(selectFilters);

  const handleGroupClick = (e, group) => {
    dispatch(setSelectedGroup(group));
  };

  const renderApllicationGroups = () => {
    return groups.map((group) => {
      if (group !== undefined) {
        return (
          <ToggleButton key={nanoid()} value={group} size="small" className={styles.toggleButton}>
            {group}
          </ToggleButton>
        );
      }
      return null;
    });
  };

  return (
    <Box sx={{pb: "8px"}}>
      <ToggleButtonGroup value={selectedGroup} exclusive onChange={handleGroupClick}>
        {groups.length > 0 ? renderApllicationGroups() : <p>There is no any application group yet</p>}
      </ToggleButtonGroup>
    </Box>
  );
};

export default HeaderFilterGroups;
