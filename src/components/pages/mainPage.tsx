import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Global } from "../../styled/global"
import NavMain from "../utils/navigation"
import Crew from "./crew"
import Destination from "./destination"
import Europa from "./destination/europa"
import Mars from "./destination/mars"
import Moon from "./destination/moon"
import NavDestination from "./destination/navDestination"
import Titan from "./destination/titan"
import Home from "./home"
import * as S from "./styledMainPage"
import Technology from "./technology"


const MainPage: React.FC = () => {



  return (
    <S.Container>
      <Global />
      <BrowserRouter>
        <NavMain />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="destination/*" element={<Destination />}>
            {/* <Route path="destination/:id" element={<Destination />}/> */}
          </Route> 
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </S.Container>
  )
}

export { MainPage }