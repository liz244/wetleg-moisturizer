import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";


function App() {
  


// useEffect(() => {
//   localStorage.setItem("tourDates", JSON.stringify(tourDates));
// }, [tourDates]);


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
        <Route path="/login" element={<LoginPage setIsAdmin={setIsAdmin} />} />
      </Routes>
    </Router>
  );
}

export default App;
