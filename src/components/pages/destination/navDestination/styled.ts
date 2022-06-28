import styled from "styled-components";

const NavDestination = styled.nav`
  display: flex;
  justify-content: end;
  height: 8rem;
  width: 100%;

  @media (max-width: 900px) {
    justify-content: center;
  }
  `


const Ul = styled.ul`
  width: 46%;
  display: flex;
  align-items: end;
  padding: 2rem;
 
  @media (max-width: 900px) {
    justify-content: center;
  }
 
`
const Li = styled.li`
  padding: 1rem;
  
  @media (max-width: 1400px) {
      padding: .5rem 1rem;
  }
  @media (max-width: 500px) {
      padding: .5rem ;
  }
  a{
    font: var(--font-small2);
    color: var(--light3);
    padding: 1rem ;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    border-bottom:2px solid transparent ;
    
    @media (max-width: 1400px) {
      font: var(--font-small1);
      padding: 0.5rem;
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