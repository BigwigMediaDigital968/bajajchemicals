import Navbar from "./components/Navbar";
import hero from "./assets/hero.png";
import Image from "next/image";
import AboutSection from "./components/About";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[70vh] lg:h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={hero}
            alt="Chemical & Detergent Manufacturing"
            className="w-full h-full object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-11/12 md:w-5/6 mx-auto text-white">
            <p className="uppercase tracking-widest text-sm text-[var(--primary)] mb-4">
              Lorem ipsum dolor sit amet.
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Lorem ipsum dolor, sit <br /> amet consectetur adipisicing.
            </h1>

            <p className="max-w-xl text-gray-200 mb-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
              perspiciatis ipsum, eos atque tenetur tempora illum inventore
              fugit pariatur. Recusandae nulla consequatur necessitatibus quam
              incidunt!
            </p>

            <a
              href="/products"
              className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-orange-600 text-black px-6 py-3 rounded-full font-semibold transition"
            >
              Explore Our Products →
            </a>
          </div>
        </div>
      </section>
      <AboutSection />
      <Testimonial />
      <Footer />
    </>
  );
}
