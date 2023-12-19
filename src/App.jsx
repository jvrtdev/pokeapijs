import axios from "axios";
import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";



function App() {
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
    <div className="font-sans">
      <div className="flex flex-wrap">
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

export default App
