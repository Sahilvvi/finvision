"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LeadPopupTrigger() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExitIntent, setIsExitIntent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "General Career Guidance Session",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // 1. Listen for global programmatical trigger
    const openModal = () => {
      setIsExitIntent(false);
      setIsOpen(true);
    };
    window.addEventListener("open-booking-modal", openModal);

    // 2. Listen for exit intent (mouse leaving window)
    const handleMouseLeave = (e: MouseEvent) => {
      // Check if user has already seen it in this session to prevent annoyance
      const hasSeenExitPopup = sessionStorage.getItem("has-seen-exit-popup");
      if (e.clientY < 50 && !hasSeenExitPopup) {
        setIsExitIntent(true);
        setIsOpen(true);
        sessionStorage.setItem("has-seen-exit-popup", "true");
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("open-booking-modal", openModal);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Global lead captured:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "General Career Guidance Session",
      });
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="w-full max-w-lg bg-slate-900 border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
          >
            {/* Top decorative glow */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-yellow/10 rounded-full blur-3xl pointer-events-none" />

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-txt-secondary hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {isExitIntent ? (
              <div className="mb-6">
                <span className="px-3 py-1 bg-accent-yellow/10 text-accent-yellow rounded-full text-xs font-bold font-display uppercase tracking-widest">
                  Wait! Before you leave
                </span>
                <h3 className="text-2xl font-black font-display text-white mt-3 mb-2 leading-tight">
                  Get a Free <span className="text-accent-yellow text-glow-yellow">Career Roadmap</span> & 1-on-1 Consultation
                </h3>
                <p className="text-sm text-txt-secondary">
                  Join 10,000+ students who transformed their careers. Enter details below to download a structured roadmap for investment banking, risk, or corporate finance.
                </p>
              </div>
            ) : (
              <div className="mb-6">
                <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-bold font-display uppercase tracking-widest">
                  Premium Guidance
                </span>
                <h3 className="text-2xl font-black font-display text-white mt-3 mb-2 leading-tight">
                  Book a Free <span className="text-accent-yellow text-glow-yellow">1-on-1 Strategy Session</span>
                </h3>
                <p className="text-sm text-txt-secondary">
                  Sit down with Ashwini Bajaj or our leading financial mentors to outline your certifications path and career roadmap.
                </p>
              </div>
            )}

            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 bg-accent-yellow/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-accent-yellow/20">
                  <span className="text-accent-yellow text-3xl font-bold">✓</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Registration Complete!</h4>
                <p className="text-sm text-txt-secondary max-w-sm mx-auto">
                  We have received your details. Our master counselor will reach out via call/WhatsApp within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-txt-secondary mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Mehta"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950/80 border border-white/15 rounded-xl text-white focus:outline-none focus:border-accent-yellow text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-txt-secondary mb-1">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 99999 88888"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-950/80 border border-white/15 rounded-xl text-white focus:outline-none focus:border-accent-yellow text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-txt-secondary mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-950/80 border border-white/15 rounded-xl text-white focus:outline-none focus:border-accent-yellow text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-txt-secondary mb-1">
                    Select Program / Career Goal
                  </label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-950/80 border border-white/15 rounded-xl text-white focus:outline-none focus:border-accent-yellow text-sm transition-all"
                  >
                    <option>CFA® Level I Comprehensive Preparation</option>
                    <option>FRM® Part I Masterclass</option>
                    <option>Financial Modeling & Valuation Certified (FMVC)</option>
                    <option>General Career Guidance / Career Transition</option>
                    <option>Startup Valuation / Corporate Finance</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-accent-yellow hover:bg-accent-yellow-hover text-accent-yellow-fg font-extrabold rounded-xl text-sm transition-all duration-300 shadow-xl shadow-accent-yellow/10 hover:shadow-accent-yellow/20 hover:scale-[1.01]"
                  >
                    Get Free Career Roadmap Now
                  </button>
                  <p className="text-[10px] text-txt-muted text-center mt-3">
                    By submitting, you agree to receive guidance calls and program updates via phone/WhatsApp.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
