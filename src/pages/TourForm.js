// pages/TourForm.js
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../config/firebase";
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import styled from "styled-components";

const Container = styled.div`padding: 2rem; max-width: 720px; margin: auto;`;
const Title = styled.h1`font-size: 1.75rem; font-weight: 700; margin-bottom: 2rem; color: #1e293b;`;
const Form = styled.form`
  display: flex; flex-direction: column; gap: 1rem;
  background-color: #f8fafc; padding: 2rem;
  border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
`;
const Input = styled.input`
  padding: 0.75rem 1rem; border: 1px solid #d1d5db;
  border-radius: 8px; font-size: 1rem;
  &:focus {
    border-color: #2563eb; outline: none;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
  }
`;
const CheckboxLabel = styled.label`
  display: flex; align-items: center;
  gap: 0.5rem; font-weight: 500;
`;
const Button = styled.button`
  background-color: #2563eb; color: white;
  font-weight: 600; padding: 0.75rem 1rem;
  border: none; border-radius: 8px;
  cursor: pointer; width: fit-content;
  transition: background 0.3s;
  &:hover { background-color: #1d4ed8; }
`;

export default function TourForm() {
  const [form, setForm] = useState({
    date: "",
    city: "",
    country: "",
    venue: "",
    soldOut: false,
  });
  const { id } = useParams(); // id d'un concert à modifier (optionnel)
  const navigate = useNavigate();
  const tourRef = collection(db, "tourDates");

  useEffect(() => {
    if (id) {
      const loadData = async () => {
        const docRef = doc(db, "tourDates", id);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
          setForm(snapshot.data());
        }
      };
      loadData();
    }
  }, [id]);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (id) {
      await updateDoc(doc(db, "tourDates", id), form);
    } else {
      await addDoc(tourRef, form);
    }
    navigate("/admin");
  };

  return (
    <Container>
      <Title>{id ? "Modifier la date" : "Ajouter une nouvelle date"}</Title>
      <Form onSubmit={handleSubmit}>
        <Input type="date" name="date" value={form.date} onChange={handleChange} required />
        <Input name="city" placeholder="Ville" value={form.city} onChange={handleChange} required />
        <Input name="country" placeholder="Pays" value={form.country} onChange={handleChange} required />
        <Input name="venue" placeholder="Lieu / Festival" value={form.venue} onChange={handleChange} required />
        <CheckboxLabel>
          <input type="checkbox" name="soldOut" checked={form.soldOut} onChange={handleChange} />
          <span>Sold Out</span>
        </CheckboxLabel>
        <Button type="submit">{id ? "Mettre à jour" : "Ajouter"}</Button>
      </Form>
    </Container>
  );
}
