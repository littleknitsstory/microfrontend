import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/global.css";
import "./css/lks-fw.css";
import Menu from "./Menu";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Menu />
              <h2>app3</h2>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
