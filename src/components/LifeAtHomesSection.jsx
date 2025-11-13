"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LifeAtHomesSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const items = [
    {
      title: "Dining together",
      src: "/a1.jpg",
      alt: "Beautiful landscaped gardens with benches for residents",
      animation: "fade-right",
    },
    {
      title: "Activities",
      src: "/a2.jpg",
      alt: "Spacious dining room with natural light",
      animation: "zoom-in",
    },
    {
      title: "Garden",
      src: "/a3.jpg",
      alt: "Residents enjoying activities in bright lounge",
      animation: "fade-left",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F9F6F1]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          className="text-center mb-12"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3C2E2B] mb-4">
            Life at our homes
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Explore our welcoming environments where comfort meets care
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative aspect-4/3 overflow-hidden rounded-lg cursor-pointer"
              data-aos={item.animation}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#3C2E2B]/60 to-transparent flex items-end p-4">
                <span className="text-white text-lg font-medium">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
