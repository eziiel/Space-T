import React from "react"
import { BrowserRouter, Link, NavLink, Outlet, Route, Routes, useParams } from "react-router-dom"
import NavDestination from "./navDestination"
import Place from "./place"
import * as S from "./styled"

interface Data {
  id:number
  dest:string
  info:string
  distance:string
  mounths:string
}

const Destination:React.FC =() => {
  const [id, setId] = React.useState(Number)

  const place = useParams()

  React.useEffect(()=>{
    for (var i in place) {
      let a = Number(place[i]) 
     setId(a)
    }
  },[useParams()])

  return(
    <S.MainDest>
          <NavDestination/>
        <Routes>  
          <Route path="/" element={<Place id={0}/>}/>
          <Route path={String(id)} element={<Place id={id}/>}></Route>
        </Routes>
    </S.MainDest>
  )

}

export default Destination