// src/pages/AdminPage.js
import React, { useState,useEffect } from "react";
import { db } from "../config/firebase";
import { getDocs, addDoc,collection } from "firebase/firestore";

import styled from "styled-components";

const Container = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 30rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Button = styled.button`
  background-color: #2563eb;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #1d4ed8;
  }
`;

const List = styled.ul`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  padding: 0.75rem;
  border-radius: 0.375rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

const SoldOut = styled.span`
  color: red;
  margin-left: 0.5rem;
`;

const DeleteButton = styled.button`
  color: red;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default function AdminPage() {
  const [form, setForm] = useState({
    date: "",
    city: "",
    country: "",
    venue: "",
    soldOut: false,
  });
  const [tourDates,setTourDates] = useState([])
  const tourDateRef= collection(db,'tourDates')

  useEffect(()=>{
    const getTourDates = async() =>{
      try {
        const data = await getDocs(tourDateRef);
        const tourDates_ = data.docs.map(doc =>({
          ...doc.data(),
          id: doc.id
        }));
        setTourDates(tourDates_)
      } catch (error) {
        console.error(error);
      }
    }
    getTourDates()
  },[tourDateRef])
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.date && form.city && form.country && form.venue) {

       const data = { ...form, createdAt: Date.now() };
       try {
        await addDoc( tourDateRef,data)
       } catch (error) {
        console.error(error)
       }
       

      setForm({ date: "", city: "", country: "", venue: "", soldOut: false });
    }
  };

  const handleDelete = (id) => {
    
  };

  return (
    <Container>
      <Title>Admin - Gérer la Tournée</Title>
      <Form onSubmit={handleSubmit}>
        <Input name="date" type="date" value={form.date} onChange={handleChange} required />
        <Input name="city" placeholder="Ville" value={form.city} onChange={handleChange} required />
        <Input name="country" placeholder="Pays" value={form.country} onChange={handleChange} required />
        <Input name="venue" placeholder="Lieu / Festival" value={form.venue} onChange={handleChange} required />
        <CheckboxLabel>
          <input type="checkbox" name="soldOut" checked={form.soldOut} onChange={handleChange} />
          <span>Sold Out</span>
        </CheckboxLabel>
        <Button type="submit">Ajouter</Button>
      </Form>

      <List>
        {tourDates.map((t) => (
          <ListItem key={t.id}>
            <span>
              {t.date} – {t.city}, {t.country} @ {t.venue}
              {t.soldOut && <SoldOut>(Sold Out)</SoldOut>}
            </span>
            <DeleteButton onClick={() => handleDelete(t.id)}>Supprimer</DeleteButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
