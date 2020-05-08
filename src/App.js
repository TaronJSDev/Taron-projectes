import React from "react";
import "./App.css";
import Modul from "./componentes/Modul";

function App(propes) {
  return (
    <div>
      <Modul name={propes.arr[1]} />;
      <Modul name={propes.arr[2]} />;
      <Modul name={propes.arr[3]} />;
    </div>
  );
}

export default App;
