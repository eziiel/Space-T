import React from "react"
import { NavLink } from "react-router-dom"
import  * as S  from "./styled"
import data from "../../../data/index.json"
import { Global } from "../../../styled/global"




const NavMain:React.FC = () => {
  const [pathBg, setPathBg] = React.useState(String)
  const [dropMenu, setDropMenu] = React.useState<boolean>(false)

 
  React.useEffect(()=>{
    const path = window.location.pathname
    const final = path.lastIndexOf("/")

    final > 0?setPathBg(path.slice(1,final)):setPathBg(path.slice(1))

  },[window.location.pathname])
  

  const handleDropMenu =():void => {
    setDropMenu(!dropMenu)
  }

  return (
    <S.Nav>
      {
        pathBg && <Global img={`/${pathBg}/background-${pathBg}-desktop.jpg`}/>
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
      <S.MenuDrop
        drop={dropMenu}
        onClick={handleDropMenu}>
        <span 
        ></span>
        <div >
          <S.DropUl>
          {
          data.nav.map(({path,name}) => (
            <li key={name}>
              <NavLink 
              onClick={() =>setPathBg(name)}
              to={path}
              >{name}</NavLink>
            </li>
          ))
        }
          </S.DropUl>
        </div>
      </S.MenuDrop>
    </S.Nav>
  )
}

export default NavMain