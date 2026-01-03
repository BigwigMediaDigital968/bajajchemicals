"use client";

import { useState } from "react";
import Image from "next/image";

import chem1 from "../assets/AOS LIQUID.png";
import chem2 from "../assets/Specialty Chemicals.png";
import chem3 from "../assets/bulk.png";

import det1 from "../assets/detergent.jpeg";
import det2 from "../assets/dishwash.jpeg";
import det3 from "../assets/powder.svg";
import { motion, AnimatePresence } from "framer-motion";

const chemicalProducts = [
  { title: "Industrial Solvents", image: chem1 },
  { title: "Specialty Chemicals", image: chem2 },
  { title: "Bulk Chemical Raw Materials", image: chem3 },
];

const detergentProducts = [
  { title: "Incanto Wash", image: det1 },
  { title: "Dishwash Liquid", image: det2 },
  { title: "Detergent Powder", image: det3 },
];
const sectionTitles = {
  chemicals: "Advanced Chemical Solutions for Industrial Excellence",
  detergents: "High-Performance Detergent Solutions for Every Need",
};

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState<"chemicals" | "detergents">(
    "detergents"
  );

  const products =
    activeTab === "chemicals" ? chemicalProducts : detergentProducts;

  return (
    <section className="py-12 bg-white">
      <div className="w-11/12 md:w-5/6 mx-auto">
        <div
          data-aos="fade-up"
          className="flex items-center gap-2 text-sm tracking-widest uppercase text-[var(--primary)] mb-3"
        >
          <span className="w-2 h-2 rounded-full bg-orange-400" />
          <p className="text-sm uppercase tracking-widest font-semibold ">
            Our Products
          </p>
        </div>
        <AnimatePresence mode="wait">
          <motion.h2
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-6"
          >
            {sectionTitles[activeTab]}
          </motion.h2>
        </AnimatePresence>
        <div className="flex  gap-4 mb-10">
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
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="group relative h-64 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
            >
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 w-full p-6">
                <h4 className="text-lg font-semibold text-white uppercase">
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
