"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, type: "just" }}
      >
        <p className="text-[16px] sm:text-[19px] md:text-[21px] lg:text-[28px] font-[700] mb-4 text-center  text-black leading-none mx-auto ">
          Hero Section
        </p>
      </motion.div>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, type: "just" }}
      >
        <h2 className="text-[16px] sm:text-[19px] md:text-[20px] lg:text-[20px] font-[500] mb-14 text-center max-w-[600px] text-gray-500 leading-snug mx-auto ">
          Computer programming or coding is the composition of sequences of
          instructions.
        </h2>
      </motion.div>

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
