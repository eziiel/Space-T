import styled from "styled-components"


interface Props {
  img:string
}

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  width: 100%;
  height: 70%;
  opacity: 0;
  transform: translateX(-40px);
  animation: .5s ToRight forwards;
  
  @keyframes ToRight {
    to {
      transform: initial;
      opacity: initial;
    }
  }
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    height: 100%;
  }

`
const InfoPerson = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem 0;

  @media (max-width: 720px) {
   margin: 1rem 0 ;
  }
`
const Title = styled.div`
  display: flex;
  flex-direction: column;
  
`
const Role = styled.span`
  font : var(--font-default2);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: bold;
  color: var(--light);

  @media (max-width: 720px) {
    font: var(--font-small1);
  }
  `
const Name = styled.span`
  font : var(--font-default0);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 2rem;
  
  @media (max-width: 720px) {
    font: var(--font-default2);
    margin-bottom: 1rem;
  }
`

const Bio = styled.p`
  color: var(--light2);
  line-height: 1.8;
  letter-spacing: 1px;
  padding-bottom: 1rem;
  font: var(--font-default2);

  @media (max-width: 1540px) {
    font: var(--font-small2);
  }
  @media (max-width: 1030px) {
    font: var(--font-small1);
  }
`

const ImgCrew = styled.div<Props>`
  height: 141.3%;
  width: 100%;
  background: transparent url(${props => props.img}) bottom no-repeat;
  background-size: contain;
  opacity: 0;
  transform: translateX(-50px);
  animation: .8s ToRight forwards;

  @keyframes ToRight {
    to {
      transform: initial;
      opacity: initial;
    }
  }
  @media (max-width: 720px) {
    grid-row: 1;
    width: 300px;
    height: 233px;
    justify-self: center;
    border-bottom: 1px solid #e2e2e2;

  }
`
export {
  Container,
  InfoPerson,
  Title,
  Role,
  Name,
  Bio,
  ImgCrew,


}