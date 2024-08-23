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
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

export default function LoginPage() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const changeEventHandeler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const submitHandlar = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true));
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
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <div className="flex flex-col items-center justify-center max-w-7xl mx-4 h-screen md:px-12 lg:px-24">
      <Logo size="lg" className="mb-8" />
      <form
        onSubmit={submitHandlar}
        className="w-full md:w-[640px] border border-gray-200 rounded-md p-4 my-10"
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
        {
          loading ? <Button className="w-full my-4" size="lg"><Loader2 className="mr-2 w-4 h-4 animate-spin" />please wait</Button> : 
          <Button type="submit" className="w-full my-4" size="lg">
          Log in
          </Button>
        }
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

