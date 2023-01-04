import React from 'react'
import Brand from '../assests/image 1.png'
import Vector from '../assests/Vector.png'
import ProfileLogo from '../assests/ProfileLogo.png'
import Drop from '../assests/Drop.png'

const SmNav = ({url}) => {
    return(
        <>
        <div className='w-full h-[195px] flex flex-col items-center justify-around'>
            <div className='flex items-center justify-around gap-10 pr-5'>
                 <div className='w-[160px] h-[45px] mr-3'>
                    <img src={Brand} alt="logo" className='w-full h-full'/>
                 </div>
            <div className='w-[140px] h-[43px] rounded-md flex gap-2 bg-purple items-center justify-center'>
                  <p className='text-white text-sm'>ProfileName</p>
                  <img src={Vector} alt="drop-down" className='w-[12px] h-[7px] font-extrabold'/>
            </div>
            </div>
            <div>
                {
                    url ==='UI/UX > Refer & Earn > Friends Referred' ?
                    <p className='w-[300px] h-[21px]  text-sm mr-20'>{url}</p> :
                    <p className='w-[140px] h-[21px] mr-44 text-sm'>{url}</p> 
                }
                
            </div>
        </div>
        </>
    )
}

const LgNav =({url}) => {
    return(
        <>
        <div className='w-full h-[74px] px-5 flex items-center justify-around gap-96'>
                <div className='w-[160px] h-3/4'>
                    <img src={Brand} alt="logo" className='w-full h-full'/>
                 </div>

                 <div className='text-purple flex gap-7'>
                    <p className='opacity-30'>
                    My Assignment
                    </p>
                    <p className='opacity-30'>Chat with Mentor</p>
                    <div className='text-purple flex gap-2 items-center justify-center'>
                        <img src={ProfileLogo} alt="log" className='w-[20px] h-[20px]' />
                        <p>ProfileName</p>
                        <img src={Drop} alt="drop-down" className='w-[12px] h-[7px] font-extrabold text-purple'/>
                    </div>    
                 </div>
                
        </div><p className='ml-60 mt-3 pb-5' >{url}</p>
        </>
    )
}

function Navbar({url}) {
  return (
    <>
        <div className=' bg-white lg:hidden'>
               <SmNav url={url}/>
        </div>
        <div className='hidden bg-white lg:block'>
               <LgNav url={url}/>
        </div>
      
    </>
  )
}

export default Navbar