"use client";

import Image from "next/image";

interface Variant {
  quantity: string;
  salePrice: number;
  mrp?: number;
}

interface Product {
  productName: string;
  image: string;
  variants: Variant[];
}

export default function DetergentProductGrid({
  products,
}: {
  products: Product[];
}) {
  return (
    <div className="space-y-10">
      {products.map((product) => (
        <div
          key={product.productName}
          className="rounded-2xl border bg-white p-6 shadow-sm"
        >
          <div className="flex items-center gap-4 mb-6">
            <Image
              src={product.image}
              alt={product.productName}
              width={80}
              height={80}
              className="object-contain"
            />
            <h2 className="text-xl font-bold text-gray-800">
              {product.productName}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.variants.map((v, i) => (
              <div
                key={i}
                className="rounded-xl border p-4 flex justify-between items-center hover:shadow-md transition"
              >
                <div>
                  <p className="font-semibold">{v.quantity}</p>
                  {v.mrp && (
                    <p className="text-sm text-gray-500 line-through">
                      ₹{v.mrp}
                    </p>
                  )}
                </div>

                <span className="text-lg font-bold text-[#f97316]">
                  ₹{v.salePrice}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
