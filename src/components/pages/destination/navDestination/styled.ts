import styled from "styled-components";

const NavDestination = styled.nav`
  display: flex;
  justify-content: end;
  height: 8rem;
`


const Ul = styled.ul`
  width: 66%;
  display: flex;
  justify-content: center;
  align-items: end;
  /* margin: 0 3rem; */

`
const Li = styled.li`
  padding: 1rem;

  a{
    font: var(--font-default1);
    color: var(--light3);
    padding: 1rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    border-bottom:2px solid transparent ;
  
    :after,:focus,:active,:enabled {
      border-bottom: 3px solid #e2e2e2;
    }
  }
  a.active{
    border-bottom: 3px solid #e2e2e2;
  }

`




export {
  NavDestination,
  Ul,
  Li,
}