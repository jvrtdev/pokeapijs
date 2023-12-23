import React from 'react'

export default function InfoContainer({icon, text, props, classBorder, abilities}) {
    console.log(abilities)
  return (
    <div className={`flex items-center text-xl font-light flex-col p-5 ${classBorder}`}>
        <p className='flex items-center text'>{icon}{props}</p>
        <div className='flex text-sm items-center gap-1 '>
            {abilities?.map(item => (
            <div className='border rounded-xl p-1 shadow-sm capitalize'>
                {item} 
            </div>
        ))}</div>
        <p className='text-sm font-medium'>{text}</p>
    </div>
  )
}
