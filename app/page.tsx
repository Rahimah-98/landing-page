import HeroSection from '@/components/hero-section';
import About from '@/components/About';
// import Projecs from '@/components/Projecs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Socialidebar from '@/components/Socialidebar';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Socialidebar />
      <About />
      {/* <Projecs /> */}
      <Contact />
      <Footer />
    </div>
  );
}
