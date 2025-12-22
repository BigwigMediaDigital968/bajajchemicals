"use client";

import Image from "next/image";
import { Factory, ShieldCheck, Settings, Package } from "lucide-react";

import industryImg from "../assets/whatwedo.png"; // replace with your image

const services = [
  {
    title: "Experience You Can Trust",
    desc: "Over 45 years in chemical manufacturing.",
    icon: Factory,
  },
  {
    title: "Quality Assurance",
    desc: " Strict quality checks at every stage.",
    icon: ShieldCheck,
  },
  {
    title: "Industry Expertise",
    desc: "Deep understanding of detergent formulations.",
    icon: Settings,
  },
  {
    title: "Customer Focused",
    desc: "Long-term partnerships, not just sales.",
    icon: Package,
  },
];

export default function WhatWeDoSection() {
  return (
    <section className="bg-[#181818] text-white">
      <div className="grid lg:grid-cols-2 lg:min-h-[90vh]">
        {/* LEFT CONTENT */}
        <div className="w-11/12 md:w-5/6 mx-auto py-20 flex flex-col justify-center">
          {/* LABEL */}
          <div className="flex items-center gap-2 text-sm tracking-widest uppercase text-[var(--primary)] mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--primary)]" />
            What We Do
          </div>

          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-12">
            Innovative factory and industry <br />
            <span className="font-bold">solutions today</span>
          </h2>

          {/* SERVICES GRID */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-xl">
            {services.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:bg-white/10 transition"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center mb-4">
                    <Icon className="text-[var(--primary)]" size={22} />
                  </div>

                  <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative hidden lg:block glass-hover">
          <Image
            src={industryImg}
            alt="Industrial work"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </div>
    </section>
  );
}
