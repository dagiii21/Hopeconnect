import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ language }) => {
  // Translations
  const translations = {
    en: {
      logo: "HopeConnect",
      tagline: "Empowering Lives Through Community Support",
      quickLinks: "Quick Links",
      home: "Home",
      about: "About Us",
      campaigns: "Browse Campaigns",
      support: "Support",
      contact: "Contact",
      helpCenter: "Help Center",
      howItWorks: "How It Works",
      safety: "Safety & Security",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      guidelines: "Community Guidelines",
      careers: "Careers",
      community: "Community",
      blog: "Blog",
      success: "Success Stories",
      partners: "Partners",
      volunteer: "Volunteer",
      connect: "Connect With Us",
      email: "hello@hopeconnect.et",
      phone: "+251 11 123 4567",
      address: "Addis Ababa, Ethiopia",
      copyright: "© 2025 HopeConnect. All rights reserved.",
      subtitle: "Building bridges of hope in Ethiopian communities"
    },
    am: {
      logo: "HopeConnect",
      tagline: "በማህበረሰብ ድጋፍ ህይወትን ማብቃት",
      quickLinks: "ፈጣን ማገናኛዎች",
      home: "መነሻ",
      about: "ስለ እኛ",
      campaigns: "ዘመቻዎችን ዝርዝር",
      support: "ድጋፍ",
      contact: "ያነጋግሩን",
      helpCenter: "የእገዛ ማዕከል",
      howItWorks: "እንዴት እንደሚሰራ",
      safety: "ደህንነት እና ጥበቃ",
      legal: "ህጋዊ",
      privacy: "የግላዊነት ፖሊሲ",
      terms: "የአገልግሎት ውሎች",
      guidelines: "የማህበረሰብ መመሪያዎች",
      careers: "የስራ እድሎች",
      community: "ማህበረሰብ",
      blog: "ብሎግ",
      success: "የስኬት ታሪኮች",
      partners: "አጋሮች",
      volunteer: "በእርዳታ ላይ ተሳተፍ",
      connect: "ከኛ ጋር ተገናኝ",
      email: "hello@hopeconnect.et",
      phone: "+251 11 123 4567",
      address: "አዲስ አበባ፣ ኢትዮጵያ",
      copyright: "© 2025 HopeConnect። ሁሉም መብቶች የተጠበቁ ናቸው።",
      subtitle: "በኢትዮጵያ ማህበረሰቦች ውስጥ የተስፋ ድልድዮችን መገንባት"
    }
  };

  const t = (key) => translations[language][key];

  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-orange-400 to-orange-500 text-transparent bg-clip-text">
              {t('logo')}
            </h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              {t('subtitle')}
            </p>
            <p className="text-gray-400 text-xs">
              {t('tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link to="/campaigns" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  {t('campaigns')}
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  {t('support')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">{t('support')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/support" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  {t('helpCenter')}
                </Link>
              </li>
              <li>
                <Link to="/support#how-it-works" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  {t('howItWorks')}
                </Link>
              </li>
              <li>
                <Link to="/support#safety" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  {t('safety')}
                </Link>
              </li>
              <li>
                <Link to="/support#contact" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">{t('connect')}</h4>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <svg className="w-4 h-4 mr-2 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-gray-300">{t('email')}</span>
              </div>
              <div className="flex items-center text-sm">
                <svg className="w-4 h-4 mr-2 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-gray-300">{t('phone')}</span>
              </div>
              <div className="flex items-center text-sm">
                <svg className="w-4 h-4 mr-2 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">{t('address')}</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3 mt-4">
              <button className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </button>
              <button className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </button>
              <button className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.042-3.441.219-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              <Link to="/privacy" className="text-gray-400 hover:text-orange-400 transition-colors text-xs">
                {t('privacy')}
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-orange-400 transition-colors text-xs">
                {t('terms')}
              </Link>
              <Link to="/guidelines" className="text-gray-400 hover:text-orange-400 transition-colors text-xs">
                {t('guidelines')}
              </Link>
            </div>
            <p className="text-gray-400 text-xs">
              {t('copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
