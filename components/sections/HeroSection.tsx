import { HeroImg } from "@/public/images";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowBigLeft, ArrowBigRight, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <div className="flex items-center mt-10 justify-evenly max-md:flex-col text-gradient">
        <div className="">
          <p className="text-6xl  tracking-[3px] max-sm:text-3xl max-sm:w-[300px] w-[700px] md:text-6xl ">
            Turn Your Imagination into Reality with FauroAi
          </p>
          <Button className="mt-3 ">
            Start Creating <ArrowRight />
          </Button>
        </div>
        <Image
          src={HeroImg}
          className=" max-sm:w-[300px] max-lg:w-[350px] w-[500px] mt-5 "
          alt="hero"
        />
      </div>
    </>
  );
};

export default HeroSection;
