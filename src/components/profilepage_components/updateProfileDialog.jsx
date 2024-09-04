import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const UpdateProfileDialog = ({ open, setOpen }) => {
  const {user} = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    bio: user?.profile?.bio || "",
    skills: user?.profile?.skills?.map(skill=>skill) || [],
    file: null
  })

  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const changeFileHandeler = (e) => {
    setInput({
      ...input,
      file: e.target.files?.[0]
    });
  };
  
  const submitHandler = async (e) => {
    e.preventDefault()
    const formData = new FormData();

    formData.append("fullName", input.fullName);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if(input.file) {
      formData.append("file", input.file);
    }
    try {
      setLoading(true)
      const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      })
      if(res.data.success) {
        toast.success(res.data.message)
        dispatch(setUser(res.data.user))
      }
    } catch (error) {
      console.log(error);
    }
    finally{
      setLoading(false)
    }
    setOpen(false)

  }

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submitHandler}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name">Name</Label>
              <input
                value={input.fullName}
                type="text"
                id="name"
                placeholder="Enter your name"
                className="input input-bordered w-full col-span-3 py-1 "
                onChange={changeEventHandler}
                name="fullName"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone">Phone</Label>
              <input
                value={input.phoneNumber}
                type="text"
                id="phone"
                placeholder="Enter your phone number"
                className="input input-bordered w-full col-span-3 py-1 "
                onChange={changeEventHandler}
                name="phoneNumber"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="bio">Bio</Label>
              <input
                value={input.bio}
                type="text"
                id="bio"
                placeholder="Enter your Bio"
                className="input input-bordered w-full col-span-3 py-1 "
                onChange={changeEventHandler}
                name="bio"
              />
            </div>
            
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="file">Resume</Label>
              <input
                type="file"
                id="file"
                accept="application/pdf"
                placeholder="Enter your Bio"
                className="input input-bordered w-full col-span-3 py-1 "
                onChange={changeFileHandeler}
              />
            </div>
            {
          loading ? <Button className="w-full my-4" size="lg"><Loader2 className="mr-2 w-4 h-4 animate-spin" />please wait</Button> : 
          <Button
            type="submit"
            className="w-full bg-[#6a38c2] text-white"
            variant="outline"
            size="sm"
          >
            Update
          </Button>
        }

            
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProfileDialog;

