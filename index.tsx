'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Printer, Send, CheckCircle2, Target, Eye, Copy, Scan, FileText, 
  Globe, Sparkles, Tag, Star, Quote, ChevronDown, MapPin, Mail, 
  MessageSquare, Clock, Phone, Upload, AlertCircle, Loader2, Menu, X, ArrowRight, ArrowUp, Sun, Moon, MessageCircle 
} from 'lucide-react';

export default function LuckyJKRMPortal() {
  // Theme state
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Gallery filter state
  const [activeCategory, setActiveCategory] = useState('All');

  // Upload form state
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Back to top visibility
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      if (selected.size > 100 * 1024 * 1024) {
        setError('File size exceeds 100 MB limit.');
        setFile(null);
        return;
      }
      setError('');
      setFile(selected);
    }
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      setSuccess(true);
    }, 2000);
  };

  // Data blocks
  const business = {
    name: "Lucky JKRM Print Hub",
    tagline: "Print. Create. Inspire.",
    description: "Your trusted local print shop and online assistance center in Calaca City, Batangas, Philippines.",
    address: "Calaca City, Batangas, Philippines",
    email: "luckyjkrmbyteworks@gmail.com",
    messenger: "https://m.me/luckyjkrmprinthub",
    hours: "Mon - Sat: 8:00 AM - 7:00 PM"
  };

  const services = {
    printing: ["Black & White Printing", "Colored Printing", "Document Printing", "Photo Printing", "School Projects", "Reports", "Resume Printing"],
    photocopy: ["A4 Photocopy", "Long Photocopy", "Short Photocopy"],
    lamination: ["Hot Lamination", "Cold Lamination"],
    documentServices: ["Resume Formatting", "Encoding & Typing", "Document Editing"],
    futureServices: [
      { name: "Tarpaulin Printing", status: "Coming Soon" },
      { name: "Calling Cards", status: "Coming Soon" },
      { name: "Custom Invitations", status: "Coming Soon" },
      { name: "Stickers & Labels", status: "Coming Soon" },
      { name: "PVC ID Printing", status: "Coming Soon" },
      { name: "Personalized Gifts", status: "Coming Soon" }
    ]
  };

  const pricing = {
    printing: [
      { item: "Black & White Text (per page)", price: "₱2.00" },
      { item: "Colored Print (Standard)", price: "₱5.00 - ₱10.00" },
      { item: "Photo Printing (Glossy 4x6)", price: "₱20.00" }
    ],
    photocopy: [
      { item: "Short / A4 per page", price: "₱1.50" },
      { item: "Long per page", price: "₱2.00" }
    ],
    lamination: [
      { item: "ID Size", price: "₱15.00" },
      { item: "A4 / Long Size", price: "₱40.00 - ₱50.00" }
    ],
    scanning: [
      { item: "Per Document Scan to Email/USB", price: "₱10.00" }
    ]
  };

  const portfolio = [
    { id: 1, category: 'Documents', title: 'Thesis & Research Papers', img: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=600&auto=format&fit=crop' },
    { id: 2, category: 'Photos', title: 'High Quality Photo Prints', img: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600&auto=format&fit=crop' },
    { id: 3, category: 'Laminating', title: 'ID & Document Lamination', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop' },
    { id: 4, category: 'Certificates', title: 'Diploma & Award Printing', img: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=600&auto=format&fit=crop' },
    { id: 5, category: 'School Projects', title: 'Portfolios & Reports', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop' },
    { id: 6, category: 'Documents', title: 'Government Form Assistance', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop' },
  ];

  const filteredPortfolio = activeCategory === 'All' 
    ? portfolio 
    : portfolio.filter(item => item.category === activeCategory);

  const testimonials = [
    { id: 1, name: "Maria Santos", role: "College Student", comment: "Super bilis at napaka-affordable magpaprify at magpalaminate dito sa Calaca! Ligtas ang mga thesis reports ko.", rating: 5 },
    { id: 2, name: "Engr. Juan Dela Cruz", role: "Local Professional", comment: "Sila rin ang tumulong sa akin mag-process ng government online applications ko. Very friendly service!", rating: 5 },
    { id: 3, name: "Teacher Ana Reyes", role: "Public School Teacher", comment: "Araw-araw akong kumukuha ng colored prints at school project materials dito. Highly recommended sa buong Calaca!", rating: 5 }
  ];

  const faqs = [
    { q: "How do I send my files for printing?", a: "You can upload files via our portal below, message us on Facebook Messenger, or email them to luckyjkrmbyteworks@gmail.com." },
    { q: "What file formats are accepted?", a: "We accept PDF, Word documents (.doc, .docx), Excel (.xlsx), PowerPoint (.pptx), and common images (JPEG, PNG)." },
    { q: "How long does printing take?", a: "Standard documents are processed instantly or within minutes. Bulk orders take about 15-30 minutes." },
    { q: "Can I pay online?", a: "Online inquiries and uploads are supported. Payments can be arranged via GCash/online transfer or settled upon pickup at our Calaca City shop." }
  ];

  return (
    <div className={`min-h-screen font-sans ${isDark ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-pink-500 shadow-md">
              <Image src="/logo/logo.png" alt="Logo" fill className="object-cover" />
            </div>
            <div>
              <span className="font-extrabold text-lg bg-gradient-to-r from-pink-600 via-teal-600 to-blue-700 bg-clip-text text-transparent">Lucky JKRM</span>
              <span className="block text-[10px] font-bold tracking-widest text-slate-500 uppercase">Print Hub</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            <a href="#about" className="hover:text-pink-600 transition-colors">About</a>
            <a href="#services" className="hover:text-teal-600 transition-colors">Services</a>
            <a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</a>
            <a href="#gallery" className="hover:text-pink-600 transition-colors">Portfolio</a>
            <a href="#upload" className="hover:text-teal-600 transition-colors">Send Files</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
              {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5" />}
            </button>
            <a href={business.messenger} target="_blank" rel="noreferrer" className="bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold px-5 py-2.5 rounded-full shadow-lg text-sm flex items-center gap-2">
              <Printer className="w-4 h-4" /> Message Us
            </a>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <button onClick={toggleTheme} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
              {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-6 space-y-4">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block font-medium text-lg">About</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block font-medium text-lg">Services</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block font-medium text-lg">Pricing</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block font-medium text-lg">Portfolio</a>
            <a href="#upload" onClick={() => setMobileMenuOpen(false)} className="block font-medium text-lg">Send Files</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block font-medium text-lg">Contact</a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 bg-gradient-to-b from-pink-50/50 via-teal-50/30 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 dark:bg-pink-950/60 text-pink-700 dark:text-pink-300 font-semibold text-xs tracking-wider uppercase">
                <Printer className="w-4 h-4" /> Calaca City, Batangas
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                Your One-Stop <span className="bg-gradient-to-r from-pink-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">Printing & Online Assistance</span> Shop
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0">
                {business.description} {business.tagline}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a href="#upload" className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" /> Send Files
                </a>
                <a href={business.messenger} target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg flex items-center justify-center gap-2">
                  <Printer className="w-5 h-5" /> Message Us
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-3xl p-4 bg-white dark:bg-slate-900 shadow-2xl border-4 border-pink-500/20">
                <Image src="/logo/logo.png" alt="Lucky JKRM Logo" fill className="object-contain p-6 relative z-10" priority />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section id="about" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 font-bold uppercase tracking-widest text-xs">About Us</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">Serving Calaca City with Dedication</h2>
            <p className="text-slate-600 dark:text-slate-300 mt-4 text-base sm:text-lg">
              We provide fast, affordable printing services, document processing, lamination, photocopying, and online government assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-50 dark:bg-slate-800/60 p-8 rounded-3xl border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-950 text-pink-600 rounded-2xl flex items-center justify-center mb-6"><Target className="w-6 h-6" /></div>
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-300">To deliver exceptional, high-quality printing and digital assistance services that empower our community, students, and businesses.</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/60 p-8 rounded-3xl border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-950 text-teal-600 rounded-2xl flex items-center justify-center mb-6"><Eye className="w-6 h-6" /></div>
              <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-slate-600 dark:text-slate-300">To be Batangas' leading innovative print hub and digital assistance center, known for trust, reliability, and creative solutions.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-600 via-teal-600 to-blue-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">Why Choose Lucky JKRM Print Hub?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Affordable Prices', 'Fast Turnaround', 'Friendly Service', 'Quality Prints', 'Convenient Online File Submission'].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-5 flex items-center gap-4 border border-white/20">
                  <CheckCircle2 className="w-6 h-6 text-pink-300 shrink-0" />
                  <span className="font-semibold text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-pink-600 font-bold uppercase tracking-widest text-xs">Our Offerings</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">Professional Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="w-14 h-14 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mb-6"><Printer className="w-7 h-7" /></div>
              <h3 className="text-xl font-bold mb-4">Printing</h3>
              <ul className="space-y-2.5 text-slate-600 dark:text-slate-300">
                {services.printing.map((item, i) => <li key={i} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-pink-500" />{item}</li>)}
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-6"><Copy className="w-7 h-7" /></div>
              <h3 className="text-xl font-bold mb-4">Photocopy & Scanning</h3>
              <ul className="space-y-2.5 text-slate-600 dark:text-slate-300">
                {services.photocopy.map((item, i) => <li key={i} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-500" />{item}</li>)}
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal-500" />Document Scanning to Email/USB</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6"><FileText className="w-7 h-7" /></div>
              <h3 className="text-xl font-bold mb-4">Lamination & Editing</h3>
              <ul className="space-y-2.5 text-slate-600 dark:text-slate-300">
                {services.lamination.map((item, i) => <li key={i} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" />{item}</li>)}
                {services.documentServices.map((item, i) => <li key={i} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" />{item}</li>)}
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><Sparkles className="w-6 h-6 text-pink-600" /> Future Services (Coming Soon)</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {services.futureServices.map((s, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 text-center relative">
                  <span className="absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-pink-100 text-pink-600">{s.status}</span>
                  <p className="font-semibold text-sm mt-3">{s.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 font-bold uppercase tracking-widest text-xs">Transparent Rates</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">Affordable Price List</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 dark:bg-slate-800/60 p-6 rounded-3xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-bold mb-4 text-pink-600">Printing</h3>
              <ul className="space-y-4">
                {pricing.printing.map((p, i) => (
                  <li key={i} className="flex justify-between text-sm border-b border-slate-200 dark:border-slate-700 pb-2">
                    <span>{p.item}</span><span className="font-bold">{p.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/60 p-6 rounded-3xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-bold mb-4 text-teal-600">Photocopy</h3>
              <ul className="space-y-4">
                {pricing.photocopy.map((p, i) => (
                  <li key={i} className="flex justify-between text-sm border-b border-slate-200 dark:border-slate-700 pb-2">
                    <span>{p.item}</span><span className="font-bold">{p.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/60 p-6 rounded-3xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-bold mb-4 text-blue-600">Lamination</h3>
              <ul className="space-y-4">
                {pricing.lamination.map((p, i) => (
                  <li key={i} className="flex justify-between text-sm border-b border-slate-200 dark:border-slate-700 pb-2">
                    <span>{p.item}</span><span className="font-bold">{p.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/60 p-6 rounded-3xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-bold mb-4 text-indigo-600">Scanning</h3>
              <ul className="space-y-4">
                {pricing.scanning.map((p, i) => (
                  <li key={i} className="flex justify-between text-sm border-b border-slate-200 dark:border-slate-700 pb-2">
                    <span>{p.item}</span><span className="font-bold">{p.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">Quality Outputs</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {['All', 'Documents', 'Photos', 'Laminating', 'Certificates', 'School Projects'].map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${activeCategory === cat ? 'bg-pink-600 text-white' : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800'}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredPortfolio.map(item => (
              <div key={item.id} className="break-inside-avoid relative rounded-3xl overflow-hidden shadow-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <div className="relative h-64 w-full">
                  <Image src={item.img} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-bold text-pink-600 uppercase">{item.category}</span>
                  <h3 className="font-bold text-lg mt-1">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILE SUBMISSION */}
      <section id="upload" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-teal-600 font-bold uppercase tracking-widest text-xs">Fast & Secure</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">Send Your Files Online</h2>
            <p className="text-slate-600 dark:text-slate-300 mt-2">PDF, Word, Excel, PowerPoint, Images (Max 100 MB)</p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-700">
            {success ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-teal-600 mx-auto animate-bounce" />
                <h3 className="text-2xl font-bold">File Uploaded Successfully!</h3>
                <p className="text-slate-600 dark:text-slate-300">Please message us on Facebook Messenger or check your email for confirmation.</p>
                <button onClick={() => { setFile(null); setSuccess(false); }} className="bg-pink-600 text-white font-semibold px-6 py-3 rounded-xl">Upload Another File</button>
              </div>
            ) : (
              <form onSubmit={handleUpload} className="space-y-6">
                <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-2xl p-8 text-center relative bg-white dark:bg-slate-900">
                  <input type="file" onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer" accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.jpeg,.png" />
                  <div className="flex flex-col items-center space-y-3">
                    <Upload className="w-10 h-10 text-pink-600" />
                    <p className="font-bold text-lg">{file ? file.name : 'Click to upload or drag & drop'}</p>
                  </div>
                </div>
                {file && (
                  <div className="flex items-center gap-3 bg-white dark:bg-slate-900 p-4 rounded-2xl border">
                    <FileText className="w-6 h-6 text-pink-600" />
                    <span className="font-semibold text-sm">{file.name}</span>
                  </div>
                )}
                <button type="submit" disabled={!file || uploading} className="w-full bg-gradient-to-r from-pink-600 via-teal-600 to-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg disabled:opacity-55 flex items-center justify-center gap-2">
                  {uploading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Upload className="w-5 h-5" />} Submit File Now
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-pink-600 font-bold uppercase tracking-widest text-xs">Customer Reviews</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">Loved by Students & Professionals</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(t => (
              <div key={t.id} className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-slate-800 relative">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-pink-500/10" />
                <div className="flex gap-1 mb-4">{[...Array(t.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}</div>
                <p className="italic mb-6 text-slate-700 dark:text-slate-300">&ldquo;{t.comment}&rdquo;</p>
                <h4 className="font-bold">{t.name}</h4>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-teal-600 font-bold uppercase tracking-widest text-xs">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full px-6 py-5 text-left font-bold flex justify-between items-center">
                  <span>{f.q}</span><ChevronDown className={`w-5 h-5 text-pink-600 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <div className="px-6 pb-5 text-slate-600 dark:text-slate-300 text-sm border-t border-slate-200 dark:border-slate-700 pt-4">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Get in Touch</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">Visit Our Shop or Reach Us Online</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-slate-800 space-y-6">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4"><MapPin className="w-6 h-6 text-pink-600" /><span>{business.address}</span></div>
                <div className="flex items-center gap-4"><MessageSquare className="w-6 h-6 text-blue-600" /><a href={business.messenger} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Messenger Chat</a></div>
                <div className="flex items-center gap-4"><Mail className="w-6 h-6 text-teal-600" /><a href={`mailto:${business.email}`} className="text-teal-600 hover:underline">{business.email}</a></div>
                <div className="flex items-center gap-4"><Clock className="w-6 h-6 text-indigo-600" /><span>{business.hours}</span></div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col justify-center items-center text-center space-y-4">
              <div className="w-20 h-20 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">Lucky JKRM Print Hub Station</h3>
              <p className="text-xs text-slate-500">Scan our official store QR codes at Calaca City for direct messaging & file delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Lucky JKRM Print Hub. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 font-bold text-pink-500">{business.tagline}</p>
        </div>
      </footer>

      {/* FLOATING ACTION BUTTONS */}
      <a href={business.messenger} target="_blank" rel="noreferrer" aria-label="Messenger" className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl flex items-center justify-center">
        <MessageCircle className="w-7 h-7" />
      </a>
      {showScrollTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top" className="fixed bottom-24 right-6 z-40 bg-slate-800 text-white p-3 rounded-full shadow-lg">
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
