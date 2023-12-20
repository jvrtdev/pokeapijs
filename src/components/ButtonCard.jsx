import React from 'react'

export default function ButtonCard({children, type}) {
  return (
    <div className={`rounded-lg shadow-md p-1 px-2  ${type} bg-slate-100 capitalize hover:bg-slate-200`}>
        {children}
    </div>
  )
}
