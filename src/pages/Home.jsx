import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import PokemonCard from '../components/PokemonCard'
import Header from '../components/ui/Header';

export default function Home() {
    const [ pokemons, setPokemons ] = useState([])
    useEffect(() => {
      getAllPokemons()
    }, []);
  
        const getAllPokemons = async () => {
          const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
          const { results } = response.data
  
  
          const payloadPokemons = await Promise.all(
            results.map(async pokemon => {
              const { id, types, sprites } = await getMoreInfo(pokemon.url)
  
              return {
                name: pokemon.name,
                id,
                types,
                sprites
              }
            })
          )
          setPokemons(payloadPokemons)
        }
  
    async function getMoreInfo(url) {
        const response = await axios.get(url)
        const { id, types, sprites } = response.data;
  
        return { id, types, sprites }
    }
    console.log(pokemons)
  
  
    return (
      <div className="flex justify-center items-center bg-green-50 flex-col">
          <Header />
        <div className="flex flex-wrap max-w-screen-lg font-sans justify-center items-center">
          
  
  
  
          {pokemons.map((pokemon, index) => (
              <PokemonCard 
              data={pokemon}
              key={index}
              />
          ))}
        </div>
      </div>
    )
  }
