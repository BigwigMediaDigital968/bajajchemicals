"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import contactbg from "../assets/page-header-bg.jpg";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import formbg from "../assets/footer.svg";
import Footer from "../components/Footer";
import ButtonFill from "../components/ButtonFill";
const Contact = () => {
  return (
    <div className="relative">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src={contactbg} // 🔁 replace with your image path
          alt="Contact Background"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-11/12 md:w-5/6 mx-auto">
            <h1 className="text-white text-4xl md:text-6xl font-light mb-4">
              Contact <span className="font-semibold">us</span>
            </h1>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Link href="/">Home</Link>
              <span className="text-[var(--primary)]">•</span>
              <span className="text-[var(--primary)] font-medium">
                Contact Us
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Background Illustration */}
        <div className="absolute bottom-0 left-0 opacity-100 pointer-events-none">
          <Image src={formbg} alt="Background" width={800} height={800} />
        </div>

        <div className="w-11/12 md:w-5/6 mx-auto grid lg:grid-cols-2 gap-16 items-start relative z-10">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 text-sm tracking-widest uppercase text-gray-500 mb-3">
                <span className="w-2 h-2 bg-[var(--primary)] rounded-full" />
                Contact Us
              </div>

              <h2 className="text-4xl md:text-5xl font-light mb-4">
                Get in touch <span className="font-semibold">with us</span>
              </h2>

              <p className="text-gray-500 max-w-md leading-relaxed">
                Reach out for any inquiries, support, or to discuss how we can
                meet your industrial needs.
              </p>
            </div>

            {/* CONTACT INFO */}
            <div className="space-y-16">
              {/* Phone */}
              <div className="flex gap-4 items-start w-fit">
                <a
                  href="tel:+1809120670"
                  className="flex gap-4 items-start group cursor-pointer"
                >
                  {/* ICON BOX */}
                  <div
                    className="
        relative w-14 h-14 rounded-xl
        bg-[var(--primary)]
        flex items-center justify-center
        text-white
        overflow-hidden
      "
                  >
                    {/* Black hover spread */}
                    <span
                      className="
          absolute inset-0
          bg-black
          scale-0
          transition-transform duration-500 ease-out
          group-hover:scale-100
          rounded-xl
        "
                    />

                    {/* Icon */}
                    <Phone
                      size={22}
                      className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* TEXT */}
                  <div>
                    <p className="font-semibold transition-colors duration-300 group-hover:text-black">
                      Contact
                    </p>
                    <p className="text-gray-500 transition-colors duration-300 group-hover:text-gray-700">
                      +1 809 120 670
                    </p>
                  </div>
                </a>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start w-fit">
                <a
                  href="mailto:info@domainname.com"
                  className="flex gap-4 items-start group cursor-pointer"
                >
                  {/* ICON BOX */}
                  <div
                    className="
        relative w-14 h-14 rounded-xl
        bg-[var(--primary)]
        flex items-center justify-center
        text-white
        overflow-hidden
      "
                  >
                    <span
                      className="
          absolute inset-0
          bg-black
          scale-0
          transition-transform duration-500 ease-out
          group-hover:scale-100
          rounded-xl
        "
                    />

                    <Mail
                      size={22}
                      className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* TEXT */}
                  <div>
                    <p className="font-semibold transition-colors duration-300 group-hover:text-black">
                      E-mail
                    </p>
                    <p className="text-gray-500 transition-colors duration-300 group-hover:text-gray-700">
                      info@domainname.com
                    </p>
                  </div>
                </a>
              </div>

              {/* Address */}
              <div className="flex gap-4 items-start w-fit">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=37+San+Juan+Lane+Graaf+Florisstraat+22A+3021+CH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 items-start group cursor-pointer"
                >
                  {/* ICON BOX */}
                  <div
                    className="
        relative w-14 h-14 rounded-xl
        bg-[var(--primary)]
        flex items-center justify-center
        text-white
        overflow-hidden
      "
                  >
                    <span
                      className="
          absolute inset-0
          bg-black
          scale-0
          transition-transform duration-500 ease-out
          group-hover:scale-100
          rounded-xl
        "
                    />

                    <MapPin
                      size={22}
                      className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* TEXT */}
                  <div>
                    <p className="font-semibold transition-colors duration-300 group-hover:text-black">
                      Our Address
                    </p>
                    <p className="text-gray-500 max-w-sm transition-colors duration-300 group-hover:text-gray-700">
                      37 San Juan Lane Graaf Florisstraat 22A, 3021 CH
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-light mb-8">
              Contact <span className="font-semibold">me</span>
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="w-full border rounded-xl px-5 py-4 outline-none focus:border-orange-500"
                />
                <input
                  type="text"
                  placeholder="Enter last name"
                  className="w-full border rounded-xl px-5 py-4 outline-none focus:border-orange-500"
                />
              </div>

              <input
                type="email"
                placeholder="Enter your e-mail"
                className="w-full border rounded-xl px-5 py-4 outline-none focus:border-orange-500"
              />

              <input
                type="tel"
                placeholder="Enter your phone no."
                className="w-full border rounded-xl px-5 py-4 outline-none focus:border-orange-500"
              />

              <textarea
                placeholder="Write Message"
                rows={5}
                className="w-full border rounded-xl px-5 py-4 outline-none focus:border-orange-500 resize-none"
              />

              {/* <button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-orange-500 text-orange-500 font-semibold hover:bg-[var(--primary)] hover:text-white transition"
              >
                
              </button> */}
              <ButtonFill
                text="Submit Message"
                type="submit"
                className="w-[170px]"
              />
            </form>
          </div>
        </div>
      </section>
      <section className="relative w-full h-[420px] md:h-[520px]">
        {/* GOOGLE MAP */}
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps?q=New+Delhi,+India&output=embed"
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* OVERLAY CARD */}
        <div
          className="
          absolute bottom-6 left-1/2 -translate-x-1/2
          bg-white/95 backdrop-blur-xl
          border border-[var(--med-border)]
          rounded-2xl
          shadow-[0_20px_40px_rgba(11,141,133,0.25)]
          px-6 py-5
          w-[92%] max-w-xl
        "
          data-aos="fade-up"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[var(--med-primary)]/10 flex items-center justify-center">
              <MapPin className="text-[var(--med-primary)]" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-[var(--med-text)] mb-1">
                Our Location
              </h3>
              <p className="text-sm text-[var(--med-text)]/70">
                Lorem Ipsum Clinic, Sector 00, New Delhi, India
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
