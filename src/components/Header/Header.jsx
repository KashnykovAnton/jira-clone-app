import { useSelector } from "react-redux";
import HeaderFilterGroups from "../HeaderFilterGroups/HeaderFilterGroups";
import HeaderFilterStatus from "../HeaderFilterStatus/HeaderFilterStatus";
import HeaderSortImportance from "../HeaderSortImportance/HeaderSortImportance";
import HeaderSortAlphabet from "../HeaderSortAlphabet/HeaderSortAlphabet";
import { Box, Divider, Typography } from "@mui/material";
import HeaderSkeleton from "./HeaderSkeleton";
import { selectLoader } from "../../store/cards/cards-selectors";
import styles from "./Header.module.css";

const Header = () => {
  const isLoading = useSelector(selectLoader);

  return (
    <Box className={styles.headerContainer}>
      {isLoading && <HeaderSkeleton />}
      {!isLoading && (
        <>
          <Box className={styles.boardName}>
            <Typography variant="h4" sx={{mb: "8px" }}>
              Tasks Board
            </Typography>
          </Box>
          <Box className={styles.titleSection}>
            <Typography variant="h5" className={styles.subtitle}>
              Sprint 1
            </Typography>
          </Box>
          <Box className={styles.centerSection}>
            <HeaderFilterGroups />
            <Divider orientation="horizontal" variant="fullWidth" flexItem />
            <Box className={styles.filtersContainer}>
              <Box sx={{ textAlign: "center" }}>
                <HeaderFilterStatus />
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <HeaderSortImportance />
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <HeaderSortAlphabet />
              </Box>
            </Box>
            <Divider orientation="horizontal" variant="fullWidth" flexItem />
          </Box>
        </>
      )}
    </Box>
  );
};

export default Header;
