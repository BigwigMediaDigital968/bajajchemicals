"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";
import hero from "../assets/aboutus.jpg";
import Footer from "../components/Footer";
import { useState } from "react";
import ChemicalProductGrid from "../components/ChemicalProductGrid";
import { chemicalProducts } from "../data/chemicalProducts";

export default function ChemicalPage() {
  const [search, setSearch] = useState("");

  const filteredProducts = chemicalProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
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

      {/* PRODUCTS */}
      <section className="py-16">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <div className="relative w-full md:w-1/2 mb-10">
            {/* Search Icon */}
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>

            {/* Input */}
            <input
              type="text"
              placeholder="Search chemicals by name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
      w-full
      rounded-full
      border border-gray-200
      bg-white/80
      backdrop-blur-lg
      py-3
      pl-11
      pr-10
      text-sm
      text-gray-800
      shadow-md
      transition-all
      duration-300
      focus:border-blue-500
      focus:ring-4
      focus:ring-blue-500/20
      outline-none
    "
            />

            {/* Clear Button */}
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          <ChemicalProductGrid products={filteredProducts} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
