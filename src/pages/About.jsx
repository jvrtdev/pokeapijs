import React from 'react'
import { useParams } from 'react-router-dom'



export default function About() {
  const { pokeName } = useParams()
  const currentPokemon = pokemons.filter(pokemon => pokemon.id === pokeName)

  return (
    <div className=''>
      {pokeName}
      {currentPokemon.name}
      
    </div>
  )
}
