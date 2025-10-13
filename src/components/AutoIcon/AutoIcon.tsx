// "use client";
// import React from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";

// const logos = [
//   "/AutoIcon/1.png",
//   "/AutoIcon/2.png",
//   "/AutoIcon/3.png",
//   "/AutoIcon/4.png",
//   "/AutoIcon/5.png",
//   "/AutoIcon/6.png",
//   "/AutoIcon/4.png",
// ];

// const Autoicons = () => {
//   return (
//     <div className="custom-container text-center mt-4 py-10">
//       <div className="w-full mb-4" dir="rtl">
//         {" "}
//         <Swiper
//           modules={[Autoplay]}
//           loop={true}
//           freeMode={true}
//           autoplay={{
//             delay: 0,
//             disableOnInteraction: false,
//           }}
//           speed={3000}
//           grabCursor={true}
//           breakpoints={{
//             0: { slidesPerView: 3 },
//             768: { slidesPerView: 6 },
//           }}
//           spaceBetween={0}
//           className="ourclient"
//         >
//           {logos.map((logo, index) => (
//             <SwiperSlide key={index}>
//               <div className="flex justify-center items-center">
//                 <Image
//                   src={logo}
//                   alt={`client logo ${index + 1}`}
//                   width={50}
//                   height={50}
//                   className="w-20 h-10 object-contain"
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Autoicons;
