import React from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./global-style";

export const TestPage1 = () => <h1>test page 1</h1>;
export const TestPage2 = () => <h1>test page 2</h1>;
export const TestPage3 = () => <h1>test page 3</h1>;

export const App = () => (
  <>
    <GlobalStyle />
  </>
);
