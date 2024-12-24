import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Classes from "./pages/Classes"; // Import the Classes component
import Lecture from "./pages/Lecture";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/classes" element={<Classes />} /> {/* Add this route */}
        <Route path="/lecture" element={<Lecture />} />
      </Routes>
    </Router>
  );
};

export default App;
