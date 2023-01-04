import React from 'react'

function EnrollSection() {

  const data= [
    {
        name:'Dhiraj Saxsena',
        date:'14 Sep, 2022',
        count:'6',
        course:[
            'UI/UX','Photoshop','Illustrator', 'Python','MERN','Java'
        ],
        amount:'₹185'
    },
    {
        name:'Subhash Mishra',
        date:'15 Sep, 2022',
        count:'23',
        course:[
            'UI/UX','Photoshop','Illustrator', 'Python','MERN','Java','C++'
        ],
        amount:'₹485'
    },
    {
        name:'Prafull Kumar',
        date:'16 Sep, 2022',
        count:'23',
        course:[
            'UI/UX','Photoshop','Illustrator', 'Python','MERN','Java','C++'
        ],
        amount:'₹485'
    }
  ]  
  return (
    <>
    <div className='flex flex-col gap-3 items-start justify-center text-white my-6 px-5 lg:hidden'>
         <h1 className='text-purple text-lg font-bold mb-2'>Friends who Enrolled <span className='font-medium'>(3)</span></h1>
         <div className='w-full h-full flex flex-col gap-5'>
 {
            data.map(({name,date,count,course,amount}) => (
                 <div className='relative w-full h-[200px] p-3 bg-gradient-to-r from-dynamix to-dynamic rounded-xl'>
            <div className={`w-full items-center flex ${name.length===14 ? 'gap-20' : 'gap-24'}  justify-around`}>
                <p className='font-bold'>{name}</p>
                <p className='text-sm'>{date}</p>
            </div>
            <div>
                <p className='text-sm px-1 pt-3'>Courses Enrolled(6)</p>
                <div className='w-full h-full flex flex-wrap gap-3 p-3 '>
                    {
                        course.map((i) =>(
                            <p className='border border-white rounded-3xl  px-2 text-sm '>{i}</p>
                        ))
                    }     
                </div>
            </div>
            <div className='absolute bottom-5 flex gap-2 items-center justify-center'>
                <p className='text-sm'>Referral Amount </p>
                <p className='font-semibold text-lg'>{amount}</p>
            </div>
         </div>
            ))
         }
         </div>
        
        
    </div>
   
    <div className='hidden lg:flex flex-col gap-3 items-start justify-center text-white my-6 px-60'>
         <h1 className='text-purple text-lg font-bold mb-2'>Friends who Enrolled <span className='font-medium'>(3)</span></h1>
         <div className='w-full h-full flex gap-5'>
 {
            data.map(({name,date,count,course,amount}) => (
                 <div className='relative w-1/3 h-[200px] p-3 bg-gradient-to-r from-dynamix to-dynamic rounded-xl'>
            <div className={`w-full items-center flex ${name.length===14 ? 'gap-20' : 'gap-24'}  justify-around`}>
                <p className='font-bold'>{name}</p>
                <p className='text-sm'>{date}</p>
            </div>
            <div>
                <p className='text-sm px-1 pt-3'>Courses Enrolled({count})</p>
                <div className='w-full h-full flex flex-wrap gap-3 p-3 '>
                    {
                        course.map((i) =>(
                            <p className='border border-white rounded-3xl  px-2 text-sm '>{i}</p>
                        ))
                    }     
                </div>
            </div>
            <div className='absolute bottom-5 flex gap-3 items-center justify-center'>
                <p className='text-sm'>Referral Amount </p>
                <p className='font-semibold text-xl'>{amount}</p>
            </div>
         </div>
            ))
         }
         </div>
        
        
    </div>
    </>
  )
}

export default EnrollSection