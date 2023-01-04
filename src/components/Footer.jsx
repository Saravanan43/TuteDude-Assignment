import React from 'react'

function Footer() {
  return (
    <>
    <div className='h-full w-full px-5 mt-5 lg:hidden'>
        <p className='w-[168px] h-[24px] text-purple text-sm font-medium'>
        Terms & Conditions
        </p>
    </div>

    <div className='hidden h-full w-full px-72 mt-5 lg:block'>
        <p className='w-[168px] h-[24px] text-purple text-sm font-medium'>
        Terms & Conditions
        </p>
    </div>
    
    </>
  )
}

export default Footer