import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthenticatedHeader from './AuthenticatedHeader';
import Footer from './Footer';

const MyDonationsPage = ({ language, setLanguage }) => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, active, completed

  // Mock data for user's donations
  useEffect(() => {
    const mockDonations = [
      {
        id: 1,
        campaignId: 1,
        campaignTitle: 'Emergency Surgery for Almaz',
        amount: 5000,
        date: '2025-07-10',
        status: 'completed',
        campaignImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        campaignStatus: 'active', // active, completed, cancelled
        totalRaised: 185000,
        goal: 250000
      },
      {
        id: 2,
        campaignId: 2,
        campaignTitle: 'School Fees for Orphaned Children',
        amount: 2500,
        date: '2025-07-08',
        status: 'completed',
        campaignImage: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        campaignStatus: 'active',
        totalRaised: 85000,
        goal: 150000
      },
      {
        id: 3,
        campaignId: 3,
        campaignTitle: 'Small Business Recovery',
        amount: 1500,
        date: '2025-07-05',
        status: 'completed',
        campaignImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        campaignStatus: 'active',
        totalRaised: 25000,
        goal: 75000
      },
      {
        id: 4,
        campaignId: 4,
        campaignTitle: 'Water Well for Rural Community',
        amount: 3000,
        date: '2025-07-01',
        status: 'completed',
        campaignImage: 'https://images.unsplash.com/photo-1594736797933-d0a87d95a1a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        campaignStatus: 'active',
        totalRaised: 35000,
        goal: 100000
      }
    ];
    
    setTimeout(() => {
      setDonations(mockDonations);
      setLoading(false);
    }, 1000);
  }, []);

  // Translations
  const translations = {
    en: {
      title: "My Donations",
      subtitle: "Track your contribution to meaningful causes",
      backToDashboard: "Back to Dashboard",
      makeDonation: "Make Another Donation",
      totalDonations: "Total Donations",
      totalAmount: "Total Amount",
      activeCampaigns: "Active Campaigns",
      completedDonations: "Completed Donations",
      allDonations: "All Donations",
      active: "Active",
      completed: "Completed",
      amount: "Amount",
      date: "Date",
      campaign: "Campaign",
      status: "Status",
      viewCampaign: "View Campaign",
      donateAgain: "Donate Again",
      goal: "Goal",
      raised: "Raised",
      progress: "Progress",
      noDonations: "No donations found",
      noDonationsDesc: "You haven't made any donations yet. Start supporting meaningful causes today!",
      logo: "HopeConnect"
    },
    am: {
      title: "የእኔ ልገሳዎች",
      subtitle: "ለትርጉም ያላቸው ዓላማዎች የእርስዎን አስተዋፅኦ ይከታተሉ",
      backToDashboard: "ወደ ዳሽቦርድ መመለስ",
      makeDonation: "ሌላ ልገሳ ያድርጉ",
      totalDonations: "ጠቅላላ ልገሳዎች",
      totalAmount: "ጠቅላላ መጠን",
      activeCampaigns: "ንቁ ዘመቻዎች",
      completedDonations: "የተጠናቀቁ ልገሳዎች",
      allDonations: "ሁሉም ልገሳዎች",
      active: "ንቁ",
      completed: "ተጠናቅቋል",
      amount: "መጠን",
      date: "ቀን",
      campaign: "ዘመቻ",
      status: "ሁኔታ",
      viewCampaign: "ዘመቻውን ይመልከቱ",
      donateAgain: "እንደገና ይለግሱ",
      goal: "ግብ",
      raised: "ተሰብስቧል",
      progress: "እድገት",
      noDonations: "ምንም ልገሳዎች አልተገኙም",
      noDonationsDesc: "እስካሁን ምንም ልገሳ አላደረጉም። ዛሬ ትርጉም ያላቸውን ዓላማዎች መደገፍ ይጀምሩ!",
      logo: "HopeConnect"
    }
  };

  const t = (key) => translations[language][key];

  const filteredDonations = donations.filter(donation => {
    if (filter === 'all') return true;
    if (filter === 'active') return donation.campaignStatus === 'active';
    if (filter === 'completed') return donation.campaignStatus === 'completed';
    return true;
  });

  const totalDonated = donations.reduce((sum, donation) => sum + donation.amount, 0);
  const activeCampaigns = donations.filter(d => d.campaignStatus === 'active').length;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-ET', {
      style: 'currency',
      currency: 'ETB',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString(language === 'en' ? 'en-US' : 'am-ET', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getProgressPercentage = (raised, goal) => {
    return Math.min((raised / goal) * 100, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige via-gray-50 to-warm-gray">
      {/* Header */}
      <AuthenticatedHeader language={language} setLanguage={setLanguage} user={null} />

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{t('totalDonations')}</p>
                <p className="text-2xl font-bold text-gray-700">{donations.length}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{t('totalAmount')}</p>
                <p className="text-2xl font-bold text-green-600">{formatCurrency(totalDonated)}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.51-1.31c-.562-.649-1.413-1.076-2.353-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{t('activeCampaigns')}</p>
                <p className="text-2xl font-bold text-orange-500">{activeCampaigns}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mb-8">
          <Link 
            to="/campaigns"
            className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            {t('makeDonation')}
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-gray-200 mb-8 inline-flex">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              filter === 'all'
                ? 'bg-orange-500 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {t('allDonations')}
          </button>
          <button
            onClick={() => setFilter('active')}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              filter === 'active'
                ? 'bg-orange-500 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {t('active')}
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              filter === 'completed'
                ? 'bg-orange-500 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {t('completed')}
          </button>
        </div>

        {/* Donations List */}
        {loading ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin mx-auto"></div>
            <p className="text-gray-600 mt-4">Loading your donations...</p>
          </div>
        ) : filteredDonations.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">{t('noDonations')}</h3>
            <p className="text-gray-600 mb-6">{t('noDonationsDesc')}</p>
            <Link 
              to="/campaigns"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              {t('makeDonation')}
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredDonations.map(donation => (
              <div key={donation.id} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover-scale transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={donation.campaignImage} 
                      alt={donation.campaignTitle}
                      className="w-20 h-20 rounded-xl object-cover"
                    />
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-gray-800 line-clamp-1">
                          {donation.campaignTitle}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          donation.campaignStatus === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {t(donation.campaignStatus)}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">{t('amount')}</p>
                          <p className="text-lg font-bold text-orange-500">{formatCurrency(donation.amount)}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">{t('date')}</p>
                          <p className="text-sm text-gray-800">{formatDate(donation.date)}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">{t('progress')}</p>
                          <p className="text-sm text-gray-800">
                            {getProgressPercentage(donation.totalRaised, donation.goal).toFixed(0)}% ({formatCurrency(donation.totalRaised)} / {formatCurrency(donation.goal)})
                          </p>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                        <div 
                          className="bg-gradient-to-r from-orange-400 to-orange-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${getProgressPercentage(donation.totalRaised, donation.goal)}%` }}
                        ></div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-3">
                        <Link 
                          to={`/campaign/${donation.campaignId}`}
                          className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 text-sm"
                        >
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                          </svg>
                          {t('viewCampaign')}
                        </Link>
                        {donation.campaignStatus === 'active' && (
                          <Link 
                            to={`/campaign/${donation.campaignId}/donate`}
                            className="flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 text-sm"
                          >
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                            {t('donateAgain')}
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Footer */}
      <Footer language={language} />
    </div>
  );
};

export default MyDonationsPage;
