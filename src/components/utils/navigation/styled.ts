import styled from "styled-components";


const Nav = styled.nav`
  display: flex;
  justify-content: end;
  margin: 2rem 0;
  backdrop-filter: blur(100px);
  position: relative;
  
  :before {
    position: absolute;
    content: "";
    height: 2px;
    width: 40%;
    background: #6d6d6d7f;
    top: 50%;
    left: 10%;
  }
  `
  const Ul = styled.ul`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  height: 100%;
  width: 50%;
  `

const Li = styled.li`
  height: 100%;
  
  a{
    color: var(--light2);
    padding: 1.8rem 1rem;
    border-bottom: 2px solid transparent;
    font: var(--font-default2);
    
    
    :after,:focus,:active,:enabled {
      border-bottom: 3px solid #e2e2e2;
    }
  }
`

export {
  Nav,
  Ul,
  Li,

}