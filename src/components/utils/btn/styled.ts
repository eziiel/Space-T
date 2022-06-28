import styled from "styled-components";

interface Props {
  size: string;
  children: string;
}

const ExploreBtn = styled.button<Props>`
  width: ${props => props.size};
  height: ${props => props.size};
  justify-self: end;
  border-radius: 50%;
  border: none;
  box-shadow: 0 0 20px 5px rgba(0,0,0,.5);
  font: var(--font-default4);
  letter-spacing: 2px;
  cursor: pointer;

  @media (max-width: 1060px) {
    width: 250px;
    height: 250px;
  }
  @media (max-width: 800px) {
    justify-self: center;
    font-size: 2rem;
  }
  @media (max-width: 500px) {
    width: 150px;
    height: 150px;
    font-size: 2rem;
  }


`

export {
  ExploreBtn,

}