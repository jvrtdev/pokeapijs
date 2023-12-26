import React from 'react'
import TextPatternSm from './TextPatternSm'


export default function CardText({props}) {
  return (
    <div className='md:w-1/2'>
        <TextPatternSm
        title={props.title}
        text={props.text}
        />
    </div>
  )
}
