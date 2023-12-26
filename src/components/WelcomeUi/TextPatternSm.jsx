import React from 'react'

export default function TextPatternSm({title, text}) {
  return (
    <div className='mb-10'>
        <h1 className='text-xl font-bold mb-5'>{title}</h1>
        <p className='text-md '>{text}</p>
    </div>
  )
}
