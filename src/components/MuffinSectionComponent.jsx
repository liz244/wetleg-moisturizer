import styled from "styled-components";

const MuffinSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* important pour un placement libre en vertical */
  padding: 6rem 8rem;
  
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 60%; /* ou ce que tu veux */
`;

const Title = styled.h2`

 
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
  font-weight: bold;
  font-family: "Anton", sans-serif;
  margin-bottom: 2rem;
  position: relative;
  top: ${props => props.top || "0"};
  left: ${props => props.left || "0"};
`;

const VideoWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  position: relative;
  top: ${props => props.top || "0"};
  left: ${props => props.left || "0"};
`;

const RightContent = styled.div`
  width: 40%;
  position: relative;
  top: ${props => props.top || "0"};
  left: ${props => props.left || "0"};
`;

const VinylImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export default function MuffinSectionComponent() {
  return (
    <MuffinSection>
      <LeftContent>
        <Title top="0rem" left="8rem">
          Would you like us to assign someone to butter your muffin?
        </Title>

        <VideoWrapper top="1rem" left="8rem">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/HmAsUQEFYGI"
            title="CPR - Wet Leg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoWrapper>
      </LeftContent>

      <RightContent top="10rem" left="15rem">
        <VinylImage src="/assets/images/vinyl.png" alt="Vinyle" />
      </RightContent>
    </MuffinSection>
  );
}
