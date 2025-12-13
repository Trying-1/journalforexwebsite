import React from 'react';
import { BarChart3, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function PrivacyPolicy() {
  const navigate = useNavigate();
  const currentDate = new Date().toISOString().slice(0, 10);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-3 text-white hover:text-purple-400 transition"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">JournalForex</span>
            </button>
            
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-slate-300 hover:text-white transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-slate-400">Last updated: {currentDate}</p>
        </div>

        <div className="space-y-6">
          {/* Overview */}
          <section className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white mb-3">Overview</h2>
            <p className="text-slate-300 leading-relaxed">
              JournalForex is a mobile application that helps you record and analyze your forex trades. 
              We respect your privacy and collect only what is necessary to provide and improve the service.
            </p>
          </section>

          {/* Information we collect */}
          <section className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white mb-3">Information we collect</h2>
            <ul className="space-y-2 text-slate-300 list-disc list-inside">
              <li>Account data such as email and display name (if you sign in).</li>
              <li>Trade journal entries you add in the app (positions, notes, tags, media).</li>
              <li>Optional crash and usage analytics to improve stability and features.</li>
            </ul>
          </section>

          {/* How we use information */}
          <section className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white mb-3">How we use information</h2>
            <ul className="space-y-2 text-slate-300 list-disc list-inside">
              <li>Provide core journaling functionality and sync (if enabled).</li>
              <li>Analyze aggregated usage to improve app performance and design.</li>
              <li>Communicate important updates and respond to support requests.</li>
            </ul>
          </section>

          {/* Data retention and deletion */}
          <section className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white mb-3">Data retention and deletion</h2>
            <p className="text-slate-300 leading-relaxed">
              You can export your data at any time from the app. You can delete your account and associated 
              data from within the app, or by submitting a request via our{' '}
              <button
                onClick={() => navigate('/account-deletion')}
                className="text-purple-400 hover:text-purple-300 underline"
              >
                Delete Account page
              </button>
              . We will process verified requests within 30 days unless a shorter period is required by law.
            </p>
          </section>

          {/* Third-party services */}
          <section className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white mb-3">Third-party services</h2>
            <p className="text-slate-300 leading-relaxed">
              We may use third-party services for authentication, analytics, or cloud storage. Where used, 
              data is handled per those providers' terms in compliance with applicable laws.
            </p>
          </section>

          {/* Children's privacy */}
          <section className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white mb-3">Children's privacy</h2>
            <p className="text-slate-300 leading-relaxed">
              JournalForex is not intended for children under 13. We do not knowingly collect personal 
              information from children under 13.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-white mb-3">Contact</h2>
            <p className="text-slate-300 leading-relaxed">
              If you have questions about this policy or your data, contact us at{' '}
              <a
                href="mailto:arisesoloapp@gmail.com"
                className="text-purple-400 hover:text-purple-300 underline"
              >
                arisesoloapp@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-8 border-t border-slate-800 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} JournalForex. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <button
                onClick={() => navigate('/')}
                className="text-slate-400 hover:text-white transition"
              >
                Home
              </button>
              <button
                onClick={() => navigate('/account-deletion')}
                className="text-slate-400 hover:text-white transition"
              >
                Delete Account
              </button>
              <a
                href="mailto:arisesoloapp@gmail.com"
                className="text-slate-400 hover:text-white transition"
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PrivacyPolicy;
