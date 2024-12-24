import { MemoryRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import HomePage from "./pages/Homepage";

const App = () => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </MemoryRouter>
  );
};

export default App;
