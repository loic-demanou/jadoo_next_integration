import { BsFillArrowDownRightSquareFill } from 'react-icons/bs';
import { IconType } from 'react-icons'

interface CategoryProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const CategoryItem: React.FC<CategoryProps> = ({icon: Icon, title, description}) => {
    return ( 
        <div>
            <div className='flex flex-col gap-4 justify-center items-center rounded-2xl border border-1 p-10 hover:shadow-2xl duration-200
            cursor-pointer'>
                <span>
                    {/* <Icon size={40} className="text-neutral-600" />  */}
                    {Icon}
                </span>
                <p className=' font-semibold text-[#1E1D4C]'>{title}</p>
                <p className=' text-sm text-[#1E1D4C] text-justify' >{description}</p>
            </div>
        </div>
     );
}
 
export default CategoryItem;