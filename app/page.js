import Booking from "./components/Booking";
import Contact from "./components/Contact";
import EmptyLegs from "./components/EmptyLegs";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import TimeSmartLuxury from "./components/TimeSmartLuxury";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Booking/>
      <EmptyLegs/>
      <Services/>
      <TimeSmartLuxury/>
      <Testimonials/>
      <Contact/>
    </div>
  );
}
