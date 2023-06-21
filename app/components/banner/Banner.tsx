"use client";

import Image from 'next/image';
import React from 'react'

function Banner() {
    return (
        <div className='w-full max-h-screen'>
            <div className='flex items-center relative gap-24 w-[80%] mx-auto mt-20'>
                <div className="flex-1 flex flex-col gap-11 ">
                    <h4 className=' font-bold text-xl leading-7 text-[#DF6951] uppercase'>Best Destinations around the world</h4>
                    {/* <Image src="/image/bannerUnderline.png" alt="underline banner" width={385} height={12} /> */}
                    {/* position: absolute;
                    width: 385px;
                    height: 12px;
                    left: 393px;
                    top: 340px; */}
                    <h1 className='text-[#181E4B] text-[84px] leading-[89px] font-bold'>Travel, enjoy<Image src="/image/bannerUnderline.png" alt="underline banner" width={385} height={12} /> and live a new and full life</h1>
                    <h6 className=' leading-7 font-medium text-base text-[#5E6282]'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sports
                        men it engrossed listening. Park gate sell they west hard for the.
                    </h6>
                    <div>
                        <button className='text-white bg-yellow-400 rounded-md px-5 py-3' type="button">Find out more</button>
                        <span>
                            <button className='text-white bg-red-500 rounded-full px-5 py-5' type="button">d</button>
                            <span>Play Demo</span>
                        </span>
                    </div>
                </div>
                <div className="flex-1  ">
                    <div className="absolute top-0 ">
                        <Image src="/image/banner.png" width={656} height={872} alt='Banner'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner