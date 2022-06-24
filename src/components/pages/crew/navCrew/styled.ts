import styled from "styled-components";

const NavCrew = styled.nav`
  width: 100%;
  height: 20px;
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 1rem 0;
  position: absolute;
  bottom: 20%;

  a{
    margin: 5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid var(--light1);
  }
  a.active{
    background: var(--light2);
 }
`

export {
  NavCrew,


}