"use client";

import { useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingActions() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`orbital-wrapper ${open ? "open" : ""}`}>
      {/* MAIN ORB (CONTACT ICON) */}
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

      {/* RIGHT – CALL */}
      <a href="tel:+911234567890" className="orb-btn right" aria-label="Call">
        <Phone size={18} />
      </a>

      {/* UP – EMAIL */}
      <a
        href="mailto:info@domain.com"
        className="orb-btn up"
        aria-label="Email"
      >
        <Mail size={18} />
      </a>

      {/* DOWN – WHATSAPP */}
      <a
        href="https://wa.me/911234567890"
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
