import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const InsureAndSecure = () => {
  return (
    <div className='max-w-screen-xl mx-auto p-4' >
        <div className='grid md:grid-cols-2 md:py-20'>
            <div className='flex flex-col gap-3 py-20'>
                <span className='text-5xl font-semibold'>Insure</span>
                <span className='text-5xl font-semibold'>and Secure</span>
                <span className='text-5xl text-blue-600 font-semibold'>Your Car</span>
                <span>Where insurance makes sense. Faster. Fairier. On your side.</span>
                <p className="px-4 py-3 bg-cyan-700 rounded-full text-center w-2/4 lg:w-1/4 text-white">
            <Link href="/"><a>Get a quote</a></Link>
          </p>
            </div>
            <div className='px-20' >
               <Image src='/assets/insure.png' alt='man' height={500} width={500} />
            </div>
        </div>
    </div>
  )
}

export default InsureAndSecure