import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";

const FilterCard = () => {
  const filterdata = [
    {
      filtertype: "Location",
      array: [
        "Dhaka",
        "Chittagong",
        "Sylhet",
        "Khulna",
        "Rajshahi",
        "Barishal",
        "Rangpur",
        "Mymensingh",
      ],
    },
    {
      filtertype: "Industry",
      array: [
        "frontend developer",
        "backend developer",
        "mobile developer",
        "fullstack developer",
        "data scientist",
        "data analyst",
      ],
    },
    {
      filtertype: "Salary",
      array: [
        "10k-30k",
        "30k-50k",
        "50k-70k",
        "70k-1lakh",
        "1lakh-5lakh",
      ],
    },
  ];

  const [showFilterData, setShowFilterData] = useState(false);

  return <div>
    <h1>Filter Jobs</h1>
    <hr className="mt-3"/>
    <Button onClick={() => setShowFilterData(!showFilterData)} variant="ghost" className="w-full border-b rounded-none  mb-2 sm:hidden h-12">{
      showFilterData ? <ArrowBigDown/> : <ArrowBigUp/>} Show Filter</Button>
    <div className={showFilterData ? "block" : "hidden sm:block"}>
      {
        filterdata.map((item, index) =>(
          <RadioGroup key={index}>
            <h1 className="font-bold text-lg">{item.filtertype}</h1>
            {
              item.array.map((item, index) => (
                <div className="flex items-center space-x-2 my-2" key={index}>
                  <RadioGroupItem value={item} />
                  <Label htmlFor={item}>{item}</Label>
                </div>
              ))
            }
          </RadioGroup>
        ))
      }
    </div>
  </div>;
};

export default FilterCard;
