import React from "react"
import { Link } from "react-router-dom"
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
              <Link to={path}>{tag}</Link>
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