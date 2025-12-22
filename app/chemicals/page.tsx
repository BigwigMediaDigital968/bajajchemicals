"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";
import hero from "../assets/aboutus.jpg";
import Footer from "../components/Footer";
import { useState } from "react";
import ChemicalProductGrid from "../components/ChemicalProductGrid";
import { chemicalProducts } from "../data/chemicalProducts";
import { useRef } from "react";

export default function ChemicalPage() {
  const [search, setSearch] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = chemicalProducts.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCheckbox =
      selectedProducts.length === 0 || selectedProducts.includes(product.name);

    return matchesSearch && matchesCheckbox;
  });
  const toggleProduct = (name: string) => {
    setSelectedProducts((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );

    setTimeout(() => {
      gridRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);

    if (window.innerWidth < 1024) {
      setIsFilterOpen(false);
    }
  };

  return (
    <div>
      <Navbar />
      <section className="relative h-[70vh] lg:h-[80vh]">
        <div className="absolute inset-0">
          <Image
            src={hero}
            alt="Chemical & Detergent Manufacturing"
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="absolute bottom-12 left-0 right-0 z-10">
          <div className="w-11/12 md:w-5/6 mx-auto text-left text-white">
            <h1
              className="text-4xl md:text-6xl font-bold tracking-wide mb-4"
              data-aos="fade-up"
            >
              Chemicals
            </h1>
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
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>
              <span className="text-[var(--primary)] font-semibold">
                Chemicals
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="w-11/12 md:w-5/6 mx-auto flex flex-col lg:flex-row gap-10">
          <aside
            className="
    w-full lg:w-1/4
    lg:sticky lg:top-28
    h-fit
    self-start
  "
          >
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="
      lg:hidden
      w-full
      flex items-center justify-between
      rounded-xl
      border
      bg-white
      px-4 py-3
      mb-4
      shadow-md
      text-sm font-semibold
    "
            >
              Filter Products
              <span
                className={`transition-transform ${
                  isFilterOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            <div
              className={`
      ${isFilterOpen ? "block" : "hidden"}
      lg:block
      bg-white
      rounded-xl
      border
      p-4
    `}
            >
              <div className="relative mb-6">
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

                <input
                  type="text"
                  placeholder="Search chemicals..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="
          w-full rounded-full border border-gray-200
          bg-white py-3 pl-11 pr-4 text-sm
          shadow-md
          focus:border-[#f97316]
          focus:ring-4 focus:ring-[#f97316]/20
          outline-none
        "
                />
              </div>
              <div className="max-h-[320px] overflow-y-auto space-y-3">
                {chemicalProducts.map((product) => (
                  <label
                    key={product.name}
                    className="flex items-center gap-3 cursor-pointer text-sm text-gray-700"
                  >
                    <input
                      type="checkbox"
                      checked={selectedProducts.includes(product.name)}
                      onChange={() => toggleProduct(product.name)}
                      className="
              h-4 w-4 rounded
              border-gray-300
              text-[#f97316]
              focus:ring-[#f97316]
            "
                    />
                    {product.name}
                  </label>
                ))}
              </div>
            </div>
          </aside>
          <div ref={gridRef} className="flex-1">
            <ChemicalProductGrid products={filteredProducts} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
