import React from 'react'

function ReferralCodeSection() {
  return (
    <>
    <div className='w-full h-full flex items-center justify-center gap-6 mt-5 px-5 lg:hidden'>
        <div className='w-1/2 h-full flex flex-col gap-1 items-center justify-center'>
             <p className='text-purple h-full w-full text-sm     text-center'>Your Referral Code </p>
             <div className='flex h-full w-full items-center justify-center bg-white border border-gray py-3 rounded-lg'>
                <p className='tracking-widest text-sm'>EDCH54</p>
            </div>
        </div>
        <div className='w-1/2 h-full flex flex-col gap-1 items-start px-9 rounded-2xl shadow-md border py-3 border-gray'>
                     <p className='text-purple text-[11px]'>Wallet Balance</p>
                     <h1 className='text-black text-sm font-medium'>₹ 500</h1>
        </div>
    </div>

    <div className='hidden w-full h-full lg:flex items-center justify-around gap-72 mt-5'>
        <div className='w-[150px] h-full flex flex-col gap-1 items-center justify-center'>
             <p className='text-purple h-full w-full text-sm text-center'>Your Referral Code </p>
             <div className='flex h-full w-full items-center justify-center bg-white border border-gray py-3 rounded-lg'>
                <p className='tracking-widest text-sm font-semibold'>EDCH54</p>
            </div>
        </div>
        <div className='w-[150px] h-full flex flex-col gap-1 items-start px-5 rounded-2xl  shadow-md border py-3 border-gray'>
                     <p className='text-purple text-sm'>Wallet Balance</p>
                     <h1 className='text-black text-sm font-semibold'>₹ 500</h1>
        </div>
    </div>
    </>
  )
}

export default ReferralCodeSection