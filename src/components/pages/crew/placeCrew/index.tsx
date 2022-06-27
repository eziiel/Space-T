import * as S from "./styled"
import dataCrew from "../../../../data/index.json"

interface ID {
  id: number
}

const PlaceCrew: React.FC<ID> = ({ id }) => {


  return (
    <S.Container>

      <S.InfoPerson>
        <S.Title>
          <S.Role>{dataCrew.crew[id].role}</S.Role>
          <S.Name>{dataCrew.crew[id].name}</S.Name>
        </S.Title>
        <S.Bio>{dataCrew.crew[id].bio}</S.Bio>
      </S.InfoPerson>

      <S.ImgCrew img={dataCrew.crew[id].images.png} />


    </S.Container>
  )
}

export default PlaceCrew