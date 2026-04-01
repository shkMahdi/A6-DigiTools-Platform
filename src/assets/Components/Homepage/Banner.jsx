import React from 'react';
import ImageBanner from '../../../assets/banner.png'
import BadgeBlinker from '../../../assets/badgeBlinker.png'
import { IoPlayOutline } from "react-icons/io5";

const Banner = () => {
    return (
        <div className="w-[95%] md:max-w-300 mx-auto mb-20">
            <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-15 text-center md:text-left'>
                <div className='space-y-4 order-2 md:order-1'>
                    <div className='flex gap-2 items-center bg-[#E1E7FF] px-4 py-2 rounded-4xl w-fit mx-auto md:ml-0'>
                        <img src={BadgeBlinker} alt="" />
                        <p className='font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</p>
                    </div>
                    <p className='text-xl md:text-7xl font-extrabold'>Supercharge YourDigital Workflow</p>
                    <p className='text-gray-600 text-xl'>Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                    </p>
                    <div className='flex gap-2 justify-center md:justify-start'>
                        <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white btn-sm md:btn-md rounded-3xl">
                            Explore Products
                        </button>
                        <button className="btn btn-outline btn-primary btn-sm md:btn-md rounded-3xl">
                            <IoPlayOutline />
                            <span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>  Watch Demo</span>
                        </button>
                    </div>
                </div>
                <div className='flex justify-center md:justify-end order-1 md:order-2'>
                    <img src={ImageBanner} alt="banner imgae" />
                </div>
            </div>
        </div>
    );
};

export default Banner;