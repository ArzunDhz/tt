import { HeroImg } from "@/public/images";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <section className="flex items-center mt-10 justify-evenly max-md:flex-col">
        <div className="">
          <p className="text-[70px] max-sm:text-[30px]  text-gradient font-[1000] max-sm:w-[300px] w-[700px] md:text-6xl ">
            Turn Your Imagination into Reality with FauroAI
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
      </section>
    </>
  );
};

export default HeroSection;
