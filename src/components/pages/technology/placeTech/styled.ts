import styled from "styled-components";


interface Props {
  img?: string
}

const Container = styled.section`
  display: flex;
  margin-left: 15%;
  gap: 4rem;

`

const InfoTech = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  opacity: 0;
  transform: translateX(-40px);
  animation: .5s ToRight forwards;

  @keyframes ToRight {
    to {
      transform: initial;
      opacity: initial;
    }
  }

  span{
    font:var(--font-small1);
  }
  h1{
      font:var(--font-default4);
      letter-spacing: 2px;
      line-height: 1;
      margin-bottom: 2rem;
  }
  p{
    max-width: 50ch;
    height: 170px;
    color: var(--light2);
    line-height: 1.8;
    letter-spacing: 1px;
    padding-bottom: 1rem;
  }

`
const ImgTech = styled.div<Props>`
  width: 100%;
  height: 100%;
  background: transparent url(${props => props.img}) right no-repeat;
  background-size: contain;
  position: absolute;
  right: -26.8%;
  top: 10%;

  opacity: 0;
  transform: translateX(-100px);
  animation: .9s ToRight forwards;

  @keyframes ToRight {
    to {
      transform: initial;
      opacity: initial;
    }
  }
`


export {
  Container,
  InfoTech,
  ImgTech,
}