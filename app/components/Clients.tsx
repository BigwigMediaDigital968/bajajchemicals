"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import client1 from "../assets/logo.png";
import client2 from "../assets/logo.png";
import client3 from "../assets/logo.png";
import client4 from "../assets/logo.png";
import client5 from "../assets/logo.png";
import client6 from "../assets/logo.png";
import client7 from "../assets/logo.png";
import client8 from "../assets/logo.png";
import client9 from "../assets/logo.png";
import client10 from "../assets/logo.png";

const clients = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
];

export default function ClientsSection() {
  return (
    <section className="pt-12 overflow-hidden">
      <div className="w-11/12 md:w-5/6 mx-auto overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3500}
          loop
          slidesPerView={2}
          spaceBetween={40}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {clients.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-20">
                <Image
                  src={logo}
                  alt="Client logo"
                  className="h-14 w-auto  transition duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
