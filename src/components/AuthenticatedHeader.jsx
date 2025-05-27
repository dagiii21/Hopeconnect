import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const AuthenticatedHeader = ({ language, setLanguage, user }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);

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

            {/* Notifications */}
            <button className="relative bg-white/10 text-white p-2 rounded-full hover:bg-white/20 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              {/* Notification badge */}
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>

            {/* User Menu */}
            <div className="relative">
              <button 
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-full px-4 py-2 hover:from-white/20 hover:to-white/10 transition-all duration-300 border border-white/20"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 via-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {currentUser.name.charAt(0)}
                </div>
                <div className="text-left hidden md:block">
                  <div className="flex items-center space-x-1">
                    <span className="text-white font-semibold text-sm">{currentUser.name}</span>
                    {currentUser.verified && (
                      <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span className="text-white/70 text-xs font-medium capitalize bg-white/10 px-2 py-0.5 rounded-full">
                    {currentUser.type}
                  </span>
                </div>
                <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 backdrop-blur-sm">
                  <div className="px-4 py-3 border-b border-gray-100 bg-gradient-to-r from-orange-50 to-pink-50">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 via-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {currentUser.name.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center space-x-1">
                          <p className="text-sm font-semibold text-gray-800">{currentUser.name}</p>
                          {currentUser.verified && (
                            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <p className="text-xs text-gray-600 capitalize font-medium bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full inline-block">
                          {currentUser.type}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <Link 
                    to="/profile" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setShowUserMenu(false)}
                  >
                    <svg className="w-4 h-4 inline-block mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                    {t('profile')}
                  </Link>
                  
                  <Link 
                    to="/settings" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setShowUserMenu(false)}
                  >
                    <svg className="w-4 h-4 inline-block mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    {t('settings')}
                  </Link>
                  
                  <div className="border-t border-gray-200 mt-2">
                    <button 
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <svg className="w-4 h-4 inline-block mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                      </svg>
                      {t('logout')}
                    </button>
                  </div>
                </div>
              )}
            </div>
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
