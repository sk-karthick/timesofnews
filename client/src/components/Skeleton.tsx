import React from 'react'

const Skeleton = () => {
    return (
        <div className='animate-pulse flex w-full h-full p-3'>
            <div className='bg-gray-200  dark:bg-gray-700 rounded w-full h-full'></div>
        </div>
    )
}

export default Skeleton