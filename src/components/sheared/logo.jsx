import React from 'react'
import { Link } from 'react-router-dom'


export default function Logo({size= "sm"}) {
  return (
    <Link to={"/"}>
        <h1 className={`text-2xl font-bold font-Pacifico pb-4 ${size== "lg" && "text-4xl"}`}>
          Job<span className={`text-5xl text-[#f83002] ${size== "lg" && "text-7xl"}`}>4</span>you
        </h1>
      </Link>
  )
}
