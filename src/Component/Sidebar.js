import React, { useState } from 'react';
import { IoLogoPlaystation } from 'react-icons/io';
import { AiOutlineBarChart, AiOutlineLineChart, AiOutlineRadarChart, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BiDoughnutChart } from 'react-icons/bi';
import { GiPolarStar } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const [nav, setNav] = useState(true);

    const handleClick = () => {
        setNav(!nav)
    }

    return (
        <div className='w-[20%] overflow-auto h-screen'>
            <Link to='/'><h1 className=' text-center mt-5 font-bold md:text-xl text-sm hidden md:block'>Z&N Statistik</h1></Link>
            <ul className='hidden text-center md:block'>
                <Link to='/bar'><li className='px-4 py-10 cursor-pointer'>Bar Chart <AiOutlineBarChart className=' inline text-2xl text-bold' /></li></Link>
                <Link to='/line'><li className='px-4 py-10 cursor-pointer'>Line Chart <AiOutlineLineChart className=' inline text-2xl text-bold' /></li></Link>
                <Link to='/doughnut'><li className='px-4 py-10 cursor-pointer'>Douhgnut Chart <BiDoughnutChart className=' inline text-2xl text-bold' /></li></Link>
                <Link to='/polar'><li className='px-4 py-10 cursor-pointer'>Polar Chart <GiPolarStar className=' inline text-2xl text-bold' /></li></Link>
                <Link to='/radar'><li className='px-4 py-10 cursor-pointer'>Radar Chart <AiOutlineRadarChart className=' inline text-2xl text-bold' /></li></Link>
            </ul>
            <div className='block md:hidden cursor-pointer w-[10%]' onClick={handleClick}>
                {
                    nav ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25}/>
                }
            </div>
            <ul className={nav ? 'fixed right-[-100%]' : 'fixed right-0 w-[50%] h-full border-l border-r-gray-500 bg-white ease-in-out duration-500 text-black p-6 z-10'}>
            <Link to='/'><li className='text-center text-xl font-bold mt-0'><h1>Z&N Statistik</h1></li></Link>
            <Link to='/bar'><li className=' py-10 cursor-pointer text-sm'>Bar Chart <AiOutlineBarChart className=' inline md:text-2xl text-sm text-bold' /></li></Link>
            <Link to='/line'><li className=' py-10 cursor-pointer text-sm'>Line Chart <AiOutlineLineChart className=' inline md:text-2xl text-sm text-bold' /></li></Link>
            <Link to='/doughnut'><li className=' py-10 cursor-pointer text-sm'>Douhgnut Chart <BiDoughnutChart className=' inline md:text-2xl text-sm text-bold' /></li></Link>
            <Link to='/polar'><li className=' py-10 cursor-pointer text-sm'>Polar Chart <GiPolarStar className=' inline md:text-2xl text-bold text-sm' /></li></Link>
            <Link to='/radar'><li className=' py-10 cursor-pointer text-sm'>Radar Chart <AiOutlineRadarChart className=' inline md:text-2xl text-bold text-sm' /></li></Link>
            </ul>
        </div>
    )
}

export default Sidebar