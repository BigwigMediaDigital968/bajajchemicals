"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProductSidebar() {
  const pathname = usePathname();

  const isChemicals = pathname.includes("chemicals");
  const isDetergents = pathname.includes("detergents");

  return (
    <aside className="w-full lg:w-64 shrink-0">
      <div className="bg-gray-100 rounded-2xl p-6 space-y-4 sticky top-28">
        <h3 className="text-lg font-semibold mb-4">Products</h3>

        <Link
          href="/chemicals"
          className={`block px-5 py-3 rounded-xl font-medium transition ${
            isChemicals
              ? "bg-[var(--primary)] text-black"
              : "bg-white text-gray-700 hover:bg-gray-200"
          }`}
        >
          Chemicals
        </Link>

        <Link
          href="/detergents"
          className={`block px-5 py-3 rounded-xl font-medium transition ${
            isDetergents
              ? "bg-[var(--primary)] text-black"
              : "bg-white text-gray-700 hover:bg-gray-200"
          }`}
        >
          Detergents
        </Link>
      </div>
    </aside>
  );
}
