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

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="hero-section">
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
            {carousels.map((item, index) => (
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
