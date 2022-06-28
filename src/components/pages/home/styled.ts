import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items:start;
  
  @media (max-width: 800px) {
    align-items: center;
  }
  `

const THome = styled.h1`
  display: flex;
  flex-direction: column;
  
  
  `
const SubTitle = styled.span`
  font: var(--font-default3);
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--light);
 
  @media (max-width: 800px) {
    font: var(--font-strong0);
    /* max-width: 20ch; */
  }
  `
const SpaceSpan = styled.span`
  font: var(--font-strong1);
  text-transform: uppercase;
  letter-spacing: 4px;
  
  @media (max-width: 800px) {
    font: var(--font-strong);
    text-align: center;
    font-size: 80px;
  }
`

const P = styled.p`
  font: var(--font-strong2);
  color: var(--light2);
  letter-spacing: .5px;
  max-width: 45ch;

  @media (max-width: 800px) {
    max-width: 50ch;
  }
`




export {
  Section,
  THome,
  SpaceSpan,
  SubTitle,
  P,

}