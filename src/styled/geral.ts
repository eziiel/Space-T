import styled from "styled-components";

function pixelsToRem(...values:Array<number>) {
  return values.reduce((a, i) => (a += i / 16 + `rem `), "").trim();
}

const Main = styled.main`
  height: 100%;
  gap: 3rem;
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  align-items: center;
  justify-content: space-between;
  opacity: 0;
  transform: translateX(-40px);
  animation: .5s ToRight forwards;
  justify-content: end;
  padding: 2rem;


  @keyframes ToRight {
    to {
      transform: initial;
      opacity: initial;
    }
  }


  @media (max-width: 1060px) {
    width: 800px;
  }

  @media (max-width: 800px) {
    width: 500px;
    grid-template-columns: 1fr;
    justify-content: start  ;
    gap: 1rem;
  }

  @media (max-width: 500px) {
    width: 300px;
  }
`

export {
  Main,
}