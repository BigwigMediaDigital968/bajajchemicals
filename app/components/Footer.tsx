"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import logo from "../assets/logo2.png";
import footerbg from "../assets/footer.svg";
const socialLinks = [
  {
    icon: FaFacebookF,
    url: "https://www.facebook.com/bajajchemicals.bawana/",
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/montudetergents/?igsh=MWh1Y3kwajhxajQzbQ%3D%3D#",
  },
];
export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${footerbg.src})` }}
      />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10">
        <div className="w-11/12 md:w-5/6 mx-auto py-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Ready to work with us?
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Let’s build reliable chemical and detergent solutions together
            driven by quality, experience, and trust.
          </p>
        </div>
        <div className="border-t border-white/10"></div>
        <div className="w-11/12 md:w-5/6 mx-auto py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src={logo}
                alt="Bajaj Chemicals"
                width={220}
                height={220}
              />
            </div>

            <p className="text-gray-400 mb-6 max-w-xs leading-relaxed">
              We are committed to providing personalized industrial solutions.
            </p>

            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-[var(--primary)] hover:bg-[var(--primary)] hover:text-black transition cursor-pointer"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <Link href="/" className="hover:text-[var(--primary)]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-[var(--primary)]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/chemicals" className="hover:text-[var(--primary)]">
                  Chemicals
                </Link>
              </li>
              <li>
                <Link
                  href="/detergents"
                  className="hover:text-[var(--primary)]"
                >
                  Detergents
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--primary)]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400 leading-relaxed">
              <li>
                <a href="tel:9810333152">9810333152</a>
              </li>
              <li>
                <a href="mailto:Bajajchemicals@hotmail.com">
                  Bajajchemicals@hotmail.com
                </a>
              </li>
              <li>
                C-275, Sector 5, DSIDC Bawana Industrial Area, Delhi, 110039
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div
            className="
      w-11/12 md:w-5/6 mx-auto
      py-6
      flex flex-col md:flex-row
      items-center
      justify-between
      gap-3
      text-sm
      text-gray-500
    "
          >
            {/* LEFT */}
            <p className="text-center md:text-left">
              © 2026 Bajaj Chemicals. All Rights Reserved.
            </p>

            {/* RIGHT */}
            <p className="text-center md:text-right">
              Designed & Developed by{" "}
              <a
                href="https://bigwigmediadigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
          font-semibold
          text-white
          hover:text-[#f97316]
          transition
        "
              >
                Bigwig Media Digital
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
