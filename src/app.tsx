import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Components } from "./views/Components";
import { Home } from "./views/Home";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/components" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/components" element={<Components />} />
      </Routes>
    </BrowserRouter>
  );
};
