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

type Service = {
  label: string;
  image: string;
  description: string;
};

const Services = () => {
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service>(services[0]);
  return (
    <div className="container mx-auto py-16">
      <div className="max-w-[90%] mx-auto">
        <p className=" font-bold md:text-5xl text-3xl text-center text-primary-blue mb-8 md:mb-16">
          Our Depot Services
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((item) => (
            <div className="rounded-md p-6 bg-white shadow-xl hover:scale-105 transition-all border border-neutral-200">
              <img src={item.image} className="w-full" />
              <div className="flex w-full justify-between mt-4">
                <p className="font-medium">{item.label}</p>
                <Button
                  size={"sm"}
                  className="bg-primary-orange cursor-pointer"
                  onClick={() => {
                    setOpen(true);
                    setSelectedService(item);
                  }}
                >
                  View Detail
                </Button>
              </div>
              {/* <p className="font-medium mt-2">{item.description}</p> */}
            </div>
          ))}
        </div>
        <div className="mt-20">
          <p className=" font-bold md:text-5xl text-3xl text-center text-primary-blue mb-16">
            Our Depot Online Services
          </p>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-x-10">
            {online.map((item) => (
              <div className="relative flex flex-col justify-between gap-y-4 border-l-4 border-l-primary-orange py-4 px-6 ">
                <div className="">
                  <p className="font-bold text-2xl mb-2">{item.label}</p>
                  <p className="text-neutral-600">{item.description}</p>
                </div>
                <div className="flex w-full justify-between items-center">
                  <span className="material-symbols-outlined !text-[60px] text-primary-orange/40">
                    {item.icon}
                  </span>
                  <Button asChild className="bg-primary-orange">
                    <a href={item.link} target="_blank">
                      Visit Here
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
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <img src={item.image} className="mb-3 w-full" />
          <DialogTitle className="text-center">{item.label}</DialogTitle>
        </DialogHeader>
        <p className="text-neutral-600">{item.description}</p>
      </DialogContent>
    </Dialog>
  );
};

export default Services;
