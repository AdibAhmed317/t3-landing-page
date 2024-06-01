import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Services from '@/components/services';
import AboutUs from '@/components/about_us';
import ContactUs from '@/components/contact_us';
import Footer from '@/components/footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  );
}
