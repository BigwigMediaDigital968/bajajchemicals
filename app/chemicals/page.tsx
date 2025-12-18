"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";
import hero from "../assets/aboutus.jpg";
import Footer from "../components/Footer";
import ProductSidebar from "../components/ProductSidebar";
import ProductsGrid from "../components/ProductGrid";
import chem1 from "../assets/hero.png";
import chem2 from "../assets/hero.png";
import chem3 from "../assets/hero.png";

const chemicalProducts = [
  { title: "Industrial Solvents", image: chem1 },
  { title: "Specialty Chemicals", image: chem2 },
  { title: "Water Treatment Chemicals", image: chem3 },
];

export default function ChemicalPage() {
  return (
    <div>
      <Navbar />
      <section className="relative h-[70vh] lg:h-[80vh]">
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

        {/* HERO CONTENT – LEFT BOTTOM */}
        <div className="absolute bottom-12 left-0 right-0 z-10">
          <div className="w-11/12 md:w-5/6 mx-auto text-left text-white">
            {/* Big Heading */}
            <h1
              className="text-4xl md:text-6xl font-bold tracking-wide mb-4"
              data-aos="fade-up"
            >
              Chemicals
            </h1>

            {/* Breadcrumb */}
            <div
              className="flex items-center gap-3 text-sm md:text-base"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <a
                href="/"
                className="text-white hover:text-[var(--color5)] transition"
              >
                Home
              </a>

              {/* Circle */}
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>

              {/* Current Page */}
              <span className="text-[var(--primary)] font-semibold">
                Chemicals
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-16">
        <div className="w-11/12 md:w-5/6 mx-auto flex flex-col lg:flex-row gap-12">
          <ProductSidebar />

          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              Chemicals
            </h2>

            <ProductsGrid products={chemicalProducts} />
          </div>
        </div>
      </section> */}
      <Footer />
    </div>
  );
}
