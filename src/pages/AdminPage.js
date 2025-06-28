import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc
} from "firebase/firestore";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  padding: 2rem;
  max-width: 720px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #1e293b;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #f8fafc;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;

  &:focus {
    border-color: #2563eb;
    outline: none;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
`;

const Button = styled.button`
  background-color: #2563eb;
  color: white;
  font-weight: 600;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: fit-content;
  transition: background 0.3s;

  &:hover {
    background-color: #1d4ed8;
  }
`;

const List = styled.ul`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

const DeleteButton = styled.button`
  color: #dc2626;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const SoldOut = styled.span`
  color: #dc2626;
  font-weight: 600;
  margin-left: 0.5rem;
`;

export default function AdminPage() {
  const [form, setForm] = useState({
    date: "",
    city: "",
    country: "",
    venue: "",
    soldOut: false,
  });
  const [tourDates, setTourDates] = useState([]);
  const tourRef = collection(db, "tourDates");

  useEffect(() => {
    const q = query(tourRef);
    const unsubscribe = onSnapshot(q, snapshot => {
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTourDates(items);
    });
    return () => unsubscribe();
  }, []);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const [editId, setEditId] = useState(null);
  const handleEdit = (tour) => {
      setForm({
        date: tour.date,
        city: tour.city,
        country: tour.country,
        venue: tour.venue,
        soldOut: tour.soldOut || false,
      });
      setEditId(tour.id);
  };
  const handleSubmit = async e => {
    e.preventDefault();
    if (form.date && form.city && form.country && form.venue) {
      if (editId) {
        await updateDoc(doc(db, "tourDates", editId), form);
        setEditId(null);
      } else {
        await addDoc(tourRef, form);
      }
      setForm({ date: "", city: "", country: "", venue: "", soldOut: false });
    }
  };


  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   if (form.date && form.city && form.country && form.venue) {
  //     await addDoc(tourRef, form);
  //     setForm({ date: "", city: "", country: "", venue: "", soldOut: false });
  //   }
  // };

  const handleDelete = async id => {
    await deleteDoc(doc(db, "tourDates", id));
  };

  return (
    <Container>
      <Title>Admin – Gérer la Tournée</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        <Input
          name="city"
          placeholder="Ville"
          value={form.city}
          onChange={handleChange}
          required
        />
        <Input
          name="country"
          placeholder="Pays"
          value={form.country}
          onChange={handleChange}
          required
        />
        <Input
          name="venue"
          placeholder="Lieu / Festival"
          value={form.venue}
          onChange={handleChange}
          required
        />
        <CheckboxLabel>
          <input
            type="checkbox"
            name="soldOut"
            checked={form.soldOut}
            onChange={handleChange}
          />
          <span>Sold Out</span>
        </CheckboxLabel>
        <Button type="submit">{editId ? "Mettre à jour" : "Ajouter"}</Button>

      </Form>

      <List>
        {tourDates.map(t => (
          <ListItem key={t.id}>
            <span>
              {t.date} – {t.city}, {t.country} @ {t.venue}
              {t.soldOut && <SoldOut>(Sold Out)</SoldOut>}
            </span>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <Button onClick={() => handleEdit(t)} style={{ backgroundColor: "#0284c7" }}>
                Modifier
              </Button>
              <DeleteButton onClick={() => handleDelete(t.id)} style={{ backgroundColor: "#0284c7" }}>Supprimer</DeleteButton>
            </div>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
