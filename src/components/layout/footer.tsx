import { Mail, MessageCircle, Phone } from "lucide-react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="bg-primary-black text-white">
        <div className="container mx-auto px-4 py-10">
          <div className="h-full flex flex-col gap-y-10 w-full md:flex-row md:gap-x-10">
            <div className="flex-1">
              <p className="text-primary-yellow font-bold mb-2 text-2xl">
                Depot Address
              </p>
              <p>
                Jl. Cakung Cilincing Raya KM. 2,5 No. 205-207, Cakung, Jakarta,
                13910, Indonesia.
              </p>
            </div>
            <div className="flex-1">
              <p className="text-primary-yellow mb-2 font-bold text-2xl">
                Office Address
              </p>
              <p>
                Jl. Yos Sudarso Kav. 33, Sunter Jaya, Jakarta Utara, 14350,
                Indonesia.
              </p>
            </div>
            <div className="flex-1">
              <p className="text-primary-yellow mb-2 font-bold text-2xl">
                Contacts
              </p>
              <ul className="flex flex-col gap-y-2">
                <li className="flex items-center gap-x-2">
                  <Mail />
                  <p>jktequ@lanus.co.id</p>
                </li>
                <li className="flex items-center gap-x-2">
                  <Phone />
                  <p>(+62)214606034</p>
                </li>
                <li className="flex items-center gap-x-2">
                  <MessageCircle />
                  <p>(+62)811-1450-899</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-primary-orange text-white text-xs py-2">
        © 2025 PT Depo Lautan Nusantara. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
