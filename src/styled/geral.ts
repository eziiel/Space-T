import styled from "styled-components";

function pixelsToRem(...values:Array<number>) {
  return values.reduce((a, i) => (a += i / 16 + `rem `), "").trim();
}

const Main = styled.main`
  position: relative; 
  height: 100%;
  gap: 3rem;
  margin: ${pixelsToRem(250)} auto 0 auto;
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  align-items: center;
  justify-content: space-between;
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

export {
  Main,
}