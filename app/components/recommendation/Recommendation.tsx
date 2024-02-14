import React from 'react'

export default function Recommendation() {
    return (
        <div className='flex items-center p-2 md:p-1 cursor-pointer hover:bg-gray-700'>
            <img src="https://sample-videos.com/img/Sample-jpg-image-100kb.jpg" alt="image" className='w-28 h-16 md:w-32 md:h-20 bg-cover' />
            <div className='p-1'>
                <p className='text-gray-100 font-bold'>Name of the video</p>
                <p className='text-gray-200 text-sm md:text-base'>Category</p>
                <p className='text-gray-200 text-sm md:text-base'>14 feb 2024</p>
            </div>
        </div>
    )
}
