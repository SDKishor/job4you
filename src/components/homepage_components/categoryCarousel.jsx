import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Button } from "../ui/button";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Mobile Developer",
  "Fullstack Developer",
  "Data Scientist",
  "Data Analyst",
];

const CategoryCarousel = () => {
  return (
    <div className="w-full max-w-7xl mx-auto my-20">
      <Carousel className="w-2/3 md:max-w-xl lg:max-w-3xl mx-auto">
        <CarouselContent>
          {category.map((item, index) => (
            <CarouselItem className=" md:basis-1/2 lg:basis-1/3" key={index}>
              <Button variant="outline" className="w-full rounded-full">
                {item}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious  />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;

