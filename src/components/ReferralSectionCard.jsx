import React from 'react'
import { Link } from 'react-router-dom'

function ReferralSectionCard() {
  return (
   <>
   <div className='lg:hidden'>
       <div className='flex flex-col justify-center items-start w-full  h-[170px] gap-5 bg-white rounded-xl shadow-lg px-3 '>
             <div className='flex w-full items-center justify-around gap-20'>
                 <div classname='w-[116px] flex flex-col gap-1 items-center justify-center'>
                     <p className='text-purple text-[11px]'>Referral Earning</p>
                     <h1 className='text-black text-2xl font-medium'>₹ 2,500</h1>
                 </div>
                 <div classname='w-[116px] flex flex-col gap-1 items-center justify-center'>
                     <p className='text-purple  text-[11px]'>Total Referrals</p>
                     <h1 className='text-black text-2xl font-medium'>7</h1>
                 </div>
             </div>
             <div className='flex w-full items-center justify-around gap-7'>
                <div classname='w-[116px] flex flex-col gap-1 items-center justify-center'>
                    <p className='text-purple text-[11px]'>Wallet Balance</p>
                     <h1 className='text-black text-2xl font-medium'>₹ 500</h1>
                </div>
                <Link to='/refer/friendRefer'>
                <div className='w-[140px] h-[30px] flex items-center justify-center bottom-0 right-0 bg-purple rounded-3xl'>
                    <button className='text-white text-[11px]  text-center'>Withdraw Balance</button>
                </div>
                </Link>
             </div>
       </div>
   </div>

   <div className='hidden lg:block'>
         <div className='w-[430px] h-[179px] flex flex-col items-center justify-center gap-10 bg-white rounded-3xl  shadow-lg'>
            <div className='flex items-center justify-center gap-16'>
            <div classname='w-[116px] flex flex-col gap-1 items-center justify-center'>
                     <p className='text-purple text-[11px]'>Referral Earning</p>
                     <h1 className='text-black text-2xl font-medium'>₹ 2,500</h1>
            </div>
            <div classname='w-[116px] flex flex-col gap-1 items-center justify-center'>
                     <p className='text-purple  text-[11px]'>Total Referrals</p>
                     <h1 className='text-black text-2xl font-medium'>7</h1>
            </div>
            <div classname='w-[116px] flex flex-col gap-1 items-center justify-center'>
                    <p className='text-purple text-[11px]'>Wallet Balance</p>
                     <h1 className='text-black text-2xl font-medium'>₹ 500</h1>
            </div>
        </div>
            <div>
            <Link to='/refer/friendRefer'>
            <div className='w-[140px] h-[30px] flex items-center justify-center bottom-0 right-0 bg-purple rounded-3xl'>
                  <button className='text-white text-[11px]  text-center'>Withdraw Balance</button>
                </div>
            </Link>   
            </div>
         </div>
   </div>
   </>
  )
}

export default ReferralSectionCard