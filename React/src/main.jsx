import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Users from "./Users.jsx";
import ContactPage from "./ContactPage.jsx";
import HomePage from "./HomePage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
