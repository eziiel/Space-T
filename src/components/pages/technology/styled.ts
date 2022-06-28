import styled from "styled-components";

function pixelsToRem(...values:Array<number>) {
  return values.reduce((a, i) => (a += i / 16 + `rem `), "").trim();
}


const MainTech = styled.div`
  width: 1500px;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transform: translateX(-40px);
  animation: .5s ToRight forwards;
  height: 60%;
  position: relative;

  @keyframes ToRight {
    to {
      transform: initial;
      opacity: initial;
    }
  }
  @media (max-width: 1540px) {
      margin-top: 4rem;
      width: 1200px;
  }
  @media (max-width: 1250px) {
      width: 1000px;
  }
  @media (max-width: 1035px) {
      width: 900px;
  }
  @media (max-width: 950px) {
      width: 800px;
  }
  @media (max-width: 850px) {
      width: 700px;
  }
  @media (max-width: 750px) {
      width: 600px;
  }
  @media (max-width: 650px) {
      width: 500px;
  }
  @media (max-width: 550px) {
      width: 400px;
  }
  @media (max-width: 450px) {
      width: 300px;
  }
`
const Title = styled.h1`
  font: var(--font-default);
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--light2);
`
const Container = styled.main`
  display: flex;
  margin: 5rem 0;
  gap: 2rem;
  height: 100%;

  @media (max-width: 950px) {
    display: grid;
    grid-template-columns: 1fr  ;
  }
`


export {
  MainTech,
  Title,  
  Container,


}