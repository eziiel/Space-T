import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import NavCrew from "./navCrew";
import PlaceCrew from "./placeCrew";
import * as S from "./styled"

const Crew:React.FC =() => {
  const [id, setId] = React.useState(Number)

  const place = useParams()

  React.useEffect(()=>{
    for (var i in place) {
      let a = Number(place[i]) 
     setId(a)
    }
  },[useParams()])

  return (
    <S.MainCrew>
      <S.TitlePage>
        Meet your crew
      </S.TitlePage>

      <Routes>
        <Route path="/" element={<PlaceCrew id={0}/>}/>
        <Route path={String(id)} element={<PlaceCrew id={id}/>}/>
      </Routes>

     <NavCrew></NavCrew>

    </S.MainCrew>
  )
}

export default Crew