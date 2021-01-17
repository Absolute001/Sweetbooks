import React from "react";
import { ContextProvider } from "./context/Context";
import NavbarHome from "./components/NavbarHome";
import Home from "./components/Home";
import Suggested from "./components/Suggested";

 function App() {
  return (
    <div>
      <ContextProvider>
        <NavbarHome />
        <Home />
        <Suggested />
      </ContextProvider>
    </div>
  );
}

export default App
