import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-950 text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* Left Side: Logo & Description */}
        <div className="w-full md:w-1/3">
        <Image
                  src="/JetsetGo.svg"
                  width={150}
                  height={150}
                  alt="Logo of the website."
                />
          <p className="text-gray-400 mt-6">
          JetSetGo, a trusted choice for those valuing time, service, and reliability. Explore unique features to customize your private flying experience your way.
          </p>
        </div>

        {/* Center: Navigation Links */}
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-white transition">Products</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Our Fleet</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">News & Media</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Membership</a></li>
          </ul>
        </div>

        {/* Right Side: Social Media & Extras */}
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="text-gray-400 hover:text-white transition text-xl"><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-white transition text-xl"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-white transition text-xl"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-white transition text-xl"><FaLinkedin /></a>
            <a href="#" className="text-gray-400 hover:text-white transition text-xl"><FaYoutube /></a>
          </div>

          <h3 className="text-xl font-semibold mb-4">More Info</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-white transition">Terms & Conditions</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom: Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} JetSet Go. All rights reserved.
      </div>
    </footer>
  );
}
