'use client';

import Image from "next/image";
import SellingItem from "./SellingItem";

const sellings = [
    {
        id: 1,
        image: "/image/house1.jpg",
        price: 5.4,
        frequency: 10,
        title: "Rome, Italy",
        description: "",
    },
    {
        id: 1,
        image: "/image/house2.jpg",
        price: 4.2,
        frequency: 12,
        title: "London, UK",
        description: "",
    },
    {
        id: 1,
        image: "/image/house3.jpg",
        price: 15,
        frequency: 28,
        title: "Full Europe",
        description: "",
    },
]

const TopSelling = () => {
    return ( 
        <div>
            <div className='w-[90%] md:w-[80%] mx-auto text-center flex flex-col gap-8 my-12 md:my-24 lg:my-24 xl:my-28'>
                <p className='uppercase font-semibold text-base md:text-lg mt-7 text-[#5E6282]'>Top Selling</p>
                <p className='capitalize font-bold text-4xl md:text-5xl lg:text-5xl text-[#14183E]' style={{ fontFamily: 'Volkhov' }}>
                    Top Destinations
                </p>
            </div>
            <div>
                <div className='w-[90%] md:w-[80%] mx-auto mb-10'>
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        { sellings.map((selling, idx) => (
                            <SellingItem key={idx} title={selling.title} price={selling.price}
                            frequency={selling.frequency} image={selling.image} description={selling.description} />
                        )) }
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default TopSelling;