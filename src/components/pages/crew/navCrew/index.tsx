import { NavLink } from "react-router-dom"
import * as S from "./styled"
const NavCrew:React.FC =() => {


  return (
    <S.NavCrew>
      <NavLink to="0"><span/></NavLink>
      <NavLink to="1"><span/></NavLink>
      <NavLink to="2"><span/></NavLink>
      <NavLink to="3"><span/></NavLink>

    </S.NavCrew>
  )
}

export default NavCrew