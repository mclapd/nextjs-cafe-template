import Container from "../Container";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  BookPlus,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Clock,
  MapPin,
  Menu,
} from "lucide-react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="fixed w-full shadow-xl">
      <div className="hidden xl:block">
        <div className="grid grid-cols-3 h-12 bg-neutral-700 text-white font-semiboldbold">
          <div className="flex items-center justify-start pl-10 text-yellow-500">
            <Clock className="mr-2 h-5 w-5" />
            OPENNING HOURS
          </div>
          <div className="flex items-center justify-center gap-4">
            <div>
              <Facebook className="mr-2 h-5 w-5" />
            </div>
            <div>
              <Twitter className="mr-2 h-5 w-5" />
            </div>
            <div>
              <Instagram className="mr-2 h-5 w-5" />
            </div>
            <div>
              <Youtube className="mr-2 h-5 w-5" />
            </div>
          </div>
          <div className="flex items-center justify-end pr-10">
            <MapPin className="mr-2 h-5 w-5 text-yellow-500" />
            <span className="text-yellow-500 mr-3">LOCATION: </span>
            L2, WESTFIELD KOTARA
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 h-24 bg-white text-neutral-700">
        <div className="flex items-center justify-start pl-10">
          <Image
            src="/images/logo.png"
            width={70}
            height={70}
            alt="Logo icon image"
          />
        </div>
        <div className="flex items-center justify-center gap-4 font-bold">
          <Link href="#" className="hidden sm:flex">
            ABOUT
          </Link>
          <Link href="#" className="hidden sm:flex">
            MENU
          </Link>
          <Link href="#" className="hidden sm:flex">
            CONTACTS
          </Link>
        </div>
        <div className="flex flex-row items-center justify-end pr-10">
          <div className="hidden sm:flex">
            <Button className="bg-neutral-700 hover:bg-neutral-300 hover:text-neutral-700 font-bold">
              <BookPlus className="mr-2 h-4 w-4" />
              Book a table
            </Button>
          </div>
          <div className="flex sm:hidden cursor-pointer">
            <Menu className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
