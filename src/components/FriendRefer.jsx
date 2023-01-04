import React from 'react'
import Navbar from './Navbar'
import Arrow from '../assests/Arrow 17.png'
import ReferralCodeSection from './ReferralCodeSection'
import EnrollSection from './EnrollSection'
import Footer from './Footer'
import { Link } from 'react-router-dom'
function FriendRefer() {
  return (
    <>
    <div className='w-full h-full mb-24'>
      <Navbar url='UI/UX > Refer & Earn > Friends Referred' />
        <div className='w-full h-full flex flex-col items-start justify-center'>
          <Link to='/refer'>
            <div className='text-purple flex gap-2 w-full h-[24px] items-center px-5 lg:px-60'>
            <img src={Arrow} alt="arrow" className='w-[15px] h-[13px]' />
            <p>go back</p>
            </div>
          </Link>
        
        <ReferralCodeSection/>
        <EnrollSection/> 
        <div className='lg:ml-[-50px]'>
          <Footer/>
        </div>
         
      </div>
     
    </div>
      
    </>
  )
}

export default FriendRefer