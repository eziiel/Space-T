
import data from "../../../../data/index.json"
import * as S from "./styled"


interface Props {
  id : number
}

const PlaceTech:React.FC<Props> = ({id}) => {

  return (
    <S.Container>

      <S.InfoTech>
          <span>The Terminology...</span>
          <h1>{data.technology[id].name}</h1>
          <p>{data.technology[id].description}</p>
      </S.InfoTech>

      <S.ImgTech img={data.technology[id].images.portrait}/>


    </S.Container>
  )
}

export default PlaceTech