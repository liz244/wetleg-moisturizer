import React from "react";
import styled from "styled-components";

const Section = styled.section`
  
  padding: 5rem 0;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 17rem; /* aligne avec la nav */
  gap: 4rem;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding-inline: 2rem;
    text-align: center;
  }
`;

const Text = styled.div`
  max-width: 450px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  font-family: "Anton", sans-serif;
`;

const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 2rem;
`;

const Button = styled.a`
  display: inline-block;
  background-color: #7e9d38;
  color: white;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  font-weight: bold;
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 1px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #6a852e;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 350px;
  height: auto;

  @media (max-width: 768px) {
    margin: auto;
  }
`;

const AlbumImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 6px;
  
`;

const Tape = styled.img`
  position: absolute;
  width: 120px;
`;

const TapeLeft = styled(Tape)`
  top: -150px;
  left: -150px;
  transform: rotate(-5deg);
  width: 350px;
`;

const TapeRight = styled(Tape)`
  bottom: -200px;
  right: -180px;
  transform: rotate(5deg);
   width: 450px;
`;

export default function NewAlbumSection() {
  return (
    <Section>
      <Container>
        <Text>
          <Title>NEW ALBUM</Title>
          <Description>
            CrLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Description>
          <Button href="#">DÉCOUVRIR</Button>
        </Text>
        <ImageContainer>
          <AlbumImage src="assets/images/album-cover.png" alt="Album Moisturizer" />
          <TapeLeft src="assets/images/tape-left.png" alt="Tape Left" />
          <TapeRight src="assets/images/tape-right.png" alt="Tape Right" />
        </ImageContainer>
      </Container>
    </Section>
  );
}
