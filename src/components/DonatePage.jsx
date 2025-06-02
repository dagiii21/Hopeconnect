import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const DonatePage = ({ language, setLanguage }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [donationAmount, setDonationAmount] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('chapa');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const translations = {
    en: {
      donateToThis: "Donate to this Campaign",
      backToCampaign: "Back to Campaign",
      supportCause: "Support This Cause",
      donationAmount: "Donation Amount (ETB)",
      enterAmount: "Enter amount to donate",
      quickAmounts: "Quick Amounts",
      paymentMethod: "Payment Method",
      chapa: "Chapa (Mobile Money & Cards)",
      anonymous: "Make this donation anonymous",
      anonymousNote: "Your name will not be shown to the campaign organizer or other donors",
      
      // Amount suggestions
      amount50: "50 ETB",
      amount100: "100 ETB", 
      amount500: "500 ETB",
      amount1000: "1,000 ETB",
      amount5000: "5,000 ETB",
      customAmount: "Custom Amount",
      
      // Donation summary
      donationSummary: "Donation Summary",
      donationAmountLabel: "Donation Amount",
      platformFee: "Platform Fee (3%)",
      totalAmount: "Total Amount",
      
      // Form validation
      amountRequired: "Please enter a donation amount",
      minimumAmount: "Minimum donation is 10 ETB",
      maximumAmount: "Maximum donation is 100,000 ETB",
      
      // Payment
      proceedToPayment: "Proceed to Payment",
      processing: "Processing...",
      
      // Success
      donationSuccess: "Donation Successful!",
      thankYou: "Thank you for your generous donation!",
      receiptSent: "A receipt has been sent to your email",
      chatAvailable: "You can now chat with the campaign organizer",
      viewCampaign: "View Campaign",
      makeDonation: "Make Another Donation",
      
      // Error
      paymentFailed: "Payment Failed",
      tryAgain: "Please try again or contact support",
      
      logo: "HopeConnect"
    },
    am: {
      donateToThis: "ለዚህ ዘመቻ ልገሳ ያድርጉ",
      backToCampaign: "ወደ ዘመቻ መመለስ",
      supportCause: "ይህንን ጉዳይ ይደግፉ",
      donationAmount: "የልገሳ መጠን (ብር)",
      enterAmount: "ለመለገስ መጠን ያስገቡ",
      quickAmounts: "ፈጣን መጠኖች",
      paymentMethod: "የክፍያ ዘዴ",
      chapa: "ቻፓ (የሞባይል ገንዘብ እና ካርዶች)",
      anonymous: "ይህንን ልገሳ በማይታወቅ ሁኔታ ያድርጉት",
      anonymousNote: "ስምዎ ለዘመቻ አዘጋጁ ወይም ሌሎች ለጋሾች አይታይም",
      
      // Amount suggestions
      amount50: "50 ብር",
      amount100: "100 ብር",
      amount500: "500 ብር", 
      amount1000: "1,000 ብር",
      amount5000: "5,000 ብር",
      customAmount: "ብጁ መጠን",
      
      // Donation summary
      donationSummary: "የልገሳ ማጠቃለያ",
      donationAmountLabel: "የልገሳ መጠን",
      platformFee: "የመድረክ ክፍያ (3%)",
      totalAmount: "ጠቅላላ መጠን",
      
      // Form validation
      amountRequired: "እባክዎ የልገሳ መጠን ያስገቡ",
      minimumAmount: "ዝቅተኛ ልገሳ 10 ብር ነው",
      maximumAmount: "ከፍተኛ ልገሳ 100,000 ብር ነው",
      
      // Payment
      proceedToPayment: "ወደ ክፍያ ይቀጥሉ",
      processing: "በማካሄድ ላይ...",
      
      // Success
      donationSuccess: "ልገሳ በተሳካ ሁኔታ ተከናውኗል!",
      thankYou: "ለጓህ ልገሳዎ እናመሰግናለን!",
      receiptSent: "ደረሰኝ ወደ ኢሜልዎ ተልኳል",
      chatAvailable: "አሁን ከዘመቻ አዘጋጁ ጋር መወያየት ይችላሉ",
      viewCampaign: "ዘመቻ ይመልከቱ",
      makeDonation: "ሌላ ልገሳ ያድርጉ",
      
      // Error
      paymentFailed: "ክፍያ አልተሳካም",
      tryAgain: "እባክዎ እንደገና ይሞክሩ ወይም ድጋፍን ያነጋግሩ",
      
      logo: "HopeConnect"
    }
  };

  const t = (key) => translations[language][key];

  useEffect(() => {
    // Mock campaign data fetch
    const mockCampaign = {
      id: parseInt(id),
      title: 'Emergency Surgery for Almaz',
      goal: 250000,
      raised: 185000,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      organizer: {
        name: 'Almaz Tesfaye',
        verified: true
      }
    };

    setTimeout(() => {
      setCampaign(mockCampaign);
      setLoading(false);
    }, 1000);
  }, [id]);

  const quickAmounts = [50, 100, 500, 1000, 5000];

  const calculateFee = (amount) => {
    return Math.round(amount * 0.03); // 3% platform fee
  };

  const calculateTotal = (amount) => {
    return amount + calculateFee(amount);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-ET', {
      style: 'currency',
      currency: 'ETB',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const validateAmount = () => {
    const amount = parseFloat(donationAmount);
    
    if (!donationAmount || amount <= 0) {
      alert(t('amountRequired'));
      return false;
    }
    
    if (amount < 10) {
      alert(t('minimumAmount'));
      return false;
    }
    
    if (amount > 100000) {
      alert(t('maximumAmount'));
      return false;
    }
    
    return true;
  };

  const handleDonation = async () => {
    if (!validateAmount()) return;
    
    setIsProcessing(true);
    
    // Simulate Chapa payment processing
    setTimeout(() => {
      setIsProcessing(false);
      
      // Simulate payment success (90% success rate)
      if (Math.random() > 0.1) {
        setShowSuccess(true);
      } else {
        alert(t('paymentFailed') + '\n\n' + t('tryAgain'));
      }
    }, 3000);
  };

  const handleSuccessAction = (action) => {
    if (action === 'campaign') {
      navigate(`/campaign/${id}`);
    } else if (action === 'newDonation') {
      setShowSuccess(false);
      setDonationAmount('');
      setIsAnonymous(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-warm-beige via-gray-50 to-warm-gray flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading campaign...</p>
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
              
              <Link to={`/campaign/${id}`} className="text-white hover:text-orange-200 transition-colors">
                ← {t('backToCampaign')}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {!showSuccess ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Campaign Info */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">{t('donateToThis')}</h1>
                
                <div className="mb-6">
                  <img 
                    src={campaign.image} 
                    alt={campaign.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {campaign.title}
                  </h2>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                    <span>by {campaign.organizer.name}</span>
                    {campaign.organizer.verified && (
                      <span className="text-green-500">✓ Verified</span>
                    )}
                  </div>
                  
                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Raised: {formatCurrency(campaign.raised)}</span>
                      <span>Goal: {formatCurrency(campaign.goal)}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-orange-400 to-orange-500 h-2 rounded-full"
                        style={{ width: `${Math.min((campaign.raised / campaign.goal) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h3 className="font-semibold text-orange-800 mb-2">{t('supportCause')}</h3>
                  <p className="text-orange-700 text-sm">
                    {language === 'en' 
                      ? 'Your donation will directly help this campaign reach its goal and make a real difference.'
                      : 'የእርስዎ ልገሳ ይህ ዘመቻ ግቡን እንዲደርስ በቀጥታ ይረዳል እና ትክክለኛ ለውጥ ያመጣል።'
                    }
                  </p>
                </div>
              </div>

              {/* Donation Form */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Make a Donation</h2>
                
                {/* Quick Amount Buttons */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    {t('quickAmounts')}
                  </label>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {quickAmounts.map(amount => (
                      <button
                        key={amount}
                        onClick={() => setDonationAmount(amount.toString())}
                        className={`p-3 rounded-lg border text-sm font-medium transition-all duration-300 ${
                          donationAmount === amount.toString()
                            ? 'bg-orange-500 text-white border-orange-500'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-orange-500'
                        }`}
                      >
                        {formatCurrency(amount)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Amount Input */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('donationAmount')}
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      ETB
                    </span>
                    <input
                      type="number"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(e.target.value)}
                      placeholder={t('enterAmount')}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                      min="10"
                      max="100000"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    {t('paymentMethod')}
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="chapa"
                        checked={paymentMethod === 'chapa'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="text-orange-500"
                      />
                      <div className="ml-3">
                        <div className="font-medium">{t('chapa')}</div>
                        <div className="text-sm text-gray-600">
                          Telebirr, CBE Birr, Bank Cards, M-Birr
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Anonymous Option */}
                <div className="mb-6">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                      className="mt-1 text-orange-500"
                    />
                    <div>
                      <div className="font-medium text-gray-700">{t('anonymous')}</div>
                      <div className="text-sm text-gray-600">{t('anonymousNote')}</div>
                    </div>
                  </label>
                </div>

                {/* Donation Summary */}
                {donationAmount && parseFloat(donationAmount) > 0 && (
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <h3 className="font-semibold text-gray-800 mb-3">{t('donationSummary')}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>{t('donationAmountLabel')}:</span>
                        <span>{formatCurrency(parseFloat(donationAmount))}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{t('platformFee')}:</span>
                        <span>{formatCurrency(calculateFee(parseFloat(donationAmount)))}</span>
                      </div>
                      <div className="border-t pt-2 flex justify-between font-semibold">
                        <span>{t('totalAmount')}:</span>
                        <span>{formatCurrency(calculateTotal(parseFloat(donationAmount)))}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Donate Button */}
                <button
                  onClick={handleDonation}
                  disabled={!donationAmount || parseFloat(donationAmount) <= 0 || isProcessing}
                  className={`w-full py-4 rounded-lg font-medium text-lg transition-all duration-300 ${
                    !donationAmount || parseFloat(donationAmount) <= 0 || isProcessing
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-orange-400 to-orange-500 text-white hover:from-orange-500 hover:to-orange-600 hover-scale'
                  }`}
                >
                  {isProcessing ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      {t('processing')}
                    </div>
                  ) : (
                    <>💝 {t('proceedToPayment')}</>
                  )}
                </button>

                {/* Security Notice */}
                <div className="mt-4 text-xs text-gray-600 text-center">
                  🔒 Your payment information is secure and encrypted
                </div>
              </div>
            </div>
          ) : (
            /* Success Screen */
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-8">
                <div className="text-6xl mb-4 animate-bounce">🎉</div>
                
                <h1 className="text-3xl font-bold text-green-600 mb-2">
                  {t('donationSuccess')}
                </h1>
                
                <p className="text-xl text-gray-700 mb-6">
                  {t('thankYou')}
                </p>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between">
                      <span className="font-medium">Campaign:</span>
                      <span>{campaign.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Donation Amount:</span>
                      <span>{formatCurrency(parseFloat(donationAmount))}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Platform Fee:</span>
                      <span>{formatCurrency(calculateFee(parseFloat(donationAmount)))}</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-bold">
                      <span>Total Paid:</span>
                      <span>{formatCurrency(calculateTotal(parseFloat(donationAmount)))}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Anonymous:</span>
                      <span>{isAnonymous ? 'Yes' : 'No'}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 text-gray-600 mb-8">
                  <p>✉️ {t('receiptSent')}</p>
                  <p>💬 {t('chatAvailable')}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    onClick={() => handleSuccessAction('campaign')}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
                  >
                    👁️ {t('viewCampaign')}
                  </button>
                  
                  <button
                    onClick={() => handleSuccessAction('newDonation')}
                    className="px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-lg font-medium hover:from-orange-500 hover:to-orange-600 transition-all duration-300"
                  >
                    💝 {t('makeDonation')}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
