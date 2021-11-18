import { hot } from "react-hot-loader/root";
import React from "react";
import { GlobalStyle } from "./global-style";

const _ = () => (
  <>
    <GlobalStyle />
    <h1>Hello world!!!!!!!</h1>
  </>
);

export const App = hot(_);
