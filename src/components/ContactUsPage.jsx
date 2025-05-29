import React, { useState } from 'react';
import PublicHeader from './PublicHeader';
import Footer from './Footer';

const ContactUsPage = ({ language, setLanguage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Translations
  const translations = {
    en: {
      title: "Get in Touch",
      subtitle: "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
      
      form: {
        name: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Message",
        send: "Send Message"
      },
      
      contact: {
        title: "Contact Information",
        email: "support@hopeconnect.com",
        phone: "+1 (555) 123-4567",
        address: "123 Hope Street, Charity City, CC 12345"
      },
      
      hours: {
        title: "Business Hours",
        weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
        weekends: "Saturday - Sunday: 10:00 AM - 4:00 PM",
        timezone: "Eastern Time (ET)"
      },
      
      support: {
        title: "Need Help?",
        faq: "Check our FAQ",
        guidelines: "Community Guidelines", 
        safety: "Safety & Trust"
      }
    },
    am: {
      title: "ያግኙን",
      subtitle: "ከእርስዎ መስማት እንወዳለን። መልዕክት ይላኩልን እና በተቻለ ፍጥነት መልስ እንሰጣለን።",
      
      form: {
        name: "ሙሉ ስም",
        email: "የኢሜይል አድራሻ",
        subject: "ርዕስ",
        message: "መልዕክት",
        send: "መልዕክት ላክ"
      },
      
      contact: {
        title: "የመገናኛ መረጃ",
        email: "support@hopeconnect.com",
        phone: "+1 (555) 123-4567",
        address: "123 Hope Street, Charity City, CC 12345"
      },
      
      hours: {
        title: "የስራ ሰዓታት",
        weekdays: "ሰኞ - አርብ: 9:00 AM - 6:00 PM",
        weekends: "ቅዳመ - እሑድ: 10:00 AM - 4:00 PM",
        timezone: "የምስራቅ ጊዜ (ET)"
      },
      
      support: {
        title: "እርዳታ ይፈልጋሉ?",
        faq: "የእኛን FAQ ይመልከቱ",
        guidelines: "የማህበረሰብ መመሪያዎች",
        safety: "ደህንነት እና እምነት"
      }
    }
  };

  const t = (key) => translations[language][key];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert(language === 'en' ? 'Message sent successfully!' : 'መልዕክት በተሳካ ሁኔታ ተልኳል!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige via-gray-50 to-warm-gray">
      <PublicHeader language={language} setLanguage={setLanguage} />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            📞 {t('title')}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('form').name} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('form').email} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('form').subject} *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('form').message} *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {t('form').send}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Contact Details */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">{t('contact').title}</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-100 p-2 rounded-full">
                      <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{t('contact').email}</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-100 p-2 rounded-full">
                      <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{t('contact').phone}</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-100 p-2 rounded-full">
                      <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{t('contact').address}</span>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">{t('hours').title}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">{t('hours').weekdays}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">{t('hours').weekends}</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-4">
                    {t('hours').timezone}
                  </div>
                </div>
              </div>

              {/* Help Links */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">{t('support').title}</h3>
                <div className="space-y-3">
                  <a href="/faq" className="block text-orange-600 hover:text-orange-700 transition-colors">
                    📚 {t('support').faq}
                  </a>
                  <a href="/guidelines" className="block text-orange-600 hover:text-orange-700 transition-colors">
                    📋 {t('support').guidelines}
                  </a>
                  <a href="/safety" className="block text-orange-600 hover:text-orange-700 transition-colors">
                    🛡️ {t('support').safety}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer language={language} setLanguage={setLanguage} />
    </div>
  );
};

export default ContactUsPage;
