import styled from "styled-components";

function pixelsToRem(...values:Array<number>) {
  return values.reduce((a, i) => (a += i / 16 + `rem `), "").trim();
}


const MainCrew = styled.div`
  width: 1500px;
  height: 80%;
  display: flex;
  flex: 1;
  flex-direction: column;
  opacity: 0;
  transform: translateX(-40px);
  animation: .5s ToRight forwards;
  padding: 1rem;
  
  @keyframes ToRight {
    to {
      transform: initial;
      opacity: initial;
    }
  }
  @media (max-width: 1540px) {
    margin-top: 3rem;
    width: 1000px;
  }
 
  @media (max-width: 1030px) {
    width: 800px;
  }
 
  @media (max-width: 900px) {
    width: 700px;
  }
  @media (max-width: 720px) {
    height: 90%;
    width: 600px;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
    justify-content: start;
    align-items: start;
    flex: 0;
  }
  @media (max-width: 600px) {
    width: 500px;
  }
  @media (max-width: 500px) {
    width: 350px;
  }
`
const TitlePage = styled.span`
  font: var(--font-default);
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--light2);
  @media (max-width: 500px) {
    max-height: 25px;
  }
`


export {
  MainCrew,
  TitlePage,
}