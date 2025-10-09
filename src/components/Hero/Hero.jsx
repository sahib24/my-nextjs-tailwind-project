"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import Image from "next/image";

const images = [
  { src: "/quickview/1.png", alt: "Slide 1" },
  { src: "/quickview/2.jpg", alt: "Slide 2" },
  { src: "/quickview/3.jpg", alt: "Slide 3" },
  { src: "/quickview/4.jpg", alt: "Slide 4" },
  { src: "/quickview/5.jpg", alt: "Slide 5" },
  { src: "/quickview/6.jpg", alt: "Slide 6" },
];

const Slider = () => {
  return (
    <div className="pb-6 pt-10">
      <h2 className="text-[16px] sm:text-[19px] md:text-[21px] lg:text-[24px] font-[500] mb-14 text-center max-w-[800px] text-gray-500 leading-none mx-auto ">
        Computer programming or coding is the composition of sequences of
        instructions.
      </h2>

      <Swiper
        modules={[EffectCoverflow, Pagination, Autoplay]}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          depth: 400,
          modifier: 1.5,
          slideShadows: false,
        }}
        // breakpoints={{
        //   900: {
        //     spaceBetween: 260,
        //   },
        // }}
        loop={true}
        pagination={{ clickable: true }}
        className="mySwiper"
        // style={{ minHeight: "500px" }}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index + image.alt}
            className="!w-[40%]"
            // style={{ width: "60%" }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={800}
              className="w-full h-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
