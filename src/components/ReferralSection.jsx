import React from 'react'
import Features from './Features'
import ReferralCode from './ReferralCode'
import ReferralSectionCard from './ReferralSectionCard'

const SmReferalSection = () => {
    return(
        <>
        <div className='w-full px-6'>
              <ReferralSectionCard/>
        </div>
        </>
    )
}

const LGReferalSection = () =>{
  return(
     <> 
        <div className='w-full pt-5'>
          <ReferralSectionCard/>
        </div>
           
     </>
  )
}

function ReferralSection() {
  return (
    <>
    <div className='w-full h-auto bg-gray pt-5 flex flex-col gap-1 lg:hidden'>
        <div className='lg:hidden'>
          <SmReferalSection/>
        </div>
        <div className='hidden lg:block'>
          <LGReferalSection/>
        </div>
        
        <ReferralCode/>
        <Features/>
    </div>

    <div className=' hidden lg:block w-full h-full bg-gray pt-5 flex-col gap-1 px-72'>
      <div className='w-full h-full flex '>
         <LGReferalSection/>
         <ReferralCode/>
      </div>
      <div className='mt-12 mr-12'>
         <Features/>
      </div>
     
    </div>
  </>
  )
}

export default ReferralSection