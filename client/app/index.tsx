import React from "react";
import { BrowserRouter } from "react-router-dom";
import { matchRoutes, renderRoutes } from "react-router-config";
import { GlobalStyle } from "./global-style";

export const TestPage1 = () => <h1>test page 1</h1>;
export const TestPage2 = () => <h1>test page 2</h1>;
export const TestPage3 = () => <h1>test page 3</h1>;

export const App = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      {renderRoutes([
        {
          path: "/",
          exact: true,
          component: TestPage1,
        },
        {
          path: "/test-2",
          exact: true,
          component: TestPage2,
        },
        {
          path: "/test-3",
          exact: true,
          component: TestPage3,
        },
      ])}
    </BrowserRouter>
  </>
);
