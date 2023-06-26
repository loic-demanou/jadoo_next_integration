import React from 'react'
import CategoryItem from './CategoryItem'
import { BsHouse } from 'react-icons/bs'

const Category = () => {

    const categories = [
        {
            id: 1,
            icon: BsHouse,
            title: "Lorem ipsum dolor",
            description: "Lorem ipsum dolor qshdu qsuhd hqskhd jqhjksd Lorem ipsum dolor qshdu qsuhd hqskhd jqhjksd",
        },
        {
            id: 2,
            icon: BsHouse,
            title: "Lorem ipsum dolor",
            description: "Lorem ipsum dolor qshdu qsuhd hqskhd jqhjksd Lorem ipsum dolor qshdu qsuhd hqskhd jqhjksd",
        },
        {
            id: 3,
            icon: BsHouse,
            title: "Lorem ipsum dolor",
            description: "Lorem ipsum dolor qshdu qsuhd hqskhd jqhjksd Lorem ipsum dolor qshdu qsuhd hqskhd jqhjksd",
        },
        {
            id: 4,
            icon: BsHouse,
            title: "Lorem ipsum dolor",
            description: "Lorem ipsum dolor qshdu qsuhd hqskhd jqhjksd Lorem ipsum dolor qshdu qsuhd hqskhd jqhjksd",
        },
    ]

  return (
    <div>
        <div className=' text-center my-36'>
            <p className='uppercase font-semibold text-lg text-[#5E6282]'>Category</p>
            <p className='capitalize font-bold text-5xl text-[#14183E]' style={{ fontFamily: 'Volkhov' }}>
                We Offer Best Services
            </p>
        </div>
        <div >
            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
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

