import styled from "styled-components";

interface Props {
  img:string;
}

function pixelsToRem(...values:Array<number>) {
  return values.reduce((a, i) => (a += i / 16 + `rem `), "").trim();
}

const Place = styled.main`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  opacity: 0;
  gap: 3rem;
  transform: translateX(-50px);
  animation: .8s ToRight forwards;
  @keyframes ToRight {
    to {
      transform: initial;
      opacity: initial;
    }
  }
`
const ImgPlace = styled.div<Props>`
  background: transparent url(${props => props.img}) left no-repeat;
  width: 100%;
  height: 120%;
`

const InfoGeralPlace = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  `

const NamePlace = styled.span`
  font: var(--font-strong);
  letter-spacing: 2px;
  text-transform: uppercase;
  padding-bottom:1rem;
  `
const InfoPlace = styled.p`
  height: 140px;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--light);
`
const DataPlace = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 4rem;
  margin-top: 1rem;
`
const InfoOthers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const FirstInfoOthers = styled.span`
  font: var(--font-small);
  text-transform: uppercase;
  
`
const SecInfoOthers = styled.span`
  font: var(--font-default);
  color: var(--light2);
  text-transform: uppercase;
  margin-top: .5rem;
  letter-spacing: 1.5px;
  font-weight: bold;
`



export {
  Place,
  ImgPlace,
  InfoGeralPlace,
  NamePlace,
  InfoPlace,
  DataPlace,
  InfoOthers,
  FirstInfoOthers,
  SecInfoOthers
}