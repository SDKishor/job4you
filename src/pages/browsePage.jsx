import Job from '@/components/sheared/job'
import Navbar from '@/components/sheared/navbar'
import React from 'react'

const jobsArr = [1,2,3,4,5,6,7,8]

const BrowsePage = () => {
  return (
    <>
      <Navbar/>
      <div className="flex max-w-7xl mx-auto mt-5 flex-col  md:flex-row md:flex-wrap md:justify-center">
        <h1 className='text-3xl font-bold   md:w-full mb-5'>Search Results ({jobsArr.length})</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {
            jobsArr.map((item, index) => 
              <Job key={index} className="md:w-full lg:w-[calc(100%/3)]"/>
            )
          }
        </div>
      </div>
    </>
  )
}

export default BrowsePage
