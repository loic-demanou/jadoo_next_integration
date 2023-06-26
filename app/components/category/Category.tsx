import React from 'react'
import CategoryItem from './CategoryItem'
import { BsHouse } from 'react-icons/bs'
import Image from 'next/image'

export interface CategoryProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const Category = () => {

    const categories = [
        {
            id: 1,
            icon: (
                <span className='relative'>
                    <span className=''>
                        <svg className='w-52 h-52 absolute -left-14 -top-16' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#FFF1DA" d="M17.2,-13.4C21.4,-8.4,23.5,-1.3,23.5,8.2C23.6,17.7,21.8,29.5,13.8,36.4C5.7,43.3,-8.5,45.2,-15.3,39.1C-22.1,33,-21.6,18.9,-24.2,6C-26.7,-7,-32.5,-18.7,-29,-23.6C-25.5,-28.4,-12.7,-26.4,-3.1,-23.9C6.5,-21.4,13,-18.5,17.2,-13.4Z" transform="translate(100 100)" />
                        </svg>
                    </span>
                    <Image src="/image/satellite.png" height={60} width={60} alt='sat' className='relative z-10' />
                </span>
            ),
            title: "Lorem ipsum dolor",
            description: "Lorem ipsum dolor qshdu qsuhd hqskhd jqhjksd Lorem ipsum dolor qshdu qsuhd hqskhd jqhjksd",
        },
        {
            id: 2,
            icon:  (
                <span className='relative'>
                    <span className=''>
                        <svg className='w-52 h-52 absolute -left-14 -top-16' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#FFF1DA" d="M17.2,-13.4C21.4,-8.4,23.5,-1.3,23.5,8.2C23.6,17.7,21.8,29.5,13.8,36.4C5.7,43.3,-8.5,45.2,-15.3,39.1C-22.1,33,-21.6,18.9,-24.2,6C-26.7,-7,-32.5,-18.7,-29,-23.6C-25.5,-28.4,-12.7,-26.4,-3.1,-23.9C6.5,-21.4,13,-18.5,17.2,-13.4Z" transform="translate(100 100)" />
                        </svg>
                    </span>
                    <Image src="/image/plane.png" height={70} width={70} alt='plane' className='relative z-10' />
                </span>
            ),
            title: "Lorem ipsum dolor",
            description: "Lorem ipsum dolor qshdu qsuhd hqskhd jqhjksd Lorem ipsum dolor qshdu qsuhd hqskhd jqhjksd",
        },
        {
            id: 3,
            icon:  (
                <span className='relative'>
                    <span className=''>
                        <svg className='w-52 h-52 absolute -left-14 -top-16' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#FFF1DA" d="M17.2,-13.4C21.4,-8.4,23.5,-1.3,23.5,8.2C23.6,17.7,21.8,29.5,13.8,36.4C5.7,43.3,-8.5,45.2,-15.3,39.1C-22.1,33,-21.6,18.9,-24.2,6C-26.7,-7,-32.5,-18.7,-29,-23.6C-25.5,-28.4,-12.7,-26.4,-3.1,-23.9C6.5,-21.4,13,-18.5,17.2,-13.4Z" transform="translate(100 100)" />
                        </svg>
                    </span>
                    <Image src="/image/groupMicro.png" height={36} width={36} alt='Microphone' className='relative z-10' />
                </span>
            ),
            title: "Lorem ipsum dolor",
            description: "Lorem ipsum dolor qshdu qsuhd hqskhd jqhjksd Lorem ipsum dolor qshdu qsuhd hqskhd jqhjksd",
        },
        {
            id: 4,
            icon:  (
                <span className='relative'>
                    <span className=''>
                        <svg className='w-52 h-52 absolute -left-14 -top-16' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#FFF1DA" d="M17.2,-13.4C21.4,-8.4,23.5,-1.3,23.5,8.2C23.6,17.7,21.8,29.5,13.8,36.4C5.7,43.3,-8.5,45.2,-15.3,39.1C-22.1,33,-21.6,18.9,-24.2,6C-26.7,-7,-32.5,-18.7,-29,-23.6C-25.5,-28.4,-12.7,-26.4,-3.1,-23.9C6.5,-21.4,13,-18.5,17.2,-13.4Z" transform="translate(100 100)" />
                        </svg>
                    </span>
                    <Image src="/image/setting.png" height={60} width={60} alt='srtting' className='relative z-10' />
                </span>
            ),
            title: "Lorem ipsum dolor",
            description: "Lorem ipsum dolor qshdu qsuhd hqskhd jqhjksd Lorem ipsum dolor qshdu qsuhd hqskhd jqhjksd",
        },
    ]

  return (
    <div>
        <div className='w-[80%] mx-auto text-center flex flex-col gap-8 my-12 md:my-24 lg:my-24 xl:my-28'>
            <p className='uppercase font-semibold text-base md:text-lg mt-7 text-[#5E6282]'>Category</p>
            <p className='capitalize font-bold text-4xl md:text-5xl lg:text-5xl text-[#14183E]' style={{ fontFamily: 'Volkhov' }}>
                We Offer Best Services
            </p>
            <div className='hidden md:inline md:absolute md:right-20'>
                <Image src="/image/group.png" alt="right" height={150} width={150} />
            </div>
        </div>
        <div >
            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-10'>
                {categories.map((category) => (
                    <CategoryItem key={category.id}
                    icon={category.icon} 
                    title={category.title}
                    description={category.description}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Category

