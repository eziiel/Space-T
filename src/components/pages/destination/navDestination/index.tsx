import React from "react";
import { NavLink } from "react-router-dom";
import * as S from "./styled"
import navItems from "../destinationJson/destination.json"
const NavDestination:React.FC = () => {


  return (
      <S.NavDestination>
        <S.Title>
          pick your destination
        </S.Title>
        <S.Ul>
          {
            navItems.map((item) => (
              <S.Li key={item.id}>
                  <NavLink to={String(item.id)}>{item.dest}</NavLink>
              </S.Li>
            ))
          }
        </S.Ul>
      </S.NavDestination>
  )
}


export default NavDestination