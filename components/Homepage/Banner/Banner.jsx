import React from 'react'
import {ClipboardListIcon,UsersIcon} from '@heroicons/react/outline'

const Banner = () => {
  return (
      <div className='bg-blue-600 text-white'>
          <div className='max-w-screen-xl mx-auto p-4 grid-cols-2 grid md:grid-cols-5 gap-7 py-10 md:py-32'>
                <div className='flex flex-col gap-3'>
                    <div className='flex gap-2 items-center'>
                        <ClipboardListIcon className='h-12 w-12 text-white' />
                        <span className='text-4xl tracking-wider font-bold text-white'>3.5K</span>
                    </div>
                    <p className='font-semibold text-xl'>Gave Insurance</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex gap-2 items-center'>
                        <UsersIcon className='h-12 w-12 text-white' />
                        <span className='text-4xl tracking-wider font-bold text-white'>30+</span>
                    </div>
                    <p className='font-semibold text-xl'>Professional Team</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex gap-2 items-center'>
                        <ClipboardListIcon className='h-12 w-12 text-white' />
                        <span className='text-4xl tracking-wider font-bold text-white'>3.9K</span>
                    </div>
                    <p className='font-semibold text-xl'>Satisfied Customers</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex gap-2 items-center'>
                        <ClipboardListIcon className='h-12 w-12 text-white' />
                        <span className='text-4xl tracking-wider font-bold text-white'>99%</span>
                    </div>
                    <p className='font-semibold text-xl'>Our Success Rate</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex gap-2 items-center'>
                        <ClipboardListIcon className='h-12 w-12 text-white' />
                        <span className='text-4xl tracking-wider font-bold text-white'>48+</span>
                    </div>
                    <p className='font-semibold text-xl'>Our Projects</p>
                </div>
               
          </div>
      </div>
  )
}

export default Banner