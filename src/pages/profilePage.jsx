import AppliedJobTable from "@/components/sheared/appliedJobTable";
import Navbar from "@/components/sheared/navbar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Contact, Mail, Pen } from "lucide-react";
import React from "react";

const ProfilePage = () => {
  const skills = ["html", "css", "js", "react",];
  const isResume = true

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8 ">
        <div className="flex  justify-between ">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Avatar className="w-24 h-24">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p className="text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
                iusto praesentium error asperiores sed perspiciatis amet
                incidunt, quisquam.
              </p>
            </div>
          </div>
          <Button className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>email@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>+123456789</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-medium text-xl mb-2">Skills</h1>
          <div className="flex flex-wrap gap-1 items-center">
          {skills.length >= 0 ? (
            skills.map((item, index) => (
              <Badge className=" mr-1 " key={index}>
                {item}
              </Badge>
            ))
          ) : (
            <p className="text-sm text-gray-500">n/a</p>
          )}
          </div>
          
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="text-xl font-bold">Resume</Label>
            {
              isResume ? <a target="_blank" href="https://github.com/shadcn.png" rel="noreferrer" className="text-blue-500 text-md capitalize underline cursor-pointer">KishorSutradhar.pdf</a> : <span>n/a</span>
            }
          </div>
          <div className=" bg-white rounded-2xl">
            <h1 className="font-medium text-xl mb-2">Application Table</h1>
            <AppliedJobTable/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
