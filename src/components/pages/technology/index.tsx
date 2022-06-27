import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import NavTech from "./navTech";
import PlaceTech from "./placeTech";
import data from "../../../data/index.json"
import * as S from "./styled"


const Technology: React.FC = () => {
  const [id, setId] = React.useState(Number)

  const place = useParams()

  React.useEffect(() => {
    for (var i in place) {
      let a = Number(place[i])
      setId(a)
    }
  }, [useParams()])


  return (
    <S.MainTech>
      <S.Title>
        space launch 101
      </S.Title>

      <S.Container>

        <NavTech />

        <Routes>
          <Route path="/" element={<PlaceTech id={0} />} />
          <Route path={String(id)} element={<PlaceTech id={id} />} />
        </Routes>

      </S.Container>

    </S.MainTech>
  )
}


export default Technology