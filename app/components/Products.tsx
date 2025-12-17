"use client";

import { useState } from "react";
import Image from "next/image";

import chem1 from "../assets/hero.png";
import chem2 from "../assets/hero.png";
import chem3 from "../assets/hero.png";

import det1 from "../assets/hero.png";
import det2 from "../assets/hero.png";
import det3 from "../assets/hero.png";

const chemicalProducts = [
  { title: "Industrial Solvents", image: chem1 },
  { title: "Specialty Chemicals", image: chem2 },
  { title: "Water Treatment Chemicals", image: chem3 },
];

const detergentProducts = [
  { title: "Laundry Detergents", image: det1 },
  { title: "Industrial Cleaners", image: det2 },
  { title: "Surface Care Solutions", image: det3 },
];

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState<"chemicals" | "detergents">(
    "chemicals"
  );

  const products =
    activeTab === "chemicals" ? chemicalProducts : detergentProducts;

  return (
    <section className="py-12 bg-white">
      <div className="w-11/12 md:w-5/6 mx-auto">
        {/* HEADER */}
        <div
          data-aos="fade-up"
          className="flex items-center gap-2 text-sm tracking-widest uppercase text-[var(--primary)] mb-3"
        >
          <span className="w-2 h-2 rounded-full bg-orange-400" />
          <p className="text-sm uppercase tracking-widest font-semibold ">
            Our Products
          </p>
        </div>

        {/* TITLE */}
        <h2
          data-aos="zoom-in"
          className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-6"
        >
          Lorem ipsum dolor sit amet consectetur.
        </h2>

        {/* TABS */}
        <div className="flex  gap-4 mb-10">
          <button
            onClick={() => setActiveTab("chemicals")}
            className={`px-8 py-3 rounded-full font-semibold transition ${
              activeTab === "chemicals"
                ? "bg-[var(--primary)] text-black"
                : "border border-gray-300 text-gray-700 hover:border-[var(--primary)]"
            }`}
          >
            Chemicals
          </button>

          <button
            onClick={() => setActiveTab("detergents")}
            className={`px-8 py-3 rounded-full font-semibold transition ${
              activeTab === "detergents"
                ? "bg-[var(--primary)] text-black"
                : "border border-gray-300 text-gray-700 hover:border-[var(--primary)]"
            }`}
          >
            Detergents
          </button>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="group relative h-64 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
            >
              {/* IMAGE */}
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* TITLE OVER IMAGE */}
              <div className="absolute bottom-0 w-full p-6">
                <h4 className="text-lg font-semibold text-white">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
