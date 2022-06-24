import React from "react";
import data from "../../../../data/index.json"
import * as S from "./styled"

interface ID {
  id:number
}

const Place:React.FC<ID> = ({id}) => {
  
  interface Images {
    png:string
    webp:string
  }

  interface Data 
  {
    id:number
    name:string
    images:Images
    description:string
    distance:string
    travel:string
  }

  const destination:Data[] = data.destinations.filter(item => item.id == id)

  return (
    <S.Place>
      <S.ImgPlace img={String(destination[0].images?.png)}></S.ImgPlace>
      <S.InfoGeralPlace>
          <S.NamePlace>{destination[0].name}</S.NamePlace>
          <S.InfoPlace>{destination[0].description}</S.InfoPlace>
          <S.DataPlace>
            <S.InfoOthers>
              <S.FirstInfoOthers>AVG. Distance</S.FirstInfoOthers>
              <S.SecInfoOthers>{destination[0].distance}</S.SecInfoOthers>  
            </S.InfoOthers>
            <S.InfoOthers>
              <S.FirstInfoOthers>Est. Travel Time</S.FirstInfoOthers>
              <S.SecInfoOthers>{destination[0].travel}</S.SecInfoOthers> 
            </S.InfoOthers>
          </S.DataPlace>
      </S.InfoGeralPlace>
    </S.Place>
  )
}


export default Place