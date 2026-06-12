"use client";

import React, { useState } from "react";
import { Search, Download, ExternalLink, Calendar, Clock, Video } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWidget from "@/components/FloatingWidget";
import LeadPopupTrigger from "@/components/LeadPopupTrigger";
import { platformResources } from "@/data/platformData";

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const categories = ["All", "AI", "Sales", "Marketing", "Career Growth", "Entrepreneurship"];

  const filteredResources = platformResources.filter(res => {
    const matchesSearch = res.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          res.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || res.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", newsletterEmail);
    setNewsletterSubmitted(true);
    setTimeout(() => {
      setNewsletterSubmitted(false);
      setNewsletterEmail("");
    }, 2500);
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
            Learning Vault
          </span>
          <h1 className="text-4xl md:text-6xl font-black font-display text-white tracking-tight leading-tight">
            Curated <span className="text-accent-yellow text-glow-yellow">Knowledge Assets</span>
          </h1>
          <p className="text-sm md:text-base text-txt-secondary max-w-xl mx-auto leading-relaxed">
            Access free valuation models, mock exam samples, and strategy guides compiled by institutional practitioners.
          </p>
        </div>
      </section>

      {/* Resource Filter & List */}
      <section className="pb-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Filters Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 bg-white/10 border border-white/5 rounded-2xl mb-12 backdrop-blur-md">
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

            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-transparent border border-white/10 rounded-xl text-white text-xs focus:outline-none focus:border-accent-yellow transition-all"
              />
              <Search className="w-4 h-4 text-txt-secondary absolute left-3.5 top-3" />
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredResources.map((res) => (
              <div key={res.id} className="p-6 sm:p-8 rounded-3xl card-glass flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold font-display text-brand-blue uppercase tracking-widest bg-brand-blue/10 px-2.5 py-1 rounded-full border border-brand-blue/20">
                      {res.category}
                    </span>
                    <span className="text-[10px] font-bold font-display text-white uppercase tracking-widest bg-slate-800 px-2.5 py-1 rounded-full">
                      {res.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-accent-yellow transition-colors">
                    {res.title}
                  </h3>
                  <p className="text-xs text-txt-secondary leading-relaxed mb-6">{res.description}</p>
                </div>

                <div className="flex items-center justify-between border-t border-white/5 pt-4 text-[10px] text-txt-secondary">
                  <div className="flex gap-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-accent-yellow" />
                      {res.readTimeOrDuration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-accent-yellow" />
                      {res.publishDate}
                    </span>
                  </div>

                  {res.type === "Download" ? (
                    <a
                      href={res.link}
                      className="flex items-center gap-1 px-3 py-1.5 bg-white/5 border border-white/10 hover:border-accent-yellow text-white rounded-lg transition-colors font-bold uppercase"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </a>
                  ) : res.type === "Demo Lecture" ? (
                    <a
                      href={res.link}
                      className="flex items-center gap-1 px-3 py-1.5 bg-brand-blue hover:bg-brand-blue-hover text-white rounded-lg transition-colors font-bold uppercase"
                    >
                      <Video className="w-3.5 h-3.5" />
                      <span>Watch Snip</span>
                    </a>
                  ) : (
                    <a
                      href={res.link}
                      className="flex items-center gap-1 text-accent-yellow hover:text-white transition-colors font-bold uppercase"
                    >
                      <span>Read Article</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-16">
              <p className="text-txt-secondary text-sm">No resources match your query. Try resetting filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-transparent border-t border-white/5 px-6 relative">
        <div className="max-w-4xl mx-auto rounded-3xl card-glass p-6 sm:p-8 md:p-16 text-center space-y-6 relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
          
          <span className="px-3 py-1 bg-accent-yellow/10 text-accent-yellow border border-accent-yellow/20 rounded-full text-xs font-bold uppercase tracking-widest font-display inline-block">
            Stay Updated
          </span>
          <h2 className="text-3xl md:text-4xl font-black font-display text-white">
            Join Our Weekly <span className="text-accent-yellow">Financial Briefing</span>
          </h2>
          <p className="text-xs md:text-sm text-txt-secondary max-w-lg mx-auto leading-relaxed">
            Get structured analyses of Indian and global market movements, valuation case studies, and career advisory tips delivered straight to your inbox.
          </p>

          <div className="max-w-md mx-auto pt-4">
            {newsletterSubmitted ? (
              <p className="text-xs font-bold text-accent-yellow py-3 bg-accent-yellow/10 border border-accent-yellow/20 rounded-xl">
                Subscription Confirmed! Welcome to our inner circle.
              </p>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-transparent border border-white/10 rounded-xl text-white text-xs focus:outline-none focus:border-accent-yellow"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-accent-yellow hover:bg-accent-yellow-hover text-accent-yellow-fg font-extrabold rounded-xl text-xs transition-all shadow-lg shadow-accent-yellow/10"
                >
                  Subscribe Now
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWidget />
    </>
  );
}
