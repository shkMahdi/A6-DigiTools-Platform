import React from 'react';
import { FcCheckmark } from "react-icons/fc";
import { FaCheck } from "react-icons/fa";

const ProductCard = ({ product, selected, setSelected }) => {
    // console.log(product.name)
    const isSelected = selected.some(p => p.name === product.name);
    const handleSelection = () => {
        alert("Product selected");
        setSelected([...selected, product]);
    }
    return (
        <div className='border-2 border-gray-300 rounded-2xl p-2 space-y-2'>
            <div className='flex justify-end'>
                <p className='bg-amber-400 px-2 py-1 rounded-3xl w-fit'>
                    best seller
                </p>
            </div>
            <div className='flex justify-start p-1 border border-gray-300 rounded-full w-fit items-center'>
                {product.icon}
            </div>
            <div className='space-y-2'>
                <p className='text-2xl font-bold'>{product.name}</p>
                <p className='text-gray-500'>{product.description}</p>
                <p><span className='text-2xl font-bold'>${product.price}</span> <span className='text-gray-400 font-normal'>/Mo</span></p>
            </div>
            <div>
                {
                    product.features.map(feature => (
                        <p className='flex gap-1 items-center'><FcCheckmark />
                            {feature}</p>
                    ))
                }
            </div>
            <div>
                <button onClick={() => handleSelection()} disabled={isSelected} className={`btn w-full rounded-xl ${isSelected ? "bg-green-500 text-white" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"}`}>
                    {isSelected ? <FaCheck /> : ""}{isSelected ? "Added To Cart" : "Buy Now"}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;