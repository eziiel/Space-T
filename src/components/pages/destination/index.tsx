import React from "react"
import { BrowserRouter, Link, NavLink, Outlet, Route, Routes, useParams } from "react-router-dom"
import { Main } from "../../../styled/geral"
import Europa from "./europa"
import Mars from "./mars"
import Moon from "./moon"
import NavDestination from "./navDestination"
import data from "./destinationJson/destination.json"
import Titan from "./titan"
import Place from "./place"
// import * as S from "./styled"



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

  // id && console.log(id)


  return(
    <Main>
          <NavDestination/>
          <Outlet/>
        <Routes>
          <Route path="/" element={<Place id={0}/>}/>
          <Route path={String(id)} element={<Place id={id}/>}></Route>
          {/* <Route path="/" element={<Europa/>}></Route>
          <Route path="0" element={<Europa/>}></Route>
          <Route path="1" element={<Mars/>}></Route>
          <Route path="2" element={<Moon id={id}/>}></Route>
          <Route path="3" element={<Titan/>}></Route> */}
        </Routes>
    </Main>
  )

}

export default Destination