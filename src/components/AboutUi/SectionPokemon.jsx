import React from 'react'

export default function SectionPokemon({ id, name, currentType}) {


    
    const pokemonSprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

    return (
    <div className={`${currentType} w-full flex justify-center `}>
        <div className='text-[200px] z-0 font-semibold absolute right-[25%] top-0'>#{id}</div>
        <img src={pokemonSprite} alt={name}
            className=' z-10 w-1/4'
        />
    </div>
  )
}
