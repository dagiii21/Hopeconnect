import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const AuthenticatedHeader = ({ language, setLanguage, user }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Mock user if not provided
  const currentUser = user || { 
    name: 'Sarah Johnson', 
    type: 'donor', 
    verified: true,
    avatar: null,
    email: 'sarah.johnson@email.com'
  };

  // Translations
  const translations = {
    en: {
      logo: "HopeConnect",
      dashboard: "Dashboard",
      browseCampaign: "Browse Campaign",
      myCampaign: "My Campaign",
      myDonation: "My Donation",
      message: "Message",
      profile: "Profile",
      settings: "Settings",
      logout: "Logout",
      admin: "Admin Panel"
    },
    am: {
      logo: "HopeConnect",
      dashboard: "ዳሽቦርድ",
      browseCampaign: "ዘመቻ ያስሱ",
      myCampaign: "የእኔ ዘመቻ",
      myDonation: "የእኔ ልገሳ",
      message: "መልዕክት",
      profile: "መገለጫ",
      settings: "ቅንብሮች",
      logout: "ውጣ",
      support: "ድጋፍ",
      admin: "የአስተዳዳሪ ፓነል"
    }
  };

  const t = (key) => translations[language][key];

  const isActive = (path) => {
    if (path === '/dashboard' && location.pathname === '/dashboard') return true;
    if (path !== '/dashboard' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const navLinkClass = (path) => `
    px-3 py-2 rounded-full text-sm font-medium transition-all duration-300
    ${isActive(path) 
      ? 'bg-white/20 text-white' 
      : 'text-white/80 hover:text-white hover:bg-white/10'
    }
  `;

  const handleLogout = () => {
    // Add logout logic here
    navigate('/');
  };

  return (
    <header className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 shadow-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/dashboard" className="text-white font-bold text-2xl hover:text-orange-200 transition-colors">
            {t('logo')}
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-2">
            <Link to="/dashboard" className={navLinkClass('/dashboard')}>
              {t('dashboard')}
            </Link>
            <Link to="/campaigns" className={navLinkClass('/campaigns')}>
              {t('browseCampaign')}
            </Link>
            <Link to="/my-campaigns" className={navLinkClass('/my-campaigns')}>
              {t('myCampaign')}
            </Link>
            <Link to="/donations" className={navLinkClass('/donations')}>
              {t('myDonation')}
            </Link>
            <Link to="/messages" className={navLinkClass('/messages')}>
              {t('message')}
            </Link>
            
            {/* Admin link for admin users */}
            {currentUser.type === 'admin' && (
              <Link to="/admin" className={navLinkClass('/admin')}>
                {t('admin')}
              </Link>
            )}
          </nav>

          {/* Right Side - User Menu */}
          <div className="flex items-center space-x-3">
            {/* Language Switcher */}
            <button 
              onClick={() => setLanguage(language === 'en' ? 'am' : 'en')} 
              className="bg-white/10 text-white px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-colors"
            >
              {language === 'en' ? 'አማርኛ' : 'English'}
            </button>

            {/* Simple Avatar (no dropdown) */}
            <Link to="/profile" className="w-10 h-10 bg-gradient-to-br from-orange-400 via-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg hover:opacity-90 transition-opacity" title={currentUser.name}>
              {currentUser.name.charAt(0)}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden mt-4 pb-4 border-t border-white/20">
          <div className="flex flex-col space-y-2 mt-4">
            <Link to="/dashboard" className="text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
              {t('dashboard')}
            </Link>
            <Link to="/campaigns" className="text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
              {t('campaigns')}
            </Link>
            
            {currentUser.type === 'seeker' && (
              <>
                <Link to="/my-campaigns" className="text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
                  {t('myCampaigns')}
                </Link>
                <Link to="/create-campaign" className="text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
                  {t('createCampaign')}
                </Link>
              </>
            )}
            
            {currentUser.type === 'donor' && (
              <Link to="/donations" className="text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
                {t('myDonations')}
              </Link>
            )}
            
            <Link to="/messages" className="text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
              {t('messages')}
            </Link>
            
            <Link to="/support" className="text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
              {t('support')}
            </Link>

            <div className="flex flex-col space-y-2 pt-2 border-t border-white/20">
              <Link to="/profile" className="text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
                {t('profile')}
              </Link>
              <button 
                onClick={handleLogout}
                className="text-left text-white px-3 py-2 rounded-lg hover:bg-red-500/20 transition-colors"
              >
                {t('logout')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AuthenticatedHeader;
