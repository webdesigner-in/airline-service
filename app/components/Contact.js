"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    alert("Thank you! We will get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-full  text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side: Services We Help With */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">How Can We Help?</h2>
          <p className="text-gray-400 mb-6">
            We provide immediate assistance for the following services:
          </p>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3">
              ✈️ <span>Private Jet Bookings</span>
            </li>
            <li className="flex items-center gap-3">
              ⚡ <span>Urgent & Emergency Flights</span>
            </li>
            <li className="flex items-center gap-3">
              🎟️ <span>Last-Minute Luxury Travel</span>
            </li>
            <li className="flex items-center gap-3">
              🔒 <span>Exclusive VIP Airport Services</span>
            </li>
            <li className="flex items-center gap-3">
              🌍 <span>International Charter Flights</span>
            </li>
          </ul>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full md:w-1/2 bg-/10 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-gray-700 text-white outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-gray-700 text-white outline-none"
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-3 rounded-md bg-gray-700 text-white outline-none"
              />
            </div>
            <button type="submit" className=" w-full px-6 py-3 bg-gradient-to-br from-[#7CC1DC] to-[#223D39] rounded-lg text-black font-semibold text-xs">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
