import Sidebar from "@/components/generate/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SettingIcon } from "@/public/icons";
import { Dna, FlameIcon, Settings } from "lucide-react";
import React from "react";

const Generate = () => {
  return (
    <>
      <section className="flex ">
        <div className="">
          <Sidebar />
        </div>
        <div className="flex justify-center w-full h-full space-x-4">
          <Input
            type="text"
            className="w-[75%] "
            placeholder="Enter your prompt..."
          />
          <Button className="px-4 rounded-sm bg-gradient-to-bl  from-[#D750A6] via-[#A057F6] to-[#6E7AFB] ">
            Generate
            <FlameIcon className="ml-3 fill-white stroke-white" />
          </Button>
        </div>
      </section>
    </>
  );
};

export default Generate;
