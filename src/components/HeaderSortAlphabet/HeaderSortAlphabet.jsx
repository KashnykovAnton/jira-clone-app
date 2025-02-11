import { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../store/cards/cards-selectors";
import { setSelectedSortAlphabeticallyAZ, setSelectedSortAlphabeticallyZA } from "../../store/cards/cards-slice-filter";
import { Box, Popover, Typography } from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import FilterAndSortIconButton from "../FilterAndSortIconButton";

const HeaderSortAlphabet = () => {
  const dispatch = useDispatch();
  const { selectedSortAlphabeticallyAZ, selectedSortAlphabeticallyZA } = useSelector(selectFilters);
  const [anchorEl, setAnchorEl] = useState(null);
  const [invisible, setInvisible] = useState(true);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSortAlphabeticallyChangeAZ = (event) => {
    dispatch(setSelectedSortAlphabeticallyAZ(event.target.checked));
    setInvisible(event.target.checked ? false : true);
  };

  const handleSortAlphabeticallyChangeZA = (event) => {
    dispatch(setSelectedSortAlphabeticallyZA(event.target.checked));
    setInvisible(event.target.checked ? false : true);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <FilterAndSortIconButton
        onClick={handleClick}
        iconComponent={<SwapVertIcon />}
        title={"Sort Alphabetically"}
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
            Sort Alphabetically
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                disabled={selectedSortAlphabeticallyZA}
                size="small"
                checked={selectedSortAlphabeticallyAZ}
                onChange={handleSortAlphabeticallyChangeAZ}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="Sort Alphabetically (A-Z)"
            sx={{
              fontSize: "0.8rem",
            }}
            disableTypography={true}
          />
          <FormControlLabel
            control={
              <Checkbox
                disabled={selectedSortAlphabeticallyAZ}
                size="small"
                checked={selectedSortAlphabeticallyZA}
                onChange={handleSortAlphabeticallyChangeZA}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="Sort Alphabetically (Z-A)"
            sx={{
              fontSize: "0.8rem",
            }}
            disableTypography={true}
          />
        </Box>
      </Popover>
    </>
  );
};

export default HeaderSortAlphabet;
