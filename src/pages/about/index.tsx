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

const About = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-end md:flex-row flex-col gap-y-8">
        <div className="pl-4 text-left mr-8 pt-2 w-fit md:text-right">
          <p className="text-left md:text-right text-5xl font-bold text-primary-blue mb-4">
            Depo
            <br />
            Lautan
            <br />
            Nusantara
          </p>
          <Button className="bg-primary-orange">
            Discover Our Company Profile
          </Button>
        </div>
        <div className="pt-2 md:max-w-[30%] md:px-0 px-4">
          <p className="text-sm mb-2">
            Established in 2017 as a subsidiary of Temas Depot which has shown
            consistent growth since 1989. PT Depo Lautan Nusantara (DLN)
            leverages a strong legacy of proven management, extensive
            experience, and robust resources. This foundation positions DLN to
            deliver superior services and exceptional customer satisfaction
            across various industries.
            <br />
            <br />
            DLN specializes in comprehensive container depot services, including
            container handling, storage, cleaning & washing, maintenance &
            repair, transportation, and warehousing. Our operations adhere to
            stringent Health, Safety, and Environmental (HSE) standards. We also
            implement internationally recognized systems and best practices to
            ensure added value and reliability for our clients.
          </p>
          <p className="text-primary-blue text-3xl font-bold">
            Our Sertification
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
        <div className="">
          <img src={aboutHero} alt="about-hero" />
        </div>
      </div>
      <div className="py-16 bg-[url(/src/assets/container-bg.png)] bg-bottom bg-cover bg-white/70 bg-blend-overlay">
        <p className="text-center font-bold text-5xl text-primary-blue mb-6">
          Our Depot Location
        </p>
        <div className="flex justify-center mb-8">
          <div className="inline-block p-2 bg-white md:p-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4085.3697371177036!2d106.93753324934272!3d-6.160835656495536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698ae8c011b165%3A0xc5c9f8326ebec0d!2sPT%20DEPO%20LAUTAN%20NUSANTARA!5e0!3m2!1sen!2sid!4v1754228227050!5m2!1sen!2sid"
              width="100%"
              height="100%"
              loading="lazy"
              className="w-full md:w-[600px]"
            ></iframe>
          </div>
        </div>
        <p className="text-center px-4 md:px-0">
          Jl. Cakung Cilincing Raya KM 2,5 No. 205-207, East Jakarta, Indonesia
          13910
        </p>
      </div>
      <div className="py-16 px-4">
        <p className=" font-bold md:text-5xl text-2xl text-primary-blue mb-6">
          Why Choose Us?
        </p>
        <div className="">
          <Tabs defaultValue="location">
            <div className="relative overflow-x-scroll">
              <TabsList>
                <TabsTrigger value="location">Strategic Location</TabsTrigger>
                <Separator orientation="vertical" />
                <TabsTrigger value="security">24/7 Security</TabsTrigger>
                <Separator orientation="vertical" />
                <TabsTrigger value="quality">
                  High-Quality Standards
                </TabsTrigger>
                <Separator orientation="vertical" />
                <TabsTrigger value="operation">24 Hour Operational</TabsTrigger>
                <Separator orientation="vertical" />
                <TabsTrigger value="warehouse">
                  Integrated with Warehouse
                </TabsTrigger>
                <Separator orientation="vertical" />
                <TabsTrigger value="online">Easy Online Access</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="location">
              Depo Lautan Nusantara is strategically located within a hub of
              major companies and logistics centers, just 3.5 km from the
              nearest toll gate. This prime location ensures easy access and
              high operational efficiency—making it an ideal depot for storage
              and distribution. Our proximity to key logistics routes empowers
              customers to run their business seamlessly and efficiently.
            </TabsContent>
            <TabsContent value="security">
              Our facility is secured with a 24/7 security system and CCTV
              cameras strategically positioned throughout key areas. This
              comprehensive surveillance ensures the safety of customer goods
              and containers, helping to prevent criminal activity and providing
              peace of mind in every storage operation.
            </TabsContent>
            <TabsContent value="quality">
              Our company demonstrates a strong commitment to Health, Safety,
              and Environment (HSE) through the achievement of K3 and CSMS
              certifications, reflecting our strict adherence to workplace
              safety standards. In addition, the quality of our container
              repairs is certified by the Institute of International Container
              Lessors (IICL), ensuring all repair processes meet international
              standards.We also hold a Halal Certificate to guarantee that all
              goods and containers stored in our facility are handled with the
              highest standard of cleanliness in accordance with Halal
              principles. These certifications reflect our dedication to
              delivering safe, high-quality, and professional services in every
              aspect of our operations.
            </TabsContent>
            <TabsContent value="operation">
              DLN operates 24/7 to provide unwavering support for our customers,
              ensuring their business runs smoothly, anytime, every day.
            </TabsContent>
            <TabsContent value="warehouse">
              Depo Lautan Nusantara is directly integrated with a 7,000 m²
              warehouse facility equipped with industry-standard loading docks.
              We are committed to providing customizable warehouse equipment to
              meet our clients' specific needs.This seamless integration between
              depot and warehouse enables faster, more efficient, and
              well-organized transfer, storage, and distribution
              processes—ultimately delivering greater value and competitive
              advantages to our customers.
            </TabsContent>
            <TabsContent value="online">
              Depo Lautan Nusantara offers an E-Faktur system that simplifies
              the process of obtaining VAT transaction receipts, VAT withholding
              documentation, and tax reporting. Our E-Stock system allows
              customers to monitor container inventory and track container
              movements in and out in real-time. Additionally, our EDMS
              (Electronic Depot Management System) provides detailed visibility
              into container activities, access to EORs complete with photo
              documentation, approval processes, and repair photo tracking.
              These digital tools are designed to enhance transparency,
              efficiency, and convenience across every stage of customer
              operations.
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <div className="pb-16 px-4">
        <p className=" font-bold text-primary-blue mb-6 md:text-5xl text-2xl">
          Our Facilities
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
                      className="w-full"
                    />
                    <p
                      className="text-center font-medium mt-2"
                      dangerouslySetInnerHTML={{ __html: item.label }}
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
