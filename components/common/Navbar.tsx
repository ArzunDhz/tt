"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "./themetoggle";
import Image from "next/image";
import { LogoImg } from "@/public/images";
import { useSession } from "next-auth/react";

import { DropdownMenuCheckboxes } from "./ProfileBox";
const Navbar = () => {
  const data = useSession();

  return (
    <>
      <nav className="flex items-center justify-between w-full ">
        <div className="flex items-center">
          <Image src={LogoImg} alt="logo" className="w-20" />
          <h1 className="text-4xl font-bold max-sm:text-xl ">Fauro</h1>
        </div>
        <ul className="flex items-center mr-2 space-x-4">
          <li>
            <ModeToggle />
          </li>
          <li>
            {data?.data ? (
              <DropdownMenuCheckboxes />
            ) : (
              <Link href={"/login"}>Login </Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
