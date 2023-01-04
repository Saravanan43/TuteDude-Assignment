import React from 'react'

function ReferralCode() {
  return (
    <>
    <div className='w-full flex flex-col gap-3 p-5 lg:hidden'>
        <h1 className='text-purple text-xl font-semibold'>Your Referral Code </h1>
        <div className='bg-gradient-to-r from-dynamix to-dynamic p-[0.5px]'>
            <div className='flex h-full w-full items-center justify-center tracking-wide bg-white py-2'>
                <p>EDCH54</p>
            </div>
            
        </div>
    </div>
    <div className='hidden w-1/2 lg:flex flex-col gap-3 p-5 mr-16'>
        <h1 className='text-purple text-xl font-semibold'>Your Referral Code </h1>
        <div className='bg-gradient-to-r from-dynamix to-dynamic p-[1px]'>
            <div className='flex h-full w-full items-center justify-center tracking-wide bg-white py-2'>
                <p>EDCH54</p>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default ReferralCode