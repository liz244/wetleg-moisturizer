import styled from "styled-components";

const Section = styled.section`
  background-color: #5c6b3a; /* vert foncé */
  color: #6f3984; /* violet */
  padding: 3rem 2rem;
  text-align: center;
  font-family: 'Helvetica', sans-serif;
  margin-top: -60px; /* ajuste aussi cette valeur */
  position: relative;
`;


const Title = styled.h2`
  font-weight: 900;
  font-size: 2.5rem;
  letter-spacing: 2px;
  margin-bottom: 0.3rem;
`;

const Subtitle = styled.p`
  font-family: 'Dancing Script', cursive;
  font-size: 1.2rem;
  font-style: italic;
  margin-bottom: 2rem;
  color: #1a0f22;
`;



const Text = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  max-width: 600px;
  margin: auto;
  color: #1a0f22;
`;

const Button = styled.a`
  margin-top: 2rem;
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

export default function BlogSection() {
  return (
    <Section>
      <Title>BLOG</Title>
      <Subtitle>wetleg - moisturizer</Subtitle>
      <Text>
        CrLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
      <Button href="#">DÉCOUVRIR</Button>
    </Section>
  );
}
