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
    <div className="container mx-auto py-16">
      <div className="max-w-[90%] mx-auto">
        <p className=" font-bold md:text-5xl text-3xl text-center text-primary-blue mb-8 md:mb-16">
          {t("services.ourDepotServices")}
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((item, index) => (
            <div
              key={"service-" + index}
              className="rounded-md p-6 bg-white shadow-xl hover:scale-105 transition-all border border-neutral-200"
            >
              <img src={item.image} className="w-full" />
              <div className="flex w-full justify-between mt-4 gap-x-2">
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
          <div className="grid md:grid-cols-3 grid-cols-1 gap-x-10">
            {online.map((item, index) => (
              <div
                key={"online-" + index}
                className="relative flex flex-col justify-between gap-y-4 border-l-4 border-l-primary-orange py-4 px-6 "
              >
                <div className="">
                  <p className="font-bold text-2xl mb-2">{t(item.label)}</p>
                  <p className="text-neutral-600">{t(item.description)}</p>
                </div>
                <div className="flex w-full justify-between items-center gap-x-2">
                  <span className="material-symbols-outlined !text-[60px] text-primary-orange/40">
                    {item.icon}
                  </span>
                  <Button asChild className="bg-primary-orange">
                    <a href={item.link} target="_blank">
                      {t("services.visitHere")}
                    </a>
                  </Button>
                </div>
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
