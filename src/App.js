import React from "react";
import Main from "./components/Main/Main";
import "./App.css";
import TitleBar from "./components/TitleBar";

function App() {
  return (
    <div className="App">
      <TitleBar />
      <Main />
    </div>
  );
}

export default App;
