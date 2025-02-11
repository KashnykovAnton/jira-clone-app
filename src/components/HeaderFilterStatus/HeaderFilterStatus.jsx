import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Box, Button, Popover, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { selectFilters } from "../../store/cards/cards-selectors";
import { setSelectedStatus } from "../../store/cards/cards-slice-filter";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
// import Button from "../Button/Button";
import { statusOptions } from "../../utils/options";
import FilterAndSortIconButton from "../FilterAndSortIconButton";

const HeaderFilterStatus = () => {
  const dispatch = useDispatch();
  const { selectedStatus } = useSelector(selectFilters);
  const [anchorEl, setAnchorEl] = useState(null);
  const [invisible, setInvisible] = useState(true);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleStatusChange = (event) => {
    dispatch(setSelectedStatus(event.target.value));
    setInvisible(false);
  };

  const handleResetStatusFilter = () => {
    dispatch(setSelectedStatus(null));
    setInvisible(true);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <FilterAndSortIconButton
        onClick={handleClick}
        iconComponent={<FilterAltIcon />}
        title={"Filter by Status"}
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
            Filter by Status
          </Typography>
          <FormControl fullWidth>
            <RadioGroup column="true" name="status-radio-buttons" onChange={handleStatusChange} value={selectedStatus}>
              {statusOptions.map((status, index) => (
                <FormControlLabel
                  key={index}
                  value={status.value}
                  control={<Radio size="small" />}
                  label={status.value}
                  sx={{
                    fontSize: "0.8rem",
                  }}
                  disableTypography={true}
                />
              ))}
            </RadioGroup>
          </FormControl>
          <Button variant="outlined" color="error" onClick={handleResetStatusFilter} sx={{ mt: 2 }}>
            Reset Filter
          </Button>
        </Box>
      </Popover>
    </>
  );
};

export default HeaderFilterStatus;
