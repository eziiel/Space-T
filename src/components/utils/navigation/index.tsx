import React from "react"
import { NavLink } from "react-router-dom"
import  * as S  from "./styled"
import data from "../../../data/index.json"
import { Global } from "../../../styled/global"




const NavMain= () => {
  const [pathBg, setPathBg] = React.useState(String)

 
  React.useEffect(()=>{
    const path = window.location.pathname
    const final = path.lastIndexOf("/")

    final > 0?setPathBg(path.slice(1,final)):setPathBg(path.slice(1))

  },[window.location.pathname])
  
  const Nav=() => {
    return (
    <S.Nav>
      {
        pathBg && <Global img={`src/images/${pathBg}/background-${pathBg}-desktop.jpg`}/>
        // pathBg && <Global img={`dist/assets/background-${pathBg}-desktop.jpg`}/>
      }
      <S.Ul>
        {
          data.nav.map(({path,name}) => (
            <S.Li key={name}>
              <NavLink 
              onClick={() =>setPathBg(name)}
              to={path}
              >{name}</NavLink>
            </S.Li>
          ))
        }
      </S.Ul>
    </S.Nav>

    )

  }

  return {
    Nav,
    pathBg,
  }
}

export default NavMain