import { Button } from "@/components/ui/button";
import Logo from "@/components/sheared/logo";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import React from "react";
import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <div className="flex flex-col items-center justify-center max-w-7xl mx-auto h-screen">

      <Logo size="lg"/>
      <form
        action=""
        className="w-[640px] border border-gray-200 rounded-md p-4 my-10"
      >
        <h1 className="font-bold text-xl mb-5">Sign Up</h1>
        <div className="flex flex-col w-full pb-5 ">
          <Label htmlFor="fullName" className="pb-2 pl-1 text-left">
            Full Name
          </Label>
          <Input id="fullName" placeholder="fullName" />
        </div>
        <div className="flex flex-col w-full pb-5 ">
          <Label htmlFor="email" className="pb-2 pl-1 text-left">
            Email
          </Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>

        <div className="flex flex-col w-full pb-5 ">
          <Label htmlFor="phoneNumber" className="pb-2 pl-1 text-left">
            PhoneNumber
          </Label>
          <Input id="phoneNumber" placeholder="phoneNumber" />
        </div>
        <div className="flex flex-col w-full pb-5 ">
          <Label htmlFor="password" className="pb-2 pl-1 text-left">
            Password
          </Label>
          <Input type="password" id="password" placeholder="Password" />
        </div>
        <div className=" flex justify-between">
          
            <RadioGroup className="flex items-center gap-4 ">
            <div className="flex items-center justify-between">
            <Input type="radio" name="role" value ="student" className="cursor-pointer" id="student"/>
            <Label htmlFor="student" className="pl-2">
              Student
            </Label>
            </div>
            <div className="flex items-center justify-between">
            <Input type="radio" name="role" value ="recruiter" id="recruiter" className="cursor-pointer"/>
            <Label htmlFor="recruiter" className="pl-2">
            Recruiter
            </Label>
            </div>

            </RadioGroup>
            <div className="flex items-center gap-2">
              <Label htmlFor="profilepic">Profile</Label>
              <Input
              type="file"
              id="profilepic"
              className="cursor-pointer"
              />
            </div>
        </div>
        <Button type="submit" className="w-full my-4" size="lg">Sign Up</Button>
        <div className="">Already have an account? <Link className="underline underline-offset-2 font-bold cursor-pointer" to="/login">Log in</Link></div>
      </form>
    </div>
  );
}
