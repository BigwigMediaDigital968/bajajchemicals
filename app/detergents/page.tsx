"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";
import hero from "../assets/aboutus.jpg";
import Footer from "../components/Footer";
import DetergentProductGrid from "../components/DetergentProductGrid";
import { detergentProducts } from "../data/detergentProduct";
import { useState } from "react";

export default function DetergentPage() {
  const [search, setSearch] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const toggleProduct = (name: string) => {
    setSelectedProducts((prev) =>
      prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name]
    );
  };

  const filteredProducts = detergentProducts.filter((product) => {
    const matchesSearch = product.productName
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesToggle =
      selectedProducts.length === 0 ||
      selectedProducts.includes(product.productName);

    return matchesSearch && matchesToggle;
  });
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
              Detergents
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
                Detergents
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="w-11/12 md:w-5/6 mx-auto flex flex-col lg:flex-row gap-10">
          <aside className="w-full lg:w-1/4 lg:sticky lg:top-28 h-fit">
            <input
              type="text"
              placeholder="Search detergent..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full mb-6 rounded-full border px-4 py-3"
            />

            <div className="bg-white border rounded-xl p-4 space-y-3">
              {detergentProducts.map((p) => (
                <label
                  key={p.productName}
                  className="flex gap-3 items-center text-sm cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(p.productName)}
                    onChange={() => toggleProduct(p.productName)}
                    className="text-[#f97316]"
                  />
                  {p.productName}
                </label>
              ))}
            </div>
          </aside>
          <div className="flex-1">
            <DetergentProductGrid products={filteredProducts} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
