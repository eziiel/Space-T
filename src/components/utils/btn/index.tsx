import React from "react"
import { ExploreBtn } from "./styled"

interface Props {
  size: string;
  children: string ;
}


const Btn:React.FC<Props> = ({size,children}) => {

  console.log( size,children)

  return (
    <ExploreBtn size={size}
    >
      {children}
    </ExploreBtn>
  )
}

export default Btn