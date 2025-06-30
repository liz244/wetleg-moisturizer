import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import TourForm from "./pages/TourForm";


function App() {
  

  const [isAdmin, setIsAdmin] = useState(() => {
      return localStorage.getItem("isAdmin") === "true";
  });


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage  />} />
        
        <Route path="/admin" element={
          isAdmin ? (
            <AdminPage  />
          ) : (
            <Navigate to="/login" />
          )
        } />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/new" element={<TourForm />} />
        <Route path="/admin/edit/:id" element={<TourForm />} />
        <Route path="/login" element={<LoginPage setIsAdmin={setIsAdmin} />} />
      </Routes>
    </Router>
  );
}

export default App;
