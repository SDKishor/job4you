import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/components/sheared/logo";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";

export default function LoginPage() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  
  const navigate = useNavigate();

  const changeEventHandeler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const submitHandlar = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center max-w-7xl mx-auto h-screen">
      <Logo size="lg" />
      <form
        onSubmit={submitHandlar}
        className="w-[640px] border border-gray-200 rounded-md p-4 my-10"
      >
        <h1 className="font-bold text-xl mb-5">Login </h1>

        <div className="flex flex-col w-full pb-5 ">
          <Label htmlFor="email" className="pb-2 pl-1 text-left">
            Email
          </Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            value={input.email}
            onChange={changeEventHandeler}
          />
        </div>

        <div className="flex flex-col w-full pb-5 ">
          <Label htmlFor="password" className="pb-2 pl-1 text-left">
            Password
          </Label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={changeEventHandeler}
          />
        </div>
        <div className=" flex justify-between">
          <RadioGroup className="flex items-center gap-4 ">
            <div className="flex items-center justify-between">
              <Input
                type="radio"
                name="role"
                value="student"
                className="cursor-pointer"
                id="student"
                checked={input.role === "student"}
                onChange={changeEventHandeler}
              />
              <Label htmlFor="student" className="pl-2">
                Student
              </Label>
            </div>
            <div className="flex items-center justify-between">
              <Input
                type="radio"
                name="role"
                value="recruiter"
                id="recruiter"
                className="cursor-pointer"
                checked={input.role === "recruiter"}
                onChange={changeEventHandeler}
              />
              <Label htmlFor="recruiter" className="pl-2">
                Recruiter
              </Label>
            </div>
          </RadioGroup>
        </div>
        <Button type="submit" className="w-full my-4" size="lg">
          Sign Up
        </Button>
        <div className="">
          Don't have an account?{" "}
          <Link
            className="underline underline-offset-2 font-bold cursor-pointer"
            to="/signup"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
