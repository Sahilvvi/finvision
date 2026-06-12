"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWidget from "@/components/FloatingWidget";
import LeadPopupTrigger from "@/components/LeadPopupTrigger";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "CFA® Level I Comprehensive Preparation",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form request:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        program: "CFA® Level I Comprehensive Preparation",
        message: "",
      });
    }, 2500);
  };

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
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <span className="px-3 py-1 bg-white/20 text-white border border-white/30 rounded-full text-xs font-bold uppercase tracking-widest font-display">
            Contact Channels
          </span>
          <h1 className="text-4xl md:text-6xl font-black font-display text-white tracking-tight leading-tight">
            Let's Start the <span className="text-accent-yellow text-glow-yellow">Conversation</span>
          </h1>
          <p className="text-sm md:text-base text-txt-secondary max-w-xl mx-auto leading-relaxed">
            Reach out to our admissions coordinators, corporate partner desks, or student services desks.
          </p>
        </div>
      </section>

      {/* Form and Contact Detail Split */}
      <section className="pb-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Details & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="px-3 py-1 bg-accent-yellow/10 text-accent-yellow border border-accent-yellow/20 rounded-full text-xs font-bold uppercase tracking-widest font-display">
                Info Desk
              </span>
              <h2 className="text-3xl font-black font-display text-white">Direct Coordinates</h2>
              <p className="text-xs md:text-sm text-txt-secondary leading-relaxed">
                Connect directly via phone or email for custom batches, corporate valuation programs, or university alliances.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-yellow shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-txt-secondary uppercase tracking-wider mb-1">Email Coordinates</h4>
                  <a href="mailto:info@finvision.com" className="text-sm text-white font-bold hover:text-accent-yellow transition-colors">
                    info@finvision.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-yellow shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-txt-secondary uppercase tracking-wider mb-1">Call Coordinators</h4>
                  <a href="tel:+919999999999" className="text-sm text-white font-bold hover:text-accent-yellow transition-colors">
                    +91 99999 99999
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-yellow shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-txt-secondary uppercase tracking-wider mb-1">Corporate Desk Location</h4>
                  <span className="text-xs text-white leading-relaxed">
                    5th Floor, Trade Center, BKC, Mumbai, India
                  </span>
                </div>
              </div>
            </div>

            {/* Simulated Maps Placeholder with Dark Theme styling */}
            <div className="rounded-3xl border border-white/5 bg-transparent p-6 flex flex-col justify-center items-center text-center h-48 relative overflow-hidden">
              <div className="absolute inset-0 bg-radial from-white/10 to-transparent pointer-events-none" />
              <MapPin className="w-8 h-8 text-accent-yellow mb-2 animate-bounce" />
              <span className="text-xs font-bold text-white mb-1">Google Maps Interactive</span>
              <span className="text-[10px] text-txt-secondary">Map API disabled for Local Preview v1</span>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl card-glass shadow-2xl relative">
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-accent-yellow text-3xl font-bold">✓</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Dispatched</h3>
                  <p className="text-xs text-txt-secondary max-w-sm mx-auto">
                    We have logged your query. Our academic coordinator will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold font-display text-white mb-4 border-b border-white/5 pb-2">
                    Send Us a Message
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
                        className="w-full px-4 py-3 bg-transparent border border-white/10 rounded-xl text-white text-xs focus:outline-none focus:border-accent-yellow"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-wider text-txt-secondary mb-1">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 99999 88888"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-transparent border border-white/10 rounded-xl text-white text-xs focus:outline-none focus:border-accent-yellow"
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
                      className="w-full px-4 py-3 bg-transparent border border-white/10 rounded-xl text-white text-xs focus:outline-none focus:border-accent-yellow"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-txt-secondary mb-1">
                      Program interest
                    </label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full px-4 py-3 bg-transparent border border-white/10 rounded-xl text-white text-xs focus:outline-none focus:border-accent-yellow"
                    >
                      <option>CFA® Level I Comprehensive Preparation</option>
                      <option>FRM® Part I Masterclass</option>
                      <option>Financial Modeling & Valuation Certified (FMVC)</option>
                      <option>Corporate Partnership / Institutional Alliance</option>
                      <option>General Support Query</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-txt-secondary mb-1">
                      Message Details
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Explain your queries or profile details..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-transparent border border-white/10 rounded-xl text-white text-xs focus:outline-none focus:border-accent-yellow resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-accent-yellow hover:bg-accent-yellow-hover text-accent-yellow-fg font-extrabold rounded-xl text-xs transition-all shadow-xl shadow-accent-yellow/10"
                  >
                    Send Query Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick WhatsApp Action */}
      <section className="py-16 bg-transparent border-t border-white/5 text-center px-6">
        <div className="max-w-2xl mx-auto space-y-4">
          <h3 className="text-xl font-bold font-display text-white">Need a Faster Response?</h3>
          <p className="text-xs text-txt-secondary font-sans leading-relaxed">
            Skip the forms entirely. Talk directly to our academic desk or request an instant syllabus brochure copy.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs transition-all shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat via WhatsApp</span>
            </a>
            <button
              onClick={handleBooking}
              className="px-6 py-3 bg-white/5 border border-white/10 hover:border-accent-yellow text-white font-bold rounded-xl text-xs transition-all"
            >
              Request Call Back
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWidget />
    </>
  );
}
