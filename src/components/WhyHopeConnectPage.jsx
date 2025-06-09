import React from 'react';
import PublicHeader from './PublicHeader';
import Footer from './Footer';

const WhyHopeConnectPage = ({ language, setLanguage }) => {
  // Translations
  const translations = {
    en: {
      title: "Why Choose HopeConnect?",
      subtitle: "Connecting hearts, changing lives through the power of community support",
      mission: "Our Mission",
      missionText: "HopeConnect bridges the gap between those in need and those who care, creating a trusted platform where genuine help meets genuine need.",
      
      features: [
        {
          title: "Verified Campaigns",
          description: "Every campaign goes through our rigorous verification process to ensure authenticity and transparency.",
          icon: "🔐"
        },
        {
          title: "Direct Impact",
          description: "See exactly how your donation is making a difference with real-time updates and impact reports.",
          icon: "📊"
        },
        {
          title: "Community Support",
          description: "Join a caring community of donors and supporters working together to create positive change.",
          icon: "🤝"
        },
        {
          title: "Secure Transactions",
          description: "Your donations are protected with bank-level security and encrypted payment processing.",
          icon: "🛡️"
        },
        {
          title: "Global Reach",
          description: "Support causes worldwide or focus on local community needs - the choice is yours.",
          icon: "🌍"
        },
        {
          title: "Transparent Reporting",
          description: "Detailed financial reports and campaign updates keep you informed every step of the way.",
          icon: "📋"
        }
      ],
      
      stats: {
        title: "Our Impact Together",
        campaigns: "5,000+ Campaigns Funded",
        raised: "$12.5M+ Raised",
        donors: "50,000+ Donors",
        countries: "25+ Countries Reached"
      },
      
      cta: "Ready to make a difference?",
      ctaButton: "Get Started Today"
    },
    am: {
      title: "ለምን HopeConnect ይምረጡ?",
      subtitle: "ልቦችን በማገናኘት፣ የማህበረሰብ ድጋፍን በመጠቀም ህይወትን መቀየር",
      mission: "የእኛ ተልእኮ",
      missionText: "HopeConnect በፍላጎት ያላቸው እና ያስጠነቅቃቸው መካከል ያለውን ክፍተት ያጥበባል፣ እውነተኛ እርዳታ እውነተኛ ፍላጎትን የሚያገናኝ የታመነ መድረክ ይፈጥራል።",
      
      features: [
        {
          title: "የተረጋገጡ ዘመቻዎች",
          description: "እያንዳንዱ ዘመቻ ትክክለኛነትን እና ግልጽነትን ለማረጋገጥ በእኛ ጥብቅ የማረጋገጫ ሂደት ያልፋል።",
          icon: "🔐"
        },
        {
          title: "ቀጥተኛ ተጽዕኖ",
          description: "ልገሳዎ በእውነተኛ ጊዜ ዝማኔዎች እና የተጽዕኖ ሪፖርቶች እንዴት ለውጥ እንደሚያመጣ በትክክል ይመልከቱ።",
          icon: "📊"
        },
        {
          title: "የማህበረሰብ ድጋፍ",
          description: "አዎንታዊ ለውጥ ለመፍጠር በጋራ የሚሰሩ የለጋሾች እና ደጋፊዎች ተጨባጭ ማህበረሰብ ይቀላቀሉ።",
          icon: "🤝"
        },
        {
          title: "ደህንነቱ የተጠበቀ ግብይት",
          description: "ልገሳዎችዎ በባንክ ደረጃ ደህንነት እና በተመሰጠረ የክፍያ ሂደት የተጠበቁ ናቸው።",
          icon: "🛡️"
        },
        {
          title: "ዓለም አቀፍ ተደራሽነት",
          description: "በዓለም ዙሪያ ያሉ ምክንያቶችን ይደግፉ ወይም በአካባቢ ማህበረሰብ ፍላጎቶች ላይ ያተኩሩ - ምርጫው የእርስዎ ነው።",
          icon: "🌍"
        },
        {
          title: "ግልጽ ሪፖርት",
          description: "ዝርዝር የገንዘብ ሪፖርቶች እና የዘመቻ ማሻሻያዎች በእያንዳንዱ እርምጃ እርስዎን በመረጃ ይጠብቅዎታል።",
          icon: "📋"
        }
      ],
      
      stats: {
        title: "የእኛ ተጽዕኖ በጋራ",
        campaigns: "5,000+ ዘመቻዎች ተደግፈዋል",
        raised: "$12.5M+ ተሰብስቧል",
        donors: "50,000+ ለጋሾች",
        countries: "25+ ሀገራት ደርሷል"
      },
      
      cta: "ለውጥ ለማምጣት ዝግጁ ነዎት?",
      ctaButton: "ዛሬ ይጀምሩ"
    }
  };

  const t = (key) => translations[language][key];

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige via-gray-50 to-warm-gray">
      <PublicHeader language={language} setLanguage={setLanguage} />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            {t('title')}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">{t('mission')}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('missionText')}
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {t('features').map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('stats').title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{t('stats').campaigns.split(' ')[0]}</div>
              <div className="text-orange-100">{t('stats').campaigns.substring(t('stats').campaigns.indexOf(' ') + 1)}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{t('stats').raised.split(' ')[0]}</div>
              <div className="text-orange-100">{t('stats').raised.substring(t('stats').raised.indexOf(' ') + 1)}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{t('stats').donors.split(' ')[0]}</div>
              <div className="text-orange-100">{t('stats').donors.substring(t('stats').donors.indexOf(' ') + 1)}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{t('stats').countries.split(' ')[0]}</div>
              <div className="text-orange-100">{t('stats').countries.substring(t('stats').countries.indexOf(' ') + 1)}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">{t('cta')}</h2>
          <a
            href="/register"
            className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {t('ctaButton')}
          </a>
        </div>
      </section>

      <Footer language={language} setLanguage={setLanguage} />
    </div>
  );
};

export default WhyHopeConnectPage;
