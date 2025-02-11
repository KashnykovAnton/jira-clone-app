import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import CustomCartBadge from "./CustomCartBadge";

const FilterAndSortIconButton = ({ onClick, iconComponent, title, invisible }) => {
  return (
    <Box
      sx={{
        "&:hover": {
          backgroundColor: "#e0dfe7",
          borderRadius: "8px",
        },
      }}
    >
      <IconButton
        onClick={onClick}
        size="small"
        disableRipple={true}
        sx={{
          "&:hover": {
            color: "var(--main-text-color)",
          },
        }}
      >
        {iconComponent}
        <Typography variant="caption" sx={{ ml: "8px" }}>
          {title}
        </Typography>
        <CustomCartBadge invisible={invisible} />
      </IconButton>
    </Box>
  );
};

export default FilterAndSortIconButton;
