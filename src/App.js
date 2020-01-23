import React from "react";
import "./App.css";
import ApiFetch from "./components/api/platsuppslag";
import RealTidsInfo from "./components/api/realtidsinformation4";
import GooglePLaces from "./components/api/googleplaces.js";

function App() {
  return (
    <div className="App">
      <ApiFetch />
      <RealTidsInfo />
      <GooglePLaces />
    </div>
  );
}

export default App;
