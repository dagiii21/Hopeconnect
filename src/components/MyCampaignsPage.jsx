import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthenticatedHeader from './AuthenticatedHeader';
import Footer from './Footer';

const MyCampaignsPage = ({ language, setLanguage }) => {
  const navigate = useNavigate();
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('active');

  // Translations
  const translations = {
    en: {
      myCampaigns: "My Campaigns",
      createNew: "Create New Campaign",
      active: "Active",
      draft: "Draft",
      completed: "Completed",
      suspended: "Suspended",
      noCampaigns: "No campaigns found",
      startFirst: "Create your first campaign to start fundraising",
      campaignTitle: "Campaign Title",
      goal: "Goal",
      raised: "Raised",
      donors: "Donors",
      daysLeft: "Days Left",
      status: "Status",
      actions: "Actions",
      edit: "Edit",
      view: "View",
      share: "Share",
      delete: "Delete",
      analytics: "Analytics",
      totalCampaigns: "Total Campaigns",
      totalRaised: "Total Raised",
      totalDonors: "Total Donors",
      avgDonation: "Average Donation",
      recentActivity: "Recent Activity",
      newDonation: "New donation",
      campaignViewed: "Campaign viewed",
      messageReceived: "Message received"
    },
    am: {
      myCampaigns: "የእኔ ዘመቻዎች",
      createNew: "አዲስ ዘመቻ ይፍጠሩ",
      active: "ንቁ",
      draft: "ረቂቅ",
      completed: "የተጠናቀቀ",
      suspended: "የተቋረጠ",
      noCampaigns: "ምንም ዘመቻዎች አልተገኙም",
      startFirst: "የመጀመሪያ ዘመቻዎን ይፍጠሩ",
      campaignTitle: "የዘመቻ ርዕስ",
      goal: "ግብ",
      raised: "የተሰበሰበ",
      donors: "ለጋሾች",
      daysLeft: "የቀሩ ቀናት",
      status: "ሁኔታ",
      actions: "እርምጃዎች",
      edit: "አርትዕ",
      view: "ይመልከቱ",
      share: "ያጋሩ",
      delete: "ሰርዝ",
      analytics: "ትንታኔ",
      totalCampaigns: "ጠቅላላ ዘመቻዎች",
      totalRaised: "ጠቅላላ የተሰበሰበ",
      totalDonors: "ጠቅላላ ለጋሾች",
      avgDonation: "አማካይ ልገሳ",
      recentActivity: "የቅርብ ጊዜ እንቅስቃሴ",
      newDonation: "አዲስ ልገሳ",
      campaignViewed: "ዘመቻ ታይቷል",
      messageReceived: "መልዕክት ደርሷል"
    }
  };

  const t = (key) => translations[language][key];

  // Mock data - replace with actual API calls
  useEffect(() => {
    const mockCampaigns = [
      {
        id: 1,
        title: "Help Build School Library",
        goal: 50000,
        raised: 32500,
        donors: 127,
        daysLeft: 15,
        status: "active",
        image: "/api/placeholder/300/200",
        category: "Education",
        createdAt: "2024-01-15"
      },
      {
        id: 2,
        title: "Medical Treatment Fund",
        goal: 25000,
        raised: 18750,
        donors: 89,
        daysLeft: 8,
        status: "active",
        image: "/api/placeholder/300/200",
        category: "Medical",
        createdAt: "2024-02-01"
      },
      {
        id: 3,
        title: "Community Water Well",
        goal: 75000,
        raised: 75000,
        donors: 203,
        daysLeft: 0,
        status: "completed",
        image: "/api/placeholder/300/200",
        category: "Community",
        createdAt: "2023-12-01"
      },
      {
        id: 4,
        title: "Emergency Relief Fund",
        goal: 30000,
        raised: 5200,
        donors: 23,
        daysLeft: 22,
        status: "draft",
        image: "/api/placeholder/300/200",
        category: "Emergency",
        createdAt: "2024-02-10"
      }
    ];

    setTimeout(() => {
      setCampaigns(mockCampaigns);
      setLoading(false);
    }, 1000);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'suspended': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressPercentage = (raised, goal) => {
    return Math.min((raised / goal) * 100, 100);
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    if (activeTab === 'all') return true;
    return campaign.status === activeTab;
  });

  const stats = {
    totalCampaigns: campaigns.length,
    totalRaised: campaigns.reduce((sum, campaign) => sum + campaign.raised, 0),
    totalDonors: campaigns.reduce((sum, campaign) => sum + campaign.donors, 0),
    avgDonation: campaigns.length > 0 ? 
      campaigns.reduce((sum, campaign) => sum + campaign.raised, 0) / 
      campaigns.reduce((sum, campaign) => sum + campaign.donors, 0) : 0
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-warm-beige via-gray-50 to-warm-gray">
        <AuthenticatedHeader language={language} setLanguage={setLanguage} />
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige via-gray-50 to-warm-gray">
      <AuthenticatedHeader language={language} setLanguage={setLanguage} />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Page Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-700 to-orange-500 text-transparent bg-clip-text">
                📋 {t('myCampaigns')}
              </h1>
              <p className="text-gray-600 mt-2">Manage and track your fundraising campaigns</p>
            </div>
            <Link 
              to="/create-campaign"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              + {t('createNew')}
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{t('totalCampaigns')}</p>
                  <p className="text-2xl font-bold text-gray-800">{stats.totalCampaigns}</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{t('totalRaised')}</p>
                  <p className="text-2xl font-bold text-green-600">${stats.totalRaised.toLocaleString()}</p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{t('totalDonors')}</p>
                  <p className="text-2xl font-bold text-orange-600">{stats.totalDonors}</p>
                </div>
                <div className="bg-orange-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{t('avgDonation')}</p>
                  <p className="text-2xl font-bold text-purple-600">${stats.avgDonation.toFixed(0)}</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 mb-6">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8 px-6">
                {['active', 'draft', 'completed', 'suspended'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab
                        ? 'border-orange-500 text-orange-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {t(tab)} ({campaigns.filter(c => c.status === tab).length})
                  </button>
                ))}
              </nav>
            </div>

            {/* Campaigns List */}
            <div className="p-6">
              {filteredCampaigns.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredCampaigns.map((campaign) => (
                    <div key={campaign.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">{campaign.title}</h3>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                            {t(campaign.status)}
                          </span>
                        </div>
                        <div className="flex space-x-2">
                          <button className="text-gray-400 hover:text-gray-600">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>${campaign.raised.toLocaleString()} {t('raised')}</span>
                          <span>${campaign.goal.toLocaleString()} {t('goal')}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${getProgressPercentage(campaign.raised, campaign.goal)}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 text-center mb-4">
                        <div>
                          <p className="text-lg font-semibold text-gray-800">{campaign.donors}</p>
                          <p className="text-xs text-gray-600">{t('donors')}</p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold text-gray-800">{campaign.daysLeft}</p>
                          <p className="text-xs text-gray-600">{t('daysLeft')}</p>
                        </div>
                        <div>
                          <p className="text-lg font-semibold text-gray-800">{getProgressPercentage(campaign.raised, campaign.goal).toFixed(0)}%</p>
                          <p className="text-xs text-gray-600">Complete</p>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Link
                          to={`/campaign/${campaign.id}`}
                          className="flex-1 bg-orange-500 text-white text-center py-2 rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
                        >
                          {t('view')}
                        </Link>
                        <button className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium">
                          {t('edit')}
                        </button>
                        <button className="px-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium">
                          {t('share')}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{t('noCampaigns')}</h3>
                  <p className="text-gray-600 mb-4">{t('startFirst')}</p>
                  <Link
                    to="/create-campaign"
                    className="inline-block bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium"
                  >
                    {t('createNew')}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer language={language} setLanguage={setLanguage} />
    </div>
  );
};

export default MyCampaignsPage;
