import React from "react";
import "./App.css";
import ApiFetch from "./components/api/platsuppslag";
import RealTidsInfo from "./components/api/realtidsinformation4";

function App() {
  return (
    <div className="App">
      <ApiFetch />
      <RealTidsInfo />
    </div>
  );
}

export default App;
