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
} from "lucide-react";
import MyNavigationMenu from "./NavigationMenu";

const NavBar = () => {
  return (
    <div>
      <div className="grid grid-cols-3 h-12 bg-neutral-950 text-white font-semiboldbold">
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
          LEVEL 2, NEAR TARGET, WESTFIELD KOTARA
        </div>
      </div>
      <div className="grid grid-cols-3 h-24 bg-neutral-900 text-white">
        <div className="flex items-center justify-start pl-10">
          <Image
            src="/images/logo.png"
            width={70}
            height={70}
            alt="Logo icon image"
          />
        </div>
        <div className="flex items-center justify-center gap-4">
          <MyNavigationMenu />
        </div>
        <div className="flex items-center justify-end pr-10">
          <Button className="bg-yellow-500 hover:bg-white hover:text-yellow-500 font-bold">
            <BookPlus className="mr-2 h-4 w-4" />
            Book a table
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
