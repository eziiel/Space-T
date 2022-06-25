import styled from "styled-components";

function pixelsToRem(...values:Array<number>) {
  return values.reduce((a, i) => (a += i / 16 + `rem `), "").trim();
}


const MainTech = styled.div`
  width: 1000px;
  margin: ${pixelsToRem(50)} auto 0 auto;
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

`


export {
  MainTech,
  Title,  
  Container,


}