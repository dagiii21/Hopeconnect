import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = ({ language, setLanguage }) => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);
  const [recentActivity, setRecentActivity] = useState([]);
  const [pendingVerifications, setPendingVerifications] = useState([]);
  const [reportedCampaigns, setReportedCampaigns] = useState([]);

  const translations = {
    en: {
      adminDashboard: "Admin Dashboard",
      backToMain: "Back to Main Site",
      
      // Statistics
      systemStats: "System Statistics",
      totalUsers: "Total Users",
      activeCampaigns: "Active Campaigns",
      totalDonations: "Total Donations",
      pendingVerifications: "Pending Verifications",
      reportedContent: "Reported Content",
      systemRevenue: "System Revenue",
      
      // Quick Actions
      quickActions: "Quick Actions",
      manageUsers: "Manage Users",
      reviewCampaigns: "Review Campaigns",
      processVerifications: "Process Verifications",
      handleReports: "Handle Reports",
      systemSettings: "System Settings",
      generateReports: "Generate Reports",
      
      // Recent Activity
      recentActivity: "Recent Activity",
      noActivity: "No recent activity",
      
      // Pending Verifications
      pendingVerificationsList: "Pending Verifications",
      noPendingVerifications: "No pending verifications",
      approve: "Approve",
      reject: "Reject",
      viewDetails: "View Details",
      
      // Reported Campaigns
      reportedCampaigns: "Reported Campaigns",
      noReportedCampaigns: "No reported campaigns",
      investigate: "Investigate",
      dismiss: "Dismiss",
      suspend: "Suspend",
      
      // Time
      justNow: "Just now",
      minutesAgo: "minutes ago",
      hoursAgo: "hours ago",
      daysAgo: "days ago",
      
      logo: "HopeConnect Admin"
    },
    am: {
      adminDashboard: "የአስተዳዳሪ ዳሽቦርድ",
      backToMain: "ወደ ዋና ጣቢያ መመለስ",
      
      // Statistics
      systemStats: "የስርዓት ስታቲስቲክስ",
      totalUsers: "ጠቅላላ ተጠቃሚዎች",
      activeCampaigns: "ንቁ ዘመቻዎች",
      totalDonations: "ጠቅላላ ልገሳዎች",
      pendingVerifications: "በመጠባበቅ ላይ ያሉ ማረጋገጫዎች",
      reportedContent: "የተዘገበ ይዘት",
      systemRevenue: "የስርዓት ገቢ",
      
      // Quick Actions
      quickActions: "ፈጣን እርምጃዎች",
      manageUsers: "ተጠቃሚዎችን አስተዳድር",
      reviewCampaigns: "ዘመቻዎችን ይገምግሙ",
      processVerifications: "ማረጋገጫዎችን ያስተናግዱ",
      handleReports: "ሪፖርቶችን ይያዙ",
      systemSettings: "የስርዓት ቅንብሮች",
      generateReports: "ሪፖርቶች ይፍጠሩ",
      
      // Recent Activity
      recentActivity: "የቅርብ ጊዜ እንቅስቃሴ",
      noActivity: "የቅርብ ጊዜ እንቅስቃሴ የለም",
      
      // Pending Verifications
      pendingVerificationsList: "በመጠባበቅ ላይ ያሉ ማረጋገጫዎች",
      noPendingVerifications: "በመጠባበቅ ላይ ያሉ ማረጋገጫዎች የሉም",
      approve: "አጽድቅ",
      reject: "ውድቅ አድርግ",
      viewDetails: "ዝርዝሮችን ይመልከቱ",
      
      // Reported Campaigns
      reportedCampaigns: "የተዘገቡ ዘመቻዎች",
      noReportedCampaigns: "የተዘገቡ ዘመቻዎች የሉም",
      investigate: "ይመርምሩ",
      dismiss: "አሰናብት",
      suspend: "ታገድ",
      
      // Time
      justNow: "አሁን",
      minutesAgo: "ደቂቃዎች በፊት",
      hoursAgo: "ሰዓቶች በፊት",
      daysAgo: "ቀናት በፊት",
      
      logo: "HopeConnect Admin"
    }
  };

  const t = (key) => translations[language][key];

  useEffect(() => {
    // Mock admin data
    const mockStats = {
      totalUsers: 15742,
      activeCampaigns: 127,
      totalDonations: 3547289,
      pendingVerifications: 23,
      reportedContent: 8,
      systemRevenue: 354728
    };

    const mockActivity = [
      {
        id: 1,
        type: 'verification',
        message: 'New verification request from John Doe',
        time: new Date(Date.now() - 15 * 60 * 1000), // 15 minutes ago
        severity: 'info'
      },
      {
        id: 2,
        type: 'report',
        message: 'Campaign "Help My Family" reported for suspicious content',
        time: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
        severity: 'warning'
      },
      {
        id: 3,
        type: 'donation',
        message: 'Large donation (ETB 50,000) flagged for review',
        time: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
        severity: 'info'
      },
      {
        id: 4,
        type: 'campaign',
        message: 'Campaign "Medical Emergency" approved and published',
        time: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
        severity: 'success'
      }
    ];

    const mockVerifications = [
      {
        id: 1,
        userName: 'Sarah Wilson',
        userEmail: 'sarah.wilson@example.com',
        documentType: 'Ethiopian ID',
        submittedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
        status: 'pending'
      },
      {
        id: 2,
        userName: 'Michael Chen',
        userEmail: 'michael.chen@example.com',
        documentType: 'Passport',
        submittedAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
        status: 'pending'
      },
      {
        id: 3,
        userName: 'Alem Tadesse',
        userEmail: 'alem.tadesse@example.com',
        documentType: 'Driver License',
        submittedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        status: 'pending'
      }
    ];

    const mockReports = [
      {
        id: 1,
        campaignTitle: 'Help My Family in Crisis',
        reportedBy: 'Anonymous',
        reason: 'Suspicious content - possible scam',
        reportedAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
        severity: 'high'
      },
      {
        id: 2,
        campaignTitle: 'Medical Emergency Fund',
        reportedBy: 'John Smith',
        reason: 'Duplicate campaign detected',
        reportedAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
        severity: 'medium'
      }
    ];

    setTimeout(() => {
      setStats(mockStats);
      setRecentActivity(mockActivity);
      setPendingVerifications(mockVerifications);
      setReportedCampaigns(mockReports);
      setLoading(false);
    }, 1000);
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-ET', {
      style: 'currency',
      currency: 'ETB',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatTimeAgo = (date) => {
    const now = new Date();
    const diffInMs = now - date;
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInMinutes < 1) return t('justNow');
    if (diffInMinutes < 60) return `${diffInMinutes} ${t('minutesAgo')}`;
    if (diffInHours < 24) return `${diffInHours} ${t('hoursAgo')}`;
    return `${diffInDays} ${t('daysAgo')}`;
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'success': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-orange-600 bg-orange-100';
      default: return 'text-blue-600 bg-blue-100';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-300">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      {/* Header */}
      <header className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-white font-bold text-2xl">
              <span className="mr-2 text-3xl">🛡️</span>
              {t('logo')}
            </h1>

            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setLanguage(language === 'en' ? 'am' : 'en')} 
                className="bg-white/10 text-white px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-colors"
              >
                {language === 'en' ? '🇪🇹 አማርኛ' : '🇺🇸 English'}
              </button>
              
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                ← {t('backToMain')}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            📊 {t('adminDashboard')}
          </h1>
          <p className="text-gray-400">
            System overview and management tools
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-600">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-300 text-sm">{t('totalUsers')}</h3>
              <span className="text-2xl">👥</span>
            </div>
            <div className="text-2xl font-bold text-white">{stats.totalUsers.toLocaleString()}</div>
            <div className="text-green-400 text-sm">↗ +12% this month</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-600">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-300 text-sm">{t('activeCampaigns')}</h3>
              <span className="text-2xl">🎯</span>
            </div>
            <div className="text-2xl font-bold text-white">{stats.activeCampaigns}</div>
            <div className="text-green-400 text-sm">↗ +8% this week</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-600">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-300 text-sm">{t('totalDonations')}</h3>
              <span className="text-2xl">💰</span>
            </div>
            <div className="text-2xl font-bold text-white">{formatCurrency(stats.totalDonations)}</div>
            <div className="text-green-400 text-sm">↗ +15% this month</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-600">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-300 text-sm">{t('pendingVerifications')}</h3>
              <span className="text-2xl">⏳</span>
            </div>
            <div className="text-2xl font-bold text-orange-400">{stats.pendingVerifications}</div>
            <div className="text-yellow-400 text-sm">Needs attention</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-600">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-300 text-sm">{t('reportedContent')}</h3>
              <span className="text-2xl">🚨</span>
            </div>
            <div className="text-2xl font-bold text-red-400">{stats.reportedContent}</div>
            <div className="text-red-400 text-sm">Urgent review</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-600">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-300 text-sm">{t('systemRevenue')}</h3>
              <span className="text-2xl">📈</span>
            </div>
            <div className="text-2xl font-bold text-green-400">{formatCurrency(stats.systemRevenue)}</div>
            <div className="text-green-400 text-sm">↗ +22% this month</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-600 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">
            ⚡ {t('quickActions')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: '👥', label: t('manageUsers'), color: 'bg-blue-500' },
              { icon: '🎯', label: t('reviewCampaigns'), color: 'bg-green-500' },
              { icon: '✅', label: t('processVerifications'), color: 'bg-orange-500' },
              { icon: '🚨', label: t('handleReports'), color: 'bg-red-500' },
              { icon: '⚙️', label: t('systemSettings'), color: 'bg-purple-500' },
              { icon: '📊', label: t('generateReports'), color: 'bg-indigo-500' }
            ].map((action, index) => (
              <button
                key={index}
                className={`${action.color} hover:opacity-80 text-white p-4 rounded-lg transition-all transform hover:scale-105 text-center`}
              >
                <div className="text-2xl mb-2">{action.icon}</div>
                <div className="text-sm font-medium">{action.label}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Recent Activity */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-600">
            <h2 className="text-xl font-bold text-white mb-4">
              📋 {t('recentActivity')}
            </h2>
            <div className="space-y-4">
              {recentActivity.length > 0 ? recentActivity.map(activity => (
                <div key={activity.id} className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg">
                  <div className={`px-2 py-1 rounded text-xs ${getSeverityColor(activity.severity)}`}>
                    {activity.type}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300 text-sm">{activity.message}</p>
                    <p className="text-gray-500 text-xs">{formatTimeAgo(activity.time)}</p>
                  </div>
                </div>
              )) : (
                <p className="text-gray-400 text-center py-8">{t('noActivity')}</p>
              )}
            </div>
          </div>

          {/* Pending Verifications */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-600">
            <h2 className="text-xl font-bold text-white mb-4">
              ⏳ {t('pendingVerificationsList')}
            </h2>
            <div className="space-y-4">
              {pendingVerifications.length > 0 ? pendingVerifications.map(verification => (
                <div key={verification.id} className="p-4 bg-white/5 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-white font-medium">{verification.userName}</h4>
                      <p className="text-gray-400 text-sm">{verification.userEmail}</p>
                      <p className="text-gray-500 text-xs">{verification.documentType}</p>
                    </div>
                    <span className="text-xs text-gray-500">
                      {formatTimeAgo(verification.submittedAt)}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm transition-colors">
                      ✓ {t('approve')}
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors">
                      ✗ {t('reject')}
                    </button>
                    <button className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm transition-colors">
                      👁️ {t('viewDetails')}
                    </button>
                  </div>
                </div>
              )) : (
                <p className="text-gray-400 text-center py-8">{t('noPendingVerifications')}</p>
              )}
            </div>
          </div>

        </div>

        {/* Reported Campaigns */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-gray-600 mt-8">
          <h2 className="text-xl font-bold text-white mb-4">
            🚨 {t('reportedCampaigns')}
          </h2>
          <div className="space-y-4">
            {reportedCampaigns.length > 0 ? reportedCampaigns.map(report => (
              <div key={report.id} className="p-4 bg-white/5 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-white font-medium">{report.campaignTitle}</h4>
                    <p className="text-gray-400 text-sm">Reported by: {report.reportedBy}</p>
                    <p className="text-gray-300 text-sm">{report.reason}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 rounded text-xs ${getSeverityColor(report.severity)}`}>
                      {report.severity}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">
                      {formatTimeAgo(report.reportedAt)}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors">
                    🔍 {t('investigate')}
                  </button>
                  <button className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm transition-colors">
                    ✗ {t('dismiss')}
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors">
                    ⛔ {t('suspend')}
                  </button>
                </div>
              </div>
            )) : (
              <p className="text-gray-400 text-center py-8">{t('noReportedCampaigns')}</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
