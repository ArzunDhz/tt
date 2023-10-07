"use client";
import { signOut, useSession } from "next-auth/react";
import * as React from "react";
import {
  DropdownMenuCheckboxItemProps,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Cloud, LifeBuoy, LogOut } from "lucide-react";

type Checked = DropdownMenuCheckboxItemProps["checked"];
export function DropdownMenuCheckboxes() {
  const data = useSession();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          src={data?.data?.user?.image!}
          width={40}
          height={40}
          alt="user"
          className="rounded-full "
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-5 cursor-pointer">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem>Profile</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>DashBoard</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Setting</DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem className="cursor-pointer ">
          <LogOut className="w-4 text-red-400" />
          <p onClick={() => signOut()}>Logout</p>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
