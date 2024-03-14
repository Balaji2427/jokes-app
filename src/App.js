import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          exact
          path="/homepage"
          element={<HomePage setIsLoggedIn={setIsLoggedIn} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
