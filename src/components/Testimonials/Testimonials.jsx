"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const cards = [
  {
    title: "Etez Rehman",
    position: "Development Manager, SME",
    testimonial:
      "From capturing leads to tracking deals and automating follow-ups, every feature is intuitive and saves our team hours each week.",
    description:
      "From capturing leads to tracking deals and automating follow-ups, every feature is intuitive close more deals than ever before.",
    imgSrc: "/testimonials/b.png",
    imgAlt: "Etez Image",
  },
  {
    title: "John Doe",
    position: "CEO, Tech Solutions",
    testimonial:
      "This service has changed the way our business operates. We have streamlined our process and gained invaluable insights into our sales flow.",
    description:
      "From capturing leads to tracking deals and automating follow-ups, every feature is intuitive close more deals than ever before.",
    imgSrc: "/testimonials/c.png",
    imgAlt: "John Image",
  },
  {
    title: "Jane Smith",
    position: "Product Manager, InnovateX",
    testimonial:
      "I recommend LeadsBox to anyone looking to automate their sales processes and gain more visibility into their pipeline.",
    description:
      "From capturing leads to tracking deals and automating follow-ups, every feature is intuitive close more deals than ever before.",
    imgSrc: "/testimonials/b.png",
    imgAlt: "Jane Image",
  },
  {
    title: "Sadia Rehman",
    position: "Sales Manager, Tech Company",
    testimonial:
      "LeadsBox has completely transformed how we manage our sales pipeline!",
    description:
      "From capturing leads to tracking deals and automating follow-ups, every feature is intuitive close more deals than ever before.",
    imgSrc: "/testimonials/a.png",
    imgAlt: "Sadia Image",
  },
  {
    title: "Sadia Rehman",
    position: "Sales Manager, Tech Company",
    testimonial:
      "LeadsBox has completely transformed how we manage our sales pipeline!",
    description:
      "From capturing leads to tracking deals and automating follow-ups, every feature is intuitive close more deals than ever before.",
    imgAlt: "Sadia Image",
  },
  {
    title: "Sadia Rehman",
    position: "Sales Manager, Tech Company",
    testimonial:
      "LeadsBox has completely transformed how we manage our sales pipeline!",
    description:
      "From capturing leads to tracking deals and automating follow-ups, every feature is intuitive close more deals than ever before.",
    imgAlt: "Sadia Image",
  },
];

const Slider = () => {
  return (
    <div className="" dir="ltr">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        freeMode={true}
        speed={7000}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={20}
        loop={true}
        initialSlide={1}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1536: {
            slidesPerView: 3.5,
            spaceBetween: 10,
          },
        }}
        className="ourclient"
      >
        {cards.map((card, index) => (
          <SwiperSlide
            key={index + card.title}
            className="
           
              w-[480px]
            "
          >
            <div className="rounded-[16px] h-[220px] md:h-[250px] lg:h-[270px] ">
              <div className="bg-[#F7F6EF] p-4 lg:p-8 flex flex-col gap-3  rounded-[16px]">
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-start  mb-2">
                    <Image
                      src="/1.png"
                      alt="Quote Icon"
                      width={40}
                      height={40}
                      className="w-6 h-6 lg:w-10 lg:h-10"
                    />
                  </div>

                  <div className="flex-1 flex flex-col ">
                    {/* <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-[700] text-[#222E48] leading-tight line-clamp-3">
                      {card.testimonial}
                    </p> */}

                    <div className="flex-1  ">
                      <p className="text-[13px] sm:text-[14px] lg:text-[15px] font-[400] text-[#222E48] ">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className=" text-black ">
                    <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-[700] drop-shadow-md">
                      {card.title}
                    </h3>
                    <p className="text-[13px] sm:text-[14px] lg:text-[16px] font-[400] drop-shadow-md">
                      {card.position}
                    </p>
                  </div>
                  <div>
                    <p className="text-[12px]">REVIEWED IN</p>
                    <Image
                      src="/linkdin.png"
                      alt="Quote Icon"
                      width={300}
                      height={300}
                      className="w-12 h-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
      `}</style> */}
    </div>
  );
};

export default Slider;
