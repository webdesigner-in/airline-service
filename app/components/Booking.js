export default function Booking() {
    return (
      <section className="w-full bg-black text-white py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Side: QR Code & App Preview */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <img
              src="/app-preview.png" // Change this to the correct QR code image
              alt="App QR Code"
              className="w-80 md:w-300 rounded-lg shadow-lg"
            />
          </div>
  
          {/* Right Side: Booking Steps */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-3xl font-bold mb-6 text-center md:text-left">
              Book With Ease
            </h2>
  
            <div className="space-y-6">
              {/* Enquiry */}
              <div className="flex items-start gap-4">
                <span className="text-2xl">📩</span>
                <div>
                  <h3 className="text-lg font-semibold tracking-wide">Enquiry</h3>
                  <p className="text-gray-400">
                    We prioritize listening to you before crafting great deals and personalized flight plans.
                  </p>
                </div>
              </div>
  
              {/* Quote */}
              <div className="flex items-start gap-4">
                <span className="text-2xl">💰</span>
                <div>
                  <h3 className="text-lg font-semibold tracking-wide">Quote</h3>
                  <p className="text-gray-400">
                    We precisely customize quotations to match your specifications, ensuring transparent dealings.
                  </p>
                </div>
              </div>
  
              {/* Book */}
              <div className="flex items-start gap-4">
                <span className="text-2xl">🛫</span>
                <div>
                  <h3 className="text-lg font-semibold tracking-wide">Book</h3>
                  <p className="text-gray-400">
                    We offer an easy booking experience with a variety of aircraft and services for every trip.
                  </p>
                </div>
              </div>
            </div>
          </div>
  
        </div>
      </section>
    );
  }
  