import React from 'react'

export default function TextPattern({title, text}) {
  return (
    <div className='mb-10'>
        <h1 className='text-2xl font-bold mb-5'>{title}</h1>
        <p className='text-lg '>{text}</p>
    </div>
  )
}
