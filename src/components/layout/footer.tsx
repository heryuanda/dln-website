import { Mail, MessageCircle, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer text-sm">
      <div className="bg-primary-black text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="h-full flex flex-col gap-y-10 w-full md:flex-row md:gap-x-10">
            <div className="flex-1">
              <p className="text-primary-yellow font-bold mb-2 text-xl">
                {t("footer.depotAddress")}
              </p>
              <p>
                Jl. Cakung Cilincing Raya KM. 2,5 No. 205-207, Cakung, Jakarta,
                13910, Indonesia.
              </p>
            </div>
            <div className="flex-1">
              <p className="text-primary-yellow mb-2 font-bold text-xl">
                {t("footer.officeAddress")}
              </p>
              <p>
                Jl. Yos Sudarso Kav. 33, Sunter Jaya, Jakarta Utara, 14350,
                Indonesia.
              </p>
            </div>
            <div className="flex-1">
              <p className="text-primary-yellow mb-2 font-bold text-xl">
                {t("footer.contact")}
              </p>
              <div className="flex md:flex-row flex-col gap-y-2 gap-x-2">
                <div className="flex flex-1 flex-col gap-y-2">
                  <div className="flex items-center gap-x-2">
                    <Mail size={16} />
                    <p>jktequ@lanus.co.id</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <Phone size={16} />
                    <p>(+62-21)4606034</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-y-2">
                  <div className="flex items-center gap-x-2">
                    <MessageCircle size={16} />
                    <p>(+62)811-1450-899</p>
                  </div>
                </div>
              </div>
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
