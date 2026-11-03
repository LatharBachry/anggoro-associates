import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Parallax from "@/components/sections/parallax";
import Team from "@/components/sections/team";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Parallax />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
