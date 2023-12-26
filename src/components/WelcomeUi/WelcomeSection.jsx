import React from 'react'
import TextPattern from './TextPattern'
import CardText from './CardText'
import FinalSection from './FinalSection'



export default function WelcomeSection({welcome, text1, text2}) {
  return (
    <div className=' bg-gradient-to-b from-purple-600 to-indigo-950 w-full h-full text-white p-5'>
        <div className='flex flex-col md:flex-row items-center justify-center'>
            <TextPattern 
            title={welcome.title}
            text={welcome.text}
            />

            <img src="/dummy3.svg" alt="picachu"
            className='mt-5 max-w-md w-full'
            />
        </div>


        <div className='flex gap-2 mt-32 items-start justify-between
        flex-col md:flex-row '>
            <CardText props={text1} />
            <CardText props={text2} />
        </div>  
    </div>
  )
}
