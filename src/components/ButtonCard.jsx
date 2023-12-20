import React from 'react'

export default function ButtonCard({children, type}) {
  return (
    <div className={`rounded-lg shadow-xl  p-1 px-2 ${type} capitalize bg-slate-100 hover:bg-slate-200 `}>
        {children}
    </div>
  )
}
