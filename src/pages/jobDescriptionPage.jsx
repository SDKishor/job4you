import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import React from 'react'

const JobDescriptionPage = () => {
  const isApplied = true 
  return (
    <div className='max-w-7xl mx-auto my-10'>
      <div className="flex items-center justify-between mb-2">
        <div>
          <h1 className='text-3xl font-bold'>Title</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge className="text-blue-700 font-bold" variant="ghost">12 Positions</Badge>
            <Badge className="text-orange-700 font-bold" variant="ghost">Full Time</Badge>
            <Badge className="text-purple-700 font-bold" variant="ghost">10LPA</Badge>
          </div>
        </div>
        <Button disabled={isApplied} className={`rounded-lg ${isApplied ? "disabled:bg-gray-800 text-white" : "bg-[#6a38c2] text-white"}`}>{isApplied ? "Already Applied" : "Apply Now"}</Button>
      </div>
      <h1 className='border-b-2 border-gray-300  font-medium py-4'>Job Description</h1>
      <div className="my-2">
        <h1 className='font-bold my-1'>Role: <span className='font-normal text-gray-800'>Frontend Developer</span></h1>
        <h1 className='font-bold my-1'>Location: <span className='font-normal text-gray-800'>Dhaka, Bangladesh</span></h1>
        <h1 className='font-bold my-1'>Job Type: <span className='font-normal text-gray-800'>Full Time</span></h1>
        <h1 className='font-bold my-1'>Posted: <span className='font-normal text-gray-800'>2 days ago</span></h1>
        <h1 className='font-bold my-1'>Deadline: <span className='font-normal text-gray-800'>10-09-2024</span></h1>
        <h1 className='font-bold my-1'>Total Applicant: <span className='font-normal text-gray-800'>6</span></h1>
        
        
      </div>
    </div>
  )
}

export default JobDescriptionPage