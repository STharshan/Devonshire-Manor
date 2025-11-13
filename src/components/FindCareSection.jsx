"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Download, FileText } from "lucide-react";

export default function FindCareSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 md:py-20 bg-[#F9F6F1] text-black">
      <div className="container mx-auto px-6">
        <div
          className="max-w-4xl mx-auto text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2
            className="font-serif text-3xl md:text-4xl font-bold mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Find the right care for your family
          </h2>
          <p
            className="text-lg mb-8 text-gray-700 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Download our comprehensive brochure or compare our care options to
            make an informed decision
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            {/* Download brochure button */}
            <button className="inline-flex items-center justify-center gap-2 h-10 px-6 text-sm font-medium rounded-md bg-white text-primary hover:bg-white/90 transition-all shadow hover:scale-105 active:scale-105">
              <Download className="h-5 w-5 mr-1" />
              Download brochure
            </button>

            {/* Compare care options link */}
            <a
              href="/care"
              className="inline-flex items-center justify-center text-black gap-2 h-10 px-6 text-sm font-medium rounded-md border border-white/30 bg-white/10  hover:scale-105 active:scale-105 hover:bg-white/20 transition-all shadow-sm"
            >
              <FileText className="h-5 w-5 mr-1" />
              Compare care options
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
