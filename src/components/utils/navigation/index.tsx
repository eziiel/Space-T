import React from "react"
import { Link, Outlet } from "react-router-dom"
import  * as S  from "./styled"

const NavMain:React.FC = () => {


  return (
    <>
    <S.Nav>
        <Link to="/">Home</Link>
        <Link to="destination">Destination</Link>
        <Link to="crow">Crow</Link>
        <Link to="technology">Technology</Link>
    </S.Nav>
    {/* <Outlet/> */}
    </>

  )
}

export default NavMain