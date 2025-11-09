import React, { useState } from 'react';
import { BarChart3, Tag, FileText, Cloud, Download, Smartphone, Menu, X, CheckCircle, TrendingUp, PieChart, Calendar } from 'lucide-react';
import './App.css';

// Google Play Store URL - Update this when published
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.yourcompany.journalforex';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "See win rate, RR distribution, best sessions, and your most profitable setups"
    },
    {
      icon: <Tag className="w-6 h-6" />,
      title: "Tags & Setups",
      description: "Label trades by strategy, session, pair, and more to identify patterns fast"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Clean Journaling Flow",
      description: "Log entries, exits, screenshots, and notes with a frictionless mobile UX"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Private & Portable",
      description: "Your data is yours. Export anytime. Optional cloud backup for peace of mind"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Track Progress",
      description: "Monitor your trading journey with detailed charts and performance metrics"
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Risk Management",
      description: "Analyze your risk-reward ratios and improve your trading discipline"
    }
  ];

  const useCases = [
    {
      title: "Day Traders",
      description: "Perfect for tracking multiple trades per day"
    },
    {
      title: "Swing Traders",
      description: "Monitor longer-term positions with ease"
    },
    {
      title: "Beginners",
      description: "Learn from your mistakes and build discipline"
    },
    {
      title: "Professionals",
      description: "Advanced analytics for serious traders"
    }
  ];

  const faqs = [
    {
      question: "How do you handle my data?",
      answer: "We store minimal data and give you full export controls. See our Privacy Policy for details."
    },
    {
      question: "Can I delete my account and data?",
      answer: "Yes. Use the in-app option or request from our Delete Account page."
    },
    {
      question: "Is there a subscription?",
      answer: "Core features are free. Pro analytics are optional and cancel anytime."
    },
    {
      question: "What platforms do you support?",
      answer: "Currently available on Android. iOS version coming soon."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">JournalForex</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
              <a href="#screens" className="text-slate-300 hover:text-white transition">Screens</a>
              <a href="#faq" className="text-slate-300 hover:text-white transition">FAQ</a>
              <a href="#download" className="text-slate-300 hover:text-white transition">Download</a>
              <button 
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition transform hover:scale-105"
                onClick={() => window.open(PLAY_STORE_URL, '_blank')}
              >
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-700/50">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-slate-300 hover:text-white transition">Features</a>
              <a href="#screens" className="block text-slate-300 hover:text-white transition">Screens</a>
              <a href="#faq" className="block text-slate-300 hover:text-white transition">FAQ</a>
              <a href="#download" className="block text-slate-300 hover:text-white transition">Download</a>
              <button 
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-medium"
                onClick={() => window.open(PLAY_STORE_URL, '_blank')}
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 px-4 py-2 rounded-full mb-6">
                <BarChart3 className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-purple-300">Smart Forex Trading Journal</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-bold leading-tight mb-6 text-white">
                Trade smarter with a
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> focused forex journal</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8">
                Capture entries, tag setups, and review your performance with clean, actionable analytics. 
                Build discipline. Find your edge.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8" id="download">
                <button 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center space-x-2"
                  onClick={() => window.open(PLAY_STORE_URL, '_blank')}
                >
                  <Download className="w-5 h-5" />
                  <span>Get it on Google Play</span>
                </button>
                <button 
                  className="bg-slate-700/50 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-700 transition flex items-center justify-center space-x-2"
                  onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
                >
                  <span>Explore Features</span>
                </button>
              </div>
              
              <div className="flex flex-wrap gap-6 text-sm text-slate-400">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>No ads, your data stays yours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Fast, offline-friendly</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Export to CSV anytime</span>
                </div>
              </div>
            </div>

            {/* Hero Image/Mockup */}
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 rounded-3xl p-1 shadow-2xl transform hover:scale-105 transition duration-300">
                  <div className="bg-slate-900 rounded-3xl p-8">
                    <div className="aspect-[9/19.5] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-inner border border-slate-700">
                      <div className="h-full flex flex-col">
                        {/* Phone notch */}
                        <div className="h-6 bg-slate-950 rounded-b-2xl mx-auto w-1/3"></div>
                        {/* Mock content */}
                        <div className="flex-1 p-4 space-y-3">
                          <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 rounded-lg p-3">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs text-green-400 font-medium">EUR/USD</span>
                              <span className="text-xs text-green-400">+2.5%</span>
                            </div>
                            <div className="h-1 bg-green-500/30 rounded-full"></div>
                          </div>
                          <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 rounded-lg p-3">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs text-red-400 font-medium">GBP/JPY</span>
                              <span className="text-xs text-red-400">-1.2%</span>
                            </div>
                            <div className="h-1 bg-red-500/30 rounded-full"></div>
                          </div>
                          <div className="bg-slate-800/50 rounded-lg p-3 space-y-2">
                            <div className="h-2 bg-slate-700 rounded w-3/4"></div>
                            <div className="h-2 bg-slate-700 rounded w-1/2"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500 rounded-full blur-3xl opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-50 animate-pulse delay-75"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Everything you need to journal with
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> clarity</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Powerful features designed to help you track, analyze, and improve your forex trading
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800/70 hover:border-purple-500/50 transition group cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screens Section */}
      <section id="screens" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Designed for
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> focus</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Minimal, fast, and built for traders who value clarity over clutter
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="aspect-[3/4] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=1600&auto=format&fit=crop" 
                alt="Trading Dashboard" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition"
              />
            </div>
            <div className="aspect-[3/4] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=1600&auto=format&fit=crop" 
                alt="Analytics View" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition"
              />
            </div>
            <div className="aspect-[3/4] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1454165205744-3b78555e5572?q=80&w=1600&auto=format&fit=crop" 
                alt="Trade Journal" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Perfect for
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> every trader</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Whether you're just starting or trading professionally
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="bg-slate-800/30 border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-800/50 hover:border-purple-500/50 transition group cursor-pointer"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{useCase.title}</h3>
                <p className="text-slate-400 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Frequently asked questions</h2>
            <p className="text-xl text-slate-300">Everything you need to know about JournalForex</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details 
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition group"
              >
                <summary className="cursor-pointer font-semibold text-white text-lg list-none flex items-center justify-between">
                  {faq.question}
                  <span className="text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-slate-400 mt-4 leading-relaxed">
                  {faq.answer}
                  {index === 0 && <a href="#/privacy-policy" className="text-purple-400 hover:text-purple-300 ml-1">Privacy Policy</a>}
                  {index === 1 && <a href="#/account-deletion" className="text-purple-400 hover:text-purple-300 ml-1">Delete Account page</a>}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to improve your trading?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join traders who are building discipline and finding their edge with JournalForex
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-medium hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center space-x-2"
                onClick={() => window.open(PLAY_STORE_URL, '_blank')}
              >
                <Download className="w-5 h-5" />
                <span>Download Now</span>
              </button>
              <button 
                className="bg-slate-900 text-white px-8 py-4 rounded-full font-medium hover:shadow-xl transition transform hover:scale-105 flex items-center justify-center space-x-2"
                onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Learn More</span>
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-white/80 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Free to Download</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>No Ads</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Your Data, Your Control</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">JournalForex</span>
              </div>
              <p className="text-slate-400 text-sm">
                Smart forex trading journal for disciplined traders
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#screens" className="hover:text-white transition">Screens</a></li>
                <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
                <li><a href="#download" className="hover:text-white transition">Download</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="mailto:support@journalforex.app" className="hover:text-white transition">Contact</a></li>
                <li><a href="#/privacy-policy" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#/account-deletion" className="hover:text-white transition">Delete Account</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Download</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <button 
                    onClick={() => window.open(PLAY_STORE_URL, '_blank')}
                    className="hover:text-white transition flex items-center space-x-2"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>Google Play</span>
                  </button>
                </li>
                <li className="text-slate-500">iOS (Coming Soon)</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} JournalForex. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
