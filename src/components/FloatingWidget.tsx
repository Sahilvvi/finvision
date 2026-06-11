"use client";

import React, { useState } from "react";
import { MessageCircle, Phone, FileText, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "CFA® Level I Comprehensive Preparation",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request / Lead Capture
    console.log("Lead captured:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
      setIsOpen(false);
      setFormData({ name: "", email: "", phone: "", course: "CFA® Level I Comprehensive Preparation" });
    }, 2000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Floating Action Menu Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="flex flex-col items-end gap-3 mb-2"
          >
            {/* WhatsApp */}
            <a
              href="https://wa.me/919999999999?text=Hi! I am interested in career guidance and courses."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg transition-all duration-300 font-sans text-sm font-semibold"
            >
              <span>Chat on WhatsApp</span>
              <MessageCircle className="w-5 h-5" />
            </a>

            {/* Direct Call */}
            <a
              href="tel:+919999999999"
              className="flex items-center gap-2 px-4 py-2 bg-brand-blue hover:bg-brand-blue-hover text-white rounded-full shadow-lg transition-all duration-300 font-sans text-sm font-semibold"
            >
              <span>Call Counselor</span>
              <Phone className="w-5 h-5" />
            </a>

            {/* Request Call Back Form Button */}
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 px-4 py-2 bg-accent-yellow hover:bg-accent-yellow-hover text-accent-yellow-fg rounded-full shadow-lg transition-all duration-300 font-sans text-sm font-semibold"
            >
              <span>Request Callback</span>
              <FileText className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Action Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          if (showForm) setShowForm(false);
        }}
        className="w-14 h-14 bg-brand-blue text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none border border-white/20 relative"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <span className="flex h-3 w-3 absolute top-0 right-0 -mt-1 -mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-yellow opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-yellow"></span>
          </span>
        )}
        {!isOpen && (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </button>

      {/* Lead Form Overlay Modal */}
      <AnimatePresence>
        {showForm && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-md bg-slate-900 border border-white/10 rounded-2xl p-6 shadow-2xl relative"
            >
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-txt-secondary hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-xl font-bold font-display text-white mb-2">
                Book Free <span className="text-accent-yellow">Career Guidance</span>
              </h3>
              <p className="text-sm text-txt-secondary mb-6">
                Get a customized roadmap from our certified mentors and boost your career.
              </p>

              {submitted ? (
                <div className="py-8 text-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-accent-yellow text-5xl mb-4"
                  >
                    ✓
                  </motion.div>
                  <h4 className="text-lg font-bold text-white mb-1">Thank You!</h4>
                  <p className="text-sm text-txt-secondary">
                    Our academic head will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-txt-secondary mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent-yellow text-sm transition-all"
                    />
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
                      className="w-full px-4 py-2.5 bg-slate-950 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent-yellow text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-txt-secondary mb-1">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent-yellow text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-txt-secondary mb-1">
                      Program of Interest
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-white/10 rounded-lg text-white focus:outline-none focus:border-accent-yellow text-sm transition-all"
                    >
                      <option>CFA® Level I Comprehensive Preparation</option>
                      <option>FRM® Part I Masterclass</option>
                      <option>Financial Modeling & Valuation Certified (FMVC)</option>
                      <option>General Career Guidance Session</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-accent-yellow hover:bg-accent-yellow-hover text-accent-yellow-fg font-bold rounded-lg text-sm transition-all duration-300 mt-2 shadow-lg shadow-accent-yellow/10"
                  >
                    Submit Booking Request
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
