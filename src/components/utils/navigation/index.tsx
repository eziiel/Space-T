import React from "react"
import { NavLink } from "react-router-dom"
import  * as S  from "./styled"
import data from "../../../data/index.json"




const NavMain:React.FC = () => {
  // const [PathBg, setPathBg] = React.useState(String)

  return (
    <>
    <S.Nav>
      <S.Ul>
        {
          data.nav.map(({path,name}) => (
            <S.Li key={name}>
              <NavLink 
              to={path}
              >{name}</NavLink>
            </S.Li>
          ))
        }
      </S.Ul>
    </S.Nav>
    </>

  )
}

export default NavMain