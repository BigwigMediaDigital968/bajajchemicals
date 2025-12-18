"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";
import Image from "next/image";
import logo from "../assets/logo.png";
import footerbg from "../assets/footer.svg";

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${footerbg.src})` }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10">
        {/* TOP CTA */}
        <div className="w-11/12 md:w-5/6 mx-auto py-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Ready to work with us?
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum in
            ducimus ullam praesentium. Repellendus, inventore.
          </p>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10"></div>

        {/* MAIN FOOTER CONTENT */}
        <div className="w-11/12 md:w-5/6 mx-auto py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image src={logo} alt="Bajaj Chemicals" width={64} height={64} />
            </div>

            <p className="text-gray-400 mb-6 max-w-xs leading-relaxed">
              We are committed to providing personalized industrial solutions.
            </p>

            <div className="flex gap-4">
              {[FaPinterestP, FaTwitter, FaFacebookF, FaInstagram].map(
                (Icon, i) => (
                  <span
                    key={i}
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-[var(--primary)] hover:bg-[var(--primary)] hover:text-black transition cursor-pointer"
                  >
                    <Icon size={14} />
                  </span>
                )
              )}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <Link href="/" className="hover:text-[var(--primary)]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[var(--primary)]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[var(--primary)]">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/products/chemicals"
                  className="hover:text-[var(--primary)]"
                >
                  Chemicals
                </Link>
              </li>
              <li>
                <Link
                  href="/products/detergents"
                  className="hover:text-[var(--primary)]"
                >
                  Detergents
                </Link>
              </li>
            </ul>
          </div>

          {/* SECURITY */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Security</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <Link href="/terms" className="hover:text-[var(--primary)]">
                  Term & Condition
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[var(--primary)]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-[var(--primary)]">
                  Help
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--primary)]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400 leading-relaxed">
              <li>+91 123654789</li>
              <li>info@domainname.com</li>
              <li>
                520, West Valley, Amin <br />
                and minim
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10">
          <p className="text-center text-gray-500 py-6 text-sm">
            © 2026 Bajaj Chemicals. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
