// src/pages/LoginPage.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


export default function LoginPage({ setIsAdmin }) {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin  = async() => {
    try {
      const result = await signInWithEmailAndPassword(auth,'admin@wetleg.com',password)
      console.log(result)
    } catch (error) {
      console.log(error)
      
    }
    // if (password === "wetleg2025") {
    //   setIsAdmin(true);
    //   navigate("/admin");
    // } else {
    //   alert("Mot de passe incorrect !");
    // }
  };
  
  localStorage.setItem("isAdmin", "true");


  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Connexion Admin</h2>
      <input
        type="password"
        placeholder="Mot de passe admin"
        className="w-full p-2 border rounded mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
      >
        Se connecter
      </button>
    </div>
  );
}
