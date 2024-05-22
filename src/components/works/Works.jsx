import React from 'react'
import { WorkCard } from './WorkCard'
import copycode from '../../assets/copycode.jpg'
import rps from '../../assets/rps.jpg'
import volt from '../../assets/Volt.svg'

export const Works = () => {
  return (
    <div id='works'className='flex flex-col flex-1 justify-evenly gap-5 items-center mt-6 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4 my-5'>
            <h1 className='text-[30px] text-text1 font-bold font-font2'>Creative Projects</h1>

    <div className='flex flex-1 sm:flex-row flex-col justify-around items-center mx-[50px] mt-7 rounded-xl sm:gap-3 gap-5'>
      <WorkCard logo={rps} title="Rock-Paper-Scissors" desc="It is a Fun game made With HTML , CSS and JAVASCRIPT"/>
      <WorkCard logo={copycode} title="Copy-Code" desc="It is a Code Sharing app to any device with just one User name and No login required."/>
      <WorkCard logo={volt} title="Volt Music" desc="It is a web music player  created using React , Tailwind Css and SHAZAM Api ."/>
    </div>
    </div>
  )
}
