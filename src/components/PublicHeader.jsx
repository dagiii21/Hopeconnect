import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const PublicHeader = ({ language, setLanguage }) => {
  const location = useLocation();

  // Translations
  const translations = {
    en: {
      logo: "HopeConnect",
      home: "Home",
      whyHopeConnect: "Why HopeConnect",
      aboutUs: "About Us",
      contactUs: "Contact Us",
      support: "Support",
      login: "Login",
      register: "Sign Up",
      getStarted: "Get Started"
    },
    am: {
      logo: "HopeConnect",
      home: "መነሻ",
      whyHopeConnect: "ለምን HopeConnect",
      aboutUs: "ስለ እኛ",
      contactUs: "አግኙን",
      support: "ድጋፍ",
      login: "ግባ",
      register: "ይመዝገቡ",
      getStarted: "ጀምር"
    }
  };

  const t = (key) => translations[language][key];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navLinkClass = (path) => `
    px-3 py-2 rounded-full text-sm font-medium transition-all duration-300
    ${isActive(path) 
      ? 'bg-white/20 text-white' 
      : 'text-white/80 hover:text-white hover:bg-white/10'
    }
  `;

  return (
    <header className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 shadow-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-white font-bold text-2xl hover:text-orange-200 transition-colors">
            {t('logo')}
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-2">
            <Link to="/" className={navLinkClass('/')}>
              {t('home')}
            </Link>
            <Link to="/why-hopeconnect" className={navLinkClass('/why-hopeconnect')}>
              {t('whyHopeConnect')}
            </Link>
            <Link to="/about" className={navLinkClass('/about')}>
              {t('aboutUs')}
            </Link>
            <Link to="/contact" className={navLinkClass('/contact')}>
              {t('contactUs')}
            </Link>
            <Link to="/support" className={navLinkClass('/support')}>
              {t('support')}
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Language Switcher */}
            <button 
              onClick={() => setLanguage(language === 'en' ? 'am' : 'en')} 
              className="bg-white/10 text-white px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-colors"
            >
              {language === 'en' ? 'አማርኛ' : 'English'}
            </button>

            {/* Authentication Links */}
            <Link 
              to="/login" 
              className="text-white px-4 py-2 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              {t('login')}
            </Link>
            <Link 
              to="/register" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full font-medium hover:from-orange-600 hover:to-orange-700 transition-colors"
            >
              {t('register')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mt-4 pb-4 border-t border-white/20">
          <div className="flex flex-col space-y-2 mt-4">
            <Link to="/" className="text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
              {t('home')}
            </Link>
            <Link to="/about" className="text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
              {t('about')}
            </Link>
            <Link to="/campaigns" className="text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
              {t('campaigns')}
            </Link>
            <Link to="/support" className="text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
              {t('support')}
            </Link>

            <div className="flex flex-col space-y-2 pt-2 border-t border-white/20">
              <Link to="/login" className="text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
                {t('login')}
              </Link>
              <Link to="/register" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-2 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-colors text-center">
                {t('register')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PublicHeader;
