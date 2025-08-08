import { NavLink } from "react-router-dom";
import logo from "../../assets/logo-dln.png";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white shadow-sm fixed left-0 top-0 w-full z-10">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Sheet onOpenChange={(open) => setOpen(open)} open={open}>
              <SheetTrigger className="md:hidden">
                <Menu />
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>
                    <img src={logo} alt="logo" className="h-10" />
                  </SheetTitle>
                  <SheetDescription>
                    <nav className="flex flex-col w-full gap-y-2 mt-6">
                      <NavLink
                        onClick={() => setOpen(false)}
                        to="/"
                        className="text-gray-700 mobile-web hover:text-orange-500 transition-colors border rounded-md py-2 px-4
                        "
                      >
                        Home
                      </NavLink>
                      <NavLink
                        to="/about"
                        onClick={() => setOpen(false)}
                        className="text-gray-700 mobile-web hover:text-orange-500 transition-colors border rounded-md py-2 px-4"
                      >
                        About Us
                      </NavLink>
                      <NavLink
                        to="/services"
                        onClick={() => setOpen(false)}
                        className="text-gray-700 mobile-web hover:text-orange-500 transition-colors border rounded-md py-2 px-4"
                      >
                        Services
                      </NavLink>
                      {/* <NavLink
              to="/search"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Search
            </NavLink> */}
                      <NavLink
                        to="/contact"
                        onClick={() => setOpen(false)}
                        className="text-gray-700 mobile-web hover:text-orange-500 transition-colors border rounded-md py-2 px-4"
                      >
                        Contact Us
                      </NavLink>

                      {/* Language Selector */}
                      {/* <div className="flex items-center space-x-1">
              <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium">
                EN
              </span>
              <span className="text-gray-500">/</span>
              <span className="text-gray-700 text-sm">ID</span>
            </div> */}
                    </nav>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
            <NavLink
              to="/"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              <img src={logo} alt="logo" className="md:h-14 h-10" />
            </NavLink>
          </div>

          {/* Navigation */}

          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/about"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Services
            </NavLink>
            {/* <NavLink
              to="/search"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Search
            </NavLink> */}
            <NavLink
              to="/contact"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Contact Us
            </NavLink>

            {/* Language Selector */}
            {/* <div className="flex items-center space-x-1">
              <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium">
                EN
              </span>
              <span className="text-gray-500">/</span>
              <span className="text-gray-700 text-sm">ID</span>
            </div> */}
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
