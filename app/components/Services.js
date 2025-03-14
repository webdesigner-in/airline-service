const services = [
    {
      title: "Aircraft Management",
      description: "Efficient oversight, scheduling, maintenance, compliance, safety, cost control, and crew coordination.",
    },
    {
      title: "Aircraft Sourcing & Sales",
      description: "Aircraft sourcing and sales involve procurement, negotiations, valuation, brokerage, and market analysis.",
    },
    {
      title: "Advanced Air Mobility",
      description: "Future-focused, sustainable, urban transportation using innovative aerial technologies.",
    },
    {
      title: "Charter Services",
      description: "Luxury travel, exclusive experiences, flexible schedules, and private transportation.",
    },
    {
      title: "MRO",
      description: "MRO in aircraft services ensures maintenance, repair, and overhaul for safety.",
    },
    {
      title: "Aviation Consultancy",
      description: "Expert advice on aviation operations, safety, regulations, and efficiency improvement.",
    },
  ];
  
  export default function Services() {
    return (
      <section className="w-full bg-black text-white py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
  
          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 cursor-pointer rounded-lg shadow-lg transition-transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 w-[36ch]">{service.description}</p>
                <button className="mt-4 text-blue-500 hover:underline">View More →</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  