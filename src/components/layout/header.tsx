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
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { CheckIcon, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

type Lang = {
  code: string;
  label: string;
  logo: string;
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const languages = [
    { code: "en", label: "English", logo: "/locales/en.png" },
    { code: "id", label: "Indonesia", logo: "/locales/id.png" },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const [selectedLanguage, setSelectedLanguage] = useState<Lang>();

  useEffect(() => {
    const defaultLang = localStorage.getItem("i18nextLng");
    setSelectedLanguage(
      languages.filter((item) => item.code === defaultLang)[0]
    );
  }, []);

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
                        {t("nav.home")}
                      </NavLink>
                      <NavLink
                        to="/about"
                        onClick={() => setOpen(false)}
                        className="text-gray-700 mobile-web hover:text-orange-500 transition-colors border rounded-md py-2 px-4"
                      >
                        {t("nav.about")}
                      </NavLink>
                      <NavLink
                        to="/services"
                        onClick={() => setOpen(false)}
                        className="text-gray-700 mobile-web hover:text-orange-500 transition-colors border rounded-md py-2 px-4"
                      >
                        {t("nav.services")}
                      </NavLink>
                      <NavLink
                        to="/contact"
                        onClick={() => setOpen(false)}
                        className="text-gray-700 mobile-web hover:text-orange-500 transition-colors border rounded-md py-2 px-4"
                      >
                        {t("nav.contactUs")}
                      </NavLink>
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
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink
                to="/about"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                {t("nav.about")}
              </NavLink>
              <NavLink
                to="/services"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                {t("nav.services")}
              </NavLink>
              <NavLink
                to="/contact"
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                {t("nav.contactUs")}
              </NavLink>
            </nav>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <span className="uppercase">{selectedLanguage?.code}</span>
                  <img src={selectedLanguage?.logo} className="w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {languages.map((item, index) => (
                  <DropdownMenuItem
                    key={"lang-" + index}
                    className="flex items-center justify-between"
                    onClick={() => {
                      changeLanguage(item.code);
                      setSelectedLanguage(item);
                    }}
                  >
                    <span>{item.label}</span>
                    {selectedLanguage?.code === item.code && (
                      <CheckIcon className="h-5 w-5" />
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
