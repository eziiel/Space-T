import styled from "styled-components";

function pixelsToRem(...values:Array<number>) {
  return values.reduce((a, i) => (a += i / 16 + `rem `), "").trim();
}


const MainDest = styled.div`
  width: 1500px;
  display: flex;
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
  
  @media (max-width: 1400px) {
    width: 900px;
  }
  @media (max-width: 900px) {
    width: 800px;
  }
  @media (max-width: 800px) {
    width: 700px;
  }
  @media (max-width: 700px) {
    width: 600px;
  }
  
  @media (max-width: 600px) {
    width: 500px;
  }
  
  @media (max-width: 500px) {
    width: 400px;
  }
  @media (max-width: 400px) {
    width: 300px;
  }
  
`
const Title = styled.h1`
  width: 50%;
  font: var(--font-default);
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--light2);
`


export {
  MainDest,
  Title,
  
}