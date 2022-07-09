import React from 'react';
import {IoLogoPlaystation} from 'react-icons/io';
import {AiOutlineBarChart, AiOutlineLineChart, AiOutlineRadarChart} from 'react-icons/ai';
import {BiDoughnutChart} from 'react-icons/bi';
import {GiPolarStar} from 'react-icons/gi';
import { Link } from 'react-router-dom'; 

const Sidebar = () => {
  return (
    <div className=' md:w-[20%] w-[25%] overflow-auto h-screen'>
        <Link to='/'><h1 className=' font-bold md:text-xl text-center mt-5 text-sm'><IoLogoPlaystation className=' inline text-3xl'/>Z&N Statics</h1></Link>

        <div className=' flex justify-center md:py-5 cursor-pointer md:mt-10 py-5 text-sm'>
            <Link to='/bar'><AiOutlineBarChart className=' text-xl font-bold inline'/> <span className=' font-bold'>Bar</span></Link>
        </div>

        <div className=' flex justify-center md:py-5 cursor-pointer md:mt-10 py-5 text-sm'>
            <Link to='/line'><AiOutlineLineChart className=' text-xl font-bold inline'/> <span className=' font-bold'>Line</span></Link>
        </div>

        <div className=' flex justify-center md:py-5 cursor-pointer md:mt-10 py-5 text-sm'>
            <Link to='/doughnut'><BiDoughnutChart className=' text-xl font-bold inline'/> <span className=' font-bold'>Doughnut</span></Link>
        </div>

        <div className=' flex justify-center md:py-5 cursor-pointer md:mt-10 py-5 text-sm'>
            <Link to='/polar'><GiPolarStar className=' text-xl font-bold inline'/> <span className=' font-bold'>Polar</span></Link>
        </div>

        <div className=' flex justify-center md:py-5 cursor-pointer md:mt-10 py-5 text-sm<'>
            <Link to='/radar'><AiOutlineRadarChart className=' text-xl font-bold inline'/> <span className=' font-bold'>Radar</span></Link>
        </div>
    </div>
  )
}

export default Sidebar