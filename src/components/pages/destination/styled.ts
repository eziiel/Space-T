import styled from "styled-components";

function pixelsToRem(...values:Array<number>) {
  return values.reduce((a, i) => (a += i / 16 + `rem `), "").trim();
}


const MainDest = styled.div`
  width: 1500px;
  margin: ${pixelsToRem(50)} auto 0 auto;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transform: translateX(-40px);
  animation: .5s ToRight forwards;

  @keyframes ToRight {
    to {
      transform: initial;
      opacity: initial;
    }
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