'use client'
import Typewriter from 'typewriter-effect';

export default function LoadingPage() {
    return(
        <div className='flex h-screen w-screen justify-center gap-10 items-center text-[300%]'>
            Loading 
            <div className='border-solid border-8 border-gray-300 h-20 w-20 rounded-[100%] border-t-blue-600 animate-spin-slow'>
            </div>
        </div>
    )
}