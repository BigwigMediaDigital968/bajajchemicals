"use client";
import Navbar from "../components/Navbar";
import hero from "../assets/about.png";
import Image from "next/image";
import AboutSection from "../components/About";
import Footer from "../components/Footer";
import ButtonFill from "../components/ButtonFill";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Eye, Target, Gem } from "lucide-react";
import bg from "../assets/about.png";
import bg1 from "../assets/hero.png";
import faqimg from "../assets/whatwedo.png";
import WhatWeDoSection from "../components/WhatWeDo";
type Tab = "mission" | "vision" | "value";

const faqs = [
  {
    q: "What products does Bajaj Chemicals manufacture?",
    a: "Bajaj Chemicals specializes in the manufacturing of industrial chemicals and detergent raw materials, along with high-quality detergent products under the Montu Detergents brand.",
  },
  {
    q: "Do you supply chemicals for detergent and soap manufacturing?",
    a: "Yes, we supply reliable chemical inputs used in detergent and soap manufacturing, ensuring consistent quality and performance for industrial applications.",
  },
  {
    q: "How do you ensure product quality and consistency?",
    a: "We follow strict quality control measures at every stage of production, from raw material sourcing to final dispatch, backed by decades of industry experience.",
  },
  {
    q: "Do you cater to both industrial and bulk orders?",
    a: "Yes, we cater to bulk and industrial requirements, offering dependable supply, standardized formulations, and timely delivery for business clients.",
  },
  {
    q: "How can I contact Bajaj Chemicals for business enquiries?",
    a: "You can reach us through the contact form on our website, by phone, or via email. Our team will respond promptly to discuss your requirements.",
  },
];

export default function AboutPage() {
  const [active, setActive] = useState<Tab>("mission");
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
      offset: 120,
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[50vh] md:h-[70vh] lg:h-[100vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={hero}
            alt="Chemical & Detergent Manufacturing"
            className="w-full h-full object-fill"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* HERO CONTENT – LEFT BOTTOM */}
        <div className="absolute bottom-12 left-0 right-0 z-10">
          <div className="w-11/12 md:w-5/6 mx-auto text-left text-white">
            {/* Big Heading */}
            <h1
              className="text-4xl md:text-6xl font-bold tracking-wide mb-4"
              data-aos="fade-up"
            >
              About Us
            </h1>

            {/* Breadcrumb */}
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

              {/* Circle */}
              <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span>

              {/* Current Page */}
              <span className="text-[var(--primary)] font-semibold">
                About Us
              </span>
            </div>
          </div>
        </div>
      </section>
      <AboutSection />

      <section className="relative py-12">
        {/* PARALLAX BACKGROUND */}
        <div className="relative h-[75vh] overflow-hidden">
          <div
            className="absolute inset-0 bg-fixed bg-center bg-cover"
            style={{ backgroundImage: `url(${bg.src})` }}
          />
          <div className="absolute inset-0 bg-black/60" />

          {/* TEXT ON IMAGE */}
          <div className="relative z-10 py-16 md:py-24">
            <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 text-white">
              <div>
                <div
                  data-aos="fade-up"
                  className="flex items-center gap-2 text-sm tracking-widest uppercase text-[var(--primary)] mb-3"
                >
                  <span className="w-2 h-2 rounded-full bg-orange-400" />
                  <p className="font-semibold">Our Approach</p>
                </div>

                <h2
                  data-aos="zoom-in"
                  className="text-4xl md:text-5xl font-light text-gray-200 leading-tight mb-4"
                >
                  Driven by Quality, <br />
                  <span className="font-bold">Built on Trust</span>
                </h2>
              </div>

              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-gray-200 max-w-lg mt-4 lg:mt-0 text-base md:text-lg"
              >
                Our approach combines decades of industry experience with strict
                quality standards and customer-focused solutions. From raw
                material sourcing to final product delivery, we ensure
                reliability, consistency, and performance at every stage.
              </p>
            </div>
          </div>
        </div>

        {/* FLOATING CONTENT BOX */}
        <div className="relative -mt-32 z-20">
          <div
            data-aos="fade-up"
            className="w-11/12 md:w-5/6 mx-auto bg-white rounded-[36px] shadow-2xl overflow-hidden"
          >
            {/* TABS */}
            <div data-aos="fade-down" className="grid grid-cols-3 border-b ">
              <TabButton
                active={active === "mission"}
                onClick={() => setActive("mission")}
                icon={<Eye />}
                label="Our Mission"
              />
              <TabButton
                active={active === "vision"}
                onClick={() => setActive("vision")}
                icon={<Target />}
                label="Our Vision"
              />
              <TabButton
                active={active === "value"}
                onClick={() => setActive("value")}
                icon={<Gem />}
                label="Our Value"
              />
            </div>

            {/* CONTENT */}
            <div className="p-10 md:p-14 grid lg:grid-cols-2 gap-12 items-center">
              {/* TEXT */}
              <div>
                {active === "mission" && (
                  <div key={active} data-aos="fade-right">
                    <p className="text-gray-600 mb-6">
                      Our mission is to deliver high-quality chemical products
                      and detergent solutions that empower our customers and
                      consumers with superior cleaning performance.
                    </p>
                    <ul className="space-y-4">
                      {[
                        "Maintaining strict quality standards across all products",
                        "Investing in modern manufacturing and process improvement",
                        "Leveraging decades of industry experience and technical know-how",
                        "Building long-term, trust-based relationships with customers",
                        "Operating responsibly with a focus on safety and sustainability",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[var(--primary)] text-black text-sm">
                            ✓
                          </span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {active === "vision" && (
                  <div key={active} data-aos="fade-right">
                    <p className="text-gray-600 mb-6">
                      To be a trusted and preferred chemical manufacturing
                      partner, recognized for consistent quality, technical
                      excellence, and ethical business practices, while
                      continuously evolving to meet the changing needs of the
                      detergent and soap industry.
                    </p>
                    <ul className="space-y-4">
                      {[
                        "To be a trusted and preferred partner in chemical and detergent manufacturing.",
                        "To consistently deliver high-quality products backed by technical expertise.",
                        "To grow responsibly through innovation and operational excellence.",
                        "To strengthen our presence in both industrial and consumer markets.",
                        "To adapt continuously to changing industry and customer requirements.",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[var(--primary)] text-black text-sm">
                            ✓
                          </span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {active === "value" && (
                  <div key={active} data-aos="fade-right">
                    <p className="text-gray-600 mb-6">
                      At Bajaj Chemical, our values are the foundation of
                      everything we do. They guide our decisions, shape our
                      culture, and define the way we serve our customers and
                      partners.
                    </p>
                    <ul className="space-y-4">
                      {[
                        "Uncompromising focus on quality across sourcing, manufacturing, and delivery.",
                        "Ethical, transparent, and honest business practices in every interaction.",
                        "Strong commitment to understanding customer needs and delivering reliable solutions.",
                        "Application of over 45 years of industry experience to improve products and processes.",
                        "Responsible and safe manufacturing with care for people and the environment.",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[var(--primary)] text-black text-sm">
                            ✓
                          </span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* IMAGE */}
              <div
                data-aos="zoom-in"
                className="rounded-3xl overflow-hidden glass-hover"
              >
                <Image
                  src={bg1}
                  alt="Industrial Work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhatWeDoSection />

      <section ref={ref} className="relative py-12 text-white overflow-hidden">
        <div className="relative w-11/12 md:w-5/6 mx-auto">
          <div className="mb-10">
            <div
              data-aos="fade-up"
              className="flex items-center gap-2 text-sm tracking-widest uppercase text-[var(--primary)] mb-3"
            >
              <span className="w-2 h-2 rounded-full bg-orange-400" />
              <p className="text-sm uppercase tracking-widest font-semibold ">
                FAQs
              </p>
            </div>

            <h2
              data-aos="zoom-in"
              className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-6"
            >
              Frequenly Asked <br />
              <span className="font-bold">Questions</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* LEFT IMAGE */}
            <div className="hidden lg:block overflow-hidden rounded-3xl glass-hover curtain-wrapper">
              <Image
                src={faqimg}
                alt="Client experience"
                className="w-full h-full object-cover"
                priority
              />
              <span
                className={`curtain-overlay ${
                  show ? "curtain-animate curtain-delay" : ""
                }`}
              />
            </div>

            {/* RIGHT CONTENT – FAQ */}
            <div data-aos="fade-left" className="space-y-6">
              {faqs.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className="group border-b border-gray-300 pb-5"
                  >
                    {/* QUESTION ROW */}
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-start justify-between gap-6 text-left"
                    >
                      {/* LEFT */}
                      <div className="flex gap-4">
                        {/* NUMBER */}
                        <span
                          className={`text-sm font-semibold transition ${
                            isOpen ? "text-[var(--primary)]" : "text-gray-400"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* QUESTION */}
                        <h4 className="text-lg font-semibold text-gray-900 leading-snug group-hover:text-[var(--primary)] transition">
                          {item.q}
                        </h4>
                      </div>

                      {/* ICON */}
                      <span
                        className={`mt-1 transition-all duration-300 text-2xl ${
                          isOpen
                            ? "rotate-45 text-[var(--primary)]"
                            : "text-gray-400"
                        }`}
                      >
                        +
                      </span>
                    </button>

                    {/* ANSWER */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen
                          ? "max-h-[300px] opacity-100 mt-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="pl-10 text-gray-600 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* <ClientsSection /> */}
      </section>

      <Footer />
    </>
  );
}

/* TAB BUTTON */
function TabButton({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-3 py-6 text-xs font-semibold transition ${
        active
          ? "bg-[var(--primary)] text-white"
          : "bg-white text-gray-700 hover:bg-gray-100"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
