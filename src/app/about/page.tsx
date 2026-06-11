"use client";

import React from "react";
import Link from "next/link";
import { Award, Briefcase, Landmark, Shield, Users, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWidget from "@/components/FloatingWidget";
import LeadPopupTrigger from "@/components/LeadPopupTrigger";
import { platformMentors } from "@/data/platformData";

export default function AboutPage() {
  const milestones = [
    { year: "2018", title: "Academy Inception", desc: "Started offline CFA training in Kolkata under Ashwini Bajaj's leadership." },
    { year: "2020", title: "Digital Transition", desc: "Launched customized online learning portal to support students during lockdowns." },
    { year: "2022", title: "Valuation Bootcamp Launch", desc: "Added hands-on Financial Modeling, DCF case studies, and corporate workshops." },
    { year: "2024", title: "15,000+ Alumni Milestone", desc: "Passed a milestone of student enrollments placing across global research platforms." },
  ];

  const valueAims = [
    { title: "Academic Honesty", desc: "We maintain uncompromising pedagogical standards, explaining calculations from fundamental proofs.", icon: Shield },
    { title: "Domain Practitioner Faculty", desc: "All courses are led by instructors holding active designations (CFA, FRM, CA) with transaction desk expertise.", icon: Users },
    { title: "Institutional Quality Models", desc: "Worksheets and corporate projects are built to match real buy-side standards.", icon: Landmark },
  ];

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
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue border border-brand-blue/20 rounded-full text-xs font-bold uppercase tracking-widest font-display">
            Our Legacy
          </span>
          <h1 className="text-4xl md:text-6xl font-black font-display text-white tracking-tight leading-tight">
            Empowering the Next Gen <span className="text-accent-yellow text-glow-yellow">Finance Leaders</span>
          </h1>
          <p className="text-sm md:text-base text-txt-secondary max-w-xl mx-auto leading-relaxed">
            Discover the values, leadership, and operational history behind Finvision's institutional-grade training.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-8 md:p-12 rounded-3xl card-glass space-y-4">
            <span className="text-xs font-bold text-accent-yellow uppercase tracking-widest font-display">Our Mission</span>
            <h3 className="text-2xl font-bold font-display text-white">Democratizing Premium Finance Coaching</h3>
            <p className="text-sm text-txt-secondary leading-relaxed">
              Our mission is to make international-standard financial mentoring accessible to everyone. We replace generic, boring text slides with interactive worksheets, real case studies of corporate restructuring, and hands-on portfolio analysis.
            </p>
          </div>
          <div className="p-8 md:p-12 rounded-3xl card-glass space-y-4">
            <span className="text-xs font-bold text-accent-yellow uppercase tracking-widest font-display">Our Vision</span>
            <h3 className="text-2xl font-bold font-display text-white">The Trusted Global Learning Desk</h3>
            <p className="text-sm text-txt-secondary leading-relaxed">
              We envision creating an academic benchmark where global institutions look to recruit certified candidates. By focusing on deep conceptual proofs, we seek to build a community of risk and investment leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-24 bg-slate-950/50 border-t border-white/5 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Avatar representation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-80 h-96 rounded-3xl bg-slate-900 border border-white/10 flex items-center justify-center text-xs text-txt-secondary relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent" />
              <div className="relative z-10 text-center p-6 mt-auto">
                <h4 className="text-base font-bold text-white font-display">Ashwini Bajaj</h4>
                <p className="text-[10px] text-accent-yellow uppercase tracking-widest">Founder & Chief Mentor</p>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-7 space-y-6">
            <span className="px-3 py-1 bg-accent-yellow/10 text-accent-yellow border border-accent-yellow/20 rounded-full text-xs font-bold uppercase tracking-widest font-display">
              Founder Story
            </span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white leading-tight">
              An Educator Dedicated to <span className="text-accent-yellow">Conceptual Clarity</span>
            </h2>
            <p className="text-sm text-txt-secondary leading-relaxed">
              Ashwini Bajaj holds prestigious qualifications across global accounting and finance frameworks, including CA, CS, CFA®, and FRM®. Having spent years analyzing deal flows and transaction parameters, he realized that typical academic platforms lacked core connection to how trading desks actually execute operations.
            </p>
            <p className="text-sm text-txt-secondary leading-relaxed">
              He started teaching with a handful of candidates in an interactive environment, explaining derivatives formulas using real price feeds. Today, his classes train thousands of students worldwide, bridging the gap between rigorous global board exams and practical Excel modeling work.
            </p>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 px-6 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue border border-brand-blue/20 rounded-full text-xs font-bold uppercase tracking-widest font-display">
              Journey Timeline
            </span>
            <h2 className="text-3xl font-black font-display text-white">How We Grown</h2>
          </div>

          <div className="relative border-l border-white/10 max-w-3xl mx-auto pl-8 space-y-12">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative">
                {/* Connector Node */}
                <div className="absolute -left-[2.35rem] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-accent-yellow flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-yellow" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-accent-yellow font-display">{milestone.year}</span>
                  <h3 className="text-base font-bold text-white font-display">{milestone.title}</h3>
                  <p className="text-xs text-txt-secondary leading-relaxed">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-950/40 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="px-3 py-1 bg-accent-yellow/10 text-accent-yellow border border-accent-yellow/20 rounded-full text-xs font-bold uppercase tracking-widest font-display">
              Values System
            </span>
            <h2 className="text-3xl font-black font-display text-white">What Guides Our Pedagogy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueAims.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} className="p-8 rounded-3xl card-glass flex flex-col items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-accent-yellow shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-white">{value.title}</h3>
                  <p className="text-xs text-txt-secondary leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTAs Split */}
      <section className="py-24 px-6 border-t border-white/5 bg-slate-950/20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-brand-blue/5 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black font-display text-white">Join the Finvision Network</h2>
          <p className="text-sm text-txt-secondary max-w-lg mx-auto leading-relaxed">
            Whether you are a student ready to kickstart your preparation, or a corporate partner seeking structured financial models workshops, let's collaborate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleBooking}
              className="px-8 py-4 bg-accent-yellow hover:bg-accent-yellow-hover text-accent-yellow-fg font-extrabold text-sm rounded-xl transition-all shadow-xl"
            >
              Get Free Consultation
            </button>
            <Link
              href="/contact"
              className="px-8 py-4 bg-slate-900 border border-white/10 hover:border-white/20 text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <span>Contact Partner Desk</span>
              <ArrowUpRight className="w-4 h-4 text-accent-yellow" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWidget />
    </>
  );
}
