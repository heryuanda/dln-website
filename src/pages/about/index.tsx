import { Button } from "@/components/ui/button";
import aboutHero from "../../assets/about-hero.png";
import certcsms from "../../assets/cert-csms.png";
import certiicl from "../../assets/cert-iicl.png";
import certk3 from "../../assets/cert-k3.png";
import certhalal from "../../assets/cert-halal.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { facilities } from "@/data/facilities";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-end md:flex-row flex-col gap-y-8">
        <div className="pl-4 text-left mr-8 pt-2 w-fit md:text-right 2xl:w-[30%]">
          <p className="text-left md:text-right text-5xl font-bold text-primary-blue mb-4">
            Depo
            <br />
            Lautan
            <br />
            Nusantara
          </p>
          <Button className="bg-primary-orange cursor-pointer">
            {t("about.downloadCompro")}
          </Button>
        </div>
        <div className="pt-2 md:max-w-[30%] 2xl:max-w-[40%] md:px-0 px-4">
          <p
            className="text-sm mb-2"
            dangerouslySetInnerHTML={{ __html: t("about.brief") }}
          ></p>
          <p className="text-primary-blue text-3xl font-bold">
            {t("about.certification")}
          </p>
          <div className="flex gap-6 mt-4">
            <div className="col-span-1">
              <img src={certcsms} alt="cert-csms" className="w-36" />
              <p className="text-center font-medium text-sm">CSMS Indocement</p>
            </div>
            <div className="col-span-1 grid place-items-center gap-y-2">
              <div className="w-24 flex justify-center">
                <img src={certiicl} alt="cert-iicl" />
              </div>
              <div className="w-24 flex justify-center">
                <img src={certk3} alt="cert-k3" />
              </div>
              <div className="w-24 flex justify-center">
                <img src={certhalal} alt="cert-halal" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-end">
          <img src={aboutHero} alt="about-hero" />
        </div>
      </div>
      <div className="py-16 bg-[url(/src/assets/container-bg.png)] bg-bottom bg-cover bg-white/70 bg-blend-overlay">
        <p className="text-center font-bold text-5xl text-primary-blue mb-6">
          {t("about.ourDepotLocation")}
        </p>
        <div className="flex justify-center mb-8">
          <div className="inline-block p-2 bg-white md:p-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4085.3697371177036!2d106.93753324934272!3d-6.160835656495536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698ae8c011b165%3A0xc5c9f8326ebec0d!2sPT%20DEPO%20LAUTAN%20NUSANTARA!5e0!3m2!1sen!2sid!4v1754228227050!5m2!1sen!2sid"
              width="100%"
              height="100%"
              loading="lazy"
              className="w-full md:w-[600px] md:h-[450px]"
            ></iframe>
          </div>
        </div>
        <p className="text-center px-4 md:px-0">{t("about.depotAddress")}</p>
      </div>
      <div className="py-16 px-4">
        <p className=" font-bold md:text-5xl text-2xl text-primary-blue mb-6">
          {t("about.whyChooseUs")}
        </p>
        <div className="">
          <Tabs defaultValue="location">
            <div className="relative overflow-x-auto">
              <TabsList>
                <TabsTrigger value="location">
                  {t("about.why.label.strategicLocation")}
                </TabsTrigger>
                <Separator orientation="vertical" />
                <TabsTrigger value="security">
                  {t("about.why.label.security")}
                </TabsTrigger>
                <Separator orientation="vertical" />
                <TabsTrigger value="quality">
                  {t("about.why.label.quality")}
                </TabsTrigger>
                <Separator orientation="vertical" />
                <TabsTrigger value="operation">
                  {t("about.why.label.operation")}
                </TabsTrigger>
                <Separator orientation="vertical" />
                <TabsTrigger value="warehouse">
                  {t("about.why.label.warehouse")}
                </TabsTrigger>
                <Separator orientation="vertical" />
                <TabsTrigger value="online">
                  {t("about.why.label.online")}
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="location">
              {t("about.why.content.strategicLocation")}
            </TabsContent>
            <TabsContent value="security">
              {t("about.why.content.security")}
            </TabsContent>
            <TabsContent value="quality">
              {t("about.why.content.quality")}
            </TabsContent>
            <TabsContent value="operation">
              {t("about.why.content.operation")}
            </TabsContent>
            <TabsContent value="warehouse">
              {t("about.why.content.warehouse")}
            </TabsContent>
            <TabsContent value="online">
              {t("about.why.content.online")}
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <div className="pb-16 px-4">
        <p className=" font-bold text-primary-blue mb-6 md:text-5xl text-2xl">
          {t("about.ourFacilities")}
        </p>
        <div className="max-w-[85%] mx-auto">
          <Carousel
            className="w-full mx-auto"
            opts={{
              loop: true,
            }}
            plugins={[Autoplay({ delay: 4000 })]}
          >
            <CarouselContent>
              {facilities.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/3">
                  <div className="bg-white p-4 border border-neutral-300 rounded-md">
                    <img
                      src={item.image}
                      alt="image-carousel"
                      className="w-full rounded-md"
                    />
                    <p
                      className="text-center font-medium mt-2"
                      dangerouslySetInnerHTML={{ __html: t(item.label) }}
                    ></p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-10 size-10 border-none text-primary-orange" />
            <CarouselNext className="absolute -right-10 size-10 border-none text-primary-orange" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default About;
