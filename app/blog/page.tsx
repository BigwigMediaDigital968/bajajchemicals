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
import { FaArrowAltCircleRight } from "react-icons/fa";

const blogs = [
  {
    title: "Sustainable Practices Reducing Waste in Industrial Production",
    image:
      "https://demo.awaikenthemes.com/toplax/wp-content/uploads/2024/11/post-1.jpg",
    slug: "/blogs/sustainable-practices",
  },
  {
    title: "Advanced Robotics Revolutionizing Industrial Workflows",
    image:
      "https://demo.awaikenthemes.com/toplax/wp-content/uploads/2024/11/post-2.jpg",
    slug: "/blogs/advanced-robotics",
  },
  {
    title: "Top Benefits of the Robotics in Manufacturing",
    image:
      "https://demo.awaikenthemes.com/toplax/wp-content/uploads/2024/11/post-3.jpg",
    slug: "/blogs/robotics-benefits",
  },
  {
    title: "Sustainable Practices Reducing Waste in Industrial Production",
    image:
      "https://demo.awaikenthemes.com/toplax/wp-content/uploads/2024/11/post-1.jpg",
    slug: "/blogs/sustainable-practices",
  },
  {
    title: "Advanced Robotics Revolutionizing Industrial Workflows",
    image:
      "https://demo.awaikenthemes.com/toplax/wp-content/uploads/2024/11/post-2.jpg",
    slug: "/blogs/advanced-robotics",
  },
  {
    title: "Top Benefits of the Robotics in Manufacturing",
    image:
      "https://demo.awaikenthemes.com/toplax/wp-content/uploads/2024/11/post-3.jpg",
    slug: "/blogs/robotics-benefits",
  },
];

const Blogs = () => {
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
              Latest <span className="font-semibold">Post</span>
            </h1>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Link href="/">Home</Link>
              <span className="text-[var(--primary)]">•</span>
              <span className="text-[var(--primary)] font-medium">Blogs</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogs.map((blog, index) => (
              <Link href={blog.slug} key={index} className="group block">
                {/* IMAGE */}
                <div className="relative h-[320px] rounded-3xl overflow-hidden mb-6">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold leading-snug mb-4 transition-colors duration-300 group-hover:text-[var(--primary)]">
                  {blog.title}
                </h3>

                {/* READ MORE */}
                <div className="flex items-center gap-2 text-[var(--primary)] font-medium">
                  <span>Read More</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <FaArrowAltCircleRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
