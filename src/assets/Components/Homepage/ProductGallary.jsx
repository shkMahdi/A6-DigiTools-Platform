import React, { useState } from 'react';

const ProductGallary = () => {
    const [tab, setTab] = useState("product");

    return (
        <div className='w-[95%] md:max-w-300 mx-auto mb-20'>
            <div className='grid grid-cols-1 gap-3 justify-center items-center text-center'>
                <p className='text-xl md:text-5xl font-bold'>Premium Digital Tools</p>
                <p className='text-gray-500'>
                    Choose from our curated collection of premium digital products designedto boost your productivity and creativity.
                </p>
                {/* buttons */}
                <div className='p-0.5 border-2 border-gray-300 rounded-3xl w-fit mx-auto'>
                    <button onClick={() => setTab("product")} 
                        className={`btn ${tab === 'product' ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "rounded-r-none border-none"} btn-sm md:btn-md rounded-3xl hover:bg-transparent`}>
                        Product
                    </button>
                    <button onClick={() => setTab("cart")}
                        className={`btn ${tab === 'cart' ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : "rounded-l-none border-none"} btn-sm md:btn-md rounded-3xl hover:bg-transparent`}>
                        Cart ()
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductGallary;