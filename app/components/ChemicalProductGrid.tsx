"use client";

import Image from "next/image";

interface Product {
  name: string;
  company: string;
  quantity: string;
  image: string;
}

export default function ChemicalProductGrid({
  products,
}: {
  products: Product[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <div
          key={index}
          className="
                group relative rounded-2xl p-[1px] bg-gradient-to-br from-[#f97316]/30 via-orange-400/30 to-amber-400/30 hover:from-[#f97316] hover:to-[#f97316] transition-all duration-300"
        >
          <div className="relative h-full rounded-2xl bg-white backdrop-blur-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300">
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-1 tracking-wide">
                {product.name}
              </h3>

              <p className="text-sm text-gray-500 mb-4">{product.company}</p>
              <span
                className="
                        mt-auto inline-flex items-center justify-center
                        rounded-full
                        border border-[#f97316]
                        px-5 py-2
                        text-sm font-semibold
                        text-[#f97316]
                        hover:bg-[#f97316]
                        hover:text-white
                        transition-all duration-300
                        "
              >
                {product.quantity}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
