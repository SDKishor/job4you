import React from 'react'
import LatestJobCards from './latestJobCard'

const randomjobs = [
  1,2,3,4,5,6,7,8
]
const LatestJobs = () => {
  return (
    <div className='max-w-7xl mx-auto md:px-10  my-20 flex flex-col gap-5'>
      <h1 className='text-3xl sm:text-4xl font-bold mb-10 max-sm:text-center'> <span className='text-[#6a38c2] '>Latest & Top </span> Job Openings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {
          randomjobs.slice(0, 6).map((item, index) => (
            <LatestJobCards key={index} className="md:w-full lg:w-2/3"/>
          ))
        }
      </div>
    </div>
  )
}

export default LatestJobs
