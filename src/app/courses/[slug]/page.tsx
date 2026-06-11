"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { CheckCircle, Clock, BookOpen, User, Calendar, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWidget from "@/components/FloatingWidget";
import LeadPopupTrigger from "@/components/LeadPopupTrigger";
import { platformCourses, platformMentors } from "@/data/platformData";

export default function CourseDetailPage() {
  const { slug } = useParams() as { slug: string };
  const [activeModule, setActiveModule] = useState<number | null>(null);

  const course = platformCourses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center p-6 text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Program Not Found</h1>
        <p className="text-sm text-txt-secondary mb-6">The requested course URL could not be resolved.</p>
        <Link href="/courses" className="px-6 py-3 bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold rounded-xl">
          Back to Programs
        </Link>
      </div>
    );
  }

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
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-radial from-brand-blue/5 to-transparent blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          
          <div className="lg:col-span-8 space-y-6">
            <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue border border-brand-blue/20 rounded-full text-xs font-bold uppercase tracking-widest font-display">
              {course.category}
            </span>
            <h1 className="text-4xl sm:text-6xl font-black font-display text-white leading-tight tracking-tight">
              {course.title}
            </h1>
            <p className="text-sm md:text-base text-txt-secondary leading-relaxed max-w-2xl">
              {course.shortDescription}
            </p>

            {/* Core Stats Details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 border-y border-white/5 py-6">
              <div>
                <span className="block text-[9px] text-txt-muted uppercase tracking-wider mb-1">Duration</span>
                <span className="text-sm font-bold text-white flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-accent-yellow" />
                  {course.duration}
                </span>
              </div>
              <div>
                <span className="block text-[9px] text-txt-muted uppercase tracking-wider mb-1">Class Delivery</span>
                <span className="text-sm font-bold text-white flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-accent-yellow" />
                  {course.mode}
                </span>
              </div>
              <div>
                <span className="block text-[9px] text-txt-muted uppercase tracking-wider mb-1">Rating Outcomes</span>
                <span className="text-sm font-bold text-white flex items-center gap-1.5">
                  ★ {course.rating} / 5
                </span>
              </div>
              <div>
                <span className="block text-[9px] text-txt-muted uppercase tracking-wider mb-1">Students Enrolled</span>
                <span className="text-sm font-bold text-white flex items-center gap-1.5">
                  <User className="w-4 h-4 text-accent-yellow" />
                  {course.enrolledStudents}+
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={handleBooking}
                className="px-8 py-4 bg-accent-yellow hover:bg-accent-yellow-hover text-accent-yellow-fg font-extrabold text-sm rounded-xl transition-all shadow-xl shadow-accent-yellow/10"
              >
                Enroll In Program ({course.price})
              </button>
              <button
                onClick={handleBooking}
                className="px-8 py-4 bg-slate-900 border border-white/10 hover:border-white/20 text-white font-bold text-sm rounded-xl transition-all"
              >
                Download Syllabus Brochure
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            {/* Outline Box */}
            <div className="w-full max-w-sm p-6 rounded-3xl card-glass space-y-6">
              <h3 className="text-lg font-bold font-display text-white border-b border-white/5 pb-2">Program Highlights</h3>
              <ul className="space-y-3">
                {course.highlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-txt-secondary">
                    <CheckCircle className="w-4 h-4 text-accent-yellow shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Program Deep Overview */}
      <section className="py-24 bg-slate-950/40 border-t border-white/5 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4 text-center">
            <span className="px-3 py-1 bg-accent-yellow/10 text-accent-yellow border border-accent-yellow/20 rounded-full text-xs font-bold uppercase tracking-widest font-display">
              Overview
            </span>
            <h2 className="text-3xl font-black font-display text-white">About the Course</h2>
          </div>
          <p className="text-sm md:text-base text-txt-secondary leading-relaxed text-center">
            {course.description}
          </p>
        </div>
      </section>

      {/* Curriculum Accordion */}
      <section className="py-24 px-6 relative border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue border border-brand-blue/20 rounded-full text-xs font-bold uppercase tracking-widest font-display">
              Course Structure
            </span>
            <h2 className="text-3xl font-black font-display text-white">Detailed Program Syllabus</h2>
            <p className="text-xs text-txt-secondary">
              Review the detailed sections and topics covered in this training program.
            </p>
          </div>

          <div className="space-y-4">
            {course.curriculum.map((section, idx) => {
              const isOpen = activeModule === idx;
              return (
                <div key={idx} className="rounded-2xl card-glass overflow-hidden">
                  <button
                    onClick={() => setActiveModule(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between font-bold text-white text-sm md:text-base font-display focus:outline-none"
                  >
                    <span>{section.section}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-accent-yellow" /> : <ChevronDown className="w-5 h-5 text-txt-secondary" />}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 border-t border-white/5 pt-4">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {section.topics.map((topic, tIdx) => (
                          <li key={tIdx} className="flex items-center gap-2 text-xs text-txt-secondary">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-yellow" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mentor Highlight */}
      <section className="py-24 bg-slate-950/40 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-72 h-80 rounded-3xl bg-slate-900 border border-white/10 flex items-center justify-center text-xs text-txt-muted overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent" />
              <div className="relative z-10 text-center p-6 mt-auto">
                <h4 className="text-base font-bold text-white font-display">Ashwini Bajaj</h4>
                <p className="text-[10px] text-accent-yellow uppercase tracking-widest">Founder & Chief Advisor</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="px-3 py-1 bg-accent-yellow/10 text-accent-yellow border border-accent-yellow/20 rounded-full text-xs font-bold uppercase tracking-widest font-display">
              Lead Faculty
            </span>
            <h2 className="text-3xl font-black font-display text-white">Mentored by Ashwini Bajaj</h2>
            <p className="text-sm text-txt-secondary leading-relaxed">
              Every core segment of our certification lectures is directly structured or taught by Ashwini Bajaj (CA, CS, CFA, FRM). His reputation for bringing live market feeds, Bloomberg terminal calculations, and absolute integrity ensures you develop true operational competence.
            </p>
            <button
              onClick={handleBooking}
              className="px-6 py-3 bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold rounded-xl transition-all shadow-lg shadow-brand-blue/10"
            >
              Ask Mentor Directly
            </button>
          </div>
        </div>
      </section>

      {/* Program Learning Outcomes */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue border border-brand-blue/20 rounded-full text-xs font-bold uppercase tracking-widest font-display">
              Success Goals
            </span>
            <h2 className="text-3xl font-black font-display text-white">Expected Learning Outcomes</h2>
          </div>
          <ul className="space-y-4">
            {course.outcomes.map((outcome, idx) => (
              <li key={idx} className="flex items-start gap-3 p-4 bg-slate-900/30 border border-white/5 rounded-2xl">
                <CheckCircle className="w-5 h-5 text-accent-yellow shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm text-txt-secondary leading-relaxed">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-slate-950 border-t border-white/5 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-brand-blue/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black font-display text-white">Secure Your Batch Enrollment</h2>
          <p className="text-sm text-txt-secondary max-w-lg mx-auto leading-relaxed">
            Register now to lock in early-bird pricing and secure instant access to our online portal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleBooking}
              className="px-8 py-4 bg-accent-yellow hover:bg-accent-yellow-hover text-accent-yellow-fg font-extrabold text-sm rounded-xl transition-all shadow-xl shadow-accent-yellow/10"
            >
              Register & Pay Now
            </button>
            <a
              href="https://wa.me/919999999999"
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              Syllabus Info WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWidget />
    </>
  );
}
