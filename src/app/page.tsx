"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  Smartphone,
  GraduationCap,
  MessageCircle
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWidget from "@/components/FloatingWidget";
import LeadPopupTrigger from "@/components/LeadPopupTrigger";
import { platformCourses, platformFAQs } from "@/data/platformData";

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const [activeWhyUsTab, setActiveWhyUsTab] = useState(0);

  const scrollRef = useRef<HTMLDivElement>(null);
  const coursesCarouselRef = useRef<HTMLDivElement>(null);
  const whyUsCarouselRef = useRef<HTMLDivElement>(null);

  const scrollTestimonials = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const scrollCourses = (direction: "left" | "right") => {
    if (coursesCarouselRef.current) {
      const { scrollLeft, clientWidth } = coursesCarouselRef.current;
      const scrollTo = direction === "left" 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      coursesCarouselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const scrollWhyUs = (index: number) => {
    setActiveWhyUsTab(index);
    if (whyUsCarouselRef.current) {
      const cards = whyUsCarouselRef.current.children;
      if (cards && cards[index]) {
        const targetCard = cards[index] as HTMLElement;
        whyUsCarouselRef.current.scrollTo({
          left: targetCard.offsetLeft - 32,
          behavior: "smooth"
        });
      }
    }
  };

  const categories = ["All Courses", "Professional Certifications", "Job-Ready Skills", "Free Courses"];

  const filteredCourses = activeCategory === "All Courses" 
    ? platformCourses 
    : platformCourses.filter(c => c.category === activeCategory);

  const companies = [
    "J.P. Morgan", "Goldman Sachs", "Morgan Stanley", "Deloitte", "EY", "KPMG", "PwC", 
    "Nomura", "Barclays", "Citi", "HDFC Bank", "ICICI Bank"
  ];

  const handleBooking = () => {
    const event = new CustomEvent("open-booking-modal");
    window.dispatchEvent(event);
  };

  return (
    <>
      <Navbar />
      <LeadPopupTrigger />
      
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-[#02040a]">
        {/* Background image overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            className="absolute inset-0 w-full h-full object-cover opacity-75 transition-opacity duration-700" 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop" 
            alt="Finvision Corporate Skyline"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#02040a]/10 via-[#02040a]/40 to-[#02040a] z-10" />
          <div className="absolute inset-0 bg-[#02040a]/30 z-10" />
        </div>

        {/* Center centered text in the middle */}
        <div className="relative z-20 flex min-h-[95vh] items-center justify-center px-6 pt-28 sm:pt-36 pb-12 w-full text-center">
          <div className="max-w-5xl space-y-6">
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ textShadow: "0 4px 32px rgba(2, 4, 10, 0.95), 0 2px 12px rgba(2, 4, 10, 0.9)" }}
              className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-white leading-[1.1] uppercase drop-shadow-[0_4px_24px_rgba(2,4,10,0.95)]"
            >
              Learn What Finance<br />
              <span className="text-gradient-gold">Really Feels Like</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Course Categories & Cards */}
      <section className="py-32 bg-slate-950/60 border-t border-white/5 px-6 relative">
        {/* Soft background glow */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Centered Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="px-4 py-1.5 bg-accent-yellow/10 text-accent-yellow border border-accent-yellow/15 rounded-full text-xs font-bold uppercase tracking-widest font-display inline-block">
              Our Curated Curriculum
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-display text-white tracking-tight leading-tight">
              Courses Designed for <span className="text-gradient-gold">Real-World Financial Skills</span>
            </h2>
          </div>

          {/* Centered inline text tabs with a premium sliding capsule */}
          <div className="flex justify-center pt-4">
            <div className="flex flex-wrap items-center justify-center p-1.5 bg-slate-900/80 border border-white/5 rounded-2xl md:rounded-full backdrop-blur-md relative gap-1 md:gap-2 shadow-inner">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-5 py-2.5 rounded-xl md:rounded-full text-xs font-bold font-display tracking-widest transition-all duration-300 uppercase relative cursor-pointer select-none ${
                      isActive ? "text-slate-950 font-extrabold" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCategoryBg"
                        className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 rounded-xl md:rounded-full shadow-lg shadow-yellow-500/20 z-0"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Horizontal Snap Scroll Carousel with Hover Arrows and Entry Animations */}
          <div className="relative group/carousel mt-12">
            {/* Absolute Left Floating Arrow Button */}
            <button
              onClick={() => scrollCourses("left")}
              className="absolute -left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-slate-950/90 border border-white/10 hover:border-accent-yellow hover:text-accent-yellow text-white flex items-center justify-center backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer opacity-0 pointer-events-none group-hover/carousel:opacity-100 group-hover/carousel:pointer-events-auto group-hover/carousel:left-4"
              aria-label="Previous courses"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Absolute Right Floating Arrow Button */}
            <button
              onClick={() => scrollCourses("right")}
              className="absolute -right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-slate-950/90 border border-white/10 hover:border-accent-yellow hover:text-accent-yellow text-white flex items-center justify-center backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer opacity-0 pointer-events-none group-hover/carousel:opacity-100 group-hover/carousel:pointer-events-auto group-hover/carousel:right-4"
              aria-label="Next courses"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Animated Cards Container */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.08
                    }
                  }
                }}
                initial="hidden"
                animate="show"
                ref={coursesCarouselRef}
                className="flex gap-8 overflow-x-auto pb-8 hide-scrollbar scroll-smooth snap-x snap-mandatory px-2"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {filteredCourses.map((course) => {
                  const theme = getCourseTheme(course.id);
                  return (
                    <motion.div
                      key={course.id}
                      variants={{
                        hidden: { y: 24, opacity: 0 },
                        show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120, damping: 14 } }
                      }}
                      whileHover={{ y: -8, scale: 1.01 }}
                      className={`w-[280px] sm:w-[320px] md:w-[350px] shrink-0 snap-start glass-card-premium overflow-hidden flex flex-col justify-between group relative border border-white/5 hover:border-white/10 transition-all duration-300 ${theme.glowClass}`}
                    >
                      <div className="p-8 pb-4 space-y-6 relative flex-1 flex flex-col">
                        {/* Top-Right Decorative SVG Geometry */}
                        {theme.svg}

                        {/* Badge */}
                        <span className={`inline-block text-[9px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border w-fit ${theme.badgeClass}`}>
                          {theme.badgeText}
                        </span>

                        {/* Course Title */}
                        <h3 className="text-xl md:text-2xl font-black font-display text-white tracking-tight leading-snug group-hover:text-accent-yellow transition-colors pt-2 max-w-[85%]">
                          {course.title}
                        </h3>

                        {/* Facts Row: Duration and Level/Rating */}
                        <div className="flex flex-wrap items-center gap-3 pt-1">
                          <div className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-txt-secondary bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                            <svg className="w-3.5 h-3.5 text-accent-yellow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-txt-secondary bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                            <svg className="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span>{course.rating} Rating</span>
                          </div>
                        </div>

                        {/* Mode row */}
                        <div className="flex items-center gap-2 text-[11px] font-bold text-white/95 bg-white/5 w-fit px-3 py-1.5 rounded-lg border border-white/5">
                          <LaptopIcon />
                          <span>Mode: {course.mode}</span>
                        </div>

                        {/* Short Description */}
                        <p className="text-xs text-txt-secondary leading-relaxed font-medium line-clamp-3">
                          {course.shortDescription}
                        </p>

                        <div className="border-t border-white/5 my-2 w-full" />

                        {/* Course Highlights Bullet List */}
                        <div className="space-y-2 flex-1">
                          <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest block">Core Highlights:</span>
                          {course.highlights.slice(0, 2).map((h, i) => (
                            <div key={i} className="flex items-start gap-2 text-[11px] text-white/90">
                              <span className="text-accent-yellow mt-0.5">•</span>
                              <span className="leading-snug">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Single LEARN MORE Outline Button at the bottom */}
                      <div className="p-8 pt-0 mt-2">
                        <Link
                          href={`/courses/${course.slug}`}
                          className={`block w-full py-3.5 border text-center text-xs font-black uppercase tracking-widest rounded-full transition-all duration-300 cursor-pointer ${theme.btnClass} group-hover:scale-[1.02] flex items-center justify-center gap-2`}
                        >
                          <span>LEARN MORE</span>
                          <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </Link>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* From Learning to Leadership in Finance (Why Us) Section */}
      <section className="py-32 bg-slate-950 border-t border-white/5 px-6 relative overflow-hidden">
        {/* Subtle radial light effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] md:text-xs font-extrabold uppercase tracking-widest text-accent-yellow block">
              LEARN IT. PROVE IT. OWN YOUR FINANCE CAREER.
            </span>
            <h2 className="text-4xl md:text-6xl font-black font-display text-white tracking-tight leading-tight">
              From Learning to Leadership in Finance
            </h2>

            {/* Clickable inline text tabs for Why Us - capsule sliding selector */}
            <div className="flex justify-center pt-8">
              <div className="flex flex-wrap items-center justify-center p-1.5 bg-slate-900/80 border border-white/5 rounded-2xl md:rounded-full backdrop-blur-md relative gap-1 md:gap-2 shadow-inner">
                {[
                  "Guided by Experts",
                  "Learn on Live Markets",
                  "Network That Hires",
                  "Land Your Finance Role"
                ].map((tab, index) => {
                  const isActive = activeWhyUsTab === index;
                  return (
                    <button
                      key={tab}
                      onClick={() => scrollWhyUs(index)}
                      className={`px-5 py-2.5 rounded-xl md:rounded-full text-xs font-bold font-display tracking-widest transition-all duration-300 uppercase relative cursor-pointer select-none ${
                        isActive ? "text-slate-950 font-extrabold" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeWhyUsBg"
                          className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500 rounded-xl md:rounded-full shadow-lg shadow-yellow-500/20 z-0"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{tab}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Horizontal Snap Scroll Cards track */}
          <div 
            ref={whyUsCarouselRef}
            className="flex gap-8 overflow-x-auto pb-8 hide-scrollbar scroll-smooth snap-x snap-mandatory px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Card 1: Guided by Experts */}
            <div className="w-[280px] sm:w-[340px] md:w-[490px] shrink-0 snap-start glass-card-premium overflow-hidden flex flex-col md:flex-row group border border-white/5 hover:border-brand-blue/30 shadow-[0_0_30px_rgba(10,102,255,0.02)]">
              <div className="p-8 flex-1 flex flex-col justify-between bg-gradient-to-br from-brand-blue/20 to-indigo-950/60">
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-black font-display text-white leading-tight">
                    Direct Mentor Advisory
                  </h3>
                  <p className="text-xs text-txt-secondary leading-relaxed font-medium">
                    Learn directly from experienced practitioners, CA, CFA charterholders, and senior market analysts, ensuring conceptual depth.
                  </p>
                </div>
                <div className="pt-6 border-t border-white/5 mt-4">
                  <span className="text-[10px] text-accent-yellow uppercase tracking-widest font-bold">Guided by Experts</span>
                </div>
              </div>
              <div className="h-[220px] md:h-auto md:w-[45%] relative overflow-hidden bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop" 
                  alt="Mentors class"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Card 2: Learn on Live Markets */}
            <div className="w-[280px] sm:w-[340px] md:w-[690px] shrink-0 snap-start glass-card-premium overflow-hidden flex flex-col md:flex-row group border border-white/5 hover:border-purple-500/30 shadow-[0_0_30px_rgba(147,51,234,0.02)]">
              <div className="p-8 flex-[0.8] flex flex-col justify-between bg-gradient-to-br from-purple-900/30 to-slate-950/70">
                <div className="space-y-4">
                  <h3 className="text-xl md:text-3xl font-black font-display text-white leading-tight">
                    Courses Built for the Real World
                  </h3>
                  <p className="text-xs md:text-sm text-txt-secondary leading-relaxed font-medium">
                    Each course is designed to build real-world understanding through our trademarked, industry-informed study material and a teaching style that makes complex topics click.
                  </p>
                </div>
                <div className="pt-6 border-t border-white/5 mt-4">
                  <span className="text-[10px] text-accent-yellow uppercase tracking-widest font-bold">Learn on Live Markets</span>
                </div>
              </div>
              <div className="h-[220px] md:h-auto md:flex-1 relative overflow-hidden bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop" 
                  alt="Classroom session"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Card 3: Network That Hires */}
            <div className="w-[280px] sm:w-[340px] md:w-[550px] shrink-0 snap-start glass-card-premium overflow-hidden flex flex-col md:flex-row group border border-white/5 hover:border-orange-500/30 shadow-[0_0_30px_rgba(249,115,22,0.02)]">
              <div className="p-8 flex-1 flex flex-col justify-between bg-gradient-to-br from-orange-900/20 to-slate-950/70">
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-black font-display text-white leading-tight">
                    A Learning Community That Lifts You Up
                  </h3>
                  <p className="text-xs text-txt-secondary leading-relaxed font-medium">
                    Join a vibrant community of like-minded students, mentors, and alumni who support, share, and grow together. From peer discussions to shared wins, this network becomes your cheer squad.
                  </p>
                </div>
                <div className="pt-6 border-t border-white/5 mt-4">
                  <span className="text-[10px] text-accent-yellow uppercase tracking-widest font-bold">Network That Hires</span>
                </div>
              </div>
              <div className="h-[220px] md:h-auto md:w-[45%] relative overflow-hidden bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" 
                  alt="Student community"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Card 4: Land Your Finance Role */}
            <div className="w-[280px] sm:w-[340px] md:w-[510px] shrink-0 snap-start glass-card-premium overflow-hidden flex flex-col md:flex-row group border border-white/5 hover:border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.02)]">
              <div className="p-8 flex-1 flex flex-col justify-between bg-gradient-to-br from-emerald-900/20 to-slate-950/70">
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-black font-display text-white leading-tight">
                    Premium Core Placement
                  </h3>
                  <p className="text-xs text-txt-secondary leading-relaxed font-medium">
                    Our dedicated placement support team facilitates mock interviews, resume optimization, and shares direct job opportunities with global institutions.
                  </p>
                </div>
                <div className="pt-6 border-t border-white/5 mt-4">
                  <span className="text-[10px] text-accent-yellow uppercase tracking-widest font-bold">Land Your Finance Role</span>
                </div>
              </div>
              <div className="h-[220px] md:h-auto md:w-[45%] relative overflow-hidden bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop" 
                  alt="Corporate meeting"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Speak for Themselves Section */}
      <section className="py-32 bg-slate-950 border-t border-white/5 px-6 relative">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <div className="w-6 h-0.5 bg-emerald-400" />
              <span className="text-[10px] md:text-xs font-extrabold uppercase tracking-widest text-emerald-400">
                RESULTS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-display text-white tracking-tight leading-tight">
              The Results Speak <span className="text-gradient-gold italic font-serif">for Themselves</span>
            </h2>
            <p className="text-xs md:text-sm text-txt-secondary leading-relaxed">
              Proof, not promises. Every number below is backed by verifiable alumni data.
            </p>
          </div>

          {/* 5-Column Stats Grid of Cards (separated rather than single capsule for a cleaner modular structure) */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { val: "88%", lbl: "Pass Rate", sub: "CFA & FRM combined" },
              { val: "3,000+", lbl: "Students Placed", sub: "Big 4, banks, AMCs" },
              { val: "65%", lbl: "Avg Salary Hike", sub: "Within 1 year of clearing" },
              { val: "12+", lbl: "Countries", sub: "Where alumni work" },
              { val: "50K+", lbl: "Students Trained", sub: "Since 2010" }
            ].map((stat, idx) => (
              <div key={idx} className={`glass-card-premium p-8 text-center flex flex-col justify-center border border-white/5 ${idx === 4 ? "col-span-2 md:col-span-1" : ""}`}>
                <span className="text-3xl md:text-4xl lg:text-5xl font-black font-display text-white text-gradient-gold">{stat.val}</span>
                <span className="text-[11px] font-black text-white uppercase tracking-widest mt-3">{stat.lbl}</span>
                <span className="text-[10px] text-txt-secondary mt-1">{stat.sub}</span>
              </div>
            ))}
          </div>

          {/* Comparison Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
            {/* Left comparison dials */}
            <div className="lg:col-span-5 flex flex-wrap sm:flex-nowrap items-center justify-center gap-4 sm:gap-8 md:gap-12 p-4 sm:p-8 rounded-3xl bg-[#050a18]/45 border border-white/5 shadow-inner">
              
              {/* Finvision Dial */}
              <div className="flex flex-col items-center space-y-4">
                <div className="w-28 h-28 relative flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.04)" strokeWidth="7" fill="none" />
                    <motion.circle 
                      cx="50" 
                      cy="50" 
                      r="40" 
                      stroke="#0ea5e9" 
                      strokeWidth="7" 
                      fill="none"
                      strokeDasharray="251.2"
                      initial={{ strokeDashoffset: 251.2 }}
                      whileInView={{ strokeDashoffset: 251.2 * (1 - 0.88) }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.6, ease: "easeOut" }}
                    />
                  </svg>
                  <span className="absolute text-2xl font-black font-display text-white">88%</span>
                </div>
                <span className="text-[10px] font-black text-sky-400 uppercase tracking-widest">Finvision</span>
              </div>

              {/* VS label */}
              <span className="text-xs font-black text-txt-muted uppercase">VS</span>

              {/* Global Average Dial */}
              <div className="flex flex-col items-center space-y-4">
                <div className="w-28 h-28 relative flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.04)" strokeWidth="7" fill="none" />
                    <motion.circle 
                      cx="50" 
                      cy="50" 
                      r="40" 
                      stroke="#475569" 
                      strokeWidth="7" 
                      fill="none"
                      strokeDasharray="251.2"
                      initial={{ strokeDashoffset: 251.2 }}
                      whileInView={{ strokeDashoffset: 251.2 * (1 - 0.44) }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.6, ease: "easeOut" }}
                    />
                  </svg>
                  <span className="absolute text-2xl font-black font-display text-slate-400">44%</span>
                </div>
                <span className="text-[10px] font-black text-txt-secondary uppercase tracking-widest">Global Avg</span>
              </div>

            </div>

            {/* Right comparison detail text */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xl md:text-3xl font-black font-display text-white leading-tight">
                2× the Global Pass Rate — <span className="text-gradient-gold">Consistently</span>
              </h3>
              <p className="text-xs md:text-sm text-txt-secondary leading-relaxed font-medium">
                Our pass rate isn't a one-time spike. Across 6 consecutive exam windows (2024–2026), Finvision students have outperformed the CFA Institute's global average by a factor of 2.
              </p>
              
              {/* Highlighted callout box */}
              <div className="p-6 rounded-2xl border border-sky-500/20 bg-sky-500/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-sky-500" />
                <p className="text-xs leading-relaxed text-txt-secondary">
                  <strong className="text-white">Why?</strong> Zero rote learning + 2,500+ practice questions + AI-powered weak area targeting + mock exams that mirror actual CBT difficulty. Our methodology doesn't just prepare you — <span className="text-sky-400 font-bold">it over-prepares you.</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Lead Instructor / Founder Section */}
      <section className="py-32 bg-slate-950 border-t border-white/5 px-6 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="space-y-3">
            <span className="text-[10px] md:text-xs font-extrabold uppercase tracking-widest text-txt-muted block">
              LEAD INSTRUCTOR
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-display text-white tracking-tight leading-tight">
              At the Helm of Finvision
            </h2>
          </div>

          {/* Core Profile Banner Container */}
          <div className="glass-card-premium p-4 sm:p-8 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative overflow-hidden border border-white/5">
            {/* Subtle glow background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

            {/* Left side text */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-sm tracking-wider uppercase font-display">
                <span>→</span>
                <span>Founder</span>
              </div>
              <h3 className="text-4xl md:text-6xl font-black font-display text-white tracking-tight leading-none">
                Ashwini <br />
                <span className="text-gradient-gold">Bajaj</span>
              </h3>
              <p className="text-xs md:text-sm font-bold text-slate-400 tracking-wide font-display mt-2 uppercase">
                A Lifelong Learner at Heart
              </p>
            </div>

            {/* Center avatar representation */}
            <div className="lg:col-span-4 flex justify-center relative">
              <div className="w-64 h-80 rounded-2xl bg-slate-900 border border-white/10 overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
                  alt="Ashwini Bajaj" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02040a]/80 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right side Bio and Academic Credentials */}
            <div className="lg:col-span-4 space-y-8">
              <p className="text-xs md:text-sm text-txt-secondary leading-relaxed font-medium italic">
                "A portfolio consultant and advisor to leading corporate houses and global institutions, Ashwini brings real-world market operators' perspectives into every Finvision class. Known for his conceptual depth and logical formulas, he makes complex investment theories practical, relevant, and memorable."
              </p>

              {/* Academic Credentials Card */}
              <div className="rounded-2xl border border-white/5 bg-[#030611]/80 p-6 space-y-3 shadow-md">
                <div className="flex items-center gap-2 text-[10px] font-black text-accent-yellow uppercase tracking-wider">
                  <svg className="w-4 h-4 text-accent-yellow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                  <span>Academic Credentials</span>
                </div>
                <p className="text-[11px] font-bold text-white leading-relaxed">
                  Chartered Accountant | Company Secretary | CFA® Charterholder | FRM® Charterholder | CFP® Charterholder | Commerce Graduate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Finance Aspirants Vouch for Us (Testimonials) Section */}
      <section className="py-32 bg-slate-950 border-t border-white/5 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[110px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-16">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-black font-display text-white tracking-tight leading-tight">
              Why Finance Aspirants <br />
              <span className="text-gradient-gold">Vouch for Us...</span>
            </h2>
            
            {/* Carousel control arrows */}
            <div className="flex gap-3">
              <button 
                onClick={() => scrollTestimonials("left")}
                className="w-12 h-12 rounded-full border border-white/10 hover:border-accent-yellow bg-slate-900 flex items-center justify-center text-white transition-all cursor-pointer focus:outline-none hover:scale-105 active:scale-95"
              >
                ←
              </button>
              <button 
                onClick={() => scrollTestimonials("right")}
                className="w-12 h-12 rounded-full border border-white/10 hover:border-accent-yellow bg-slate-900 flex items-center justify-center text-white transition-all cursor-pointer focus:outline-none hover:scale-105 active:scale-95"
              >
                →
              </button>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-8 hide-scrollbar scroll-smooth snap-x snap-mandatory px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[
              {
                name: "Pragya Jain",
                batch: "BATCH of 2014",
                quote: "There is no better person to teach you finance other than Ashwini sir. It's been great experience of learning in Finvision. Coming from engineering background, it was challenging for me to learn finance concepts, but simplified techniques of teaching made it click."
              },
              {
                name: "Dee Kulkarni",
                batch: "BATCH of 2018",
                quote: "I recommend Finvision to anyone who wants a very focused and career-oriented study environment. Finvision has cleverly designed a study system that works. The live lectures combined with the video lectures make learning a lot easier, convenient..."
              },
              {
                name: "Sushmit Mokashi",
                batch: "BATCH of 2020",
                quote: "Finvision gets you prepared for all aspects of the exams topics, the only thing that student needs to do is to show some discipline and revise & practice for the exam. The best thing is that Ashwini sir not only gets you covered for the exams, but also shares a lot of real-world insights..."
              },
              {
                name: "Siddharth Pandey",
                batch: "BATCH of 2023",
                quote: "The content posted by Finvision is amazing. Their videos on youtube as well as juice notes really help revise for the examination well. The experience in the classroom is amazing as well as Ashwini sir uses great real life examples to help us understand the topics better."
              }
            ].map((testi, idx) => (
              <div 
                key={idx} 
                className="w-[280px] sm:w-[320px] md:w-[330px] shrink-0 snap-start glass-card-premium p-8 flex flex-col justify-between group border border-white/5 shadow-[0_0_30px_rgba(251,191,36,0.01)] hover:border-accent-yellow/20"
              >
                <div className="space-y-6">
                  {/* Quote Icon */}
                  <svg className="w-10 h-10 text-accent-yellow/20 group-hover:text-accent-yellow/50 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  
                  {/* Quote Body */}
                  <p className="text-xs md:text-sm text-txt-secondary leading-relaxed font-medium">
                    "{testi.quote}"
                  </p>
                </div>

                {/* Student Info */}
                <div className="pt-6 border-t border-white/5 mt-8 space-y-1">
                  <span className="text-[10px] font-black text-accent-yellow uppercase tracking-widest block">
                    {testi.batch}
                  </span>
                  <h4 className="text-sm font-bold text-white font-display">
                    {testi.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Partners Logo Wall */}
      <section className="py-20 bg-slate-950 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-txt-secondary">
            Our Graduates Work At Leading Global Institutions
          </p>
        </div>
        
        {/* Infinite Marquee effect wrapper */}
        <div className="flex gap-16 items-center justify-center animate-marquee whitespace-nowrap">
          {companies.concat(companies).map((company, idx) => (
            <div 
              key={idx} 
              className="text-lg md:text-xl font-black font-display text-white/10 hover:text-accent-yellow transition-colors duration-300 cursor-default select-none"
            >
              {company}
            </div>
          ))}
        </div>
      </section>

      {/* Student Journey Timeline */}
      <section className="py-32 px-6 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="px-4 py-1.5 bg-brand-blue/10 text-brand-blue border border-brand-blue/20 rounded-full text-xs font-bold uppercase tracking-widest font-display">
              Your Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-black font-display text-white leading-tight">
              The Path to Career Transformation
            </h2>
            <p className="text-sm text-txt-secondary">
              A comprehensive timeline from your first class to a premium corporate role.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Horizontal timeline connector */}
            <div className="hidden md:block absolute top-[2.5rem] left-12 right-12 h-0.5 bg-white/5 z-0" />

            {[
              { number: "01", title: "Select Your Path", desc: "Choose from CFA®, FRM®, or hands-on Financial Modeling based on your long-term career aspirations." },
              { number: "02", title: "Master the Concepts", desc: "Attend live weekend interactive workshops and review premium recorded micro-modules on demand." },
              { number: "03", title: "Build Portfolio Case Studies", desc: "Design professional 3-statement models, LBO projections, and equity research briefs." },
              { number: "04", title: "Direct Placement Interviews", desc: "Engage with our corporate hiring network to land premium analyst, consulting, or risk roles." }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-14 h-14 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-accent-yellow font-extrabold font-display text-lg mb-6 shadow-xl relative">
                  <div className="absolute inset-1 rounded-full border border-dashed border-accent-yellow/30 animate-spin-slow" />
                  {step.number}
                </div>
                <h3 className="text-lg font-bold font-display text-white mb-2">{step.title}</h3>
                <p className="text-xs text-txt-secondary leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-32 bg-slate-950/40 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto rounded-3xl glass-card-premium p-4 sm:p-8 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative overflow-hidden border border-white/5">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="lg:col-span-7 space-y-6">
            <span className="px-3 py-1.5 bg-accent-yellow/10 text-accent-yellow border border-accent-yellow/20 rounded-full text-xs font-bold uppercase tracking-widest font-display flex items-center gap-2 w-fit">
              <Smartphone className="w-3.5 h-3.5" />
              Finvision Mobile
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white leading-tight">
              Access Lectures & Practice <span className="text-gradient-gold">On The Go</span>
            </h2>
            <p className="text-sm text-txt-secondary leading-relaxed max-w-xl">
              Study anywhere, anytime. Download our mobile application to watch recorded lectures offline, solve practice banks, participate in mock quizzes, and track your syllabus coverage metrics dynamically.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#" className="px-6 py-3 bg-slate-950 border border-white/10 hover:border-white/20 text-white font-bold rounded-xl text-xs flex items-center gap-3 transition-all">
                <div className="text-left">
                  <span className="block text-[8px] uppercase text-txt-secondary">Download on the</span>
                  <span className="text-xs font-extrabold font-display">App Store</span>
                </div>
              </a>
              <a href="#" className="px-6 py-3 bg-slate-950 border border-white/10 hover:border-white/20 text-white font-bold rounded-xl text-xs flex items-center gap-3 transition-all">
                <div className="text-left">
                  <span className="block text-[8px] uppercase text-txt-secondary">Get it on</span>
                  <span className="text-xs font-extrabold font-display">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center relative">
            <div className="w-64 h-[500px] border-[6px] border-slate-800 bg-slate-900 rounded-[3rem] shadow-2xl relative p-4 flex flex-col justify-between overflow-hidden">
              <div className="w-28 h-4 bg-slate-800 rounded-full mx-auto mb-4" />
              <div className="flex-1 flex flex-col justify-center items-center text-center p-4">
                <GraduationCap className="w-12 h-12 text-accent-yellow mb-4" />
                <h4 className="text-sm font-bold text-white mb-2">Practice Mode Active</h4>
                <p className="text-[10px] text-txt-secondary max-w-[150px]">
                  50 mock questions ready for Quantitative Methods.
                </p>
                <div className="w-full bg-slate-950 rounded-lg p-2.5 mt-6 border border-white/5">
                  <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden mb-1">
                    <div className="w-3/5 h-full bg-brand-blue" />
                  </div>
                  <span className="text-[8px] text-txt-secondary block">60% Complete</span>
                </div>
              </div>
              <div className="w-20 h-1 bg-white/30 rounded-full mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 relative border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="px-4 py-1.5 bg-brand-blue/10 text-brand-blue border border-brand-blue/20 rounded-full text-xs font-bold uppercase tracking-widest font-display">
              Common Queries
            </span>
            <h2 className="text-4xl font-black font-display text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {platformFAQs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="rounded-2xl glass-card-premium overflow-hidden transition-all duration-300 border border-white/5">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between font-bold text-white text-sm md:text-base font-display focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-accent-yellow" /> : <ChevronDown className="w-5 h-5 text-txt-secondary" />}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-xs md:text-sm text-txt-secondary leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-slate-950 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-brand-blue/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black font-display text-white leading-tight">
            Ready to Accelerate Your <span className="text-gradient-gold text-glow-yellow">Finance Career</span>?
          </h2>
          <p className="text-sm md:text-base text-txt-secondary max-w-xl mx-auto leading-relaxed">
            Schedule a free 1-on-1 strategy call with our certifications advisors and clear all doubts regarding CFA®, FRM®, and recruitment support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleBooking}
              className="px-8 py-4 bg-accent-yellow hover:bg-accent-yellow-hover text-accent-yellow-fg font-extrabold text-sm rounded-xl transition-all duration-300 shadow-xl shadow-accent-yellow/10"
            >
              Book Free Strategy Session
            </button>
            <a
              href="https://wa.me/919999999999"
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWidget />
    </>
  );
}

// Laptop outline icon helper
function LaptopIcon() {
  return (
    <svg className="w-4 h-4 text-txt-secondary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

// Course theme mapping helper
function getCourseTheme(courseId: string) {
  switch (courseId) {
    case "cfae":
      return {
        accentClass: "purple",
        badgeText: "Professional Certification",
        badgeClass: "bg-purple-500/10 text-purple-400 border-purple-500/20",
        btnClass: "border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white",
        glowClass: "shadow-[0_0_40px_-10px_rgba(147,51,234,0.15)] hover:border-purple-500/30",
        svg: (
          <svg className="w-24 h-24 text-purple-500/10 group-hover:text-purple-500/25 group-hover:rotate-45 duration-700 transition-all absolute top-2 right-2 pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 C65 20, 80 35, 100 50 C80 65, 65 80, 50 100 C35 80, 20 65, 0 50 C20 35, 35 20, 50 0 Z" />
            <circle cx="50" cy="50" r="12" className="text-purple-600/30" />
          </svg>
        )
      };
    case "frm":
      return {
        accentClass: "orange",
        badgeText: "Professional Certification",
        badgeClass: "bg-orange-500/10 text-orange-400 border-orange-500/20",
        btnClass: "border-orange-500 text-orange-400 hover:bg-orange-600 hover:text-white",
        glowClass: "shadow-[0_0_40px_-10px_rgba(249,115,22,0.15)] hover:border-orange-500/30",
        svg: (
          <svg className="w-24 h-24 text-orange-500/10 group-hover:text-orange-500/25 group-hover:translate-x-1 group-hover:-translate-y-1 duration-500 transition-all absolute top-2 right-2 pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
            <polygon points="45,10 75,10 50,45 75,45 35,90 45,55 25,55" />
          </svg>
        )
      };
    case "finmod":
      return {
        accentClass: "yellow",
        badgeText: "Job-Ready Skill",
        badgeClass: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
        btnClass: "border-accent-yellow text-accent-yellow hover:bg-accent-yellow hover:text-slate-950",
        glowClass: "shadow-[0_0_40px_-10px_rgba(250,204,21,0.15)] hover:border-accent-yellow/30",
        svg: (
          <svg className="w-24 h-24 text-yellow-500/10 group-hover:text-yellow-500/25 group-hover:scale-105 duration-500 transition-all absolute top-2 right-2 pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
            <rect x="15" y="15" width="45" height="45" rx="8" />
            <circle cx="65" cy="65" r="22" />
          </svg>
        )
      };
    case "stockpick":
    default:
      return {
        accentClass: "pink",
        badgeText: "Job-Ready Skill",
        badgeClass: "bg-pink-500/10 text-pink-400 border-pink-500/20",
        btnClass: "border-pink-500 text-pink-400 hover:bg-pink-600 hover:text-white",
        glowClass: "shadow-[0_0_40px_-10px_rgba(236,72,153,0.15)] hover:border-pink-500/30",
        svg: (
          <svg className="w-24 h-24 text-pink-500/10 group-hover:text-pink-500/25 group-hover:rotate-[60deg] duration-700 transition-all absolute top-2 right-2 pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
            <circle cx="50" cy="50" r="25" />
            <path d="M50 15 L50 25 M50 75 L50 85 M15 50 L25 50 M75 50 L85 50 M25 25 L32 32 M68 68 L75 75 M25 75 L32 68 M68 25 L75 32" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
          </svg>
        )
      };
  }
}
