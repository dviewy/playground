import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "~pages/login";
import { MainPage } from "~pages/main";

const routes = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
];

export const router = createBrowserRouter(routes);
