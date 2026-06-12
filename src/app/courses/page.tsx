"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle, Search, HelpCircle, ArrowRight, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWidget from "@/components/FloatingWidget";
import LeadPopupTrigger from "@/components/LeadPopupTrigger";
import { platformCourses } from "@/data/platformData";

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Professional Certifications", "Job-Ready Skills", "Free Courses"];

  const filteredCourses = platformCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleBooking = () => {
    const event = new CustomEvent("open-booking-modal");
    window.dispatchEvent(event);
  };

  return (
    <>
      <Navbar />
      <LeadPopupTrigger />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-radial from-white/10 to-transparent blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center space-y-6 relative z-10">
          <span className="px-3 py-1 bg-white/20 text-white border border-white/30 rounded-full text-xs font-bold uppercase tracking-widest font-display">
            Curated Certifications
          </span>
          <h1 className="text-4xl md:text-6xl font-black font-display text-white tracking-tight leading-tight">
            Our Premium <span className="text-accent-yellow text-glow-yellow">Finance Programs</span>
          </h1>
          <p className="text-sm md:text-base text-txt-secondary max-w-xl mx-auto leading-relaxed">
            Gain direct domain competency in core valuation, asset pricing, risk structures, and international certifications.
          </p>
        </div>
      </section>

      {/* Course Search & Grid */}
      <section className="pb-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Filters Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 bg-white/10 border border-white/5 rounded-2xl mb-12 backdrop-blur-md">
            {/* Category selection */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold font-display transition-all ${
                    selectedCategory === cat
                      ? "bg-accent-yellow text-accent-yellow-fg shadow-lg"
                      : "bg-transparent border border-white/5 text-txt-secondary hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-transparent border border-white/10 rounded-xl text-white text-xs focus:outline-none focus:border-accent-yellow transition-all"
              />
              <Search className="w-4 h-4 text-txt-secondary absolute left-3.5 top-3" />
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div key={course.id} className="rounded-3xl card-glass flex flex-col justify-between group">
                <div className="p-8 pb-4">
                  {/* Category Badge */}
                  <span className="inline-block text-[10px] font-bold font-display text-brand-blue uppercase tracking-widest bg-brand-blue/10 px-2.5 py-1 rounded-full border border-brand-blue/20 mb-4">
                    {course.category}
                  </span>

                  <h3 className="text-xl font-bold font-display text-white mb-2 leading-snug group-hover:text-accent-yellow transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-xs text-txt-secondary mb-6 leading-relaxed line-clamp-3">
                    {course.shortDescription}
                  </p>

                  {/* Program Highlights */}
                  <ul className="space-y-3 mb-6">
                    {course.highlights.slice(0, 4).map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-txt-secondary">
                        <CheckCircle className="w-4 h-4 text-accent-yellow shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Specifications */}
                  <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4 text-xs text-txt-secondary">
                    <div>
                      <span className="block text-[9px] text-txt-muted uppercase tracking-wider">Duration</span>
                      <span className="font-semibold text-white">{course.duration}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] text-txt-muted uppercase tracking-wider">Language</span>
                      <span className="font-semibold text-white">{course.language}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Pricing & Actions */}
                <div className="p-8 pt-0 border-t border-white/5 mt-4">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-xs text-txt-secondary line-through mr-2">{course.originalPrice}</span>
                      <span className="text-xl font-black text-white">{course.price}</span>
                    </div>
                    <span className="text-xs font-bold text-accent-yellow">★ {course.rating}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href={`/courses/${course.slug}`}
                      className="py-3 bg-white/5 border border-white/10 hover:border-white/20 text-white text-xs font-bold rounded-xl text-center transition-all"
                    >
                      Know More
                    </Link>
                    <button
                      onClick={handleBooking}
                      className="py-3 bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold rounded-xl text-center transition-all"
                    >
                      Enroll Batch
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <p className="text-txt-secondary text-sm">No programs matching search parameters. Try adjusting filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Course Comparison Section */}
      <section className="py-24 bg-transparent border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="px-3 py-1 bg-accent-yellow/10 text-accent-yellow border border-accent-yellow/20 rounded-full text-xs font-bold uppercase tracking-widest font-display">
              Program Matrix
            </span>
            <h2 className="text-3xl font-black font-display text-white">
              Compare Our Primary Certifications
            </h2>
            <p className="text-sm text-txt-secondary">
              Find which qualification fits your current career milestones.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-3xl border border-white/5">
            <table className="w-full border-collapse text-left text-xs md:text-sm">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="p-5 font-bold text-white font-display">Feature</th>
                  <th className="p-5 font-bold text-accent-yellow font-display">CFA® Prep</th>
                  <th className="p-5 font-bold text-accent-yellow font-display">FRM® Prep</th>
                  <th className="p-5 font-bold text-accent-yellow font-display">Financial Modeling</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-transparent">
                <tr>
                  <td className="p-5 font-bold text-white">Target Job Roles</td>
                  <td className="p-5 text-txt-secondary">Portfolio Mgmt, Equity Research, IB</td>
                  <td className="p-5 text-txt-secondary">Risk Analysis, Treasury, Credit Risk</td>
                  <td className="p-5 text-txt-secondary">Corporate Finance, Valuations, PE</td>
                </tr>
                <tr>
                  <td className="p-5 font-bold text-white">Time Commitment</td>
                  <td className="p-5 text-txt-secondary">150+ Study Hours</td>
                  <td className="p-5 text-txt-secondary">120+ Study Hours</td>
                  <td className="p-5 text-txt-secondary">80+ Study Hours</td>
                </tr>
                <tr>
                  <td className="p-5 font-bold text-white">Difficulty Level</td>
                  <td className="p-5 text-txt-secondary">High (Academic & Theoretical)</td>
                  <td className="p-5 text-txt-secondary">High (Quantitative & Math)</td>
                  <td className="p-5 text-txt-secondary">Medium (100% Practical Excel)</td>
                </tr>
                <tr>
                  <td className="p-5 font-bold text-white">Global Recognition</td>
                  <td className="p-5 text-txt-secondary">Extremely High</td>
                  <td className="p-5 text-txt-secondary">Extremely High</td>
                  <td className="p-5 text-txt-secondary">Skill-based Certification</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Career Guidance Call CTA */}
      <section className="py-20 px-6 bg-transparent border-t border-white/5 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-radial from-white/10 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black font-display text-white">
            Unsure Which Certification is Right?
          </h2>
          <p className="text-sm md:text-base text-txt-secondary max-w-xl mx-auto leading-relaxed">
            Get an objective evaluation of your educational profile, past work experience, and job targets from our student success director.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleBooking}
              className="px-8 py-4 bg-accent-yellow hover:bg-accent-yellow-hover text-accent-yellow-fg font-extrabold text-sm rounded-xl transition-all shadow-xl shadow-accent-yellow/10"
            >
              Request Free Career Roadmap
            </button>
            <a
              href="https://wa.me/919999999999"
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWidget />
    </>
  );
}
