"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import contactbg from "../assets/page-header-bg.jpg";
import Link from "next/link";
import Footer from "../components/Footer";
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
      <section className="relative h-[70vh] lg:h-[80vh] w-full overflow-hidden">
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
        <div className="absolute bottom-12 left-0 right-0 z-10">
          <div className="w-11/12 md:w-5/6 mx-auto text-left text-white">
            {/* Big Heading */}
            <h1
              className="text-4xl md:text-6xl font-bold tracking-wide mb-4"
              data-aos="fade-up"
            >
              Latest Posts
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
              <span className="text-[var(--primary)] font-semibold">Blogs</span>
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
