import React from 'react';
import SearchResultSearchbar from './SearchResultSearchbar';

const SearchResultNavbar = () => {
    return (
        <div className='bg-cover fixed top-0 w-full max-w-[1280px] bg-white z-20'>
            <div className='flex justify-between items-center shadow-md h-[102px] md:h-[91px] bg-white px-6 md:px-10 lg:px-8'>
                <ul className='flex items-center'>
                    <li>
                        <img 
                            src="https://storagereponeevaydevcdn.blob.core.windows.net/business/homepage_4_neevayLogo.svg" 
                            alt="Neevay" 
                            className='w-[112px] h-[34px] md:h-[39px] md:w-full' 
                        />
                    </li>
                </ul>
                <div className='hidden lg:block'>
                    <SearchResultSearchbar />
                </div>
                <div className='flex items-center'>
                    <button className='h-[43px] px-6 md:h-[44px] md:px-0 md:w-[108px] xs:text-sm md:text-base mx-4 border hover:font-bold border-black'>
                        Login
                    </button>
                    <button className='flex items-center justify-center md:text-sm xs:text-sm md:h-[44px] md:w-[135px] w-[100px] h-[43px] hover:font-bold text-white bg-gradient-to-r from-[#24242D] to-[#0B0B1A] border-l-4 border-[#F16500]'>
                        Signup
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchResultNavbar;
