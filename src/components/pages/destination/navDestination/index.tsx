import React from "react";
import { NavLink } from "react-router-dom";
import * as S from "./styled"
import data from "../../../../data/index.json"



const NavDestination: React.FC = () => {

  return (
    <S.NavDestination>
      <S.Title>
        pick your destination
      </S.Title>

      <S.Ul>
        {
          data.destinations.map(({ id, name }) => (
            <S.Li key={id}>
              <NavLink to={String(id)}>{name}</NavLink>
            </S.Li>
          ))
        }
      </S.Ul>
    </S.NavDestination>
  )
}


export default NavDestination