"use client";
import { MobileSidebar } from "@/components/generate/MobileSideBar";
import Sidebar from "@/components/generate/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useToggle } from "@/store/store";
import { FlameIcon, Settings } from "lucide-react";

const Generate = () => {
  const toggle = useToggle((state) => state.showToggle);
  const switchMobileToggle = useToggle((state) => state.switchToggle);
  return (
    <>
      <section className="flex ">
        {/* sidebar portion */}
        <div className="">
          <Sidebar />
        </div>
        {/* left section */}
        <div className="flex flex-col items-center w-full space-x-4">
          {/* input section */}

          <div className="flex justify-center w-full">
            <Input
              type="text"
              className=""
              placeholder="Enter your prompt..."
            />
            <Button className="px-4 rounded-sm bg-gradient-to-bl  from-[#D750A6] via-[#A057F6] to-[#6E7AFB] ">
              Generate
              <FlameIcon className="ml-3 fill-white stroke-white" />
            </Button>
          </div>
          <div className="flex items-center mt-3 space-x-3">
            <Switch />
            <Input
              type="text"
              className=" w-[1090px] max-2xl:w-[700px] max-xl:w-[600px]  max-lg:w-fit"
              placeholder="Enter Negative Prompt..."
              disabled
            />
            <Settings
              onClick={() => switchMobileToggle()}
              className="hidden max-md:block"
            />
          </div>

          {/* image section */}
          <div className="flex justify-center mt-8 h-[400px] w-[400px] max-lg:w-[320px]   ">
            <div className="flex flex-col items-center justify-center h-full w-[400px] space-y-5 border-2  border-opacity-40 rounded-sm max-lg:w-full border-slate-400 ">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
              <h1 className=" text-stone-700">
                Image generated will be displayed here
              </h1>
            </div>
          </div>

          {/* end of image section */}

          {/* setting for mobile */}
          {toggle && <MobileSidebar />}
        </div>
      </section>
    </>
  );
};

export default Generate;
