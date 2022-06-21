import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Global } from "../../styled/global"
import NavMain from "../utils/navigation"
import Crow from "./crow"
import Destination from "./destination"
import Home from "./home"
import * as S from "./styledMainPage"
import Techlology from "./technology"


const MainPage: React.FC = () => {



  return (
    <S.Container>
      <Global />
      <BrowserRouter>
        <NavMain />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crow" element={<Crow />} />
          <Route path="technology" element={<Techlology />} />
        </Routes>
      </BrowserRouter>
    </S.Container>
  )
}

export { MainPage }