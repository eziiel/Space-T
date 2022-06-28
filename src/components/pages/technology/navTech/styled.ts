import styled from "styled-components";

function pixelsToRem(...values:Array<number>) {
  return values.reduce((a, i) => (a += i / 16 + `rem `), "").trim();
}

const Nav = styled.nav`
  width: 10%;
  height: 70%;
  position: absolute;
  left: 0;

  @media (max-width: 950px) {
    position: initial;  
    width: 100%;
  }

  ul{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    @media (max-width: 950px) {
      flex-direction: row;
    }
    li{
      width: 80px;
      height: 80px;
      
      @media (max-width: 1035px) {
        width: 50px;
        height: 50px;
      }
      a{
        border-radius: 50%;
        height: 100%;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid var(--light2);
        background: transparent;
        font: var(--font-strong0);
        color: var(--light2);
        
        @media (max-width: 1035px) {
          font-size: ${pixelsToRem(20)};
        }
      }
      a.active{
        color: var(--dark);
        background:var(--light2);
      }
    }
  }

`


export {
  Nav
}