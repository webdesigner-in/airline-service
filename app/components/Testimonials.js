"use client"; // Required for Swiper in Next.js

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Michael Johnson",
    position: "CEO, Luxury Travels",
    review:
      "An absolutely seamless experience! The VIP treatment and the time efficiency are unmatched.",
  },
  {
    name: "Sarah Williams",
    position: "Business Executive",
    review:
      "Flying with this service was a game-changer. No waiting, complete privacy, and total comfort.",
  },
  {
    name: "James Anderson",
    position: "Frequent Flyer",
    review:
      "The best luxury flight experience I've ever had. Everything was tailored perfectly to my needs!",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">What Our Clients Say</h2>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
                <p className="text-lg italic mb-4">“{testimonial.review}”</p>
                <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                <p className="text-gray-400">{testimonial.position}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
