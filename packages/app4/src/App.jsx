import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
import RemoteApp from "app3/Menu";

function App() {
  return (
    // <div className="App">
    //   <RemoteApp/>
    //   <h2>App4</h2>
    // </div>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <RemoteApp />
              <h2>app4</h2>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
