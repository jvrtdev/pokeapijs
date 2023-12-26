import React from 'react'
import TextPattern from './TextPattern'
import CardText from './CardText'
import {Link} from 'react-router-dom'

export default function FinalSection({text3, text4}) {
  return (
    <div className='text-indigo-950'>
        <img src="/wave.svg" alt="wave"
        className='w-full' />

        <div className='p-5 flex gap-5 flex-col
        md:flex-row items-center md:items-start'>
            <img src="/dummy4.svg" alt="trainador" 
            className='max-w-md w-full mt-[-40px]'
            />
        <div>
            <TextPattern 
            title={text3.title}
            text={text3.text}
            />
            <Link to={'/pokemons'}><button
                className='bg-indigo-950 text-white border p-2 rounded-md
                hover:bg-purple-800 text-center text' 
                >Começar</button></Link>
        </div>
        </div>

            
            
                

    </div>
  )
}
