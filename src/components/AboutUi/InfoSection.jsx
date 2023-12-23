import React from 'react'
import { CiRuler } from "react-icons/ci";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GiGavel } from "react-icons/gi";
import InfoContainer from './InfoContainer';

export default function InfoSection({height, weight, abilities}) {

  return (
    <div className=''>
        <div className='flex items-center justify-center mt-10 gap-2'>
            <InfoContainer 
            icon={<CiRuler/>}
            text={'height'}
            props={height}
            />

            <InfoContainer
            icon={<GiWeightLiftingUp/>}
            text={'weight'}
            props={weight}
            classBorder={"border-x border-slate-300 "}
            />

            <InfoContainer 
            text={'abilities'}
            abilities={abilities.abilities?.map((abilityItem) => ([abilityItem.ability.name]))}
            />
        </div>


    </div>
  )
}
