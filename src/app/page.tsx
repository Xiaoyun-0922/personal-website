import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Competitions from '@/components/Competitions';
import Publications from '@/components/Publications';
import VideoShowcase from '@/components/VideoShowcase';
import AIVision from '@/components/AIVision';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Experience />
      <Competitions />
      <Publications />
      <VideoShowcase />
      <AIVision />
      <Footer />
    </main>
  );
}
