import { Box, Stack, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import SidePanelButton from "../SidePanelButton/SidePanelButton";
import styles from "./SidePanel.module.css";

const SidePanel = () => {
  return (
    <Box className={styles.sidePanel}>
      <Box className={styles.logoSection}>
        <Typography sx={{ fontFamily: "var(--font-title)" }} variant="h5">
          Kanban Board
        </Typography>
      </Box>

      <Stack justifyContent={"space-between"} height={"100%"}>
        <Stack spacing={1} sx={{ mt: 3 }}>
          <SidePanelButton icon={<HomeIcon />} text="Active Sprint" to={"/"} />
          <SidePanelButton icon={<ListIcon />} text="Backlog" to={"/backlog"} />
        </Stack>

        <Stack spacing={1}>
          <SidePanelButton icon={<HelpOutlineIcon />} text="Help" to={"/help"} />
          <SidePanelButton icon={<SettingsIcon />} text="Settings" to={"/settings"} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default SidePanel;
