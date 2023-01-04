import React from 'react'
import people from '../assests/people.png'
import tag from '../assests/tag.png'
import percent from '../assests/%.png'
import rupee from '../assests/rupee.png'
import wallet from '../assests/wallet.png'
function Features() {

  const data=[
    {
        icon:people,
        heading:'Invite your Friends',
        para:'Share the link tutedude.com with your friends',
    },
    {
        icon:tag,
        heading:'Friend purchases any course',
        para:'Using you REFERRAL CODE in the payments page',
    },
    {
        icon:rupee,
        heading:'You get ₹ 200 as referral money',
        para:'Of total purchase the friend makes sharebale to your wallet'
    },
    {
        icon:percent,
        heading:'Your Friend gets ₹ 200 Off ',
        para:'On his overall fee on successful purchase using your referral code '
    },
    {
        icon:wallet,
        heading:'Transfer money from wallet',
        para:'When the wallet balance reaches ₹200 or more, you can withdraw it'
    }
  ]  
  return (
    <>
    <div className='px-5 lg:hidden'>
        <h1 className='text-purple text-xl font-semibold'>How does it work ?</h1>

        {
            data.map(({icon,heading,para}) =>(
                 <div className='w-full h-[65px] flex gap-5 items-center justify-center mt-3'>
              <div className='w-[70px] h-[55px] bg-icon px-2 flex items-center justify-center rounded-full'>
                <img src={icon} alt='icon' className='w-[22px] h-[20px] bg-icon' />
              </div>
              <div className='w-full h-full flex flex-col gap-1 items-start justify-center'>
                <p className='text-sm font-medium text-black'>{heading}</p>
                <p className='text-sm text-dark'>{para}</p>
              </div>
        </div>
            ))
        }
       
       <p className='w-[168px] h-[24px] text-purple text-sm font-medium mt-8'>Friends Who Enrolled</p>
    </div>

    <div className='hidden  lg:block'>
        <h1 className='text-purple text-xl font-semibold '>How does it work ?</h1>
        
        <div className='w-full flex gap-3 items-center justify-center flex-wrap'>
          {
            data.map(({icon,heading,para}) =>(
                 <div className={`w-[440px] h-[65px] flex gap-5 items-center justify-center mt-3
                  ${heading==='Transfer money from wallet' ? 'mr-auto' : ''}`}>
              <div className='w-[70px] h-[55px] bg-icon px-2 flex items-center justify-center rounded-full'>
                <img src={icon} alt='icon' className='w-[22px] h-[20px] bg-icon' />
              </div>
              <div className='w-full h-full flex flex-col gap-1 items-start justify-center'>
                <p className='text-sm font-medium text-black'>{heading}</p>
                <p className='text-sm text-dark'>{para}</p>
              </div>
        </div>
            ))
        }
        </div>
        
       
       <p className='w-[168px] h-[24px] text-purple text-sm font-medium mt-10'>Friends Who Enrolled</p>
    </div>
    </>
  )
}

export default Features