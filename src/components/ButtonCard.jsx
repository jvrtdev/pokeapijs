import React from 'react'

export default function ButtonCard({children}) {
  return (
    <div className="bg-orange-100 rounded-lg flex p-1 justify-center w-12">
        {children}
    </div>
  )
}
