import React from "react"
import { Main } from "../../../styled/geral"
import Btn from "../../utils/btn"
import * as S from "./styled"

const Destination:React.FC =() => {

  return(
    <Main>
      <S.InfoDest>
        <h1>Destination</h1>

        <S.ImgPlanet/>

      </S.InfoDest>
    
    </Main>
  )

}

export default Destination