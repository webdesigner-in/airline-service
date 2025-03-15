"use client";
import { motion } from "framer-motion";
export default function Hero() {
    return (
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center  px-6 md:px-12">
        {/* Background Gradient */}
        <div className="absolute inset-0 flex items-center justify-between px-14 md:px-32 ">
  
        {/* Content */}
        <div className="max-w-3xl">
          <button className="bg-gradient-to-br from-[#71B3CF] to-[#DFEFFA] text-black px-8 py-3 rounded-lg text-xs font-semibold mb-4 discount_baner_drop_shadow">
            Get 20% Discount on Your First Ride
          </button>
  
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Fly High with <br />
            <span className="text-blue-400">Our Elite Fleet.</span>
          </h1>
  
          <p className="mt-4 text-sm text-gray-200 w-[50ch]">
            Rent top-of-the-line helicopters and airplanes for Business, Leisure, and Emergency Services.
          </p>
  
          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black px-6 text-sm py-2 rounded-lg font-semibold hover:bg-gray-300">
              Book Ride
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black">
              Browse Our Fleet
            </button>
          </div>
        </div>
  
        {/* Airplane Image */}
        <div className="absolute top-20 right-10 md:top-48 md:right-32 w-96 h-60 bg-[#6586FC] opacity-30 blur-3xl rounded-full -z-10"></div>
        <motion.img
          src="/airplane.png" // Place your airplane image inside public/ folder
          alt="Airplane"
          className="absolute top-16 left-8 md:top-20 md:right-20 w-3/5 md:w-1/3"
          animate={{
            y: [-10, 10, -10], // Moves up and down
            x: [10, -10, 10], // Moves left and right
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        </div>
      </section>
    );
  }
  
