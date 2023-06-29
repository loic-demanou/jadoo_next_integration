import Image from "next/image";
import { BsSendFill } from "react-icons/bs";

interface SellingItemProps {
    title: string;
    description?: string ;
    price: number ;
    frequency: number;
    image: string;
}

const SellingItem:React.FC<SellingItemProps> = ({title, description, price, frequency, image}) => {
    return ( 
        <div className=" h-[400px] w-auto block relative shadow-lg hover:shadow-2xl duration-200 cursor-pointer rounded-3xl">
            <Image src={image} alt="top selling" loading="lazy" fill className="relative rounded-3xl object-cover"/>
            <div className="absolute w-full flex flex-col gap-3 py-8 bg-white bottom-0 rounded-b-3xl">
                <div className="flex flex-row mx-8 justify-between items-center font-semibold">
                    <p>{title}</p>
                    <p>$ {price}k</p>
                </div>
                <div className="flex flex-row items-center mx-8 ">
                    <BsSendFill />
                    <p className="ml-5">{frequency} Days Trips</p>
                </div>
                <p className="mx-8">{description}</p>
            </div>
        </div>
    );
}

export default SellingItem;