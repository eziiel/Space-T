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
  @media (max-width: 800px) {
    gap: .5rem;
}
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }

`
const ImgPlace = styled.div<Props>`
  width: 100%;
  height: 120%;
  margin: 2rem;
  background: transparent url(${props => props.img}) center no-repeat;
  grid: 1;

  @media (max-width: 1400px) {
    background-size: cover;
    width: 90%;
    height: 98%;
    background-position: right;
}
 
  @media (max-width: 900px) {
    width: 300px;
    height: 300px;
}
  @media (max-width: 800px) {
    margin: 10px auto;
    width: 250px;
    height: 250px;
}
  @media (max-width: 430px) {
    margin: 10px auto;
    width: 150px;
    height: 150px;
}
`

const InfoGeralPlace = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;

  transform: translateX(-70px);
  animation: .8s ToRight forwards;
  @keyframes ToRight {
    to {
      transform: initial;
      opacity: initial;
    }
  }
  @media (max-width: 800px) {
   margin: 1rem;
  }
  @media (max-width: 750px) {
   align-items: center;
}
  `

const NamePlace = styled.span`
  font: var(--font-strong);
  letter-spacing: 2px;
  text-transform: uppercase;
  padding-bottom:1rem;
  
  @media (max-width: 1400px) {
    font-size: ${pixelsToRem(40)};
    padding-bottom:.5rem;
  }
  `
const InfoPlace = styled.p`
  height: ${pixelsToRem(200)};
  border-bottom: 1px solid var(--light);
  max-width: 45ch;
  color: var(--light2);
  line-height: 1.8;
  letter-spacing: 1px;
  padding-bottom: 1rem;
  font: var(--font-default2);
  
  @media (max-width: 1400px) {
    font-size: 1rem;
    height: ${pixelsToRem(150)};
  }
  @media (max-width: 900px) {
    font-size: 1rem;
    height: ${pixelsToRem(200)};
  }
  @media (max-width: 800px) {
    font-size: 1rem;
    height: ${pixelsToRem(220)};
  }
  @media (max-width: 750px) {
    font-size: 1rem;
    height: ${pixelsToRem(150)};
  }
  @media (max-width: 500px) {
    font-size: .785rem;
    height: ${pixelsToRem(125)};
  }
  `
const DataPlace = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 4rem;
  margin-top: 1rem;
  
  @media (max-width: 400px) {
    gap: 2rem;
  }
  `
const InfoOthers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

 
  `
const FirstInfoOthers = styled.span`
  text-transform: uppercase;
  font: var(--font-small2);

  @media (max-width: 1400px) {
    font-size: 1rem;
  }
  @media (max-width: 800px) {
    font-size: .7rem;
  }
  
`
const SecInfoOthers = styled.span`
  font: var(--font-default);
  color: var(--light2);
  text-transform: uppercase;
  margin-top: .5rem;
  letter-spacing: 1.5px;
  font-weight: bold;

  @media (max-width: 1400px) {
    font-size: 1rem;
  }
  @media (max-width: 400px) {
    font-size: .875rem;
  }

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