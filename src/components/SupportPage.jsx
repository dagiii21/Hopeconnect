import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PublicHeader from './PublicHeader';
import Footer from './Footer';

const SupportPage = ({ language, setLanguage }) => {
  const [activeSection, setActiveSection] = useState('faq');
  const [searchTerm, setSearchTerm] = useState('');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const translations = {
    en: {
      support: "Support & Help",
      backToDashboard: "Back to Dashboard",
      
      // Navigation
      faq: "FAQ",
      contactUs: "Contact Us",
      troubleshoot: "Troubleshooting",
      
      // Search
      searchHelp: "Search for help...",
      popularTopics: "Popular Topics",
      
      // FAQ
      frequentlyAsked: "Frequently Asked Questions",
      
      // Contact Form
      contactSupport: "Contact Support",
      contactDescription: "Can't find what you're looking for? Send us a message and we'll get back to you within 24 hours.",
      fullName: "Full Name",
      emailAddress: "Email Address",
      subject: "Subject",
      message: "Message",
      category: "Category",
      general: "General",
      technical: "Technical",
      billing: "Billing",
      account: "Account",
      sendMessage: "Send Message",
      
      // Troubleshooting
      commonIssues: "Common Issues & Solutions",
      
      // Support Info
      supportHours: "Support Hours",
      supportHoursText: "Monday - Friday: 8:00 AM - 6:00 PM (EAT)",
      weekendSupport: "Weekend: Emergency support only",
      emergencyContact: "Emergency Contact",
      emergencyPhone: "+251-11-XXX-XXXX",
      
      // Categories
      campaignHelp: "Campaign Help",
      donationHelp: "Donation Help",
      accountHelp: "Account Help",
      technicalHelp: "Technical Help",
      
      logo: "HopeConnect"
    },
    am: {
      support: "ድጋፍ እና እርዳታ",
      backToDashboard: "ወደ ዳሽቦርድ መመለስ",
      
      // Navigation
      faq: "ተደጋጋሚ ጥያቄዎች",
      contactUs: "አግኙን",
      troubleshoot: "ችግር መፍታት",
      
      // Search
      searchHelp: "እርዳታ ይፈልጉ...",
      popularTopics: "ተወዳጅ ርዕሶች",
      
      // FAQ
      frequentlyAsked: "ተደጋጋሚ ጥያቄዎች",
      
      // Contact Form
      contactSupport: "ድጋፍ አግኙ",
      contactDescription: "የሚፈልጉትን አላገኙም? መልዕክት ይላኩልን በ24 ሰዓት ውስጥ እንመልሳለን።",
      fullName: "ሙሉ ስም",
      emailAddress: "የኢሜል አድራሻ",
      subject: "ርዕስ",
      message: "መልዕክት",
      category: "ምድብ",
      general: "አጠቃላይ",
      technical: "ቴክኒካል",
      billing: "ክፍያ",
      account: "ሂሳብ",
      sendMessage: "መልዕክት ላክ",
      
      // Troubleshooting
      commonIssues: "የተለመዱ ችግሮች እና መፍትሄዎች",
      
      // Support Info
      supportHours: "የድጋፍ ሰዓቶች",
      supportHoursText: "ሰኞ - አርብ: 8:00 ጠዋት - 6:00 ማታ (EAT)",
      weekendSupport: "ቅዳሜ እሁድ: የአስቸኳይ ጊዜ ድጋፍ ብቻ",
      emergencyContact: "የአስቸኳይ ጊዜ ግንኙነት",
      emergencyPhone: "+251-11-XXX-XXXX",
      
      // Categories
      campaignHelp: "የዘመቻ እርዳታ",
      donationHelp: "የልገሳ እርዳታ",
      accountHelp: "የሂሳብ እርዳታ",
      technicalHelp: "ቴክኒካል እርዳታ",
      
      logo: "HopeConnect"
    }
  };

  const t = (key) => translations[language][key];

  const faqData = [
    {
      category: 'campaignHelp',
      questions: [
        {
          question: language === 'en' ? 'How do I create a campaign?' : 'እንዴት ዘመቻ መፍጠር እችላለሁ?',
          answer: language === 'en' 
            ? 'To create a campaign, go to your dashboard and click "Create Campaign". Follow the 4-step process to provide campaign details, upload documents, set your goal, and submit for review.'
            : 'ዘመቻ ለመፍጠር፣ ወደ ዳሽቦርድዎ ይሂዱ እና "ዘመቻ ፍጠር" የሚለውን ይጫኑ። የዘመቻ ዝርዝሮችን ለመስጠት፣ ሰነዶችን ለመስቀል፣ ግብዎን ለማዘጋጀት እና ለግምገማ ለማቅረብ የ4-ደረጃ ሂደቱን ይከተሉ።'
        },
        {
          question: language === 'en' ? 'How long does campaign approval take?' : 'የዘመቻ ማጽደቅ ምን ያህል ጊዜ ይወስዳል?',
          answer: language === 'en'
            ? 'Campaign approval typically takes 24-48 hours. Our AI system first reviews for potential issues, then human moderators verify the campaign details and documentation.'
            : 'የዘመቻ ማጽደቅ ብዙውን ጊዜ 24-48 ሰዓቶችን ይወስዳል። የእኛ AI ስርዓት መጀመሪያ ሊኖሩ የሚችሉ ችግሮችን ይገመግማል፣ ከዚያም የሰው ወይም መቆጣጠሪያ የዘመቻ ዝርዝሮችን እና ሰነዶቹን ያረጋግጣሉ።'
        },
        {
          question: language === 'en' ? 'Can I edit my campaign after it\'s published?' : 'ዘመቻዬ ከታተመ በኋላ ማርትዕ እችላለሁ?',
          answer: language === 'en'
            ? 'Yes, you can edit campaign descriptions and add updates. However, the fundraising goal and bank account details cannot be changed once approved for security reasons.'
            : 'አዎ፣ የዘመቻ መግለጫዎችን ማርትዕ እና ዝመናዎችን መጨመር ይችላሉ። ሆኖም የገንዘብ ማሰባሰቢያ ግብ እና የባንክ ሂሳብ ዝርዝሮች ከተጸደቁ በኋላ ለደህንነት ምክንያቶች መቀየር አይችሉም።'
        }
      ]
    },
    {
      category: 'donationHelp',
      questions: [
        {
          question: language === 'en' ? 'How do I donate to a campaign?' : 'ለዘመቻ እንዴት ልገሳ እሰጣለሁ?',
          answer: language === 'en'
            ? 'Click on any campaign you want to support, then click "Donate Now". Choose your donation amount and payment method (bank transfer, mobile money, or online payment via Chapa).'
            : 'መደገፍ የሚፈልጉትን ማንኛውንም ዘመቻ ይጫኑ፣ ከዚያም "አሁን ለግሱ" የሚለውን ይጫኑ። የልገሳ መጠንዎን እና የክፍያ ዘዴዎን ይምረጡ (የባንክ ማስተላለፍ፣ የሞባይል ገንዘብ፣ ወይም በቻፓ በኩል የመስመር ላይ ክፍያ)።'
        },
        {
          question: language === 'en' ? 'Is my donation secure?' : 'ልገሳዬ ደህንነቱ የተጠበቀ ነው?',
          answer: language === 'en'
            ? 'Yes, all donations are processed through secure payment gateways. We use encryption and follow banking security standards to protect your financial information.'
            : 'አዎ፣ ሁሉም ልገሳዎች በደህንነታቸው የተጠበቁ የክፍያ መንገዶች ይሠራሉ። የማስተካከያ እና የባንክ ደህንነት ደረጃዎችን በመከተል የገንዘብ መረጃዎችዎን እንከላከላለን።'
        },
        {
          question: language === 'en' ? 'Can I donate anonymously?' : 'በማንነት ሳይታወቅ ልገሳ መስጠት እችላለሁ?',
          answer: language === 'en'
            ? 'Yes, you can choose to donate anonymously. Your name will not be displayed publicly, but transaction records are kept for legal and security purposes.'
            : 'አዎ፣ በማንነት ሳይታወቅ ልገሳ ለመስጠት መምረጥ ይችላሉ። ስምዎ በይፋ አይታይም፣ ግን የግብይት መዝገቦች ለህጋዊ እና ደህንነት ዓላማዎች ይያዛሉ።'
        }
      ]
    },
    {
      category: 'accountHelp',
      questions: [
        {
          question: language === 'en' ? 'How do I verify my account?' : 'ሂሳቤን እንዴት ማረጋገጥ እችላለሁ?',
          answer: language === 'en'
            ? 'Go to your profile and click "Get Verified". You\'ll need to provide government-issued ID, proof of address, and banking information. The process takes 2-3 business days.'
            : 'ወደ መገለጫዎ ይሂዱ እና "ማረጋገጫ ያግኙ" የሚለውን ይጫኑ። በመንግስት የተሰጠ መታወቂያ፣ የአድራሻ ማረጋገጫ እና የባንክ መረጃ መስጠት ያስፈልግዎታል። ሂደቱ 2-3 የንግድ ቀናት ይወስዳል።'
        },
        {
          question: language === 'en' ? 'I forgot my password. How do I reset it?' : 'የይለፍ ቃሌን ረስቼዋለሁ። እንዴት ዳግም ማዘጋጀት እችላለሁ?',
          answer: language === 'en'
            ? 'Click "Forgot Password" on the login page. Enter your email address and follow the instructions sent to your email to reset your password.'
            : 'በመግቢያ ገጹ ላይ "የይለፍ ቃል ረሳሁ" የሚለውን ይጫኑ። የኢሜል አድራሻዎን ያስገቡ እና የይለፍ ቃልዎን ዳግም ለማዘጋጀት ወደ ኢሜልዎ የተላከውን መመሪያ ይከተሉ።'
        }
      ]
    },
    {
      category: 'technicalHelp',
      questions: [
        {
          question: language === 'en' ? 'The website is loading slowly. What should I do?' : 'ድር ጣቢያው በዝግታ እየጫነ ነው። ምን ማድረግ አለብኝ?',
          answer: language === 'en'
            ? 'Try clearing your browser cache, disable browser extensions temporarily, or try a different browser. If the problem persists, check your internet connection or contact support.'
            : 'የአሳሽዎን መሸጎጫ ማጽዳት፣ የአሳሽ ቅጥያዎችን ለጊዜው ማሰናከል፣ ወይም የተለየ አሳሽ መሞከር ይሞክሩ። ችግሩ የሚቀጥል ከሆነ የኢንተርኔት ግንኙነትዎን ይፈትሹ ወይም ድጋፍን ያግኙ።'
        },
        {
          question: language === 'en' ? 'I can\'t upload my documents. What\'s wrong?' : 'ሰነዶቼን መስቀል አልችልም። ምን ተሳስቷል?',
          answer: language === 'en'
            ? 'Ensure your files are in supported formats (PDF, JPG, PNG) and under 10MB each. Check your internet connection and try refreshing the page before uploading again.'
            : 'ፋይሎችዎ በሚደገፉ ቅርጸቶች (PDF, JPG, PNG) እና እያንዳንዳቸው ከ10MB በታች መሆናቸውን ያረጋግጡ። የኢንተርኔት ግንኙነትዎን ይፈትሹ እና እንደገና ከመስቀልዎ በፊት ገጹን ያደሱ።'
        }
      ]
    }
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert(language === 'en' 
      ? 'Thank you for your message! We\'ll get back to you within 24 hours.'
      : 'መልዕክትዎ አመሰግናለሁ! በ24 ሰዓት ውስጥ እንመልሳለን።'
    );
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: '',
      category: 'general'
    });
  };

  const filteredFAQ = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const renderFAQ = () => (
    <div className="space-y-6">
      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder={t('searchHelp')}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
        />
      </div>

      {/* FAQ Categories */}
      {filteredFAQ.map((category, categoryIndex) => (
        <div key={categoryIndex} className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            {t(category.category)}
          </h3>
          <div className="space-y-4">
            {category.questions.map((item, index) => (
              <details key={index} className="bg-white rounded-lg p-4 shadow-sm">
                <summary className="font-medium text-gray-800 cursor-pointer hover:text-orange-600">
                  {item.question}
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderContact = () => (
    <div className="max-w-2xl">
      <div className="bg-gray-50 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('contactSupport')}</h3>
        <p className="text-gray-600 mb-4">{t('contactDescription')}</p>
        
        {/* Support Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium text-gray-800 mb-2">📞 {t('emergencyContact')}</h4>
            <p className="text-gray-600">{t('emergencyPhone')}</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium text-gray-800 mb-2">🕒 {t('supportHours')}</h4>
            <p className="text-gray-600 text-sm">{t('supportHoursText')}</p>
            <p className="text-gray-600 text-sm">{t('weekendSupport')}</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleContactSubmit} className="bg-white rounded-lg p-6 shadow-sm space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder={t('fullName')}
            value={contactForm.name}
            onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            required
          />
          <input
            type="email"
            placeholder={t('emailAddress')}
            value={contactForm.email}
            onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            required
          />
        </div>
        
        <select
          value={contactForm.category}
          onChange={(e) => setContactForm({...contactForm, category: e.target.value})}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
        >
          <option value="general">{t('general')}</option>
          <option value="technical">{t('technical')}</option>
          <option value="billing">{t('billing')}</option>
          <option value="account">{t('account')}</option>
        </select>
        
        <input
          type="text"
          placeholder={t('subject')}
          value={contactForm.subject}
          onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
          required
        />
        
        <textarea
          placeholder={t('message')}
          value={contactForm.message}
          onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
          required
        />
        
        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
        >
          📧 {t('sendMessage')}
        </button>
      </form>
    </div>
  );

  const renderTroubleshooting = () => (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('commonIssues')}</h3>
        <div className="space-y-4">
          {[
            {
              issue: language === 'en' ? 'Can\'t log in to my account' : 'ወደ ሂሳቤ መግባት አልችልም',
              solution: language === 'en' 
                ? 'Check if Caps Lock is on, verify your email address, or use the "Forgot Password" link to reset your password.'
                : 'Caps Lock ከበራ፣ የኢሜል አድራሻዎን ያረጋግጡ፣ ወይም የይለፍ ቃልዎን ዳግም ለማዘጋጀት "የይለፍ ቃል ረሳሁ" ማገናኛን ይጠቀሙ።'
            },
            {
              issue: language === 'en' ? 'Payment failed during donation' : 'ልገሳ በሰጠሁበት ጊዜ ክፍያ አልተሳካም',
              solution: language === 'en'
                ? 'Check your internet connection, verify card details, ensure sufficient balance, or try a different payment method.'
                : 'የኢንተርኔት ግንኙነትዎን ይፈትሹ፣ የካርድ ዝርዝሮችን ያረጋግጡ፣ በቂ ሂሳብ እንዳለዎት ያረጋግጡ፣ ወይም የተለየ የክፍያ ዘዴ ይሞክሩ።'
            },
            {
              issue: language === 'en' ? 'Email notifications not working' : 'የኢሜል ማሳወቂያዎች አይሰሩም',
              solution: language === 'en'
                ? 'Check your spam folder, verify email settings in your profile, and ensure notifications are enabled.'
                : 'የስፓም አቃፊዎን ይፈትሹ፣ በመገለጫዎ ውስጥ የኢሜል ቅንብሮችን ያረጋግጡ፣ እና ማሳወቂያዎች መንቃታቸውን ያረጋግጡ።'
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-4">
              <h4 className="font-medium text-gray-800 mb-2">❓ {item.issue}</h4>
              <p className="text-gray-600">💡 {item.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige via-gray-50 to-warm-gray">
      {/* Header */}
      <PublicHeader language={language} setLanguage={setLanguage} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-700 to-orange-500 text-transparent bg-clip-text">
              {t('support')}
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-6">
                <nav className="space-y-2">
                  {[
                    { id: 'faq', icon: '❓', label: t('faq') },
                    { id: 'contact', icon: '📧', label: t('contactUs') },
                    { id: 'troubleshoot', icon: '🔧', label: t('troubleshoot') }
                  ].map(section => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        activeSection === section.id
                          ? 'bg-orange-500 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span className="mr-2">{section.icon}</span>
                      {section.label}
                    </button>
                  ))}
                </nav>

                {/* Popular Topics */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-medium text-gray-800 mb-3">{t('popularTopics')}</h3>
                  <div className="space-y-2 text-sm">
                    {[
                      language === 'en' ? 'Creating campaigns' : 'ዘመቻዎች መፍጠር',
                      language === 'en' ? 'Payment issues' : 'የክፍያ ችግሮች',
                      language === 'en' ? 'Account verification' : 'የሂሳብ ማረጋገጫ',
                      language === 'en' ? 'Security concerns' : 'የደህንነት ጉዳዮች'
                    ].map((topic, index) => (
                      <button key={index} className="block w-full text-left text-gray-600 hover:text-orange-500 transition-colors">
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-8">
                {activeSection === 'faq' && renderFAQ()}
                {activeSection === 'contact' && renderContact()}
                {activeSection === 'troubleshoot' && renderTroubleshooting()}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer language={language} />
    </div>
  );
};

export default SupportPage;
