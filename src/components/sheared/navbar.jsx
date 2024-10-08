import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import Logo from "../sheared/logo";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUser } from "@/redux/authSlice";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";

export default function Navbar() {
  const {user} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async() => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`);
      if (res.data.success) {
        localStorage.removeItem("token")
        dispatch(setUser(null))
        toast.success(res.data.message)
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex items-center justify-between md:mx-auto max-w-7xl h-16 mx-5">
      {/* logo */}
      <Logo/>

      <div className="hidden md:flex items-center gap-4 ">
          <ul className="flex gap-2">
            <Link to={"/"}><li>Home</li></Link>
            <Link to={"/jobs"}><li>Jobs</li></Link>
            <Link to={"/browse"}><li>Browse</li></Link>
          </ul>
        {!user ?(
          <div className="flex items-center gap-2">
            <Link to={"/login"}>
            <Button variant="outline" size="sm">Login</Button>
            </Link>
            <Link to={"/signup"}>
            <Button  className="bg-[#6a38c2] "size="sm">Sign Up</Button>
            </Link>
          </div>
        )
        :(<Popover>
          <PopoverTrigger >
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent>
            <div className="">
              <div className="flex gap-4 items-center justify-center border-b pb-2">
                <Avatar className="cursor-pointer">
                  <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn"/>
                </Avatar>
                <div className="">
                  <h4 className="text-xl font-bold">Kishor</h4>
                  <p className="text-sm font-thin capitalize text-gray-500">front-end developer</p>
                </div>
              </div>
              <div className="flex justify-between py-2">
              <div className="flex items-center ">
                <User2/>
                <Link to={"/profile"}>
                <Button variant="link_primary"  >View Profile</Button>
                </Link>
              </div>
              <div className="flex items-center">
                <LogOut/>
              <Button onClick={logoutHandler} variant="link_primary"  >Log out</Button>
              </div>
              </div>
              
            </div>
          </PopoverContent>
        </Popover>)}
      </div>
    </div>
  );
}
