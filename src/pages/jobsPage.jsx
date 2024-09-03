import FilterCard from '@/components/jobpage_components/filterCard'
import Job from '@/components/sheared/job'
import Navbar from '@/components/sheared/navbar'
import React from 'react'

const jobsArr = [1,2,3,4,5,6,7,8]

const JobsPage = () => {
  return (
    <>
    <Navbar/>
    <div className="flex max-w-7xl mx-auto mt-5 flex-col md:flex-row px-5">
      <div className="md:w-1/5  flex flex-col gap-4 md:gap-8 md:h-[88vh] overflow-y-auto pb-5">
        <FilterCard/>
      </div>
      {
        jobsArr.length <= 0 ? <span className="md:order-1 md:w-4/5">Job not found</span>: (
          <div className=" md:w-4/5 md:h-[88vh] overflow-y-auto pb-5">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8">
              {
                jobsArr.map((item, index) => 
                  <Job key={index}/>
                )
              }
            </div>
          </div>
        )
      }
    </div>
    </>
  )
}

export default JobsPage
