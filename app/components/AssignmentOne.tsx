import React from 'react'
import Image from 'next/image'



// Image
import firstImage from '../Public/Screenshot 2024-10-23 051839.png'
import secondImage from '../Public/Screenshot 2024-10-23 052029.png'
const AssignmentOne = () => {
  return (
    <div  className=' bg-cyan-300   p-6  font-bold flex mb-5 shadow-2xl shadow-gray-500'>
    
    <div className='ml-20'>
        <h1 >2nd Assignment</h1>
        <Image src={firstImage.src} alt="Image1" width={400} height={400}  ></Image>
        </div>

        <div className='ml-72'>
            <h1> 1st Assignment </h1>
            <Image src={secondImage.src} alt='Image2' width={400} height={400}></Image>
        </div>
    </div>
  )
}

export default AssignmentOne