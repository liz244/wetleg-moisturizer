import styled from "styled-components";

const TornPaper = styled.img`
  display: block;
  height: auto;
  position: relative;
  z-index: 5;
  width: 100%;
  margin-top: -100px; 
`;

export default function TornPaperSeparator() {
  return (
   <TornPaper src="/assets/images/rippedpaper.png" alt="Bord déchiré" />


  );
}
