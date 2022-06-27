import React from "react"
import { Route, Routes, useParams } from "react-router-dom"
import NavDestination from "./navDestination"
import Place from "./placeDestination"
import * as S from "./styled"

interface Data {
  id: number
  dest: string
  info: string
  distance: string
  mounths: string
}

const Destination: React.FC = () => {
  const [id, setId] = React.useState(Number)

  const place = useParams()

  React.useEffect(() => {
    for (var i in place) {
      let a = Number(place[i])
      setId(a)
    }
  }, [useParams()])


  return (
    <S.MainDest>
      <S.Title>
        pick your destination
      </S.Title>
      <NavDestination />
      <Routes>
        <Route path="/" element={<Place id={0} />} />
        <Route path={String(id)} element={<Place id={id} />}></Route>
      </Routes>
    </S.MainDest>
  )

}

export default Destination