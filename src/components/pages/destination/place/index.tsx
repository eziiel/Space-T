import React from "react";
import data from "../destinationJson/destination.json"
import * as S from "./styled"

interface ID {
  id:number
}

const Place:React.FC<ID> = ({id}) => {

  interface Data 
  {
    id?:number
    dest?:string
    info?:string
    distance?:string
    mounths?:string
    src?:string
  }
  const destination:Data = data[id]

  return (
    <S.Place>
      <S.ImgPlace img={String(destination.src)}></S.ImgPlace>
      <S.InfoGeralPlace>
          <S.NamePlace>{destination.dest}</S.NamePlace>
          <S.InfoPlace>{destination.info}</S.InfoPlace>
          <S.DataPlace>
            <S.InfoOthers>
              <S.FirstInfoOthers>AVG. Distance</S.FirstInfoOthers>
              <S.SecInfoOthers>{destination.distance}</S.SecInfoOthers>  
            </S.InfoOthers>
            <S.InfoOthers>
              <S.FirstInfoOthers>Est. Travel Time</S.FirstInfoOthers>
              <S.SecInfoOthers>{destination.mounths}</S.SecInfoOthers> 
            </S.InfoOthers>
          </S.DataPlace>
      </S.InfoGeralPlace>
    </S.Place>
  )
}


export default Place