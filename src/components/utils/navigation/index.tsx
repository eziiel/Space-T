import React from "react"
import { NavLink } from "react-router-dom"
import  * as S  from "./styled"
import data from "../../../data/index.json"
import { Global } from "../../../styled/global"




const NavMain:React.FC = () => {
  const [pathBg, setPathBg] = React.useState(String)

 
  React.useEffect(()=>{
    const path = window.location.pathname
    const final = path.lastIndexOf("/")

    final > 0?setPathBg(path.slice(1,final)):setPathBg(path.slice(1))

  },[window.location.pathname])
  


  return (
    <S.Nav>
      {
        pathBg && <Global img={`/src/images/${pathBg}/background-${pathBg}-desktop.jpg`}/>
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

export default NavMain