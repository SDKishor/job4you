import { Search } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='text-center w-full md:max-w-[500px] mx-auto'>
      <div className="flex flex-col gap-5 my-10 md:my-20">
      <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#f83002] font-medium capitalize md:text-lg'>No. 1 Job hunting website</span>

      <h1 className='text-4xl md:text-5xl md:text-[64px] font-bold leading-tight md:leading-snug md:tracking-tight md:text-center'>
        Search, Apply & <br  /> Get Your  <span className='text-[#6a38c2] font-Pacifico'>Dream Jobs</span>
      </h1>
      <p className='md:text-lg md:mx-auto md:max-w-[450px] px-5 md:px-0 md:text-center'>
        Find your dream job with Job4you with the help of our  job search engine.
      </p>
      <div className="flex  md:w-[450px] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 md:mx-auto md:mt-8 h-12 md:h-[54px] mx-5">
        <input type="text" placeholder="Find your dream job" className="outline-none border-none w-full md:w-[calc(100%-54px)] " />
        <button className="bg-[#6a38c2] rounded-r-full h-full w-20 md:w-[54px]">
          <Search  className='h-5 w-5 mx-auto '/>
        </button>
      </div>

      </div>

    </div>
  )
}

export default HeroSection
