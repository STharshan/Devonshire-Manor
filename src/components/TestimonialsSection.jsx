"use client";
import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Review() {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      // initial states
      gsap.set(cards, { yPercent: 30, opacity: 0 });
      gsap.set(cards[0], { yPercent: 0, opacity: 1 });

      // timeline for card reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: "top 80%",
          end: "+=" + cards.length * 400,
          scrub: 1.5,
        },
      });

      // Animate each card one by one
      cards.forEach((card, i) => {
        if (i === 0) return;
        tl.to(cards[i], { opacity: 1, yPercent: 0, duration: 1 }, i * 0.5);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const testimonials = [
     {
      name: "Nettie BURTON",
      text:
        `Ever since I moved to Devonshire Manor on Rosa Road, I've had such a lovely experience. Beautiful sense of community.
Super kind and helpful team they have.
With such a lovely and upmost professional manager leading the community. The property looks great too! It has a weekly maintained landscape.`,
      initials: "Daughter of Resident",
    },
    {
      text:
        "We moved here a few months ago, and haven't regretted it for a moment. Meghan, the property manager, has always been easy to approach with questions and concerns, and the maintenance staff are great. They follow up as soon as you put in a request, and follow up communication is quick and informative. ",
      name: "Chelle Tackett",
      initials: "Daughter of Resident",
    },
    {
      text:
        "I have lived here for a few months and I plan on living here long term. Meghan at the leasing office made my move-in easy and enjoyable, maintenance has been amazing, the pool and gym are incredible! The complex is quiet and beautiful.",
      name: "Brittney Owen",
      initials: "Son",
    },
    {
      text:
        "Nice apartments. Staff is amazing. Staff works incredibly hard to keep up grounds, amenities, and buildings. Megan (manager) is incredible at working with tenants.",
      name: "jenifer groves",
      initials: "Daughter",
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white overflow-hidden"
    >
      {/* === Background image scrolls normally === */}
      <div className="absolute inset-0">
        <img
          src="/bg.jpg"
          alt="Hear it from our clients"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* === Heading === */}
      <div className="relative z-10 text-center pt-32 pb-12">
        <h2 className="text-4xl md:text-5xl font-semibold text-primary">
          Hear it from our clients
        </h2>
      </div>

      {/* === Cards container === */}
      <div
        ref={cardsContainerRef}
        className="relative z-10 max-w-xl mx-auto flex flex-col items-center gap-8 pb-32"
      >
        {testimonials.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="w-full bg-white/10 backdrop-blur-md rounded-2xl h-60 border border-white/10 
                       shadow-[0_0_20px_rgba(0,0,0,0.3)] p-6 md:p-8 opacity-0 transform translate-y-8"
          >
            <p className="text-lg md:text-xl font-semibold mb-3 text-primary">{item.initials}</p>
            <p className="text-sm md:text-base opacity-80 mb-4">{item.text}</p>
            <div className="flex items-center gap-13 text-primary">
              <span>{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}