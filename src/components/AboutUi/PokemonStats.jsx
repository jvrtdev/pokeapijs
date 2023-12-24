import React from 'react'
import * as C from "./Stats/Styles"


export default function PokemonStats({stats, type}) {
  console.log(stats)


  return (
    <div className=''>
        {stats?.map((stat) => (
          <div className='flex flex-col'>
            <div className='text-start'>{stat.stat.name}</div>
            <C.ProgressBar>
              <C.ProgressBarFill 
              base_stat={stat.base_stat}
              >

              </C.ProgressBarFill>

            </C.ProgressBar>
              {/* <div className={`w-full h-3 ${type.types[0].type.name} border border-slate-400 rounded-xl`}></div> */}


          </div>
        ))}

    </div>
  )
}
