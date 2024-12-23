import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Homepage from "./pages/Homepage";
import Chatbot from "./pages/Chatbot";
import Notes from "./pages/Notes";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/notes" element={<Notes />} />
    </Routes>
  );
};

export default App;
