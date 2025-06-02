import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ language, setLanguage, user = null, showAuth = true }) => {
  const location = useLocation();

  // Translations
  const translations = {
    en: {
      logo: "HopeConnect",
      home: "Home",
      about: "About",
      campaigns: "Campaigns",
      dashboard: "Dashboard",
      myCampaigns: "My Campaigns",
      myDonations: "My Donations",
      support: "Support",
      login: "Login",
      register: "Register",
      profile: "Profile",
      logout: "Logout",
      messages: "Messages"
    },
    am: {
      logo: "HopeConnect",
      home: "መነሻ",
      about: "ስለ እኛ",
      campaigns: "ዘመቻዎች",
      dashboard: "ዳሽቦርድ",
      myCampaigns: "የእኔ ዘመቻዎች",
      myDonations: "የእኔ ልገሳዎች",
      support: "ድጋፍ",
      login: "ግባ",
      register: "ይመዝገቡ",
      profile: "መገለጫ",
      logout: "ውጣ",
      messages: "መልዕክቶች"
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
            <Link to="/about" className={navLinkClass('/about')}>
              {t('about')}
            </Link>
            <Link to="/campaigns" className={navLinkClass('/campaigns')}>
              {t('campaigns')}
            </Link>
            
            {user && (
              <>
                <Link to="/dashboard" className={navLinkClass('/dashboard')}>
                  {t('dashboard')}
                </Link>
                <Link to="/my-campaigns" className={navLinkClass('/my-campaigns')}>
                  {t('myCampaigns')}
                </Link>
                <Link to="/donations" className={navLinkClass('/donations')}>
                  {t('myDonations')}
                </Link>
                <Link to="/messages" className={navLinkClass('/messages')}>
                  {t('messages')}
                </Link>
              </>
            )}
            
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
            {showAuth && (
              <>
                {user ? (
                  <div className="flex items-center space-x-2">
                    <Link 
                      to="/profile" 
                      className="bg-white/10 text-white px-4 py-2 rounded-full font-medium hover:bg-white/20 transition-colors"
                    >
                      {t('profile')}
                    </Link>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-full font-medium hover:bg-red-600 transition-colors">
                      {t('logout')}
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Link 
                      to="/login" 
                      className="text-white px-4 py-2 rounded-full font-medium hover:bg-white/10 transition-colors"
                    >
                      {t('login')}
                    </Link>
                    <Link 
                      to="/register" 
                      className="bg-orange-500 text-white px-4 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors"
                    >
                      {t('register')}
                    </Link>
                  </div>
                )}
              </>
            )}
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
            
            {user && (
              <>
                <Link to="/dashboard" className="text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
                  {t('dashboard')}
                </Link>
                <Link to="/my-campaigns" className="text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
                  {t('myCampaigns')}
                </Link>
                <Link to="/donations" className="text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
                  {t('myDonations')}
                </Link>
                <Link to="/messages" className="text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
                  {t('messages')}
                </Link>
              </>
            )}
            
            <Link to="/support" className="text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
              {t('support')}
            </Link>

            {showAuth && (
              <div className="flex flex-col space-y-2 pt-2 border-t border-white/20">
                {user ? (
                  <>
                    <Link to="/profile" className="text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
                      {t('profile')}
                    </Link>
                    <button className="text-left text-white px-3 py-2 rounded-lg hover:bg-red-500/20 transition-colors">
                      {t('logout')}
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
                      {t('login')}
                    </Link>
                    <Link to="/register" className="bg-orange-500 text-white px-3 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors text-center">
                      {t('register')}
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
