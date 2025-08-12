import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { carousels } from "@/data/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { useTranslation } from "react-i18next";

type SupportedLang = "en" | "id";

const Home = () => {
  const { i18n } = useTranslation();
  const carouselImage = carousels[i18n.language as SupportedLang];
  return (
    <div className="container mx-auto">
      <div className="hero-section md:py-0 py-10 md:bg-white bg-accent">
        <Carousel
          className="w-full mx-auto"
          opts={{
            align: "center",
            containScroll: false,
            loop: true,
          }}
          plugins={[Autoplay({ delay: 4000 }), Fade()]}
        >
          <CarouselContent>
            {carouselImage.map((item, index) => (
              <CarouselItem key={index}>
                <img src={item} alt="image-carousel" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 bg-primary-blue border-none text-primary-orange" />
          <CarouselNext className="absolute right-4 bg-primary-blue border-none text-primary-orange" />
        </Carousel>
      </div>
    </div>
  );
};
export default Home;
