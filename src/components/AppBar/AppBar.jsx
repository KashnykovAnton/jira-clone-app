import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import LoaderSpin from "../LoaderSpin/LoaderSpin";

const AppBar = () => {
  return (
    <Suspense fallback={<LoaderSpin />}>
      <Box sx={{ ml: "200px", width: "calc(100% - 200px)", backgroundColor: "var(--background-color)" }}>
        <Outlet />
      </Box>
    </Suspense>
  );
};

export default AppBar;
