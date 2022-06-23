import React from "react"
import { NavLink } from "react-router-dom"
import  * as S  from "./styled"
import navItems from "../../../data/tagsNav.json"

const NavMain:React.FC = () => {


  return (
    <>
    <S.Nav>
      <S.Ul>
        {
          navItems.map(({id,path,tag}) => (
            <S.Li key={id}>
              <NavLink to={path}>{tag}</NavLink>
            </S.Li>
          ))
        }
      </S.Ul>
    </S.Nav>
    {/* <Outlet/> */}
    </>

  )
}

export default NavMain