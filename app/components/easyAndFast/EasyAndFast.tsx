import Image from "next/image";
import { BsHouse, BsHouseAddFill } from "react-icons/bs";

const EasyAndFast = () => {
    return ( 
        <div className="w-[90%] md:w-[80%] mx-auto flex flex-col lg:flex-row gap-8 my-12 md:my-24 lg:my-24 xl:my-28">
            <div className="flex-1 flex flex-col gap-3 lg:gap-5">
                <p className='uppercase font-semibold text-base md:text-lg mt-7 text-[#5E6282]'>Easy and fast</p>
                <p className='capitalize font-bold text-4xl md:text-5xl lg:text-5xl text-[#14183E] mb-3 lg:mb-5' 
                    style={{ fontFamily: 'Volkhov' }}>
                    Book your next trip in 3 easy steps
                </p>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-1 flex-row gap-4 ">
                        <Image src='/image/easy1.png' alt="easy" height={50} width={50} className="absolute" />
                        <div className="relative left-16">
                            <p className="font-bold text-gray-600">Choose destination</p>
                            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, rem!</p>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-row gap-4 ">
                        <Image src='/image/easy2.png' alt="easy" height={50} width={50} className="absolute" />
                        <div className="relative left-16">
                            <p className="font-bold text-gray-600">Make payment</p>
                            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, rem!</p>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-row gap-4 ">
                        <Image src='/image/easy3.png' alt="easy" height={50} width={50} className="absolute" />
                        <div className="relative left-16">
                            <p className="font-bold text-gray-600">Reach Airport on Selected Date</p>
                            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, rem!</p>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-6 lg:gap-11">
                <p className='uppercase font-semibold text-base md:text-lg mt-7 text-[#5E6282]'>Easy and fast</p>
                <div className=" flex flex-row justify-center items-center">
                    <div className="bg-neutral-100 p-7 rounded-3xl shadow-2xl">
                        <Image src="/image/house1.jpg" alt="right img" height={330} width={300} className=" rounded-3xl" />
                        <div className="flex flex-col gap-3 mt-3">
                            <p className="font-bold text-base">Trip to Greece</p>
                            <p className="text-gray-500">14-29 June| by Robbin j</p>
                            <div className="text-gray-100 flex flex-row gap-3">
                                <div className=" bg-gray-400 rounded-full h-7 w-7 p-2 flex justify-center items-center">
                                    <BsHouseAddFill />
                                </div>
                                <div className=" bg-gray-400 rounded-full h-7 w-7 p-2 flex justify-center items-center">
                                    <BsHouseAddFill />
                                </div>
                                <div className=" bg-gray-400 rounded-full h-7 w-7 p-2 flex justify-center items-center">
                                    <BsHouseAddFill />
                                </div>
                            </div>
                        </div>
                    </div>
                            <div className="relative">
                                <div className="flex flex-row gap-3 bg-neutral-100 rounded-3xl py-5 px-10 shadow-2xl absolute -left-32 top-14">
                                    <div className=" h-12 w-12 relative">
                                        <Image src="/image/house1.jpg" alt="right img" fill className=" rounded-full" />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-sm">OnGoing</p>
                                        <p className="font-bold">Trip to Rome</p>
                                        <p className="font-bold text-sm mt-3">
                                            <span className=" text-violet-500">40%</span>
                                            <span className="font-semibold">completed</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
        </div>
     );
}
 
export default EasyAndFast;