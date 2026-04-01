import UserImg from '../../../assets/user.png'
import Package from '../../../assets/package.png';
import Rocket from '../../../assets/rocket.png'
const Steps = () => {
    return (
        <div className='w-[95%] md:max-w-300 mx-auto mb-20'>
            <div className='text-center space-y-3 mb-5'>
                <p className='text-5xl font-bold'>Get Started in 3 Steps</p>
                <p className='text-gray-500'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className='border border-gray-300 rounded-3xl p-5'>
                    <div className='flex justify-end'>
                        <div className='p-2 w-fit rounded-full bg-purple-600 text-white text-sm'>01</div>
                    </div>
                    <div className='grid grid-cols-1 items-center text-center space-y-3 mb-20'> 
                        <div className='p-2 w-fit rounded-full bg-purple-200 text-white text-sm mx-auto'>
                            <img src={UserImg} alt="" />
                        </div>
                        <p className='text-xl font-semibold'>Create Account</p>
                        <p className='text-sm text-gray-500'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>
                <div className='border border-gray-300 rounded-3xl p-5'>
                    <div className='flex justify-end'>
                        <div className='p-2 w-fit rounded-full bg-purple-600 text-white text-sm'>02</div>
                    </div>
                    <div className='grid grid-cols-1 items-center text-center space-y-3 mb-20'> 
                        <div className='p-2 w-fit rounded-full bg-purple-200 text-white text-sm mx-auto'>
                            <img src={Package} alt="" />
                        </div>
                        <p className='text-xl font-semibold'>Choose Products</p>
                        <p className='text-sm text-gray-500'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                </div>
                <div className='border border-gray-300 rounded-3xl p-5'>
                    <div className='flex justify-end'>
                        <div className='p-2 w-fit rounded-full bg-purple-600 text-white text-sm'>01</div>
                    </div>
                    <div className='grid grid-cols-1 items-center text-center space-y-3 mb-20'> 
                        <div className='p-2 w-fit rounded-full bg-purple-200 text-white text-sm mx-auto'>
                            <img src={Rocket} alt="" />
                        </div>
                        <p className='text-xl font-semibold'>Start Creating</p>
                        <p className='text-sm text-gray-500'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;