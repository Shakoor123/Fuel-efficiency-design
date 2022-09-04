import { useState } from "react";
import "./App.scss";
import "./components/Leftbar/Leftbar";
import Box from "./components/Box/Box";
function App() {
  return (
    <div className="app">
      <div className="appPadding">
        <Box />
      </div>
    </div>
  );
}

export default App;
