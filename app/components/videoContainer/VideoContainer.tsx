import React from 'react'

export default function VideoContainer() {
    return (
        <div className='relative w-full h-full'>
            <video src="https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4" controls className='bg-cover w-auto min-h-full min-w-full h-auto'></video>
            <div className='absolute top-0 left-0 z-10 w-full h-10 py-4 px-3 bg-gradient-to-b from-black to-transparent'>
                <h2 className='text-white'>Name of the video</h2>
            </div>
        </div>
    )
}
