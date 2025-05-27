import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PublicHeader from './PublicHeader';
import Footer from './Footer';

const CampaignsPage = ({ language, setLanguage }) => {
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
      },
      {
        id: 4,
        title: 'Water Well for Rural Community',
        description: 'Building a clean water well for 200 families in rural Ethiopia...',
        goal: 100000,
        raised: 35000,
        severity: 3,
        category: 'community',
        image: 'https://images.unsplash.com/photo-1594736797933-d0a87d95a1a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        seeker: 'Rural Development NGO',
        deadline: '2025-11-15',
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
      title: "Browse Campaigns",
      subtitle: "Discover meaningful campaigns and make a difference",
      backToDashboard: "Back to Dashboard",
      allCategories: "All Categories",
      medical: "Medical",
      education: "Education",
      business: "Business",
      community: "Community",
      emergency: "Emergency",
      allSeverity: "All Urgency",
      severity1: "Low",
      severity2: "Moderate", 
      severity3: "High",
      severity4: "Very High",
      severity5: "Critical",
      searchPlaceholder: "Search campaigns...",
      goal: "Goal",
      raised: "Raised",
      daysLeft: "days left",
      urgent: "URGENT",
      verified: "Verified",
      donate: "Donate",
      viewDetails: "View Details",
      share: "Share",
      totalCampaigns: "Total Campaigns",
      activeCampaigns: "Active Campaigns",
      logo: "HopeConnect"
    },
    am: {
      title: "ዘመቻዎችን ያስሱ",
      subtitle: "ትርጉም ያላቸውን ዘመቻዎች ያግኙ እና ለውጥ ያምጡ",
      backToDashboard: "ወደ ዳሽቦርድ መመለስ",
      allCategories: "ሁሉም ምድቦች",
      medical: "ሕክምና",
      education: "ትምህርት",
      business: "ንግድ",
      community: "ማህበረሰብ",
      emergency: "አጣዳፊ",
      allSeverity: "ሁሉም አስቸኳይነት",
      severity1: "ዝቅተኛ",
      severity2: "መካከለኛ",
      severity3: "ከፍተኛ", 
      severity4: "በጣም ከፍተኛ",
      severity5: "ወሳኝ",
      searchPlaceholder: "ዘመቻዎችን ይፈልጉ...",
      goal: "ግብ",
      raised: "ተሰብስቧል",
      daysLeft: "ቀናት ቀርተዋል",
      urgent: "አጣዳፊ",
      verified: "የተረጋገጠ",
      donate: "ልገስ",
      viewDetails: "ዝርዝሮችን ይመልከቱ",
      share: "አጋራ",
      totalCampaigns: "ጠቅላላ ዘመቻዎች",
      activeCampaigns: "ንቁ ዘመቻዎች",
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
      <PublicHeader language={language} setLanguage={setLanguage} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-gray-700 to-orange-500 text-transparent bg-clip-text">
            {t('title')}
          </h1>
          <p className="text-warm-gray text-lg">
            {t('subtitle')}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{t('totalCampaigns')}</p>
                <p className="text-2xl font-bold text-gray-700">{campaigns.length}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{t('activeCampaigns')}</p>
                <p className="text-2xl font-bold text-orange-500">{filteredCampaigns.length}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={filters.search}
                onChange={(e) => setFilters({...filters, search: e.target.value})}
              />
            </div>

            {/* Category Filter */}
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              value={filters.category}
              onChange={(e) => setFilters({...filters, category: e.target.value})}
            >
              <option value="all">{t('allCategories')}</option>
              <option value="medical">{t('medical')}</option>
              <option value="education">{t('education')}</option>
              <option value="business">{t('business')}</option>
              <option value="community">{t('community')}</option>
              <option value="emergency">{t('emergency')}</option>
            </select>

            {/* Severity Filter */}
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              value={filters.severity}
              onChange={(e) => setFilters({...filters, severity: e.target.value})}
            >
              <option value="all">{t('allSeverity')}</option>
              <option value="1">{t('severity1')}</option>
              <option value="2">{t('severity2')}</option>
              <option value="3">{t('severity3')}</option>
              <option value="4">{t('severity4')}</option>
              <option value="5">{t('severity5')}</option>
            </select>
          </div>
        </div>

        {/* Campaign Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCampaigns.map(campaign => (
            <div key={campaign.id} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover-scale transition-all duration-300">
              {/* Campaign Image */}
              <div className="relative h-48">
                <img 
                  src={campaign.image} 
                  alt={campaign.title}
                  className="w-full h-full object-cover"
                />
                {campaign.urgent && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    {t('urgent')}
                  </div>
                )}
                {campaign.verified && (
                  <div className="absolute top-3 right-3 bg-green-500 text-white p-1 rounded-full">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
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
              </div>
            </div>
          ))}
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

export default CampaignsPage;
