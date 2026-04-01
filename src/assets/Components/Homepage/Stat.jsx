import React from 'react';

const Stat = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex justify-center mb-20'>
            <div className="flex flex-col md:flex-row items-center w-[95%] md:max-w-300 mx-auto shadow">

                <div className="stat place-items-center flex-1">
                    <div className="stat-value text-white">50K+</div>
                    <div className="stat-desc text-white">Active Users</div>
                </div>
              
                <div className="hidden md:block h-10 w-px bg-white/80"></div>

                <div className="stat place-items-center flex-1">
                    <div className="stat-value text-white">200K+</div>
                    <div className="stat-desc text-white">Premium Tools</div>
                </div>

                <div className="hidden md:block h-10 w-px bg-white/80"></div>

                <div className="stat place-items-center flex-1">
                    <div className="stat-value text-white">4.9</div>
                    <div className="stat-desc text-white">Rating</div>
                </div>

            </div>
        </div>
    );
};

export default Stat;