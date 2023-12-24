import React from 'react'
import ButtonCard from '../ButtonCard'
import InfoSection from './InfoSection'
import PokemonStats from './PokemonStats'


export default function AboutStats({name, data, height, weight, stats}) {


  return (
    <div className='rounded-t-[30px] shadow-inner pt-10 p-5 bg-slate-50 h-screen w-full'>
        <p className='capitalize text-center text-6xl font-bold z-20'>{name}</p>
        
        <div className='flex justify-center gap-2 mt-4'>
            {data.types?.map((pokemontype) => (
                <ButtonCard type={[pokemontype.type.name]}>
                    {pokemontype.type.name}
                </ButtonCard> ))}
        </div>
            
            <InfoSection 
            height={height}
            weight={weight}
            abilities={data}
            />

            <PokemonStats 
              stats={stats}
              type={data}
             />
    </div>
  )
}
