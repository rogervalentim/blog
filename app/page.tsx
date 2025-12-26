import { About } from "./_components/about";
import { Cta } from "./_components/cta";
import { Feature } from "./_components/feature";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { Hero } from "./_components/hero";
import { Testimonials } from "./_components/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Feature />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
