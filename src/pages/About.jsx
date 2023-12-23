import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SectionPokemon from '../components/AboutUi/SectionPokemon'
import AboutStats from '../components/AboutUi/AboutStats'


export default function About() {
  const { pokeName } = useParams()
  const [ pokemon, setPokemon ] = useState([])
  console.log(pokemon)
  
  
    const getPokemonDetail = async () => {
      try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
      const { stats, 
              abilities,
              id,
              name,
              types,
              height,
              weight 
            } = response.data

      const currentType = types[0].type.name
      setPokemon({
        stats,
        abilities,
        id,
        name,
        types,
        currentType,
        height,
        weight
      })
      
    }
    catch (err) {
      alert('Ocorreu um erro')
      console.error(err)
    }
  }

  useEffect(() => {
  getPokemonDetail()
  },[])
  console.log(pokemon)
  return (
    <div className={`${pokemon.currentType} h-full w-full`}>
      <SectionPokemon
        id={pokemon.id}
        name={pokemon.name}
        currentType={pokemon.currentType}
      />

      <AboutStats 
        stats={pokemon.stats}
        abilities={pokemon.abilities}
        id={pokemon.id}
        name={pokemon.name}
        data={pokemon/* usando essa prop pra pegar o type e o que mais precisar */}
        height={pokemon.height}
        weight={pokemon.weight}
      />
      
    </div>
  )
}
