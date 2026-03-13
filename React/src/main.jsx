import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Users from "./Users.jsx";
import ContactPage from "./ContactPage.jsx";
import HomePage from "./HomePage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
