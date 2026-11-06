import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Send, 
  MapPin, 
  Phone, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  Sparkles, 
  Loader2, 
  AlertCircle 
} from 'lucide-react';
import { personalData, contactDetails } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Copy Email to clipboard
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Form input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Form validation
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errors.message = 'Please enter your message';
    } else if (formData.message.trim().length < 8) {
      errors.message = 'Message must be at least 8 characters';
    }
    return errors;
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-[#0c091b]">
      {/* Background soft violet ambient lighting */}
      <div 
        className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact Me
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            I am actively seeking an entry-level Full-Stack Web Developer role. Feel free to reach out directly or send a message below!
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="glass-card rounded-2xl p-6 sm:p-7 space-y-5 border border-violet-500/20">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Contact Information</span>
                <Sparkles className="w-4 h-4 text-violet-400" />
              </h3>

              <div className="space-y-3.5">
                {/* Email with copy button */}
                <div className="p-4 rounded-xl bg-[#140f29] border border-violet-500/15 flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-violet-500/10 text-violet-300">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                        Email Address
                      </span>
                      <a 
                        href={`mailto:${personalData.email}`} 
                        className="text-xs sm:text-sm font-semibold text-white hover:text-violet-300 transition-colors"
                      >
                        {personalData.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-[#1c153a] text-slate-400 hover:text-white hover:bg-[#261d4f] transition-all cursor-pointer relative"
                    title="Copy Email"
                    aria-label="Copy Email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    
                    {copiedEmail && (
                      <span className="absolute -top-7 right-0 text-[10px] font-mono bg-violet-600 text-white font-bold px-2 py-0.5 rounded shadow">
                        Copied!
                      </span>
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-xl bg-[#140f29] border border-violet-500/15 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      Phone Number
                    </span>
                    <a 
                      href={`tel:${personalData.phone}`} 
                      className="text-xs sm:text-sm font-semibold text-white hover:text-violet-300 transition-colors"
                    >
                      {personalData.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="p-4 rounded-xl bg-[#140f29] border border-violet-500/15 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-300">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      Current Location
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {contactDetails.location}
                    </span>
                  </div>
                </div>

                {/* Availability Badge Card */}
                <div className="p-4 rounded-xl bg-violet-950/25 border border-violet-500/30 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-violet-300 block">
                      Hiring Status
                    </span>
                    <span className="text-xs font-medium text-slate-200">
                      {contactDetails.availability}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Profiles Grid */}
              <div className="pt-3 border-t border-violet-500/15">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2.5">
                  Professional Channels
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-[#140f29] hover:bg-[#1f173f] text-slate-300 hover:text-violet-300 border border-violet-500/15 transition-all flex items-center gap-2 text-xs font-medium"
                  >
                    <Github className="w-4 h-4 text-violet-400" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-[#140f29] hover:bg-[#1f173f] text-slate-300 hover:text-violet-300 border border-violet-500/15 transition-all flex items-center gap-2 text-xs font-medium"
                  >
                    <Linkedin className="w-4 h-4 text-purple-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-violet-500/20 relative">
              
              <h3 className="text-xl font-bold text-white mb-1.5">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Have an entry-level opening, internship, or question? Send me a note!
              </p>

              {/* Success Notification Alert */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-xl bg-violet-600/20 border border-violet-500/40 text-violet-200 text-xs sm:text-sm flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-semibold text-white">Message sent successfully!</strong>
                      <span>Thank you for reaching out, Ruthra Kumar J will get back to you shortly.</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label 
                      htmlFor="contact-name" 
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Your Name <span className="text-violet-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-[#140f29] border ${
                        formErrors.name ? 'border-rose-500/80' : 'border-violet-500/20 focus:border-violet-500/60'
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all`}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label 
                      htmlFor="contact-email" 
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Your Email <span className="text-violet-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#140f29] border ${
                        formErrors.email ? 'border-rose-500/80' : 'border-violet-500/20 focus:border-violet-500/60'
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all`}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label 
                    htmlFor="contact-subject" 
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Full-Stack Web Developer Role / Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-[#140f29] border border-violet-500/20 focus:border-violet-500/60 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label 
                    htmlFor="contact-message" 
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    Message <span className="text-violet-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#140f29] border ${
                      formErrors.message ? 'border-rose-500/80' : 'border-violet-500/20 focus:border-violet-500/60'
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-violet-500 transition-all resize-y`}
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      {formErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 shadow-md shadow-violet-600/30 transition-all hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
