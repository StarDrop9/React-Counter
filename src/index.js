import React from "react";
import { render } from "react-dom";
import { StoreProvider } from "./store-provider";
import Counter from "./counter";
import StateView from "./state-view";

const App = () => (
  <StoreProvider>
    <Counter />
    <StateView />
  </StoreProvider>
);

const rootElement = document.getElementById("root");
render(<App />, rootElement);
