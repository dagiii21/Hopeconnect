import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const CampaignDetails = ({ language, setLanguage }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [updates, setUpdates] = useState([]);

  const translations = {
    en: {
      campaignDetails: "Campaign Details",
      backToDashboard: "Back to Dashboard",
      verified: "Verified",
      urgent: "URGENT",
      goal: "Goal",
      raised: "Raised",
      donors: "Donors",
      daysLeft: "Days Left",
      donate: "Donate Now",
      chat: "Chat with Seeker",
      share: "Share Campaign",
      report: "Report",
      rate: "Rate Urgency",
      
      // Campaign info
      campaignStory: "Campaign Story",
      campaignUpdates: "Campaign Updates",
      documents: "Supporting Documents",
      budgetBreakdown: "Budget Breakdown",
      organizer: "Organizer",
      category: "Category",
      created: "Created",
      
      // Rating
      rateUrgency: "Rate Campaign Urgency",
      urgencyLevel: "How urgent is this campaign?",
      severity1: "1 - Low Priority",
      severity2: "2 - Moderate",
      severity3: "3 - High Priority",
      severity4: "4 - Very Urgent",
      severity5: "5 - Critical/Life-threatening",
      submitRating: "Submit Rating",
      
      // Report
      reportCampaign: "Report Campaign",
      reportReason: "Reason for reporting",
      scam: "Suspicious/Scam",
      inappropriate: "Inappropriate Content",
      misleading: "Misleading Information",
      duplicate: "Duplicate Campaign",
      other: "Other",
      reportDetails: "Additional Details",
      submitReport: "Submit Report",
      
      // Share
      shareText: "Help support this cause",
      copyLink: "Copy Link",
      linkCopied: "Link copied!",
      
      // Categories
      medical: "Medical",
      education: "Education", 
      business: "Business",
      emergency: "Emergency",
      
      logo: "HopeConnect"
    },
    am: {
      campaignDetails: "የዘመቻ ዝርዝሮች",
      backToDashboard: "ወደ ዳሽቦርድ መመለስ",
      verified: "የተረጋገጠ",
      urgent: "አጣዳፊ",
      goal: "ግብ",
      raised: "ተሰብስቧል",
      donors: "ለጋሾች",
      daysLeft: "ቀናት ቀርተዋል",
      donate: "አሁን ልገስ",
      chat: "ከጠያቂ ጋር ይወያዩ",
      share: "ዘመቻ አጋራ",
      report: "ሪፖርት",
      rate: "አስቸኳይነት ደረጃ ይስጡ",
      
      // Campaign info
      campaignStory: "የዘመቻ ታሪክ",
      campaignUpdates: "የዘመቻ ዝመናዎች",
      documents: "ድጋፍ ሰነዶች",
      budgetBreakdown: "የበጀት ክፍፍል",
      organizer: "አደራጅ",
      category: "ምድብ",
      created: "ተፈጥሯል",
      
      // Rating
      rateUrgency: "የዘመቻ አስቸኳይነት ደረጃ ይስጡ",
      urgencyLevel: "ይህ ዘመቻ ምን ያህል አስቸኳይ ነው?",
      severity1: "1 - ዝቅተኛ ቅድሚያ",
      severity2: "2 - መካከለኛ",
      severity3: "3 - ከፍተኛ ቅድሚያ",
      severity4: "4 - በጣም አስቸኳይ",
      severity5: "5 - ወሳኝ/የህይወት አደጋ",
      submitRating: "ደረጃ አስገባ",
      
      // Report
      reportCampaign: "ዘመቻ ሪፖርት ያድርጉ",
      reportReason: "የሪፖርት ምክንያት",
      scam: "አጠራጣሪ/ማጭበርበር",
      inappropriate: "ተስማሚ ያልሆነ ይዘት",
      misleading: "አሳሳች መረጃ",
      duplicate: "ተደጋሚ ዘመቻ",
      other: "ሌላ",
      reportDetails: "ተጨማሪ ዝርዝሮች",
      submitReport: "ሪፖርት አስገባ",
      
      // Share
      shareText: "ይህንን ጉዳይ ለመደገፍ ይረዱ",
      copyLink: "ሊንክ ቅዳ",
      linkCopied: "ሊንክ ተቀድቷል!",
      
      // Categories
      medical: "ሕክምና",
      education: "ትምህርት",
      business: "ንግድ",
      emergency: "አጣዳፊ",
      
      logo: "HopeConnect"
    }
  };

  const t = (key) => translations[language][key];

  useEffect(() => {
    // Mock campaign data fetch
    const mockCampaign = {
      id: parseInt(id),
      title: 'Emergency Surgery for Almaz',
      description: `Almaz Tesfaye is a 45-year-old mother of three beautiful children living in Addis Ababa. She has been the sole breadwinner for her family since her husband passed away two years ago from complications related to diabetes.

Three weeks ago, Almaz began experiencing severe chest pains and shortness of breath. After multiple doctor visits and tests, she was diagnosed with a critical heart condition that requires immediate surgical intervention. The doctors have informed us that without this surgery within the next month, her condition will become life-threatening.

The total cost of the surgery, including hospital fees, medication, and post-operative care, amounts to 250,000 Ethiopian Birr. As a single mother working as a small shop owner, Almaz has been unable to save enough money for this expensive procedure. She has already sold most of her valuable possessions and borrowed money from friends and relatives, but it's still not enough.

Almaz is a pillar of her community. She has always been the first to help others in need, organizing community events and providing support to families in crisis. Now, it's our turn to help her and her children during this difficult time.

Your donation, no matter how small, will make a significant difference in saving Almaz's life and keeping her family together. Every contribution brings us closer to our goal and gives hope to a mother who has dedicated her life to caring for others.

Please join us in supporting Almaz's journey to recovery. Together, we can ensure that she receives the medical care she desperately needs and continues to be there for her children.`,
      goal: 250000,
      raised: 185000,
      donorCount: 156,
      severity: 4.8,
      category: 'medical',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      organizer: {
        name: 'Almaz Tesfaye',
        verified: true,
        profileImage: 'https://images.unsplash.com/photo-1494790108755-2616b612c0bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
        joinDate: '2024-01-15'
      },
      deadline: '2025-08-15',
      created: '2025-07-01',
      verified: true,
      urgent: true,
      documents: [
        { name: 'Medical Report.pdf', size: '2.3 MB' },
        { name: 'Hospital Estimate.pdf', size: '1.1 MB' },
        { name: 'Doctor Recommendation.pdf', size: '0.8 MB' }
      ],
      budgetBreakdown: `Surgery Cost: 180,000 ETB (72%)
Hospital Stay (5 days): 35,000 ETB (14%)
Medications & Post-op Care: 20,000 ETB (8%)
Laboratory Tests: 10,000 ETB (4%)
Emergency Fund: 5,000 ETB (2%)

Total: 250,000 ETB`,
      updates: [
        {
          id: 1,
          date: '2025-07-10',
          title: 'Surgery Date Confirmed',
          content: 'Great news! The hospital has confirmed August 15th as the surgery date. We are 74% funded and getting closer to our goal. Thank you to everyone who has donated so far.'
        },
        {
          id: 2,
          date: '2025-07-05',
          title: 'Additional Medical Tests Completed',
          content: 'Almaz completed additional cardiac tests this week. The doctors confirm that the surgery is urgently needed and the procedure has a high success rate.'
        }
      ]
    };

    setTimeout(() => {
      setCampaign(mockCampaign);
      setUpdates(mockCampaign.updates);
      setLoading(false);
    }, 1000);
  }, [id]);

  const getProgressPercentage = () => {
    if (!campaign) return 0;
    return Math.min((campaign.raised / campaign.goal) * 100, 100);
  };

  const getDaysLeft = () => {
    if (!campaign) return 0;
    const today = new Date();
    const end = new Date(campaign.deadline);
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

  const handleShare = async () => {
    const shareData = {
      title: campaign.title,
      text: t('shareText'),
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert(t('linkCopied'));
    });
  };

  const handleRating = () => {
    setShowRatingModal(false);
    alert(`Thank you for rating this campaign ${userRating}/5 stars!`);
  };

  const handleReport = () => {
    setShowReportModal(false);
    alert('Thank you for your report. We will review it within 48 hours.');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-warm-beige via-gray-50 to-warm-gray flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading campaign details...</p>
        </div>
      </div>
    );
  }

  if (!campaign) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-warm-beige via-gray-50 to-warm-gray flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">❌</div>
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Campaign Not Found</h2>
          <p className="text-gray-600 mb-4">The campaign you're looking for doesn't exist.</p>
          <Link to="/dashboard" className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige via-gray-50 to-warm-gray">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 shadow-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-white font-bold text-2xl animate-float">
              <span className="mr-2 text-3xl">🤝</span>
              {t('logo')}
            </Link>

            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setLanguage(language === 'en' ? 'am' : 'en')} 
                className="bg-white/10 text-white px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-colors"
              >
                {language === 'en' ? '🇪🇹 አማርኛ' : '🇺🇸 English'}
              </button>
              
              <Link to="/dashboard" className="text-white hover:text-orange-200 transition-colors">
                ← {t('backToDashboard')}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Campaign Header */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden mb-8">
            <div className="relative">
              <img 
                src={campaign.image} 
                alt={campaign.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              
              {/* Overlay badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {campaign.urgent && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    {t('urgent')}
                  </span>
                )}
                {campaign.verified && (
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {t('verified')} ✓
                  </span>
                )}
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm capitalize">
                  {t(campaign.category)}
                </span>
              </div>

              {/* Severity rating */}
              <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                Urgency: {campaign.severity.toFixed(1)}/5 ⭐
              </div>
            </div>

            <div className="p-6">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {campaign.title}
              </h1>

              {/* Progress Section */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-2xl font-bold text-orange-500">
                    {formatCurrency(campaign.raised)}
                  </span>
                  <span className="text-lg text-gray-600">
                    {getProgressPercentage().toFixed(0)}% funded
                  </span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                  <div 
                    className="bg-gradient-to-r from-orange-400 to-orange-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${getProgressPercentage()}%` }}
                  ></div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-semibold text-gray-700">{formatCurrency(campaign.goal)}</div>
                    <div className="text-sm text-gray-600">{t('goal')}</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-700">{campaign.donorCount}</div>
                    <div className="text-sm text-gray-600">{t('donors')}</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-700">{getDaysLeft()}</div>
                    <div className="text-sm text-gray-600">{t('daysLeft')}</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <Link 
                  to={`/campaign/${campaign.id}/donate`}
                  className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:from-orange-500 hover:to-orange-600 transition-all duration-300 text-center"
                >
                  💝 {t('donate')}
                </Link>
                
                <Link 
                  to={`/chat/${campaign.organizer.name}`}
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors text-center"
                >
                  💬 {t('chat')}
                </Link>
                
                <button 
                  onClick={handleShare}
                  className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
                >
                  📤 {t('share')}
                </button>
                
                <button 
                  onClick={() => setShowRatingModal(true)}
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  ⭐ {t('rate')}
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Campaign Story */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">{t('campaignStory')}</h2>
                <div className="prose max-w-none text-gray-700 whitespace-pre-line">
                  {campaign.description}
                </div>
              </div>

              {/* Campaign Images */}
              {campaign.images && campaign.images.length > 1 && (
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Campaign Images</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {campaign.images.slice(1).map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Campaign image ${index + 2}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Budget Breakdown */}
              {campaign.budgetBreakdown && (
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">{t('budgetBreakdown')}</h2>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <pre className="text-gray-700 whitespace-pre-line font-mono text-sm">
                      {campaign.budgetBreakdown}
                    </pre>
                  </div>
                </div>
              )}

              {/* Campaign Updates */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">{t('campaignUpdates')}</h2>
                {updates.length > 0 ? (
                  <div className="space-y-4">
                    {updates.map(update => (
                      <div key={update.id} className="border-l-4 border-orange-500 pl-4 py-2">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-800">{update.title}</h3>
                          <span className="text-sm text-gray-500">{update.date}</span>
                        </div>
                        <p className="text-gray-700">{update.content}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 text-center py-8">No updates yet.</p>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Organizer Info */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">{t('organizer')}</h3>
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={campaign.organizer.profileImage}
                    alt={campaign.organizer.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-800 flex items-center">
                      {campaign.organizer.name}
                      {campaign.organizer.verified && (
                        <span className="ml-2 text-green-500">✓</span>
                      )}
                    </div>
                    <div className="text-sm text-gray-600">
                      Joined {new Date(campaign.organizer.joinDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('category')}:</span>
                    <span className="capitalize">{t(campaign.category)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{t('created')}:</span>
                    <span>{new Date(campaign.created).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>

              {/* Supporting Documents */}
              {campaign.documents && campaign.documents.length > 0 && (
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">{t('documents')}</h3>
                  <div className="space-y-3">
                    {campaign.documents.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">📄</div>
                          <div>
                            <div className="font-medium text-sm">{doc.name}</div>
                            <div className="text-xs text-gray-500">{doc.size}</div>
                          </div>
                        </div>
                        <button className="text-blue-500 hover:text-blue-600 text-sm">
                          View
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Actions */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button 
                    onClick={() => setShowReportModal(true)}
                    className="w-full p-3 text-left bg-red-50 hover:bg-red-100 rounded-lg border border-red-200 text-red-700 transition-colors"
                  >
                    🚨 {t('report')}
                  </button>
                  
                  <button 
                    onClick={handleShare}
                    className="w-full p-3 text-left bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 text-green-700 transition-colors"
                  >
                    📤 Share on Social Media
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rating Modal */}
      {showRatingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">{t('rateUrgency')}</h3>
            <p className="text-gray-600 mb-6">{t('urgencyLevel')}</p>
            
            <div className="space-y-3 mb-6">
              {[1, 2, 3, 4, 5].map(rating => (
                <label key={rating} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    value={rating}
                    checked={userRating === rating}
                    onChange={(e) => setUserRating(parseInt(e.target.value))}
                    className="text-orange-500"
                  />
                  <span>{t(`severity${rating}`)}</span>
                </label>
              ))}
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={() => setShowRatingModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleRating}
                disabled={userRating === 0}
                className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors disabled:bg-gray-300"
              >
                {t('submitRating')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Report Modal */}
      {showReportModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">{t('reportCampaign')}</h3>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">{t('reportReason')}</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg">
                  <option value="scam">{t('scam')}</option>
                  <option value="inappropriate">{t('inappropriate')}</option>
                  <option value="misleading">{t('misleading')}</option>
                  <option value="duplicate">{t('duplicate')}</option>
                  <option value="other">{t('other')}</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">{t('reportDetails')}</label>
                <textarea
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Please provide additional details..."
                />
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={() => setShowReportModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleReport}
                className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                {t('submitReport')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampaignDetails;
