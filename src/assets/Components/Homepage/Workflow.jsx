import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-center pt-20 pb-20 space-y-5'>
            <p className='text-3xl font-bold'>Ready to Transform Your Workflow?</p>
            <p className='font-extralight text-sm text-gray-50'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
            <div className='flex justify-center gap-2'>
                <div className='mt-auto bg-white w-fit rounded-3xl'>
                    <button className='btn btn-outline btn-primary rounded-3xl'><span className=' bg-clip-text text-transparent font-extralight'></span>Get Started Free</button>
                </div>
                <div>
                    <button className='btn btn-outline border border-white text-white rounded-3xl'>View Pricing</button>
                </div>
            </div>
            <p className='font-extralight text-sm text-gray-50'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default Workflow;