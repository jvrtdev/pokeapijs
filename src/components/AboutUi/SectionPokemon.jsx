import React from 'react'
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';


export default function SectionPokemon({ id, name, currentType}) {

    const navigate = useNavigate()
    
    
    const pokemonSprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    return (
    <div className={`w-full`}>
            <div className='text-4xl fixed z-20 top-2 left-2 cursor-pointer'
            onClick={() => navigate("/pokemons")}
            >
                <BsArrowLeft  />
            </div>

        <div className='text-[200px] z-0 font-semibold text-right opacity-70'>#{id}</div>
        <div className='flex justify-center'>
            <img src={pokemonSprite} alt={name}
            className='z-10 w-60 absolute top-32'
            />
        </div>
    </div>
  )
}
