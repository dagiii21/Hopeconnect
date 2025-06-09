import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthenticatedHeader from './AuthenticatedHeader';
import Footer from './Footer';

const SettingsPage = ({ language, setLanguage }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('account');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Form states
  const [accountData, setAccountData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    email: 'sarah.johnson@email.com',
    phone: '+1 (555) 123-4567'
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    campaignUpdates: true,
    donationAlerts: true,
    weeklyReports: false,
    marketingEmails: false
  });

  const [privacySettings, setPrivacySettings] = useState({
    publicProfile: true,
    showDonations: false,
    allowMessages: true,
    searchable: true
  });

  const [preferences, setPreferences] = useState({
    language: language,
    currency: 'USD',
    timezone: 'America/New_York',
    theme: 'light'
  });

  // Translations
  const translations = {
    en: {
      settings: "Settings",
      backToDashboard: "Back to Dashboard",
      
      // Tabs
      account: "Account",
      notifications: "Notifications",
      privacy: "Privacy",
      preferences: "Preferences",
      
      // Account Settings
      accountSettings: "Account Settings",
      changePassword: "Change Password",
      currentPassword: "Current Password",
      newPassword: "New Password",
      confirmPassword: "Confirm New Password",
      updatePassword: "Update Password",
      contactInfo: "Contact Information",
      emailAddress: "Email Address",
      phoneNumber: "Phone Number",
      updateContact: "Update Contact Info",
      
      // Notifications
      notificationSettings: "Notification Settings",
      emailNotifications: "Email Notifications",
      pushNotifications: "Push Notifications",
      campaignUpdates: "Campaign Updates",
      donationAlerts: "Donation Alerts",
      weeklyReports: "Weekly Reports",
      marketingEmails: "Marketing Emails",
      saveNotifications: "Save Notification Settings",
      
      // Privacy
      privacySettings: "Privacy Settings",
      publicProfile: "Public Profile",
      publicProfileDesc: "Allow others to find and view your profile",
      showDonations: "Show My Donations",
      showDonationsDesc: "Display your donations on your public profile",
      allowMessages: "Allow Messages",
      allowMessagesDesc: "Let other users send you messages",
      searchable: "Searchable Profile",
      searchableDesc: "Allow your profile to appear in search results",
      savePrivacy: "Save Privacy Settings",
      
      // Preferences
      generalPreferences: "General Preferences",
      languagePreference: "Language",
      english: "English",
      amharic: "አማርኛ",
      currency: "Currency",
      timezone: "Timezone",
      theme: "Theme",
      light: "Light",
      dark: "Dark",
      auto: "Auto",
      savePreferences: "Save Preferences",
      
      // Messages
      settingsUpdated: "Settings updated successfully!",
      passwordUpdated: "Password updated successfully!",
      error: "An error occurred. Please try again.",
      
      // Danger Zone
      dangerZone: "Danger Zone",
      deleteAccount: "Delete Account",
      deleteAccountDesc: "Permanently delete your account and all data",
      downloadData: "Download Data",
      downloadDataDesc: "Download a copy of your account data",
      
      // Buttons
      save: "Save Changes",
      cancel: "Cancel",
      delete: "Delete",
      download: "Download"
    },
    am: {
      settings: "ቅንብሮች",
      backToDashboard: "ወደ ዳሽቦርድ መመለስ",
      
      // Tabs
      account: "መለያ",
      notifications: "ማሳወቂያዎች",
      privacy: "ግላዊነት",
      preferences: "ምርጫዎች",
      
      // Account Settings
      accountSettings: "የመለያ ቅንብሮች",
      changePassword: "የይለፍ ቃል ቀይር",
      currentPassword: "አሁን ያለው የይለፍ ቃል",
      newPassword: "አዲስ የይለፍ ቃል",
      confirmPassword: "አዲሱን የይለፍ ቃል አረጋግጥ",
      updatePassword: "የይለፍ ቃል አዘምን",
      contactInfo: "የመገናኛ መረጃ",
      emailAddress: "የኢሜይል አድራሻ",
      phoneNumber: "የስልክ ቁጥር",
      updateContact: "የመገናኛ መረጃ አዘምን",
      
      // Notifications
      notificationSettings: "የማሳወቂያ ቅንብሮች",
      emailNotifications: "የኢሜይል ማሳወቂያዎች",
      pushNotifications: "የገፋ ማሳወቂያዎች",
      campaignUpdates: "የዘመቻ ማሻሻያዎች",
      donationAlerts: "የልገሳ ማሳወቂያዎች",
      weeklyReports: "ሳምንታዊ ሪፖርቶች",
      marketingEmails: "የግብይት ኢሜይሎች",
      saveNotifications: "የማሳወቂያ ቅንብሮች አስቀምጥ",
      
      // Privacy
      privacySettings: "የግላዊነት ቅንብሮች",
      publicProfile: "ይፋዊ መገለጫ",
      publicProfileDesc: "ሌሎች መገለጫዎን እንዲያገኙ እና እንዲመለከቱ ፍቀድ",
      showDonations: "ልገሳዎቼን አሳይ",
      showDonationsDesc: "ልገሳዎችዎን በይፋዊ መገለጫዎ ላይ አሳይ",
      allowMessages: "መልዕክቶችን ፍቀድ",
      allowMessagesDesc: "ሌሎች ተጠቃሚዎች መልዕክት እንዲልኩልዎ ፍቀድ",
      searchable: "የሚፈለግ መገለጫ",
      searchableDesc: "መገለጫዎ በፍለጋ ውጤቶች ውስጥ እንዲታይ ፍቀድ",
      savePrivacy: "የግላዊነት ቅንብሮች አስቀምጥ",
      
      // Preferences
      generalPreferences: "አጠቃላይ ምርጫዎች",
      languagePreference: "ቋንቋ",
      english: "English",
      amharic: "አማርኛ",
      currency: "ገንዘብ",
      timezone: "የጊዜ ዞን",
      theme: "ገጽታ",
      light: "ብሩህ",
      dark: "ጨለማ",
      auto: "ራስ-ሰር",
      savePreferences: "ምርጫዎች አስቀምጥ",
      
      // Messages
      settingsUpdated: "ቅንብሮች በተሳካ ሁኔታ ተዘምነዋል!",
      passwordUpdated: "የይለፍ ቃል በተሳካ ሁኔታ ተዘምኗል!",
      error: "ስህተት ተፈጽሟል። እባክዎ እንደገና ይሞክሩ።",
      
      // Danger Zone
      dangerZone: "አደገኛ ዞን",
      deleteAccount: "መለያ ሰርዝ",
      deleteAccountDesc: "መለያዎን እና ሁሉንም ውሂብ በቋሚነት ሰርዝ",
      downloadData: "ውሂብ አውርድ",
      downloadDataDesc: "የመለያ ውሂብዎን ቅጂ ያውርዱ",
      
      // Buttons
      save: "ለውጦችን አስቀምጥ",
      cancel: "ይቅር",
      delete: "ሰርዝ",
      download: "አውርድ"
    }
  };

  const t = (key) => translations[language][key];

  // Handlers
  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (accountData.newPassword !== accountData.confirmPassword) {
      setMessage({ type: 'error', text: 'Passwords do not match' });
      return;
    }
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setMessage({ type: 'success', text: t('passwordUpdated') });
      setAccountData({ ...accountData, currentPassword: '', newPassword: '', confirmPassword: '' });
      setLoading(false);
    }, 1000);
  };

  const handleNotificationSave = async () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setMessage({ type: 'success', text: t('settingsUpdated') });
      setLoading(false);
    }, 1000);
  };

  const handlePrivacySave = async () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setMessage({ type: 'success', text: t('settingsUpdated') });
      setLoading(false);
    }, 1000);
  };

  const handlePreferencesSave = async () => {
    setLoading(true);
    // Update global language if changed
    if (preferences.language !== language) {
      setLanguage(preferences.language);
    }
    // Simulate API call
    setTimeout(() => {
      setMessage({ type: 'success', text: t('settingsUpdated') });
      setLoading(false);
    }, 1000);
  };

  // Clear message after 3 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige via-gray-50 to-warm-gray">
      <AuthenticatedHeader language={language} setLanguage={setLanguage} />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Page Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-700 to-orange-500 text-transparent bg-clip-text">
                ⚙️ {t('settings')}
              </h1>
              <p className="text-gray-600 mt-2">Manage your account settings and preferences</p>
            </div>
            <Link 
              to="/dashboard"
              className="text-orange-600 hover:text-orange-700 transition-colors flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              <span>{t('backToDashboard')}</span>
            </Link>
          </div>

          {/* Success/Error Message */}
          {message && (
            <div className={`mb-6 p-4 rounded-lg ${
              message.type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : 
              'bg-red-100 text-red-800 border border-red-200'
            }`}>
              {message.text}
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <nav className="space-y-2">
                  {['account', 'notifications', 'privacy', 'preferences'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                        activeTab === tab
                          ? 'bg-orange-100 text-orange-700 border border-orange-200'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                      }`}
                    >
                      {t(tab)}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
                
                {/* Account Settings */}
                {activeTab === 'account' && (
                  <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-4">
                      {t('accountSettings')}
                    </h2>

                    {/* Change Password */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('changePassword')}</h3>
                      <form onSubmit={handlePasswordChange} className="space-y-4 max-w-md">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t('currentPassword')}
                          </label>
                          <input
                            type="password"
                            value={accountData.currentPassword}
                            onChange={(e) => setAccountData({...accountData, currentPassword: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t('newPassword')}
                          </label>
                          <input
                            type="password"
                            value={accountData.newPassword}
                            onChange={(e) => setAccountData({...accountData, newPassword: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t('confirmPassword')}
                          </label>
                          <input
                            type="password"
                            value={accountData.confirmPassword}
                            onChange={(e) => setAccountData({...accountData, confirmPassword: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={loading}
                          className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50"
                        >
                          {loading ? 'Updating...' : t('updatePassword')}
                        </button>
                      </form>
                    </div>

                    {/* Contact Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('contactInfo')}</h3>
                      <div className="space-y-4 max-w-md">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t('emailAddress')}
                          </label>
                          <input
                            type="email"
                            value={accountData.email}
                            onChange={(e) => setAccountData({...accountData, email: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t('phoneNumber')}
                          </label>
                          <input
                            type="tel"
                            value={accountData.phone}
                            onChange={(e) => setAccountData({...accountData, phone: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          />
                        </div>
                        <button
                          onClick={() => setMessage({ type: 'success', text: t('settingsUpdated') })}
                          className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                        >
                          {t('updateContact')}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Notifications */}
                {activeTab === 'notifications' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-4">
                      {t('notificationSettings')}
                    </h2>

                    <div className="space-y-4">
                      {Object.entries(notificationSettings).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                          <div>
                            <label className="text-sm font-medium text-gray-800">{t(key)}</label>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={value}
                              onChange={(e) => setNotificationSettings({...notificationSettings, [key]: e.target.checked})}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                          </label>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={handleNotificationSave}
                      disabled={loading}
                      className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50"
                    >
                      {loading ? 'Saving...' : t('saveNotifications')}
                    </button>
                  </div>
                )}

                {/* Privacy */}
                {activeTab === 'privacy' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-4">
                      {t('privacySettings')}
                    </h2>

                    <div className="space-y-6">
                      {Object.entries(privacySettings).map(([key, value]) => (
                        <div key={key} className="flex items-start justify-between py-4 border-b border-gray-100 last:border-b-0">
                          <div className="flex-1">
                            <label className="text-sm font-medium text-gray-800">{t(key)}</label>
                            <p className="text-sm text-gray-600 mt-1">{t(key + 'Desc')}</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer ml-4">
                            <input
                              type="checkbox"
                              checked={value}
                              onChange={(e) => setPrivacySettings({...privacySettings, [key]: e.target.checked})}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                          </label>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={handlePrivacySave}
                      disabled={loading}
                      className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50"
                    >
                      {loading ? 'Saving...' : t('savePrivacy')}
                    </button>
                  </div>
                )}

                {/* Preferences */}
                {activeTab === 'preferences' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800 border-b border-gray-200 pb-4">
                      {t('generalPreferences')}
                    </h2>

                    <div className="space-y-6 max-w-md">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t('languagePreference')}
                        </label>
                        <select
                          value={preferences.language}
                          onChange={(e) => setPreferences({...preferences, language: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        >
                          <option value="en">{t('english')}</option>
                          <option value="am">{t('amharic')}</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t('currency')}
                        </label>
                        <select
                          value={preferences.currency}
                          onChange={(e) => setPreferences({...preferences, currency: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        >
                          <option value="USD">USD ($)</option>
                          <option value="EUR">EUR (€)</option>
                          <option value="ETB">ETB (Birr)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t('theme')}
                        </label>
                        <select
                          value={preferences.theme}
                          onChange={(e) => setPreferences({...preferences, theme: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        >
                          <option value="light">{t('light')}</option>
                          <option value="dark">{t('dark')}</option>
                          <option value="auto">{t('auto')}</option>
                        </select>
                      </div>
                    </div>

                    <button
                      onClick={handlePreferencesSave}
                      disabled={loading}
                      className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50"
                    >
                      {loading ? 'Saving...' : t('savePreferences')}
                    </button>

                    {/* Danger Zone */}
                    <div className="border-t border-gray-200 pt-8 mt-8">
                      <h3 className="text-lg font-semibold text-red-600 mb-4">{t('dangerZone')}</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                          <div>
                            <h4 className="font-medium text-gray-800">{t('downloadData')}</h4>
                            <p className="text-sm text-gray-600">{t('downloadDataDesc')}</p>
                          </div>
                          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                            {t('download')}
                          </button>
                        </div>
                        <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg bg-red-50">
                          <div>
                            <h4 className="font-medium text-red-800">{t('deleteAccount')}</h4>
                            <p className="text-sm text-red-600">{t('deleteAccountDesc')}</p>
                          </div>
                          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                            {t('delete')}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer language={language} setLanguage={setLanguage} />
    </div>
  );
};

export default SettingsPage;
