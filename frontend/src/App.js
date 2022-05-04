import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Team from "./pages/Team";
import Matches from "./pages/Matches";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team/:teamName" element={<Team />} />
        <Route path="/team/:teamName/matches/:year" element={<Matches />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
