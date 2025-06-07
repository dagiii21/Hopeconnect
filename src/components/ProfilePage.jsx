import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthenticatedHeader from './AuthenticatedHeader';

const ProfilePage = ({ language, setLanguage }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});

  const translations = {
    en: {
      profile: "Profile",
      backToDashboard: "Back to Dashboard",
      
      // Tabs
      profileInfo: "Profile Information",
      security: "Security",
      preferences: "Preferences",
      notifications: "Notifications",
      
      // Profile info
      personalInfo: "Personal Information",
      edit: "Edit",
      save: "Save Changes",
      cancel: "Cancel",
      fullName: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      bio: "Bio",
      profilePicture: "Profile Picture",
      changePhoto: "Change Photo",
      
      // Verification
      verificationStatus: "Verification Status",
      verified: "Verified",
      notVerified: "Not Verified",
      pending: "Pending Review",
      getVerified: "Get Verified",
      
      // Account stats
      accountStats: "Account Statistics",
      memberSince: "Member Since",
      totalDonations: "Total Donations",
      campaignsCreated: "Campaigns Created",
      fundsRaised: "Funds Raised",
      donationsReceived: "Donations Received",
      
      // Security
      changePassword: "Change Password",
      currentPassword: "Current Password",
      newPassword: "New Password",
      confirmPassword: "Confirm New Password",
      twoFactor: "Two-Factor Authentication",
      enable2FA: "Enable 2FA",
      disable2FA: "Disable 2FA",
      
      // Preferences
      language: "Language",
      english: "English",
      amharic: "አማርኛ",
      currency: "Currency",
      timezone: "Timezone",
      privacy: "Privacy Settings",
      publicProfile: "Public Profile",
      showDonations: "Show My Donations",
      allowMessages: "Allow Messages from Anyone",
      
      // Notifications
      emailNotifications: "Email Notifications",
      newDonations: "New Donations",
      campaignUpdates: "Campaign Updates",
      messages: "Messages",
      weeklyReport: "Weekly Report",
      pushNotifications: "Push Notifications",
      
      // Actions
      deleteAccount: "Delete Account",
      downloadData: "Download My Data",
      exportData: "Export Account Data",
      
      logo: "HopeConnect"
    },
    am: {
      profile: "መገለጫ",
      backToDashboard: "ወደ ዳሽቦርድ መመለስ",
      
      // Tabs
      profileInfo: "የመገለጫ መረጃ",
      security: "ደህንነት",
      preferences: "ምርጫዎች",
      notifications: "ማሳወቂያዎች",
      
      // Profile info
      personalInfo: "የግል መረጃ",
      edit: "አርትዕ",
      save: "ለውጦችን አስቀምጥ",
      cancel: "ይቅር",
      fullName: "ሙሉ ስም",
      email: "የኢሜል አድራሻ",
      phone: "የስልክ ቁጥር",
      bio: "ባዮ",
      profilePicture: "የመገለጫ ምስል",
      changePhoto: "ፎቶ ቀይር",
      
      // Verification
      verificationStatus: "የማረጋገጫ ሁኔታ",
      verified: "የተረጋገጠ",
      notVerified: "አልተረጋገጠም",
      pending: "በግምገማ ላይ",
      getVerified: "ማረጋገጫ ያግኙ",
      
      // Account stats
      accountStats: "የሂሳብ ስታቲስቲክስ",
      memberSince: "አባል ከሆነ",
      totalDonations: "ጠቅላላ ልገሳዎች",
      campaignsCreated: "የተፈጠሩ ዘመቻዎች",
      fundsRaised: "የተሰበሰበ ገንዘብ",
      donationsReceived: "የተቀበሉ ልገሳዎች",
      
      // Security
      changePassword: "የይለፍ ቃል ቀይር",
      currentPassword: "አሁን ያለ የይለፍ ቃል",
      newPassword: "አዲስ የይለፍ ቃል",
      confirmPassword: "አዲስ የይለፍ ቃል ያረጋግጡ",
      twoFactor: "ሁለት-ደረጃ ማረጋገጫ",
      enable2FA: "2FA አንቃ",
      disable2FA: "2FA አቦዝሪ",
      
      // Preferences
      language: "ቋንቋ",
      english: "English",
      amharic: "አማርኛ",
      currency: "ምንዛሪ",
      timezone: "የጊዜ ዞን",
      privacy: "የግላዊነት ቅንብሮች",
      publicProfile: "ሕዝባዊ መገለጫ",
      showDonations: "ልገሳዎቼን አሳይ",
      allowMessages: "ከማንኛውም ሰው መልዕክቶችን ፍቀድ",
      
      // Notifications
      emailNotifications: "የኢሜል ማሳወቂያዎች",
      newDonations: "አዲስ ልገሳዎች",
      campaignUpdates: "የዘመቻ ዝመናዎች",
      messages: "መልዕክቶች",
      weeklyReport: "ሳምንታዊ ሪፖርት",
      pushNotifications: "የግፊት ማሳወቂያዎች",
      
      // Actions
      deleteAccount: "ሂሳብ ሰርዝ",
      downloadData: "ውሂቤን አውርድ",
      exportData: "የሂሳብ ውሂብ ላክ",
      
      logo: "HopeConnect"
    }
  };

  const t = (key) => translations[language][key];

  useEffect(() => {
    // Mock user data
    const mockUser = {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+251911234567',
      bio: 'Passionate about helping Ethiopian communities through financial support and community building.',
      profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      verified: true,
      memberSince: '2024-01-15',
      type: 'donor',
      stats: {
        totalDonations: 15,
        amountDonated: 25000,
        campaignsCreated: 2,
        fundsRaised: 180000,
        donationsReceived: 156
      },
      preferences: {
        language: 'en',
        currency: 'ETB',
        timezone: 'Africa/Addis_Ababa',
        publicProfile: true,
        showDonations: true,
        allowMessages: true
      },
      notifications: {
        email: {
          newDonations: true,
          campaignUpdates: true,
          messages: true,
          weeklyReport: false
        },
        push: {
          newDonations: true,
          messages: true
        }
      }
    };

    setTimeout(() => {
      setUser(mockUser);
      setEditData(mockUser);
      setLoading(false);
    }, 1000);
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setUser(editData);
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handleCancel = () => {
    setEditData(user);
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setEditData(prev => ({ ...prev, [field]: value }));
  };

  const handlePreferenceChange = (category, field, value) => {
    setEditData(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-ET', {
      style: 'currency',
      currency: 'ETB',
      minimumFractionDigits: 0
    }).format(amount);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-warm-beige via-gray-50 to-warm-gray flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            {/* Profile Picture */}
            <div className="flex items-center space-x-6">
              <img
                src={user.profileImage}
                alt={user.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                  {t('changePhoto')}
                </button>
              </div>
            </div>

            {/* Personal Information */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">{t('personalInfo')}</h3>
                {!isEditing ? (
                  <button
                    onClick={handleEdit}
                    className="text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    ✏️ {t('edit')}
                  </button>
                ) : (
                  <div className="space-x-2">
                    <button
                      onClick={handleSave}
                      className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600 transition-colors"
                    >
                      {t('save')}
                    </button>
                    <button
                      onClick={handleCancel}
                      className="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600 transition-colors"
                    >
                      {t('cancel')}
                    </button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('fullName')}
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                    />
                  ) : (
                    <p className="text-gray-900">{user.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('email')}
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={editData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                    />
                  ) : (
                    <p className="text-gray-900">{user.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('phone')}
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={editData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                    />
                  ) : (
                    <p className="text-gray-900">{user.phone}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('bio')}
                  </label>
                  {isEditing ? (
                    <textarea
                      value={editData.bio}
                      onChange={(e) => handleInputChange('bio', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                    />
                  ) : (
                    <p className="text-gray-900">{user.bio}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Verification Status */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('verificationStatus')}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {user.verified ? (
                    <>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-green-600 font-medium">{t('verified')}</span>
                    </>
                  ) : (
                    <>
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-red-600 font-medium">{t('notVerified')}</span>
                    </>
                  )}
                </div>
                {!user.verified && (
                  <Link
                    to="/verification"
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    {t('getVerified')}
                  </Link>
                )}
              </div>
            </div>

            {/* Account Statistics */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('accountStats')}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">{user.stats.totalDonations}</div>
                  <div className="text-sm text-gray-600">{t('totalDonations')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">{formatCurrency(user.stats.amountDonated)}</div>
                  <div className="text-sm text-gray-600">Amount Donated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">{user.stats.campaignsCreated}</div>
                  <div className="text-sm text-gray-600">{t('campaignsCreated')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-500">{formatCurrency(user.stats.fundsRaised)}</div>
                  <div className="text-sm text-gray-600">{t('fundsRaised')}</div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  {t('memberSince')}: {new Date(user.memberSince).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            {/* Change Password */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('changePassword')}</h3>
              <div className="space-y-4 max-w-md">
                <input
                  type="password"
                  placeholder={t('currentPassword')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                />
                <input
                  type="password"
                  placeholder={t('newPassword')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                />
                <input
                  type="password"
                  placeholder={t('confirmPassword')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                />
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                  Update Password
                </button>
              </div>
            </div>

            {/* Two-Factor Authentication */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('twoFactor')}</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-700">Add an extra layer of security to your account</p>
                  <p className="text-sm text-gray-600">Protect your account with 2FA via SMS or authenticator app</p>
                </div>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                  {t('enable2FA')}
                </button>
              </div>
            </div>
          </div>
        );

      case 'preferences':
        return (
          <div className="space-y-6">
            {/* Language & Regional */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Language & Regional</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('language')}</label>
                  <select
                    value={user.preferences.language}
                    onChange={(e) => {
                      handlePreferenceChange('preferences', 'language', e.target.value);
                      setLanguage(e.target.value);
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  >
                    <option value="en">English</option>
                    <option value="am">አማርኛ</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('currency')}</label>
                  <select
                    value={user.preferences.currency}
                    onChange={(e) => handlePreferenceChange('preferences', 'currency', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  >
                    <option value="ETB">Ethiopian Birr (ETB)</option>
                    <option value="USD">US Dollar (USD)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Privacy Settings */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('privacy')}</h3>
              <div className="space-y-4">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={user.preferences.publicProfile}
                    onChange={(e) => handlePreferenceChange('preferences', 'publicProfile', e.target.checked)}
                    className="text-orange-500"
                  />
                  <span className="text-gray-700">{t('publicProfile')}</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={user.preferences.showDonations}
                    onChange={(e) => handlePreferenceChange('preferences', 'showDonations', e.target.checked)}
                    className="text-orange-500"
                  />
                  <span className="text-gray-700">{t('showDonations')}</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={user.preferences.allowMessages}
                    onChange={(e) => handlePreferenceChange('preferences', 'allowMessages', e.target.checked)}
                    className="text-orange-500"
                  />
                  <span className="text-gray-700">{t('allowMessages')}</span>
                </label>
              </div>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            {/* Email Notifications */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('emailNotifications')}</h3>
              <div className="space-y-3">
                <label className="flex items-center justify-between">
                  <span className="text-gray-700">{t('newDonations')}</span>
                  <input
                    type="checkbox"
                    checked={user.notifications.email.newDonations}
                    onChange={(e) => handlePreferenceChange('notifications', 'email', {
                      ...user.notifications.email,
                      newDonations: e.target.checked
                    })}
                    className="text-orange-500"
                  />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-gray-700">{t('campaignUpdates')}</span>
                  <input
                    type="checkbox"
                    checked={user.notifications.email.campaignUpdates}
                    onChange={(e) => handlePreferenceChange('notifications', 'email', {
                      ...user.notifications.email,
                      campaignUpdates: e.target.checked
                    })}
                    className="text-orange-500"
                  />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-gray-700">{t('messages')}</span>
                  <input
                    type="checkbox"
                    checked={user.notifications.email.messages}
                    onChange={(e) => handlePreferenceChange('notifications', 'email', {
                      ...user.notifications.email,
                      messages: e.target.checked
                    })}
                    className="text-orange-500"
                  />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-gray-700">{t('weeklyReport')}</span>
                  <input
                    type="checkbox"
                    checked={user.notifications.email.weeklyReport}
                    onChange={(e) => handlePreferenceChange('notifications', 'email', {
                      ...user.notifications.email,
                      weeklyReport: e.target.checked
                    })}
                    className="text-orange-500"
                  />
                </label>
              </div>
            </div>

            {/* Push Notifications */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('pushNotifications')}</h3>
              <div className="space-y-3">
                <label className="flex items-center justify-between">
                  <span className="text-gray-700">{t('newDonations')}</span>
                  <input
                    type="checkbox"
                    checked={user.notifications.push.newDonations}
                    onChange={(e) => handlePreferenceChange('notifications', 'push', {
                      ...user.notifications.push,
                      newDonations: e.target.checked
                    })}
                    className="text-orange-500"
                  />
                </label>
                <label className="flex items-center justify-between">
                  <span className="text-gray-700">{t('messages')}</span>
                  <input
                    type="checkbox"
                    checked={user.notifications.push.messages}
                    onChange={(e) => handlePreferenceChange('notifications', 'push', {
                      ...user.notifications.push,
                      messages: e.target.checked
                    })}
                    className="text-orange-500"
                  />
                </label>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige via-gray-50 to-warm-gray">
      {/* Header */}
      <AuthenticatedHeader language={language} setLanguage={setLanguage} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-700 to-orange-500 text-transparent bg-clip-text">
              👤 {t('profile')}
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-6">
                <div className="text-center mb-6">
                  <img
                    src={user.profileImage}
                    alt={user.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-3 border-4 border-white shadow-lg"
                  />
                  <h2 className="font-bold text-gray-800">{user.name}</h2>
                  <p className="text-sm text-gray-600">{user.email}</p>
                  {user.verified && (
                    <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full mt-2">
                      ✓ Verified
                    </span>
                  )}
                </div>

                {/* Navigation Tabs */}
                <nav className="space-y-2">
                  {[
                    { id: 'profile', icon: '👤', label: t('profileInfo') },
                    { id: 'security', icon: '🔐', label: t('security') },
                    { id: 'preferences', icon: '⚙️', label: t('preferences') },
                    { id: 'notifications', icon: '🔔', label: t('notifications') }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-orange-500 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span className="mr-2">{tab.icon}</span>
                      {tab.label}
                    </button>
                  ))}
                </nav>

                {/* Quick Actions */}
                <div className="mt-6 pt-6 border-t border-gray-200 space-y-2">
                  <button className="w-full text-left px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors text-sm">
                    📊 {t('downloadData')}
                  </button>
                  <button className="w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-sm">
                    🗑️ {t('deleteAccount')}
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-8">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
