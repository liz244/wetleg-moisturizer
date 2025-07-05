import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import TourForm from "./pages/TourForm";
import TourPage from "./pages/TourPage"; 
import Album from "./pages/Album";

function App() {
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem("isAdmin") === "true";
  });

  const [tourDates, setTourDates] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/tours") 
      .then(res => res.json())
      .then(data => setTourDates(data))
      .catch(error => console.error("Erreur de chargement des tournées :", error));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/admin"
          element={isAdmin ? <AdminPage /> : <Navigate to="/login" />}
        />
        <Route path="/admin/new" element={<TourForm />} />
        <Route path="/admin/edit/:id" element={<TourForm />} />
        <Route path="/login" element={<LoginPage setIsAdmin={setIsAdmin} />} />
<Route path="/album" element={<Album />} />
        <Route path="/tour" element={<TourPage />} />
      </Routes>
    </Router>
  );
}

export default App;
