import Image from "next/image";

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

            </div>
        </div>
     );
}
 
export default EasyAndFast;