import Image from "next/image";
import Carousel from "./Carousel";

const slides = [
  "/images/bg-coffee1.png",
  "/images/bg-coffee2.png",
  "/images/bg-coffee3.png",
];

const MainImage = () => {
  return (
    <div className="flex justify-center py-20 xl:py-32 z-0">
      <Carousel autoSlide={true}>
        {slides.map((slide, id) => (
          <Image
            key={id}
            src={slide}
            width={1280}
            height={500}
            className="object-none justify-center w-full h-[600px]"
            alt="Logo icon image"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default MainImage;
