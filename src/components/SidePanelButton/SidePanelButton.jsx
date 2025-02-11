import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./SidePanelButton.module.css";
import { Link } from "react-router-dom";

const SidePanelButton = ({ icon, text, onClick = () => {}, to }) => {
  return (
    <Box onClick={onClick}>
      <Link className={styles.button} to={to}>
        {icon ? <Box className={styles.icon}>{icon}</Box> : null}
        <Typography variant="body1">{text}</Typography>
      </Link>
    </Box>
  );
};

export default SidePanelButton;
