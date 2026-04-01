import React from 'react';
import { FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-gray-900 text-white py-12'>
            <div className='w-[95%] md:max-w-300 mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
    
                    <div>
                        <h2 className='text-3xl font-bold mb-4'>DigiTools</h2>
                        <p className='text-gray-400 text-sm leading-relaxed'>
                            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    <div>
                        <h3 className='text-xl font-semibold mb-4'>Product</h3>
                        <ul className='space-y-3 text-gray-400 text-sm'>
                            <li><a href='' className='hover:text-white transition'>Features</a></li>
                            <li><a href='' className='hover:text-white transition'>Pricing</a></li>
                            <li><a href='' className='hover:text-white transition'>Templates</a></li>
                            <li><a href='' className='hover:text-white transition'>Integrations</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-xl font-semibold mb-4'>Company</h3>
                        <ul className='space-y-3 text-gray-400 text-sm'>
                            <li><a href='' className='hover:text-white transition'>About</a></li>
                            <li><a href='' className='hover:text-white transition'>Blog</a></li>
                            <li><a href='' className='hover:text-white transition'>Careers</a></li>
                            <li><a href='' className='hover:text-white transition'>Press</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-xl font-semibold mb-4'>Resources</h3>
                        <ul className='space-y-3 text-gray-400 text-sm mb-6'>
                            <li><a href='' className='hover:text-white transition'>Documentation</a></li>
                            <li><a href='' className='hover:text-white transition'>Help Center</a></li>
                            <li><a href='' className='hover:text-white transition'>Community</a></li>
                            <li><a href='' className='hover:text-white transition'>Contact</a></li>
                        </ul>
                        
                        <h3 className='text-xl font-semibold mb-4'>Social Links</h3>
                        <div className='flex gap-3'>
                            <a href='' className='bg-white text-gray-900 p-2 rounded-full hover:bg-gray-200 transition'>
                                <FaYoutube size={20} />
                            </a>
                            <a href='' className='bg-white text-gray-900 p-2 rounded-full hover:bg-gray-200 transition'>
                                <FaFacebook size={20} />
                            </a>
                            <a href='' className='bg-white text-gray-900 p-2 rounded-full hover:bg-gray-200 transition'>
                                <FaTwitter size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                
                <div className='border-t border-gray-700 my-8'></div>

                <div className='flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm'>
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <div className='flex gap-6'>
                        <a href='' className='hover:text-white transition'>Privacy Policy</a>
                        <a href='' className='hover:text-white transition'>Terms of Service</a>
                        <a href='' className='hover:text-white transition'>Cookies</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;