import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "./themetoggle";

const Navbar = () => {
  return (
    <>
      <nav className="w-full ">
        <ul className="flex items-center justify-end p-2 px-4 space-x-5 ">
          <li>
            <ModeToggle />
          </li>
          <li>
            <Link href={"/login"}>SignIn </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
