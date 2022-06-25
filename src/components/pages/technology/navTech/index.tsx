import * as S from "./styled"
import data from "../../../../data/index.json"
import { NavLink } from "react-router-dom"

const NavTech:React.FC =() => {

  return (
    <S.Nav>

      <ul>

        {data.technology.map((item,ind)=>(
          <li key={ind}>
            <NavLink to={String(ind)}>{ind+1}</NavLink>
          </li>
        ))}
      </ul>

    </S.Nav>
  )
}

export default NavTech