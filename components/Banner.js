import React from 'react'
import Image from 'next/image'

function Banner() {
  return (
    <div
    className='relative h-[300px] sm:h-[400px] lg:h-[500] xl:h-[600px] 2xl:h-[700px]  '>
    
   <Image
       src="https:links.papareact.com/0fm"
       layout='fill'
       objectFit='cover
       '
   />
    
    <div className='absolute top-1/2 w-full text-center'>
    <p>Not sure where to go? Perfect. </p>
   <button className='border-3  text-white bg-[#FD5B61] px-10 py-4 shadow-md rounded-full font-bold p-2 my-4 hover:shadow-2xl '><h1>I'm flexible</h1> </button>
    </div>
    </div>

  )
}

export default Banner