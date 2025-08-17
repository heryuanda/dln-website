import { services } from "@/data/services";
import { online } from "@/data/online-service";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type Service = {
  label: string;
  image: string;
  description: string;
};

const Services = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service>(services[0]);
  return (
    <div className="container mx-auto md:py-16 py-10">
      <div className="max-w-[100%] mx-auto md:px-8 px-4">
        <p className=" font-bold md:text-5xl text-3xl text-center text-primary-blue mb-8 md:mb-16">
          {t("services.ourDepotServices")}
        </p>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2 2xl:grid-cols-4 sm:grid-cols-2">
          {services.map((item, index) => (
            <div
              key={"service-" + index}
              className="rounded-md p-6 bg-white shadow-xl hover:scale-105 transition-all border border-neutral-200"
            >
              <img src={item.image} className="w-full rounded-lg" />
              <div className="flex w-full justify-between mt-4 gap-x-2 items-center md:items-start">
                <p className="font-medium">{t(item.label)}</p>
                <Button
                  size={"sm"}
                  className="bg-primary-orange cursor-pointer"
                  onClick={() => {
                    setOpen(true);
                    setSelectedService(item);
                  }}
                >
                  {t("services.viewDetail")}
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20">
          <p className=" font-bold md:text-5xl text-3xl text-center text-primary-blue mb-16">
            {t("services.online")}
          </p>
          <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8">
            {online.map((item, index) => (
              <div
                key={"online-" + index}
                className="relative flex flex-col justify-between bg-primary-orange/5 border border-primary-orange/50 p-6 rounded-md"
              >
                <div className="">
                  <div className="flex items-center justify-between mb-4 gap-x-2">
                    <div className="flex items-center gap-x-3">
                      <item.icon
                        className="text-primary-orange/100"
                        size={32}
                      />

                      <p className="font-bold text-2xl xs:text-2xl whitespace-nowrap">
                        {t(item.label)}
                      </p>
                    </div>
                    <Button asChild className="bg-primary-orange">
                      <a href={item.link} target="_blank">
                        {t("services.visitHere")}
                      </a>
                    </Button>
                  </div>
                  <p className="text-neutral-600">{t(item.description)}</p>
                </div>
                <div className="flex w-full justify-between items-center gap-x-2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <DialogBox open={open} setOpen={setOpen} item={selectedService} />
    </div>
  );
};

const DialogBox = ({
  open,
  setOpen,
  item,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  item: Service;
}) => {
  const { t } = useTranslation();
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <img src={item.image} className="mb-3 w-full" />
          <DialogTitle className="text-center">{t(item.label)}</DialogTitle>
        </DialogHeader>
        <p className="text-neutral-600">{t(item.description)}</p>
      </DialogContent>
    </Dialog>
  );
};

export default Services;
