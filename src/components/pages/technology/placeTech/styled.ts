import styled from "styled-components";


interface Props {
  img?: string
}

function pixelsToRem(...values:Array<number>) {
  return values.reduce((a, i) => (a += i / 16 + `rem `), "").trim();
}

const Container = styled.section`
  display: flex;
  flex: 1;
  margin-left: 15%;
  gap: 4rem;

  @media (max-width: 950px) {
    gap: 1rem;
    margin: auto;
    flex-direction: column;
  }
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

    @media (max-width: 1250px) {
      font-size: ${pixelsToRem(36)};
    }
  }
  p{
    max-width: 90ch;
    letter-spacing: 1px;
    font: var(--font-default2);
    
    @media (max-width: 1250px) {
      font: var(--font-small1);
    };
   
    @media (max-width: 950px) {
      max-width: 80ch;
    };

  }

`
const ImgTech = styled.div<Props>`
  width: 100%;
  height: 100%;
  background: transparent url(${props => props.img}) right no-repeat;
  background-size: contain;
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

  @media (max-width: 950px) {
      width: 310px;
      height: 310px;
      background-position: center;
  }
`


export {
  Container,
  InfoTech,
  ImgTech,
}