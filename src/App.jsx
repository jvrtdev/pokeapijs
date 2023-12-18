import axios from "axios";
import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";



function App() {
  const [ pokemons, setPokemons ] = useState([])


  useEffect(() => {
    getPokemons()
  }, []);

  const getPokemons = () => {
    var endpoints = []
      for (let i = 1; i <= 50; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
      }
      let response = axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res.data)).catch((err) => console.error("deu ruim", err))
  }
  console.log(pokemons)


  return (
    <div className="font-sans">
      <div className="flex flex-wrap">
        {pokemons.map((pokemon, index) => (
            <PokemonCard 
            name={pokemon.name}
            img={pokemon.sprites.front_defaulta}
            type={pokemon.types.type.name}
            key={index}
            />
        ))}
      </div>
    </div>
  )
}

export default App
