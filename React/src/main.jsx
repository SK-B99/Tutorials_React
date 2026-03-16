import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Users from "./Users.jsx";
import ContactPage from "./ContactPage.jsx";
import HomePage from "./HomePage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Items from "./items.jsx";
import RegisterForm from "./RegisterForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/items/:id" element={<Items />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
