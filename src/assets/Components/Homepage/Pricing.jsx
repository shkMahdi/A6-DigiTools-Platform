import React from 'react';
import { FcCheckmark } from "react-icons/fc";
import { FaCheck } from "react-icons/fa6";

const Pricing = () => {
    return (
        <div className='w-[95%] md:max-w-300 mx-auto mb-20'>
            <div className='text-center space-y-3 mb-5'>
                <p className='text-5xl font-bold'>Simple, Transparent Pricing</p>
                <p className='text-gray-500 text-sm'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='border border-gray-300 rounded-3xl p-5 flex flex-col h-full'>
                    <p className='text-xl font-bold'>Starter</p>
                    <p className='text-sm text-gray-500'>Perfect for getting started</p>
                    <p className='text-3xl font-bold mt-2 mb-2'>$0<span className='text-sm text-gray-500 font-normal'>/Mo</span> </p>
                    <ul className='mt-2 mb-2 text-sm text-gray-500'>
                        <li className='flex items-center gap-2'><FcCheckmark /> Access to 10 free tools</li>
                        <li className='flex items-center gap-2'><FcCheckmark /> Basic templates</li>
                        <li className='flex items-center gap-2'><FcCheckmark /> Community support</li>
                        <li className='flex items-center gap-2'><FcCheckmark /> 1 project per month</li>
                    </ul>
                    <div className='mt-auto'>
                        <button className='btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl'>Get Started Free</button>
                    </div>
                </div>
                <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white  rounded-3xl p-5 flex flex-col h-full'>
                    <div className="badge badge-warning flex mx-auto rounded-3xl -mt-8">Most Popular</div>
                    <p className='text-xl font-bold'>Starter</p>
                    <p className='text-sm text-white'>Perfect for getting started</p>
                    <p className='text-3xl font-bold mt-2 mb-2'>$0<span className='text-sm text-white font-normal'>/Mo</span> </p>
                    <ul className='mt-2 mb-2 text-sm text-white'>
                        <li className='flex items-center gap-2'><FaCheck /> Access to all premium tools</li>
                        <li className='flex items-center gap-2'><FaCheck /> Unlimited templates</li>
                        <li className='flex items-center gap-2'><FaCheck /> Priority support</li>
                        <li className='flex items-center gap-2'><FaCheck /> Unlimited projects</li>
                        <li className='flex items-center gap-2'><FaCheck /> Cloud sync</li>
                        <li className='flex items-center gap-2'><FaCheck /> Advanced analytics</li>
                    </ul>
                    <div className='mt-auto bg-white w-full rounded-3xl'>
                        <button className='btn btn-outline btn-primary w-full  rounded-3xl'><span className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'></span>Get Started Free</button>
                    </div>
                </div>
                <div className='border border-gray-300 rounded-3xl p-5 flex flex-col h-full'>
                    <p className='text-xl font-bold'>Enterprise</p>
                    <p className='text-sm text-gray-500'>For teams and businesses</p>
                    <p className='text-3xl font-bold mt-2 mb-2'>$99<span className='text-sm text-gray-500 font-light'>/Month</span> </p>
                    <ul className='mt-2 mb-2 text-sm text-gray-500'>
                        <li className='flex items-center gap-2'><FcCheckmark /> Everything in Pro</li>
                        <li className='flex items-center gap-2'><FcCheckmark /> Team collaboration</li>
                        <li className='flex items-center gap-2'><FcCheckmark /> Custom integrations</li>
                        <li className='flex items-center gap-2'><FcCheckmark /> Dedicated support</li>
                        <li className='flex items-center gap-2'><FcCheckmark /> SLA guarantee</li>
                        <li className='flex items-center gap-2'><FcCheckmark /> Custom branding</li>
                    </ul>
                    <div className='mt-auto'>
                        <button className='btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-3xl'>Get Started Free</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;