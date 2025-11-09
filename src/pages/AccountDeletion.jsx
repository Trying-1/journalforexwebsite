import React, { useState } from 'react';
import { BarChart3, ArrowLeft, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function AccountDeletion() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    userId: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = encodeURIComponent('Delete Account Request');
    const bodyLines = [
      `Email: ${formData.email}`,
      formData.userId ? `User ID: ${formData.userId}` : null,
      formData.message ? `Message: ${formData.message}` : null,
      '',
      'I request deletion of my JournalForex account and associated personal data.'
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join('\n'));
    
    window.location.href = `mailto:privacy@journalforex.app?subject=${subject}&body=${body}`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
          <h1 className="text-4xl font-bold text-white mb-2">Delete Account Request</h1>
          <p className="text-slate-400">We'll verify your request and delete associated data as required.</p>
        </div>

        {/* Info Panel */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 mb-8">
          <p className="text-blue-300 leading-relaxed">
            You can delete your account and data directly in the app (Settings → Delete Account). 
            If you prefer, submit a request here and we'll process it within 30 days.
          </p>
        </div>

        {/* Form */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-white font-semibold mb-2">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              />
              <p className="text-slate-400 text-sm mt-2">
                Use the email associated with your account.
              </p>
            </div>

            {/* User ID */}
            <div>
              <label htmlFor="userId" className="block text-white font-semibold mb-2">
                User ID (optional)
              </label>
              <input
                type="text"
                id="userId"
                name="userId"
                value={formData.userId}
                onChange={handleChange}
                placeholder="Paste from app > Settings"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-white font-semibold mb-2">
                Message (optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Anything we should know?"
                rows="4"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-vertical"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Send deletion request</span>
              </button>
              <a
                href="mailto:privacy@journalforex.app?subject=Delete%20Account%20Request"
                className="flex-1 bg-slate-700/50 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-700 transition flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Email manually</span>
              </a>
            </div>
          </form>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 bg-red-500/10 border border-red-500/30 rounded-xl p-4">
          <p className="text-red-300 text-sm leading-relaxed">
            By submitting, you confirm you want your account and related personal data removed. 
            This action is irreversible.
          </p>
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
                onClick={() => navigate('/privacy-policy')}
                className="text-slate-400 hover:text-white transition"
              >
                Privacy Policy
              </button>
              <a
                href="mailto:support@journalforex.app"
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

export default AccountDeletion;
