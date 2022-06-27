 import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Global } from "../../styled/global"
import NavMain from "../utils/navigation"
import Crew from "./crew"
import Destination from "./destination"
import Home from "./home"
import * as S from "./styledMainPage"
import Technology from "./technology"



const MainPage: React.FC = () => {
  
  const {Nav} = NavMain()

  return (
    <S.Container>
      <Global />
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="destination/*" element={<Destination />}/>
          <Route path="crew/*" element={<Crew />} />
          <Route path="technology/*" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </S.Container>
  )
}

export { MainPage }