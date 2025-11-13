"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SITE_NAME} from "../components/global"; // ✅ import global text

export default function WelcomeSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[#F9F6F1]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div data-aos="fade-right" data-aos-duration="1000">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3C2E2B] mb-6">
              Welcome to {SITE_NAME}
            </h2>

            <p
              className="text-lg text-[#3C2E2B]/80 leading-relaxed mb-6"
              data-aos="fade-up"
              data-aos-delay="150"
            >
           At Devonshire Manor, we are dedicated to providing exceptional care in a nurturing and inspiring environment. Our team specializes in supporting individuals with learning disabilities, autism, mental health conditions, and physical disabilities. With compassion, expertise, and personalized attention, we ensure every resident feels valued, supported, and empowered to live life to the fullest.
            </p>

            <p
              className="text-[#3C2E2B]/80 leading-relaxed mb-8"
              data-aos="fade-up"
              data-aos-delay="300"
            >
Our purpose-built facilities combine comfort, safety, and modern amenities with a warm, homely atmosphere. From engaging activities to tailored support plans, Devonshire Manor is more than a care home—it’s a community where residents can thrive, connect, and enjoy life every day. Discover a place where care meets compassion and every individual is celebrated for who they are.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <a
                href="/facilities"
                className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium text-white bg-primary bg-secondary-hover rounded-md shadow transition-all"
              >
                Explore Our Facilities
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium border border-[#3C2E2B]/20 rounded-md shadow-sm bg-white bg-secondary-hover text-black transition-all"
              >
                Arrange a Visit
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="relative aspect-4/3 rounded-lg overflow-hidden shadow-xl"
            data-aos="fade-left"
            data-aos-duration="1200"
          >
            <img
              src="a5.jpg"
              alt="Beechdale House entrance with elegant white columns and glass doors"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
