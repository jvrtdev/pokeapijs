import React from 'react'

export default function ButtonCard({children, type}) {
  return (
    <div className={`bg-slate-100 rounded-lg shadow-md p-1 px-3  ${type} capitalize hover:bg-slate-200`}>
        {children}
    </div>
  )
}
