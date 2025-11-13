"use client";
import React from "react";
import {
  Check,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
} from "lucide-react";
import { SITE_NAME, PHONE_NUMBER} from "../components/global"; // ✅ import global text

export default function FooterSection() {
  const ratingItems = [
    { label: "Caring", rating: "Good" },
    { label: "Effective", rating: "Good" },
    { label: "Responsive", rating: "Good" },
    { label: "Safe", rating: "Good" },
    { label: "Well-led", rating: "Good" },
  ];

  return (
 <footer className="bg-[#2E2E2E] text-white">
      {/* CQC Rating Card */}
      <div className="bg-[#F9F6F1] py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-4">
              <h2 className="font-serif text-xl md:text-2xl font-bold mb-1 text-[#3C2E2B]">
                Care Quality Commission (CQC) Rating
              </h2>
              <p className="text-sm text-[#3C2E2B]/70">
                <span className="font-semibold">Date:</span> 24 Jul 2024
              </p>
            </div>

            {/* Rating Grid */}
            <div className="grid md:grid-cols-[220px_1fr] gap-0">
              {/* Left Panel */}
              <div className="bg-[#3d7c4a] text-white p-6 md:p-8 flex items-center justify-center rounded-t-lg md:rounded-l-lg md:rounded-tr-none relative">
                <div className="text-center">
                  <div className="font-bold text-xl md:text-2xl mb-1">Overall</div>
                  <div className="font-bold text-2xl md:text-3xl">Good</div>
                </div>
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-25 border-t-transparent border-l-25 border-l-[#3d7c4a] border-b-25 border-b-transparent" />
              </div>

              {/* Right Ratings */}
              <div className="border border-[#E6D8C3] rounded-b-lg md:rounded-r-lg md:rounded-bl-none divide-y divide-[#E6D8C3] md:pl-8">
                {ratingItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between px-4 py-3 hover:bg-[#E6D8C3]/40 transition-colors"
                  >
                    <span className="font-medium text-base text-[#3C2E2B]">
                      {item.label}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-base text-[#3C2E2B]">
                        {item.rating}
                      </span>
                      <div className="w-5 h-5 rounded-full bg-[#3d7c4a] flex items-center justify-center">
                        <Check className="h-3 w-3 text-white" strokeWidth={3} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rating Key */}
            <div className="mt-4 pt-4 border-t border-[#E6D8C3]">
              <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm">
                <span className="font-semibold text-[#3C2E2B]">Rating key:</span>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-1.5">
                    <Check className="h-3 w-3 text-green-600" strokeWidth={3} />
                    <span className="text-[#3C2E2B]">Outstanding</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#3d7c4a]" />
                    <span className="text-[#3C2E2B]">Good</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-orange-500" />
                    <span className="text-[#3C2E2B]">Requires improvement</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-600" />
                    <span className="text-[#3C2E2B]">Inadequate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              {SITE_NAME}
            </h3>
            <p className="text-sm text-white/80 mb-4 leading-relaxed">
              Exceptional care in a welcoming environment
            </p>
            <div className="space-y-2 text-sm text-white/80">
              <p>
                18150 SW Rosa Rd, Aloha, 

                </p>
              <p> OR 97078, United States</p>
              <p className="pt-2">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="hover:text-white transition-colors"
                >
                  {PHONE_NUMBER}
                </a>
              </p>
              {/* <p>
                <a
                  href="mailto:info@beechdalecare.co.uk"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <Mail className="h-3 w-3" />
                  info@beechdalecare.co.uk
                </a>
              </p> */}
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              {[
                ["Care Services", "/care"],
                ["Our Facilities", "/facilities"],
                ["About Us", "/about"],
                ["Fees & Funding", "/fees-and-funding"],
                ["Contact Us", "/contact"],
              ].map(([label, link]) => (
                <li key={label}>
                  <a
                    href={link}
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              Legal & Policies
            </h3>
            <ul className="space-y-2 text-sm text-white/80">
              {[
                ["Privacy Policy", "/privacy"],
                ["Terms & Conditions", "/terms"],
                ["Safeguarding", "/safeguarding"],
                ["Complaints", "/complaints"],
              ].map(([label, link]) => (
                <li key={label}>
                  <a
                    href={link}
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-white/20">
              <p className="text-xs text-white/60">
                CQC Reference: CQC-REG-123456
              </p>
              <p className="text-xs text-white/60 mt-1">Established 1995</p>
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">
              Stay Connected
            </h3>
            <p className="text-sm text-white/80 mb-4">
              Subscribe to our newsletter for care tips and updates.
            </p>
            <form className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="h-9 w-full rounded-md border border-white/20 px-3 py-1 text-sm bg-white/10 text-white placeholder:text-white/50 focus-visible:ring-2 focus-visible:ring-[#7399C6] outline-none"
                  required
                />
                <button
                  type="submit"
                  className="size-9 bg-[#7399C6] hover:bg-[#6187B3] rounded-md flex items-center justify-center transition-all"
                  aria-label="Subscribe"
                >
                  <Mail className="h-4 w-4 text-white" />
                </button>
              </div>
            </form>

            <div className="flex gap-3 mt-6">
              {[
                {
                  icon: <Facebook className="h-4 w-4" />,
                  link: "https://facebook.com/beechdalehouse",
                },
                {
                  icon: <Twitter className="h-4 w-4" />,
                  link: "https://twitter.com/beechdalehouse",
                },
                {
                  icon: <Linkedin className="h-4 w-4" />,
                  link: "https://linkedin.com/company/beechdalehouse",
                },
                {
                  icon: <Instagram className="h-4 w-4" />,
                  link: "https://instagram.com/beechdalehouse",
                },
              ].map(({ icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 hover:bg-white/20 rounded transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-sm text-white/60">
            © 2025 {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-center font-semibold text-gray-400">
            Powered by{" "}
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Ansely
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}