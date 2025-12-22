"use client";

import { useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingActions() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`orbital-wrapper ${open ? "open" : ""}`}>
      <button
        onClick={() => setOpen(!open)}
        className="main-orb flex items-center justify-center"
        aria-label="Contact options"
      >
        <MessageCircle
          size={22}
          className={`text-white transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        />
      </button>
      <a href="tel:+919810333152" className="orb-btn right" aria-label="Call">
        <Phone size={18} />
      </a>
      <a
        href="mailto:Bajajchemicals@hotmail.com"
        className="orb-btn up"
        aria-label="Email"
      >
        <Mail size={18} />
      </a>
      <a
        href="https://wa.me/9810038988"
        target="_blank"
        rel="noopener noreferrer"
        className="orb-btn down"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={18} />
      </a>
    </div>
  );
}
