"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "../assets/logo2.png";
import ButtonFill from "./ButtonFill";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full border-b border-gray-600 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <nav className="w-11/12 mx-auto flex items-center justify-between text-white py-2 lg:py-0">
          <Link href="/" className="text-2xl font-bold flex items-center gap-2">
            <Image src={logo} alt="Bajaj Chemicals" width={172} height={172} />
          </Link>

          <ul className="hidden lg:flex items-center gap-16 font-medium">
            <li>
              <Link href="/" className="hover:text-[var(--primary)]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="hover:text-[var(--primary)]">
                About
              </Link>
            </li>

            <li
              className="relative"
              onMouseEnter={() => setProductOpen(true)}
              onMouseLeave={() => setProductOpen(false)}
            >
              <button className="flex items-center gap-1 py-7 hover:text-[var(--primary)]">
                Products <ChevronDown size={16} />
              </button>

              {productOpen && (
                <div className="absolute top-20 left-0 bg-black/90 w-48 shadow-xl overflow-hidden">
                  <Link
                    href="/chemicals"
                    className="block px-5 py-3 hover:bg-orange-500/10 hover:text-[var(--primary)]"
                  >
                    Chemicals
                  </Link>
                  <Link
                    href="/detergents"
                    className="block px-5 py-3 hover:bg-orange-500/10 hover:text-[var(--primary)]"
                  >
                    Detergents
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link href="/contact" className="hover:text-[var(--primary)]">
                Contact
              </Link>
            </li>
          </ul>

          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm">
              <Phone size={16} className="text-[var(--primary)]" />
              <a href="tel:9810333152">9810333152</a>
            </div>

            <ButtonFill
              text="Get in Touch"
              href="/contact"
              className="w-[170px]"
            />
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white z-[60]"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </nav>
      </header>

      {/* FULLSCREEN MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-lg transition-all duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="h-full flex flex-col justify-center items-center text-white text-2xl font-medium gap-8">
          {[
            { name: "Home", link: "/" },
            { name: "About", link: "/about-us" },
            { name: "Chemicals", link: "/chemicals" },
            { name: "Detergents", link: "/detergents" },
            // { name: "Blogs", link: "/blogs" },
            { name: "Contact", link: "/contact" },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.link}
              onClick={() => setOpen(false)}
              className="animate-fadeInUp hover:text-[var(--primary)] transition"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {item.name}
            </Link>
          ))}

          <ButtonFill
            text="Get in Touch"
            href="/products"
            className="w-[170px]"
          />
        </div>
      </div>
    </>
  );
}
