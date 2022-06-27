import { NavLink } from "react-router-dom"
import data from "../../../../data/index.json"
import * as S from "./styled"


const NavCrew: React.FC = () => {




  return (


    <S.NavCrew>
      <ul>
        {
          data.crew.map(({ path }) => (
            <li key={path}>
              <NavLink to={path}></NavLink>
            </li>
          ))
        }
      </ul>
    </S.NavCrew>
  )
}

export default NavCrew