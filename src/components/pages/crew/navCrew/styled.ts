import styled from "styled-components";

const NavCrew = styled.nav`
  width: 100%;
  height: 8%;
  position: absolute;
  bottom: 20%;
  
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    gap: 1rem;
    align-items: center;

    li{
      width: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      
      a{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: transparent;
        border: 2px solid var(--light1);     
      }
    a.active{
      background: var(--light2);
    }
  }
 }
`

export {
  NavCrew,


}