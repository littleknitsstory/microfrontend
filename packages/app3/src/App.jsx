import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Menu from "./Menu";
import Blog from "./Blog";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Menu />
              <h2 className="styleColor_red">app3</h2>
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
              <Menu />
              <Blog />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
