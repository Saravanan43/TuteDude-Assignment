import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import ReferralSection from './ReferralSection'
function Refer() {
  return (
    <div className='w-full h-full bg-gray pb-32'>
        <Navbar url='UI/UX > Refer & Earn'/>
        <ReferralSection/>
        <Footer/>
    </div>
  )
}

export default Refer