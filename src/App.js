import { Route, Routes } from "react-router-dom";
import AppBar from "./components/AppBar/AppBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { CreateNewItemPage, EditItemPage, HomePage, NotFoundPage } from "./helpers/lazyLoading.js";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<HomePage />} />
          <Route path="create" element={<CreateNewItemPage />} />
          <Route path="edit/:cardId" element={<EditItemPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

// commits should be SEMANTIC !!!