import React from 'react'
import { Badge } from '../ui/badge'

const LatestJobCards = () => {
  return (
    <div className='p-5 rounded-sm shadow-xl bg-white border border-gray-100 cursor-pointer m-5 sm:m-0'>
      <div className="">
        <h1 className='font-medium text-lg'>company name</h1>
        <p className='text-sm text-gray-600'>India</p>
      </div>
      <div className="">
        <h1 className='font-bold text-lg my-2 capitalize'>job title</h1>
        <p className='text-sm text-gray-600'>job description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore odit explicabo, necessitatibus magnam cupiditate voluptate.</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">Full Time</Badge>
        <Badge className={"text-orange-700 font-bold"} variant="ghost">Remote</Badge>
        <Badge className={"text-purple-700 font-bold"} variant="ghost">24LPA</Badge> 
      </div>
    </div>
  )
}

export default LatestJobCards