"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Phone } from "lucide-react";
import { SITE_NAME, PHONE_NUMBER} from "../components/global"; // ✅ import global text

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (in ms)
      once: true, // whether animation should happen only once
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* 🎬 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/peaceful-care-home-garden.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="bg.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#3C2E2B]/50" />

      {/* 🧡 Hero Content */}
      <div className="relative z-10 container text-center text-white px-4">
        <h1
          data-aos="fade-down"
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary drop-shadow-lg"
        >
          {SITE_NAME} 
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow"
        >
      {SITE_NAME}  is a luxurious purpose-built care home offering an oasis of peace and tranquillity in luxurious and caring surroundings.
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <button className="inline-flex items-center justify-center h-10 rounded-md px-6 bg-primary bg-secondary-hover text-white text-sm font-medium shadow-lg transition-all">
            Book a visit
          </button>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center justify-center h-10 rounded-md px-6 border border-white/20 bg-white/10 backdrop-blur text-white border-primary-hover text-sm font-medium shadow-lg transition-all"
          >
            <Phone className="h-5 w-5 mr-2" />
            Call {PHONE_NUMBER}
          </a>
        </div>
      </div>
    </section>
  );
}
