import React from "react";
import data from "../destinationJson/destination.json"

interface ID {
  id:number
}

const Moon:React.FC<ID> = ({id}) => {

  interface Data 
  {
    id?:number
    dest?:string
    info?:string
    distance?:string
    mounths?:string
  }
  const destination:Data = data[id]


  return (
    <div>
      <p>{destination.info}</p>
      <p>{destination.distance}</p>
    </div>
  )
}


export default Moon