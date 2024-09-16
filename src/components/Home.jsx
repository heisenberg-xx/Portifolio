import React from 'react';
import profile from '../assets/profile.png';
import download from '../assets/download.svg';
import resume from '../assets/resume.pdf';
import 'animate.css'


export const Home = () => {
    return (
        <div id="home" className='reveal  flex flex-col sm:flex-row m-0 gap-6 justify-around sm:justify-center items-center flex-1 z-0 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] '>
            
            <div className='flex flex-1 font-font1 mt-[50px] flex-grow flex-col animate__animated animate__headShake gap-[10px] sm:h-[50vh] sm:justify-start justify-center sm:items-start items-start max-w-[70%] sm:max-w-[30%]'>

                <span className='font-bold text-[20px] text-text1 sm:text-[20px]'>Hello, its me</span>
                <span className='font-bold  text-[30px] text-text1 sm:text-[60px]'>Rajesh <span className=' *:'>.</span></span>
                <span><p className='text-gray-600'>An enthusiastic web developer currently shapin the future of webdevelopment by designing the smooth user-interfaces that promote user-interaction with information and data </p></span>
                < a href="https://drive.google.com/file/d/1Ix1o4pYYlnmCps2dz_cQdP5rbp1O53Z0/view?usp=drivesdk">
                    <button className="px-4 py-3 hover:bg-white/70 transition-all duration-150 gap-2 rounded-md my-10 border flex justify-around items-center  border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] ">
                        <span className='font-bold font-font2'>My Resume</span><img className='w-[18px]' src={download} alt="" />
                    </button>
                </a>
            </div>
        </div>

    );
};
