import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import download from '../assets/download.svg';
import logo from '../assets/2.jpg'
import 'animate.css';

export const Home = () => {
    return (
        <div
            id="home"
            className="w-screen h-screen reveal pt-3 flex flex-col md:flex-row justify-center gap-20 items-center  rounded-xl 5"

        >
            <div className=' flex  justify-center  items-center m-5 animate__animated animate__headShake'>
                <img className='md:w-[300px] w-[200px] rounded-[75px] md:rounded-[100px] border-[4px] border-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]' src={logo} />
            </div>
            <div className=' flex  justify-center  items-center m-5'>
                <div className="flex flex-1 font-font1  flex-grow gap-[10px]  h-full justify-center items-center md:items-start flex-col animate__animated animate__headShake w-[400px]   ">
                    <span className="font-bold font-font2 text-[20px] text-text1 sm:text-[20px]">
                        Hello, it's me
                    </span>
                    <span className="text-[50px] text-text1 font-customPD sm:text-[70px]">
                        Rajesh<span>.</span>
                    </span>

                    <span className="text-white font-customPD lowercase text-[40px]">
                        <Typewriter
                            words={['Full Stack Dev', 'MERN Stack Dev', 'Front End Dev']}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>

                    <a href="https://drive.google.com/file/d/1VZFtGlvd4NY7u-11CZPDZYaE-ih7Up5v/view?usp=drive_link">
                        <button className="px-4 py-3  gap-2 rounded-md my-10 border flex justify-around items-center border-black bg-white text-black text-lg transition-transform transform hover:scale-105">                            
                        <span className="font-bold font-font2">My Resume</span>
                            <img className="w-[18px]" src={download} alt="" />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};
