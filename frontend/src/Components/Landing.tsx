import { useState } from "react"
import { Link } from "react-router-dom"

export const Landing =() =>{
    const [name,setName] =useState("")

    return (
        <div className="flex justify-center mt-20">
    <input type="text" onChange={(e)=> (
        setName(e.target.value)
    )} style={{border:"1px solid black"}}/>          
  
<Link to={`/room/?name=${name}`} className="text-red-600">Join</Link>
        </div>
    )
}