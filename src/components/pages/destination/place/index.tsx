import React from "react";
import data from "../destinationJson/destination.json"

interface ID {
  id:number
}

const Place:React.FC<ID> = ({id}) => {

  console.log(id)
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
      <h1>{destination.distance}</h1>
      <p>{destination.dest}</p>
    </div>
  )
}


export default Place