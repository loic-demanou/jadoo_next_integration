import { BsFillArrowDownRightSquareFill } from 'react-icons/bs';
import { IconType } from 'react-icons'


interface CategoryProps {
    icon: IconType;
    title: string;
    description: string;
}

const CategoryItem: React.FC<CategoryProps> = ({icon: Icon, title, description}) => {
    return ( 
        <div className='flex flex-col gap-4 justify-center items-center'>
            <span>
                <Icon size={40} className="text-neutral-600" /> 
            </span>
            <p className=' font-semibold text-[#1E1D4C]'>{title}</p>
            <p className=' text-sm text-[#1E1D4C]'>{description}</p>
        </div>
     );
}
 
export default CategoryItem;