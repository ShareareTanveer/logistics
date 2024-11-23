import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    id: 1,
    title: "Import, Export, and Supplier",
    description:
      "Atlas Logistics Express excels in import, export, and supplier services, ensuring seamless international trade.",
    image: "/corporate/carousel-1.jpg",
  },
  {
    id: 2,
    title: "Machineries Importer & Distribution",
    description:
      "We specialize in importing and distributing all kinds of machineries with utmost efficiency.",
    image: "/corporate/carousel-2.jpg",
  },
  {
    id: 3,
    title: "Comprehensive Logistic Services",
    description:
      "Providing top-notch logistic solutions for businesses, ensuring smooth and secure deliveries.",
    image: "/corporate/carousel-3.jpg",
  },
  {
    id: 4,
    title: "Custom Pad and Visiting Card Design",
    description:
      "Enhance your brand identity with custom-designed pads and visiting cards tailored to your needs.",
    image: "/corporate/carousel-4.avif",
  },
];

const AtlasCarousel = () => {
  return (
    <div className="relative bg-gray-100 py-12 overflow-visible">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        Atlas Logistics Express
      </h2>
      <p className="text-center text-lg mb-12 max-w-4xl mx-auto px-4">
        We are your trusted partner for import, export, and supplier services,
        specializing in machineries and providing exceptional logistics
        solutions. Visit us at{" "}
        <a
          href="https://atlaslogisticsexpress.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lime-700 underline font-medium"
        >
          atlaslogisticsexpress.com
        </a>
        .
      </p>
      <Carousel className="container">
        <CarouselContent className="-ml-2 flex">
          {slides.map((slide) => (
            <CarouselItem
              key={slide.id}
              className="pl-2 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-2">
                {/* Consistent height for the card */}
                <Card className="h-[350px] flex flex-col">
                  <CardContent className="flex flex-col justify-between p-4 flex-1">
                    {/* Fixed height for the image */}
                    <div className="flex-grow-0">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="rounded-md h-40 w-full object-cover"
                      />
                    </div>
                    {/* Ensure text content fills remaining space */}
                    <div className="flex flex-col justify-between flex-grow mt-4">
                      <h3 className="text-xl font-bold text-center mb-2">
                        {slide.title}
                      </h3>
                      <p className="text-sm text-gray-600 text-center">
                        {slide.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-gray-800 text-white rounded-full p-4 shadow-lg cursor-pointer" />
        <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-gray-800 text-white rounded-full p-4 shadow-lg cursor-pointer" />
      </Carousel>
    </div>
  );
};

export default AtlasCarousel;
