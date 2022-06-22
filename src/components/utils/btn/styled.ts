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
`

export {
  ExploreBtn,

}