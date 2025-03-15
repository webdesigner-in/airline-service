export default function EmptyLegs() {
    return (
      <section className="w-full bg-black text-white py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 w-2/3 leading-[1.2]">
              Great Deals on Empty Legs with JetSteals™
            </h2>
            <p className="text-gray-400 mb-6 w-fit">
              Empty Legs offer great deals on private jet flights if you happen to be going where we’re flying that day.
              It’s also a great way to try private jet travel at a much lower cost than normal – perhaps getting a group of 
              friends together for a truly exceptional travel experience. Download the JetSteals™ app to get notifications 
              of our current empty legs at very affordable rates.
            </p>
            <button className="px-6 py-3 bg-gradient-to-br from-[#7CC1DC] to-[#223D39] rounded-lg text-black font-semibold text-xs">
              Explore Now
            </button>
          </div>
  
          {/* Right Side: Airplane Image */}
          <div className="relative w-full md:w-1/3 flex justify-center">
            <img
              src="/empty-legs-plane.png" // Replace with actual image path
              alt="Empty Legs Airplane"
              className="w-96 md:w-[400px] lg:w-[500px] transition-transform duration-500 hover:scale-105"
            />
          </div>
  
        </div>
      </section>
    );
  }
  
