import { MemoryRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import HomePage from "./pages/Homepage";
import ChatBot from "./pages/Chatbot";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem("token");
  return token ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <div className="h-[600px] w-[400px]">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route
            path="/home"
            element={<PrivateRoute element={<HomePage />} />}
          />
          <Route
            path="/chatbot"
            element={<PrivateRoute element={<ChatBot />} />}
          />
        </Routes>
      </MemoryRouter>
    </div>
  );
};

export default App;
