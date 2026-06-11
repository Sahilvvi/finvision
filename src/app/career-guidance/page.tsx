"use client";

import React, { useState } from "react";
import { 
  FileCheck, 
  UserCheck, 
  Send, 
  PhoneCall, 
  MessageCircle,
  HelpCircle,
  Briefcase,
  Users,
  Compass,
  ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWidget from "@/components/FloatingWidget";
import LeadPopupTrigger from "@/components/LeadPopupTrigger";

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function CareerGuidancePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "Undergraduate Student",
    interest: "Investment Banking & Valuations",
    experience: "0-1 Years (Fresher)",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Career consultation request:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        qualification: "Undergraduate Student",
        interest: "Investment Banking & Valuations",
        experience: "0-1 Years (Fresher)",
      });
    }, 2500);
  };

  const services = [
    {
      title: "1-on-1 Profile Assessment",
      desc: "Detailed review of your academic accomplishments, current skill gaps, and CV to formulate a roadmap aligned with top banks and buy-side firms.",
      icon: UserCheck
    },
    {
      title: "Resume & Portfolio Optimization",
      desc: "Convert your credentials into a recruiter-magnet format, highlighting complex core finance valuations, transaction exposure, and spreadsheet designs.",
      icon: FileCheck
    },
    {
      title: "LinkedIn Branding & Networking Strategy",
      desc: "Learn how to approach senior leaders, directors, and recruiters directly to secure referrals without filling out cold application forms.",
      icon: Linkedin
    },
    {
      title: "Mock Technical & Behavioral Interviews",
      desc: "Simulate rigorous round reviews on WACC, accounting adjustments, corporate strategies, and situational stress queries.",
      icon: PhoneCall
    }
  ];

  return (
    <>
      <Navbar />
      <LeadPopupTrigger />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-radial from-brand-blue/5 to-transparent blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <span className="px-3 py-1 bg-accent-yellow/10 text-accent-yellow border border-accent-yellow/20 rounded-full text-xs font-bold uppercase tracking-widest font-display">
            Career Guidance & Placements
          </span>
          <h1 className="text-4xl md:text-6xl font-black font-display text-white tracking-tight leading-tight">
            Stop Guessing. <span className="text-accent-yellow text-glow-yellow">Navigate Your Path</span> to Wall Street.
          </h1>
          <p className="text-sm md:text-base text-txt-secondary max-w-xl mx-auto leading-relaxed">
            Get personalized career roadmaps, intensive resume mentoring, and direct referral support from certified industry leaders.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue border border-brand-blue/20 rounded-full text-xs font-bold uppercase tracking-widest font-display">
              Strategic Services
            </span>
            <h2 className="text-3xl font-black font-display text-white">
              End-to-End Placement Support
            </h2>
            <p className="text-sm text-txt-secondary">
              Our support model is designed specifically to convert interviews into premium job offers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="p-8 rounded-3xl card-glass flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-accent-yellow shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold font-display text-white">{service.title}</h3>
                    <p className="text-sm text-txt-secondary leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form & Consultation split section */}
      <section className="py-24 bg-slate-950/50 border-t border-white/5 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Trust points */}
          <div className="lg:col-span-6 space-y-8">
            <span className="px-3 py-1 bg-accent-yellow/10 text-accent-yellow border border-accent-yellow/20 rounded-full text-xs font-bold uppercase tracking-widest font-display">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-black font-display text-white">
              Request Your Free <span className="text-accent-yellow">Profile Consultation</span>
            </h2>
            <p className="text-sm text-txt-secondary leading-relaxed">
              Fill out this detailed application profile. Our admissions head will review your eligibility markers and schedule a private 15-minute consultation via Google Meet or Phone.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-accent-yellow shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-display mb-1">Direct Mentorship</h4>
                  <p className="text-xs text-txt-secondary leading-relaxed">Talk directly to practitioners who hold actual qualifications (CFA, FRM, CA) and work at global desks.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-accent-yellow shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-display mb-1">Recruitment Access</h4>
                  <p className="text-xs text-txt-secondary leading-relaxed">Secure resume placement across boutique risk advisory desks, credit firms, and institutional advisory panels.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form wrapper */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl card-glass shadow-2xl relative overflow-hidden">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-accent-yellow text-3xl font-bold">✓</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Request Lodged Successfully</h3>
                  <p className="text-xs text-txt-secondary max-w-sm mx-auto">
                    We are currently analyzing your profile. An expert will reach out via call/WhatsApp within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold font-display text-white mb-4 border-b border-white/5 pb-2">
                    Academic & Career Profile Info
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-wider text-txt-secondary mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priyesh Sen"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-950 border border-white/10 rounded-xl text-white text-xs focus:outline-none focus:border-accent-yellow"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-wider text-txt-secondary mb-1">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-950 border border-white/10 rounded-xl text-white text-xs focus:outline-none focus:border-accent-yellow"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-txt-secondary mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. priyesh@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-white/10 rounded-xl text-white text-xs focus:outline-none focus:border-accent-yellow"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-txt-secondary mb-1">
                      Current Academic Status
                    </label>
                    <select
                      value={formData.qualification}
                      onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-white/10 rounded-xl text-white text-xs focus:outline-none focus:border-accent-yellow"
                    >
                      <option>Undergraduate Student (Commerce / Finance)</option>
                      <option>Undergraduate Student (Engineering / Tech)</option>
                      <option>MBA / Post Graduate</option>
                      <option>Working Professional (Non-finance role)</option>
                      <option>Working Professional (Finance role)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-txt-secondary mb-1">
                      Primary Domain of Interest
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-white/10 rounded-xl text-white text-xs focus:outline-none focus:border-accent-yellow"
                    >
                      <option>Investment Banking & Valuations</option>
                      <option>Financial Risk Management (FRM)</option>
                      <option>Equity Research & Portfolio Mgmt</option>
                      <option>General Financial Certifications Advice</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-accent-yellow hover:bg-accent-yellow-hover text-accent-yellow-fg font-extrabold rounded-xl text-xs transition-all shadow-xl shadow-accent-yellow/10"
                  >
                    Submit Profile for Review
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp placement support cell quick action */}
      <section className="py-16 bg-slate-950 border-t border-white/5 text-center px-6">
        <div className="max-w-2xl mx-auto space-y-4">
          <h3 className="text-xl font-bold font-display text-white">Need an Instant Response?</h3>
          <p className="text-xs text-txt-secondary">
            Connect directly with our admissions and student support desk over WhatsApp for quick queries regarding schedules, registration, and syllabus fees.
          </p>
          <a
            href="https://wa.me/919999999999?text=Hi! I want to understand my eligibility for CFA and FRM."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs transition-all shadow-lg shadow-emerald-600/10"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat Instant with Counselor</span>
          </a>
        </div>
      </section>

      <Footer />
      <FloatingWidget />
    </>
  );
}
