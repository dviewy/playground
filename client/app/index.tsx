import React from "react";
import { GlobalStyle } from "./global-style";
import { RouterProvider } from "react-router-dom";
import { router } from "~app/router";

export const App = () => (
  <>
    <GlobalStyle />

    <RouterProvider router={router}></RouterProvider>
  </>
);
