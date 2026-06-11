"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const [activeAnnIndex, setActiveAnnIndex] = useState(0);

  const announcements = [
    "Welcome to Finvision - India's Premier Finance & Certifications Academy",
    "CFA® Prep Program: Next Cohort starts July 4th. Register now!",
    "FRM® Part I Masterclass: New Cohort starting June 20th.",
    "Financial Modeling & Valuation Bootcamp: Limited seats left for June batch."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAnnIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "About Us", href: "/about" },
    { name: "Resources", href: "/resources" },
    { name: "Career Guidance", href: "/career-guidance" },
    { name: "Contact", href: "/contact" },
  ];

  const handleBooking = () => {
    // Dispatch custom event to trigger booking popup
    const event = new CustomEvent("open-booking-modal");
    window.dispatchEvent(event);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrolled
            ? "bg-slate-950/75 backdrop-blur-md border-b border-white/5 py-3"
            : "bg-transparent py-0"
        }`}
      >
        {/* Announcement Bar collapses on scroll */}
        <div 
          className={`w-full bg-slate-950 border-b border-white/5 overflow-hidden transition-all duration-500 flex items-center justify-center ${
            scrolled ? "h-0 py-0 border-none opacity-0" : "h-9 py-2"
          }`}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={activeAnnIndex}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-[10px] md:text-xs font-semibold tracking-wide text-txt-secondary text-center"
            >
              <span className="text-accent-yellow font-bold mr-2 uppercase">Update:</span>
              {announcements[activeAnnIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${scrolled ? "" : "pt-4 pb-4"}`}>
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center shadow-lg shadow-brand-blue/20 transition-transform group-hover:scale-105">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-extrabold font-display tracking-tight text-white">
                FIN<span className="text-accent-yellow">VISION</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wide transition-all hover:text-white ${
                    isActive ? "text-accent-yellow" : "text-txt-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={handleBooking}
              className="cursor-pointer rounded-full border border-brand-blue hover:bg-brand-blue hover:text-white px-5 py-2 text-xs font-bold transition-all text-brand-blue uppercase tracking-wider"
            >
              Log In
            </button>
            <button
              onClick={handleBooking}
              className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-brand-blue-hover uppercase tracking-wider"
            >
              <span>Contact Us</span>
              <span className="text-xs">→</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-txt-secondary hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 pt-24 pb-8 px-6 bg-slate-950/95 backdrop-blur-lg md:hidden flex flex-col justify-between"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg font-bold font-display tracking-wide border-b border-white/5 pb-2 ${
                      isActive ? "text-accent-yellow" : "text-white/80"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="flex flex-col gap-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleBooking();
                }}
                className="w-full py-4 bg-brand-blue hover:bg-brand-blue-hover text-white text-center font-bold rounded-xl shadow-lg transition-all duration-300"
              >
                Book Free Career Guidance
              </button>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white text-center font-bold rounded-xl shadow-lg transition-all duration-300 block"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
