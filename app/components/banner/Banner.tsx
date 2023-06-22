"use client";

import Image from 'next/image';
import React from 'react'
import { BsPlayFill } from 'react-icons/bs';

function Banner() {
    return (
        <div className='w-full max-h-screen'>
            <div className='flex flex-col lg:flex-row items-center relative gap-6 lg:gap-14 w-[80%] mx-auto mt-10 lg:mt-12 xl:mt-20'>
                <div className="flex-1 flex flex-col gap-6 lg:gap-11 ">
                    <h4 className='banner-text-1 font-bold text-base sm:text-lg lg:text-xl leading-7 text-[#DF6951] uppercase'>Best Destinations around the world</h4>
                    <h1 className='banner-text-2 text-[#181E4B] text-5xl md:text-6xl 
                    lg:leading-[70px] xl:text-[84px] xl:leading-[89px] font-bold relative'>
                        Travel, enjoy<Image src="/image/bannerUnderline.png" alt="underline banner" width={385} height={12} /> and live a new and full life</h1>
                    <h6 className=' leading-7 font-medium text-base text-[#5E6282]'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sports
                        men it engrossed listening. Park gate sell they west hard for the.
                    </h6>
                    <div className='flex flex-row gap-9 items-center'>
                        <button className='text-white bg-yellow-400 rounded-md px-3 py-2 sm:px-5 sm:py-3' type="button">Find out more</button>
                        <span className='flex flex-row sm:gap-5 gap-2 items-center'>
                            <button className='text-white bg-red-500 rounded-full px-3 py-3' type="button">
                                <BsPlayFill />
                            </button>
                            <span className='text-[#5E6282]'>Play Demo</span>
                        </span>
                    </div>
                </div>
                    
                <div className="hidden flex-1 lg:inline ">
                    <div className="absolute -top-3 ">
                        <div className='absolute -left-12'>
                            <Image src="/image/plane.png" alt="plane1" width={138} height={95} />
                        </div>
                        <div className='absolute -right-7 top-7'>
                            <Image src="/image/plane2.png" alt="plane2" width={138} height={95} />
                        </div>
                        <Image src="/image/banner.png" width={656} height={872} alt='Banner' className='relative -top-10 '/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner