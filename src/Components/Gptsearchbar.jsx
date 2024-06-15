import React from 'react';
import lang from '../../utills/languageconstants';
import { useSelector } from 'react-redux';

const Gptsearchbar = () => {
    const langKey = useSelector((store) => store.config.lang);
    

    return (
        <div className='pt-[10%] flex justify-center'>
            <form className='bg-black grid grid-cols-12 w-1/2'>
                <input
                    type='text'
                    className='p-4 col-span-9 m-4'
                    placeholder={lang[langKey]?.gptSearchplaceholder}
                />
                <button className='py-2 px-4 col-span-3 m-4 bg-red-600 text-white rounded-lg'>
                    {lang[langKey]?.search}
                </button>
            </form>
        </div>
    );
};

export default Gptsearchbar;
