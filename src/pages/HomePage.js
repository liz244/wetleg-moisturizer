// src/pages/HomePage.js
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

const Container = styled.div`
  padding: 1.5rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  margin-bottom: 1.5rem;
  max-width: 40rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ListItem = styled.li`
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
`;

const SoldOut = styled.span`
  color: red;
  margin-left: 0.5rem;
`;

export default function HomePage() {
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
  return (
    <Container>
      <Title>Wet Leg</Title>
      <Description>
        Wet Leg est un duo indie rock britannique fondé en 2019 par Rhian Teasdale et Hester Chambers.
        Après “Chaise Longue”, leur succès est mondial. Leur second album “Moisturizer” sort en 2025.
      </Description>
      <Subtitle>Tournée 2025</Subtitle>
      <List>
        {tourDates.map((t) => (
          <ListItem key={t.id}>
            <strong>{t.date}</strong> – {t.city}, {t.country} @ {t.venue}
            {t.soldOut && <SoldOut>(Sold Out)</SoldOut>}
           
          </ListItem>
        ))}
      </List>
      
    </Container>
  );
}
