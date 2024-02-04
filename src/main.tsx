import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Views/HomePage.tsx";
import GamesPage from "./Views/GamesPage.tsx";
import LocalWebsitesPage from "./Views/LocalWebsitesPage.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/GamesPage" element={<GamesPage />} />
      <Route path="/LocalWebsitesPage" element={<LocalWebsitesPage />} />
    </>
  ),
  { basename: "/Maizu-Website/" }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
