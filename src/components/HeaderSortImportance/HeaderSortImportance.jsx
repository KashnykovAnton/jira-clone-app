import { useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../store/cards/cards-selectors";
import { setSelectedSortImportance } from "../../store/cards/cards-slice-filter";
import { Popover, Typography } from "@mui/material";
import { importanseSortOptions } from "../../utils/options";
import SortIcon from "@mui/icons-material/Sort";
import FilterAndSortIconButton from "../FilterAndSortIconButton";
import { use } from "react";

const HeaderSortImportance = () => {
  const dispatch = useDispatch();
  const { selectedSortImportance } = useSelector(selectFilters);
  const [anchorEl, setAnchorEl] = useState(null);
  const [invisible, setInvisible] = useState(true);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSortChange = (event) => {
    console.log(event.target.value);
    dispatch(setSelectedSortImportance(event.target.value));
    setInvisible(event.target.value === "" ? true : false);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <FilterAndSortIconButton
        onClick={handleClick}
        iconComponent={<SortIcon />}
        title={"Sort by Importance"}
        invisible={invisible}
      />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Box sx={{ p: 2, width: 300 }}>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Sort by Importance
          </Typography>
          <FormControl fullWidth>
            <Select
              labelId="importance-sort-label"
              value={selectedSortImportance || ""}
              onChange={handleSortChange}
              // label="Importance"
              size="small"
            >
              {importanseSortOptions.map((option) => (
                <MenuItem key={option.value} value={option.value} sx={{fontSize: "0.8rem"}}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Popover>
    </>
  );

};

export default HeaderSortImportance;
