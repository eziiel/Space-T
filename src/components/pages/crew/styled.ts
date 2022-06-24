import styled from "styled-components";

function pixelsToRem(...values:Array<number>) {
  return values.reduce((a, i) => (a += i / 16 + `rem `), "").trim();
}


const MainCrew = styled.div`
  width: 1000px;
  height: 80%;
  margin: ${pixelsToRem(50)} auto 0 auto;
  display: flex;
  flex: 1;
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
const TitlePage = styled.span`
  font: var(--font-default);
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--light2);
`


export {
  MainCrew,
  TitlePage,
}