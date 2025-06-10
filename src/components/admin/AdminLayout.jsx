import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const AdminLayout = ({ children, language, setLanguage }) => {
  const translations = {
    en: {
      admin: 'Admin',
      dashboard: 'Dashboard',
      campaigns: 'Campaigns',
      verifications: 'Verifications',
      reports: 'Reports',
      users: 'Users',
      support: 'Support',
      exit: 'Exit Admin'
    },
    am: {
      admin: 'አስተዳዳሪ',
      dashboard: 'ዳሽቦርድ',
      campaigns: 'ዘመቻዎች',
      verifications: 'ማረጋገጫዎች',
      reports: 'ሪፖርቶች',
      users: 'ተጠቃሚዎች',
      support: 'ድጋፍ',
      exit: 'ከአስተዳዳሪ ውጣ'
    }
  };

  const t = (k) => translations[language][k];

  const navItems = [
    { to: '/admin', key: 'dashboard', icon: '📊' },
    { to: '/admin/campaigns', key: 'campaigns', icon: '🎯' },
    { to: '/admin/verifications', key: 'verifications', icon: '✅' },
    { to: '/admin/reports', key: 'reports', icon: '🚨' },
    { to: '/admin/users', key: 'users', icon: '👥' },
    { to: '/admin/support', key: 'support', icon: '🎧' },
  ];

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <aside className="w-60 hidden md:flex flex-col border-r border-gray-700 bg-gray-900/60 backdrop-blur">
        <div className="p-4 font-bold text-xl flex items-center gap-2">
          <span>🛡️</span> {t('admin')}
        </div>
        <nav className="flex-1 px-3 space-y-1">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-orange-500 text-white' : 'text-gray-300 hover:bg-gray-700/50'}`}
            >
              <span>{item.icon}</span>{t(item.key)}
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-700 text-sm space-y-2">
          <button
            onClick={() => setLanguage(language === 'en' ? 'am' : 'en')}
            className="w-full bg-gray-700/50 hover:bg-gray-700 rounded px-3 py-2"
          >
            {language === 'en' ? 'አማርኛ' : 'English'}
          </button>
          <Link to="/dashboard" className="block text-center bg-gray-700/50 hover:bg-gray-700 rounded px-3 py-2">{t('exit')}</Link>
        </div>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="md:hidden flex items-center justify-between px-4 py-3 border-b border-gray-700 bg-gray-900/80">
          <div className="font-bold">🛡️ {t('admin')}</div>
          <button
            onClick={() => setLanguage(language === 'en' ? 'am' : 'en')}
            className="text-xs bg-gray-700/60 px-3 py-1 rounded"
          >{language === 'en' ? 'አማ' : 'EN'}</button>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
