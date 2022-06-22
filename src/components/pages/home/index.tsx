import React from "react";
import { Main } from "../../../styled/geral";
import Btn from "../../utils/btn";

import * as S from "./styled"


const Home:React.FC = () => {

  return (
    <Main>
      
      <S.Section>
          <S.THome>
            <S.SubTitle>So, you want to travel to</S.SubTitle>
            <S.SpaceSpan>Space </S.SpaceSpan>
          </S.THome>

          <S.P>
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </S.P>
      </S.Section>

      <Btn size="300px" children="Explore"/>

    </Main>

  )

}

export default Home