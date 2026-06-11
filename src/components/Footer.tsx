import React from "react";
import Link from "next/link";
import { GraduationCap, MessageCircle, Mail, Phone, MapPin } from "lucide-react";

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Youtube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);



export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-radial from-brand-blue/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-extrabold font-display tracking-tight text-white">
                FIN<span className="text-accent-yellow">VISION</span>
              </span>
            </Link>
            <p className="text-sm text-txt-secondary mb-6 max-w-sm leading-relaxed">
              Empowering the next generation of finance professionals with institutional-grade knowledge, industry-validated certifications, and direct career placement pipelines.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" className="w-9 h-9 rounded-lg bg-slate-900 border border-white/10 hover:border-accent-yellow hover:text-accent-yellow flex items-center justify-center text-txt-secondary transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" className="w-9 h-9 rounded-lg bg-slate-900 border border-white/10 hover:border-accent-yellow hover:text-accent-yellow flex items-center justify-center text-txt-secondary transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" className="w-9 h-9 rounded-lg bg-slate-900 border border-white/10 hover:border-accent-yellow hover:text-accent-yellow flex items-center justify-center text-txt-secondary transition-all">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://wa.me/919999999999" className="w-9 h-9 rounded-lg bg-slate-900 border border-white/10 hover:border-accent-yellow hover:text-accent-yellow flex items-center justify-center text-txt-secondary transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Company */}
          <div>
            <h4 className="text-sm font-bold font-display text-white tracking-wider uppercase mb-5">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-txt-secondary hover:text-accent-yellow transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="text-sm text-txt-secondary hover:text-accent-yellow transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-txt-secondary hover:text-accent-yellow transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-txt-secondary hover:text-accent-yellow transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Courses */}
          <div>
            <h4 className="text-sm font-bold font-display text-white tracking-wider uppercase mb-5">Courses</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/courses/cfa-level-1-prep" className="text-sm text-txt-secondary hover:text-accent-yellow transition-colors">
                  CFA® Prep Program
                </Link>
              </li>
              <li>
                <Link href="/courses/frm-part-1-prep" className="text-sm text-txt-secondary hover:text-accent-yellow transition-colors">
                  FRM® Masterclass
                </Link>
              </li>
              <li>
                <Link href="/courses/financial-modeling-valuation" className="text-sm text-txt-secondary hover:text-accent-yellow transition-colors">
                  Financial Modeling (FMVC)
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-sm text-txt-secondary hover:text-accent-yellow transition-colors">
                  All Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources & Contact */}
          <div>
            <h4 className="text-sm font-bold font-display text-white tracking-wider uppercase mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent-yellow mt-0.5 shrink-0" />
                <a href="mailto:info@finvision.com" className="text-sm text-txt-secondary hover:text-white transition-colors">
                  info@finvision.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent-yellow mt-0.5 shrink-0" />
                <a href="tel:+919999999999" className="text-sm text-txt-secondary hover:text-white transition-colors">
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent-yellow mt-0.5 shrink-0" />
                <span className="text-sm text-txt-secondary">
                  5th Floor, Trade Center, BKC, Mumbai, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-txt-secondary text-center md:text-left">
            © {currentYear} Finvision Education. All rights reserved. CFA® and FRM® are registered trademarks of their respective institutes.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-txt-secondary hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-txt-secondary hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
