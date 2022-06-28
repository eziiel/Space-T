import styled, { css } from "styled-components";

interface Props {
  drop :boolean
}

const Nav = styled.nav`
  display: flex;
  justify-content: end;
  margin: 2rem 0;
  position: relative;
  align-items: center;
  width: 100%;

  :before {
    position: absolute;
    content: "";
    height: 2px;
    width: 40%;
    background: #6d6d6d7f;
    top: 50%;
    left: 15%;
    z-index: 1;

    @media (max-width: 1060px) {
      width: 30%;
    }
    @media (max-width: 800px) {
      width: 60%;
    }
  }
  `
  const Ul = styled.ul`
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  height: 100%;
  width: 50%;
  
  
  @media (max-width: 800px) {
    display: none;
  }
  `


const Li = styled.li`
  height: 100%;
  
  a{
    color: var(--light2);
    padding: 1.8rem 1rem;
    border-bottom: 2px solid transparent;
    text-transform: uppercase;
    font: var(--font-default);
    
    
    :after,:focus,:active,:enabled {
      border-bottom: 3px solid #e2e2e2;
    }
  }
  a.active{
    border-bottom: 3px solid #e2e2e2;
 }
`

const MenuDrop = styled.nav<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  position: relative;
  display: none;
  margin-right: 10%;
  cursor: pointer;

  @media (max-width: 800px) {
    display: block;
  }

  span{
    content: "";
    position: absolute;
    left: 10px;
    top: 20px;
    width: 40px;
    height: 3px;
    background-color: var(--light2);
    border-radius: 10px;


    :before{
      position: absolute;
      content: "";
      top: 10px;
      width: 30px;
      height: 3px;
      background-color: var(--light2);  
      border-radius: 10px;

    }
    :after{
      position: absolute;
      content: "";
      bottom: 10px;
      width: 20px;
      height: 3px;
      background-color: var(--light2); 
      border-radius: 10px;
    }
  }

  div{
    top:90%;
    right: -20%;
    width: 320px;
    height: 80px;
    position: absolute;
    z-index: 1;
    opacity: 0;
    border-bottom: 2px solid #6d6d6d7f;
    transform: translateX(-40px);

    ${props => props.drop==true && css`
      display: block;
      animation: .5s toRight forwards;
    `}
    
    @keyframes toRight {
      to {
        opacity: initial;
        transform:initial;
      }
    }
  }

  `
const DropUl = styled.ul`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    li{
      padding: .5rem;
      a{
        font: var(--font-default);
        color: var(--light2);
        text-transform: uppercase;
      }
    }
`

export {
  Nav,
  Ul,
  Li,
  MenuDrop,
  DropUl,

}