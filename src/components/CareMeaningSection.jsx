"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Heart, Activity, Users } from "lucide-react";

export default function CareMeaningSection() {
  useEffect(() => {
    AOS.init({
      duration: 900, // animation duration (ms)
      once: true, // play only once when scrolled into view
      easing: "ease-out-cubic",
    });
  }, []);

  const features = [
    {
      icon: <Heart className="h-8 w-8 text-primary " strokeWidth={2} />,
      title: "Personalised Plans",
      text: "Every resident receives a tailored care plan developed with family input, reviewed regularly, and adapted as needs change.",
    },
    {
      icon: <Activity className="h-8 w-8 text-primary " strokeWidth={2} />,
      title: "Wellbeing & Activities",
      text: "Engaging programmes promoting physical, mental, and social wellbeing through activities, exercise, arts, and entertainment.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary " strokeWidth={2} />,
      title: "Family Involvement",
      text: "We welcome family participation in care decisions, daily life, and special events. Your visits enrich our community.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F9F6F1]">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div
          className="text-center mb-12"
          data-aos="fade-down"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#3C2E2B]">
            What our care means
          </h2>
        </div>

        {/* Image */}
        <div
          className="mb-12 max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <img
            src="a4.jpeg"
            alt="Caregiver sharing a warm moment with an elderly resident"
            className="w-full h-auto object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Features */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((item, i) => (
            <div
              key={i}
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={i * 200}
            >
              <div className="inline-flex p-4 bg-white rounded-full mb-4 shadow-sm">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#3C2E2B] mb-3">
                {item.title}
              </h3>
              <p className="text-[#3C2E2B]/70 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
