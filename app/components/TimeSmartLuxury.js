export default function TimeSmartLuxury() {
  return (
    <section className="w-full bg-cover bg-center text-white py-16 px-6 md:px-12 relative">
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Left Side: Why We Are Luxury */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">
            Why Choose Luxury Travel?
          </h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-2xl">🛬</span> Exclusive VIP terminals for a
              seamless experience.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">⏳</span> Minimal wait times with
              expedited boarding.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🛩️</span> Personalized flight schedules
              to fit your needs.
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🔒</span> High-end privacy and security
              for VIP travelers.
            </li>
          </ul>
        </div>

        {/* Right Side: Heading, Description, CTA */}
        <div className="w-full md:w-1/2 flex flex-col items-start md:items-start text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 tracking-wider leading-[1.2]">
            Time-Smart Luxury <br/> At Your Command
          </h2>
          <p className="text-gray-300 mb-4 w-[70%]">
            Enjoy premium travel with no delays—just seamless, efficient, and
            exclusive journeys.
          </p>
          <button className="px-6 py-3 bg-gradient-to-br from-[#7CC1DC] to-[#223D39] rounded-lg text-black font-semibold text-xs">
              Learn More
            </button>
        </div>
      </div>
    </section>
  );
}
