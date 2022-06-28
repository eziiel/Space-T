import styled from "styled-components";


interface Props {
  img?: string
}

const Container = styled.section`
  display: flex;
  flex: 1;
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
    max-width: 90ch;
    letter-spacing: 1px;
    font: var(--font-default2);
  }

`
const ImgTech = styled.div<Props>`
  width: 100%;
  height: 100%;
  background: transparent url(${props => props.img}) right no-repeat;
  background-size: contain;
  text-align: center;
  align-self: center;

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