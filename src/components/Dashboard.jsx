import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthenticatedHeader from './AuthenticatedHeader';
import Footer from './Footer';

const Dashboard = ({ language, setLanguage }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ type: 'donor', name: 'John Doe', verified: true });
  const [campaigns, setCampaigns] = useState([]);
  const [filters, setFilters] = useState({
    category: 'all',
    severity: 'all',
    search: ''
  });
  const [loading, setLoading] = useState(true);

  // Mock data for campaigns
  useEffect(() => {
    const mockCampaigns = [
      {
        id: 1,
        title: 'Emergency Surgery for Almaz',
        description: 'Almaz needs urgent heart surgery. She is a mother of three...',
        goal: 250000,
        raised: 185000,
        severity: 5,
        category: 'medical',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        seeker: 'Almaz Tesfaye',
        deadline: '2025-08-15',
        verified: true,
        urgent: true
      },
      {
        id: 2,
        title: 'School Fees for Orphaned Children',
        description: 'Help 50 orphaned children continue their education...',
        goal: 150000,
        raised: 85000,
        severity: 4,
        category: 'education',
        image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        seeker: 'Hope Orphanage',
        deadline: '2025-09-01',
        verified: true,
        urgent: false
      },
      {
        id: 3,
        title: 'Small Business Recovery',
        description: 'Lost my shop due to flooding. Need help to restart...',
        goal: 75000,
        raised: 25000,
        severity: 3,
        category: 'business',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        seeker: 'Bekele Mamo',
        deadline: '2025-10-01',
        verified: true,
        urgent: false
      }
    ];
    
    setTimeout(() => {
      setCampaigns(mockCampaigns);
      setLoading(false);
    }, 1000);
  }, []);

  // Translations
  const translations = {
    en: {
      welcome: "Welcome back",
      dashboard: "Dashboard",
      createCampaign: "Create Campaign",
      browseCampaigns: "Browse Campaigns",
      myCampaigns: "My Campaigns",
      myDonations: "My Donations",
      messages: "Messages",
      profile: "Profile",
      logout: "Logout",
      
      // Filters
      allCategories: "All Categories",
      medical: "Medical",
      education: "Education",
      business: "Business",
      emergency: "Emergency",
      allSeverity: "All Urgency",
      severity1: "Low",
      severity2: "Moderate", 
      severity3: "High",
      severity4: "Very High",
      severity5: "Critical",
      searchPlaceholder: "Search campaigns...",
      
      // Campaign cards
      goal: "Goal",
      raised: "Raised",
      daysLeft: "days left",
      urgent: "URGENT",
      verified: "Verified",
      donate: "Donate",
      viewDetails: "View Details",
      rate: "Rate Urgency",
      share: "Share",
      report: "Report",
      
      // Stats
      totalCampaigns: "Total Campaigns",
      totalRaised: "Total Raised",
      activeDonors: "Active Donors",
      successRate: "Success Rate",
      
      // Quick actions
      quickActions: "Quick Actions",
      startCampaign: "Start a Campaign",
      makeDonation: "Make a Donation",
      browseDonate: "Browse & Donate",
      getVerified: "Get Verified",
      
      // Trending
      trending: "Trending Campaigns",
      mostUrgent: "Most Urgent",
      almostFunded: "Almost Funded",
      
      logo: "HopeConnect"
    },
    am: {
      welcome: "እንኳን ደህና መጡ",
      dashboard: "የመቆጣጠሪያ ሰሌዳ",
      createCampaign: "ዘመቻ ፍጠር",
      browseCampaigns: "ዘመቻዎችን ያስሱ",
      myCampaigns: "የእኔ ዘመቻዎች",
      myDonations: "የእኔ ልገሳዎች",
      messages: "መልዕክቶች",
      profile: "መገለጫ",
      logout: "ውጣ",
      
      // Filters
      allCategories: "ሁሉም ምድቦች",
      medical: "ሕክምና",
      education: "ትምህርት",
      business: "ንግድ",
      emergency: "አጣዳፊ",
      allSeverity: "ሁሉም አስቸኳይነት",
      severity1: "ዝቅተኛ",
      severity2: "መካከለኛ",
      severity3: "ከፍተኛ", 
      severity4: "በጣም ከፍተኛ",
      severity5: "ወሳኝ",
      searchPlaceholder: "ዘመቻዎችን ይፈልጉ...",
      
      // Campaign cards
      goal: "ግብ",
      raised: "ተሰብስቧል",
      daysLeft: "ቀናት ቀርተዋል",
      urgent: "አጣዳፊ",
      verified: "የተረጋገጠ",
      donate: "ልገስ",
      viewDetails: "ዝርዝሮችን ይመልከቱ",
      rate: "አስቸኳይነት ደረጃ ይስጡ",
      share: "አጋራ",
      report: "ሪፖርት ያድርጉ",
      
      // Stats
      totalCampaigns: "ጠቅላላ ዘመቻዎች",
      totalRaised: "ጠቅላላ የተሰበሰበ",
      activeDonors: "ንቁ ለጋሾች",
      successRate: "የስኬት መጠን",
      
      // Quick actions
      quickActions: "ፈጣን እርምጃዎች",
      startCampaign: "ዘመቻ ጀምር",
      makeDonation: "ልገሳ አድርግ",
      browseDonate: "ዝርዝር ይመልከቱ እና ይለግሱ",
      getVerified: "ማረጋገጫ ያግኙ",
      
      // Trending
      trending: "ትሬንዲንግ ዘመቻዎች",
      mostUrgent: "በጣም አስቸኳይ",
      almostFunded: "ሙሉ በሙሉ ገንዘብ ያገኘ",
      
      logo: "HopeConnect"
    }
  };

  const t = (key) => translations[language][key];

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesCategory = filters.category === 'all' || campaign.category === filters.category;
    const matchesSeverity = filters.severity === 'all' || campaign.severity === parseInt(filters.severity);
    const matchesSearch = campaign.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                         campaign.description.toLowerCase().includes(filters.search.toLowerCase());
    
    return matchesCategory && matchesSeverity && matchesSearch;
  });

  const getProgressPercentage = (raised, goal) => {
    return Math.min((raised / goal) * 100, 100);
  };

  const getDaysLeft = (deadline) => {
    const today = new Date();
    const end = new Date(deadline);
    const diffTime = end - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(diffDays, 0);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-ET', {
      style: 'currency',
      currency: 'ETB',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige via-gray-50 to-warm-gray">
      {/* Header */}
      <AuthenticatedHeader language={language} setLanguage={setLanguage} user={user} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-gray-700 to-orange-500 text-transparent bg-clip-text">
            {t('welcome')}, {user.name}!
          </h1>
          <p className="text-warm-gray text-lg">
            {language === 'en' 
              ? 'Ready to make a difference in Ethiopian communities today?'
              : 'ዛሬ በኢትዮጵያ ማህበረሰቦች ላይ ለውጥ ለማምጣት ዝግጁ ነዎት?'
            }
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 hover-scale">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{t('totalCampaigns')}</p>
                <p className="text-2xl font-bold text-gray-700">1,234</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 hover-scale">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{t('totalRaised')}</p>
                <p className="text-2xl font-bold text-orange-500">₦2.5M</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 hover-scale">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{t('activeDonors')}</p>
                <p className="text-2xl font-bold text-blue-500">856</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 hover-scale">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{t('successRate')}</p>
                <p className="text-2xl font-bold text-green-500">87%</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-700">{t('quickActions')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/create-campaign" className="p-6 bg-gradient-to-r from-gray-600 to-orange-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover-scale text-center group">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mb-3 mx-auto group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="font-medium">{t('startCampaign')}</div>
            </Link>
            
            <Link to="/campaigns" className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover-scale text-center group">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mb-3 mx-auto group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="font-medium">{t('browseDonate')}</div>
            </Link>
            
            <Link to="/verification" className="p-6 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover-scale text-center group">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mb-3 mx-auto group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="font-medium">{t('getVerified')}</div>
            </Link>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select 
                value={filters.category}
                onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              >
                <option value="all">{t('allCategories')}</option>
                <option value="medical">{t('medical')}</option>
                <option value="education">{t('education')}</option>
                <option value="business">{t('business')}</option>
                <option value="emergency">{t('emergency')}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Urgency</label>
              <select 
                value={filters.severity}
                onChange={(e) => setFilters(prev => ({ ...prev, severity: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              >
                <option value="all">{t('allSeverity')}</option>
                <option value="1">{t('severity1')}</option>
                <option value="2">{t('severity2')}</option>
                <option value="3">{t('severity3')}</option>
                <option value="4">{t('severity4')}</option>
                <option value="5">{t('severity5')}</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input
                type="text"
                value={filters.search}
                onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                placeholder={t('searchPlaceholder')}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            // Loading skeletons
            [...Array(6)].map((_, i) => (
              <div key={i} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-300"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded mb-4 w-3/4"></div>
                  <div className="h-2 bg-gray-300 rounded mb-4"></div>
                  <div className="h-8 bg-gray-300 rounded"></div>
                </div>
              </div>
            ))
          ) : (
            filteredCampaigns.map(campaign => (
              <div key={campaign.id} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover-scale">
                {/* Campaign Image */}
                <div className="relative">
                  <img 
                    src={campaign.image} 
                    alt={campaign.title}
                    className="w-full h-48 object-cover"
                  />
                  {campaign.urgent && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                      {t('urgent')}
                    </div>
                  )}
                  {campaign.verified && (
                    <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      {t('verified')} ✓
                    </div>
                  )}
                  {/* Severity indicator */}
                  <div className="absolute bottom-3 right-3 flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < campaign.severity ? 'bg-red-500' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Campaign Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                    {campaign.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {campaign.description}
                  </p>

                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>{t('raised')}: {formatCurrency(campaign.raised)}</span>
                      <span>{getProgressPercentage(campaign.raised, campaign.goal).toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-orange-400 to-orange-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${getProgressPercentage(campaign.raised, campaign.goal)}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>{t('goal')}: {formatCurrency(campaign.goal)}</span>
                      <span>{getDaysLeft(campaign.deadline)} {t('daysLeft')}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <Link 
                      to={`/campaign/${campaign.id}/donate`}
                      className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:from-orange-500 hover:to-orange-600 transition-all duration-300 text-center text-sm flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      {t('donate')}
                    </Link>
                    <Link 
                      to={`/campaign/${campaign.id}`}
                      className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 text-center text-sm flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      {t('viewDetails')}
                    </Link>
                  </div>

                  {/* Secondary Actions */}
                  <div className="flex justify-between mt-3 text-xs">
                    <button className="text-blue-500 hover:text-blue-600 transition-colors flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {t('rate')}
                    </button>
                    <button className="text-green-500 hover:text-green-600 transition-colors flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                      {t('share')}
                    </button>
                    <button className="text-red-500 hover:text-red-600 transition-colors flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {t('report')}
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Empty State */}
        {!loading && filteredCampaigns.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              {language === 'en' ? 'No campaigns found' : 'ምንም ዘመቻዎች አልተገኙም'}
            </h3>
            <p className="text-gray-600">
              {language === 'en' 
                ? 'Try adjusting your filters or search terms.'
                : 'ማጣሪያዎችዎን ወይም የፍለጋ ቃላትዎን ማስተካከል ይሞክሩ።'
              }
            </p>
          </div>
        )}
      </div>
      
      {/* Footer */}
      <Footer language={language} />
    </div>
  );
};

export default Dashboard;
