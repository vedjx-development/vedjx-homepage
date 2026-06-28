'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[#1a1f2e] border border-gray-600 text-gray-200 rounded-lg focus:ring-2 focus:ring-[#0DEFFE] focus:border-transparent transition-all duration-200 placeholder-gray-500"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[#1a1f2e] border border-gray-600 text-gray-200 rounded-lg focus:ring-2 focus:ring-[#0DEFFE] focus:border-transparent transition-all duration-200 placeholder-gray-500"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
          Phone Number (optional)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[#1a1f2e] border border-gray-600 text-gray-200 rounded-lg focus:ring-2 focus:ring-[#0DEFFE] focus:border-transparent transition-all duration-200 placeholder-gray-500"
          placeholder="(123) 456-7890"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[#1a1f2e] border border-gray-600 text-gray-200 rounded-lg focus:ring-2 focus:ring-[#0DEFFE] focus:border-transparent transition-all duration-200 placeholder-gray-500"
          placeholder="Tell us about your project..."
        />
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-900/30 border border-green-500 rounded-lg text-green-300">
          Thank you! Your message has been sent successfully. We'll get back to you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-900/30 border border-red-500 rounded-lg text-red-300">
          Sorry, there was an error sending your message. Please email us directly at vedjx865@gmail.com.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-[#0DEFFE] to-[#4FADFE] text-[#101728] font-semibold py-3 px-6 rounded-lg hover:from-[#00D5EE] hover:to-[#3F9DEE] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
