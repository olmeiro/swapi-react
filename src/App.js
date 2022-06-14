import React from "react";

import useInitialState from "./hooks/useInitialState";
import AppContext from "./context/AppContext";
import { AppRouter } from "./routers/AppRouter";

import "./App.css";

function App() {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <AppRouter />
    </AppContext.Provider>
  );
}

export default App;
