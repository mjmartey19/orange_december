import Activities from "@/components/Activities";
import BookNow from "@/components/BookNow";
import About from "@/components/About";
import Countdown from "@/components/Countdown";
import FAQs from "@/components/FAQs";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "@/components/Hero";
import HighlightTrip from "@/components/HightlightTrip";
import JoinUs from "@/components/JoinUs";
import Packages from "@/components/Packages";
import WhyTrip from "@/components/WhyTrip";
import PartnerLogos from "@/components/PartnerLogos";

export default function Home() {
  return (
    <>
      <Hero />
      <Countdown />
      <About />
      <JoinUs />
      <WhyTrip />
      <HighlightTrip />
      <Activities />
      <Packages />
      <PartnerLogos />
      <FAQs />
      <BookNow />
      <WhatsAppButton />
    </>
  )
}
