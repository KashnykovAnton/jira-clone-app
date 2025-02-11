import { lazy } from "react";

export const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx" /* webpackChunkName: "home-page" */));
export const CreateNewItemPage = lazy(() =>
  import("../pages/CreateNewItemPage/CreateNewItemPage.jsx" /* webpackChunkName: "create-item-page" */)
);
export const NotFoundPage = lazy(() =>
  import("../pages/NotFoundPage/NotFoundPage.jsx" /* webpackChunkName: "not-found-page" */)
);
export const EditItemPage = lazy(() =>
  import("../pages/EditItemPage/EditItemPage.jsx" /* webpackChunkName: "edit-item-page" */)
);

export const ViewItemPage = lazy(() =>
  import("../pages/ViewItemPage/ViewItemPage.jsx" /* webpackChunkName: "view-item-page" */)
);

export const BacklogPage = lazy(() =>
  import("../pages/BacklogPage/BacklogPage.jsx" /* webpackChunkName: "backlog-page" */)
);

export const HelpPage = lazy(() => import("../pages/HelpPage/HelpPage.jsx" /* webpackChunkName: "help-page" */));

export const SettingsPage = lazy(() =>
  import("../pages/SettingsPage/SettingsPage.jsx" /* webpackChunkName: "settings-page" */)
);


