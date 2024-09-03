import React from 'react'
import { Button } from '../ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Badge } from '../ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = () => {
  const navigate = useNavigate();
  const jobid = "sakdklaj"

  return (
    <div className="p-5 rounded-sm shadow-xl bg-white border border-gray-100 ">
      <div className='flex justify-between items-center'>
        <p className='text-sm text-gray-500'>2 days ago</p>
        <Button className="rounded-full" variant="outline" size="icon"><Bookmark/></Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className="p6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://i.pinimg.com/736x/91/92/1c/91921cec4f8a8cbe3d09e596e0659d81.jpg" alt="microsoft" />
          </Avatar>
        </Button>
        <div className="">
          <h1 className='font-medium text-lg'>Company name</h1>
          <p className='text-sm text-gray-500'>Bangladesh</p>
        </div>
      </div>

      <div className="">
        <h1 className='font-bold text-lg my-2 capitalize'>job title</h1>
        <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora animi, repellendus fugiat ex sint autem.</p>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <Badge className="text-blue-700 font-bold" variant="ghost">Full Time</Badge><Badge className="text-orange-700 font-bold" variant="ghost">Remote</Badge><Badge className="text-purple-700 font-bold" variant="ghost">24LPA</Badge>
      </div>

      <div className="flex items-center gap-4 mt-4 ">
      <Button onClick={() => 
        navigate(`/description/${jobid}`)
      } variant="outline" size="sm">Details</Button>
      <Button className="bg-[#6a38c2] text-white" variant="outline" size="sm">Apply Now</Button>
      </div>


    </div>
  )
}

export default Job