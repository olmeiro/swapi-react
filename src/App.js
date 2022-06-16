import React from "react";
import { IconContext } from "react-icons";

import { AppRouter } from "./routers/AppRouter";
import useInitialState from "./hooks/useInitialState";
import AppContext from "./context/AppContext";

function App() {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <IconContext.Provider
        value={{ size: "1.2rem", className: "global-class-name" }}
      >
        <AppRouter />
      </IconContext.Provider>
    </AppContext.Provider>
  );
}

export default App;