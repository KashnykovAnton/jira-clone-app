import { Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HomePage, CreateNewItemPage, EditItemPage, ViewItemPage, NotFoundPage, BacklogPage, HelpPage, SettingsPage } from "./helpers/lazyLoading.js";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import SidePanel from "./components/SidePanel/SidePanel";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AppBar />
                <SidePanel />
              </>
            }
          >
            <Route index element={<HomePage />} />
            <Route path="create" element={<CreateNewItemPage />} />
            <Route path="edit/:cardId" element={<EditItemPage />} />
            <Route path="view/:cardId" element={<ViewItemPage />} />
            <Route path="backlog" element={<BacklogPage />} />
            <Route path="help" element={<HelpPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <ToastContainer />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;