import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PublicHeader from './PublicHeader';
import Footer from './Footer';

const AboutPage = ({ language, setLanguage }) => {
  const [isVisible, setIsVisible] = useState({});

  // Scroll animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.scroll-reveal');
    scrollElements.forEach(el => {
      if (!el.id) {
        el.id = `scroll-element-${Math.random().toString(36).substr(2, 9)}`;
      }
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Translations
  const translations = {
    en: {
      title: "About HopeConnect",
      subtitle: "Empowering Lives Through Transparent Support",
      mission: "Our Mission",
      missionText: "HopeConnect is dedicated to creating a transparent, secure, and accessible financial support ecosystem that connects those in need with compassionate donors across Ethiopia. We believe that every person deserves hope and help when they need it most.",
      vision: "Our Vision",
      visionText: "To become Ethiopia's most trusted platform for financial support, where technology meets compassion to create lasting positive change in communities nationwide.",
      values: "Our Values",
      transparency: "Transparency",
      transparencyText: "Every donation is tracked and verified, ensuring complete transparency in how funds are used.",
      security: "Security",
      securityText: "Advanced AI-powered fraud detection protects both donors and recipients from malicious activities.",
      accessibility: "Accessibility",
      accessibilityText: "Full support for Amharic language and assistive technologies makes our platform accessible to all Ethiopians.",
      impact: "Impact",
      impactText: "Focus on creating meaningful, lasting change in the lives of individuals and communities.",
      story: "Our Story",
      storyText: "Founded in 2024, HopeConnect was born from the recognition that Ethiopia needed a modern, secure platform for financial support. Our team combines local expertise with cutting-edge technology to serve the Ethiopian community.",
      team: "Our Team",
      teamText: "We are a diverse group of Ethiopian developers, designers, and community advocates working together to build a better future for our country.",
      stats: "Platform Statistics",
      livesChanged: "Lives Changed",
      donationsProcessed: "Donations Processed",
      successRate: "Success Rate",
      activeCampaigns: "Active Campaigns",
      backToHome: "Back to Home",
      contactUs: "Contact Us"
    },
    am: {
      title: "ስለ HopeConnect",
      subtitle: "በግልጽነት ድጋፍ በኩል ህይወትን ማብቃት",
      mission: "የእኛ ተልዕኮ",
      missionText: "HopeConnect በኢትዮጵያ ውስጥ የሚያስፈልጋቸውን ሰዎች ከርኅራኄ ሰጪዎች ጋር የሚያገናኝ ግልጽ፣ ደህንነቱ የተጠበቀ እና ተደራሽ የገንዘብ ድጋፍ ስርዓት ለመፍጠር ተወስኗል።",
      vision: "የእኛ ራዕይ",
      visionText: "በኢትዮጵያ ውስጥ በጣም የታመነ የገንዘብ ድጋፍ መድረክ መሆን፣ ቴክኖሎጂ ከርኅራኄ ጋር ተዋህዶ በማህበረሰቦች ውስጥ ዘላቂ አዎንታዊ ለውጥ መፍጠር።",
      values: "የእኛ እሴቶች",
      transparency: "ግልጽነት",
      transparencyText: "እያንዳንዱ ልገሳ ይከታተላል እና ይረጋገጣል፣ ገንዘቦች እንዴት እንደሚጠቀሙ ሙሉ ግልጽነትን ያረጋግጣል።",
      security: "ደህንነት",
      securityText: "የላቀ AI-የተጎላበተ የማጭበርበር ፈላጊ ሁለቱንም ሰጪዎችን እና ተቀባዮችን ከመጥፎ እንቅስቃሴዎች ይጠብቃል።",
      accessibility: "ተደራሽነት",
      accessibilityText: "ለአማርኛ ቋንቋ እና ለረዳት ቴክኖሎጂዎች ሙሉ ድጋፍ መድረካችንን ለሁሉም ኢትዮጵያውያን ተደራሽ ያደርገዋል።",
      impact: "ተጽዕኖ",
      impactText: "በግለሰቦች እና በማህበረሰቦች ህይወት ውስጥ ትርጉም ያለው፣ ዘላቂ ለውጥ መፍጠር ላይ ትኩረት።",
      story: "የእኛ ታሪክ",
      storyText: "በ2024 የተመሰረተው HopeConnect ኢትዮጵያ ዘመናዊ፣ ደህንነቱ የተጠበቀ የገንዘብ ድጋፍ መድረክ እንደሚያስፈልጋት ከመገንዘብ የተወለደ ነው።",
      team: "የእኛ ቡድን",
      teamText: "ለአገራችን የተሻለ ወደፊት ለመገንባት በጋራ የምንሠራ የተለያዩ የኢትዮጵያ ገንቢዎች፣ ዲዛይነሮች እና የማህበረሰብ ተሟጋቾች ቡድን ነን።",
      stats: "የመድረክ ስታትስቲክስ",
      livesChanged: "የተለወጡ ህይወቶች",
      donationsProcessed: "የተሰሩ ልገሳዎች",
      successRate: "የስኬት መጠን",
      activeCampaigns: "ንቁ ዘመቻዎች",
      backToHome: "ወደ መነሻ ተመለስ",
      contactUs: "አግኙን"
    }
  };

  const t = (key) => translations[language][key];

  return (
    <div className="font-sans bg-warm-beige text-charcoal min-h-screen">
      {/* Header */}
      <PublicHeader language={language} setLanguage={setLanguage} />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-warm-beige via-gray-50 to-warm-gray relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float delay-500"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-bounceIn">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-gray-700 via-gray-600 to-orange-500 text-transparent bg-clip-text">
                {t('title')}
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-3xl mb-10 text-warm-gray font-medium">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="scroll-reveal animate-slideInLeft">
              <h2 className="text-4xl font-bold mb-6 text-gray-700">{t('mission')}</h2>
              <p className="text-lg text-warm-gray leading-relaxed mb-8">
                {t('missionText')}
              </p>
            </div>
            
            <div className="scroll-reveal animate-slideInRight delay-300">
              <h2 className="text-4xl font-bold mb-6 text-orange-500">{t('vision')}</h2>
              <p className="text-lg text-warm-gray leading-relaxed mb-8">
                {t('visionText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-warm-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-700 to-orange-500 text-transparent bg-clip-text">
                {t('values')}
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 scroll-reveal">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center text-white text-lg font-bold mb-6 mx-auto">
                Trans
              </div>
              <h3 className="text-xl font-bold mb-4 text-charcoal text-center">{t('transparency')}</h3>
              <p className="text-warm-gray leading-relaxed text-center">
                {t('transparencyText')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 scroll-reveal delay-200">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center text-white text-lg font-bold mb-6 mx-auto">
                Sec
              </div>
              <h3 className="text-xl font-bold mb-4 text-charcoal text-center">{t('security')}</h3>
              <p className="text-warm-gray leading-relaxed text-center">
                {t('securityText')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 scroll-reveal delay-400">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center text-white text-lg font-bold mb-6 mx-auto">
                Access
              </div>
              <h3 className="text-xl font-bold mb-4 text-charcoal text-center">{t('accessibility')}</h3>
              <p className="text-warm-gray leading-relaxed text-center">
                {t('accessibilityText')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 scroll-reveal delay-600">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center text-white text-lg font-bold mb-6 mx-auto">
                Impact
              </div>
              <h3 className="text-xl font-bold mb-4 text-charcoal text-center">{t('impact')}</h3>
              <p className="text-warm-gray leading-relaxed text-center">
                {t('impactText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-700">{t('stats')}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 scroll-reveal">
              <div className="text-4xl font-bold text-gray-600 mb-4">1,000+</div>
              <div className="text-warm-gray font-medium">{t('livesChanged')}</div>
            </div>
            <div className="text-center bg-orange-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 scroll-reveal delay-200">
              <div className="text-4xl font-bold text-orange-500 mb-4">500K+</div>
              <div className="text-warm-gray font-medium">{t('donationsProcessed')}</div>
            </div>
            <div className="text-center bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 scroll-reveal delay-400">
              <div className="text-4xl font-bold text-gray-600 mb-4">99.9%</div>
              <div className="text-warm-gray font-medium">{t('successRate')}</div>
            </div>
            <div className="text-center bg-orange-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 scroll-reveal delay-600">
              <div className="text-4xl font-bold text-orange-500 mb-4">250+</div>
              <div className="text-warm-gray font-medium">{t('activeCampaigns')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Team */}
      <section className="py-24 bg-gradient-to-br from-warm-beige via-gray-50 to-warm-gray">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="scroll-reveal animate-slideInLeft">
              <h2 className="text-4xl font-bold mb-6 text-gray-700">{t('story')}</h2>
              <p className="text-lg text-warm-gray leading-relaxed mb-8">
                {t('storyText')}
              </p>
            </div>
            
            <div className="scroll-reveal animate-slideInRight delay-300">
              <h2 className="text-4xl font-bold mb-6 text-orange-500">{t('team')}</h2>
              <p className="text-lg text-warm-gray leading-relaxed mb-8">
                {t('teamText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-gray-700 to-orange-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 opacity-90">
            {language === 'en' 
              ? 'Join thousands of Ethiopians who are already making a positive impact through HopeConnect.'
              : 'በHopeConnect በኩል አዎንታዊ ተጽዕኖ እያሳደሩ ያሉ በሺዎች የሚቆጠሩ ኢትዮጵያውያን ይቀላቀሉ።'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="bg-white text-gray-700 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300">
              Get Started
            </Link>
            <Link to="/" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-gray-700 transition-all duration-300">
              {t('backToHome')}
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-300 to-orange-400 text-transparent bg-clip-text">
              HopeConnect
            </h3>
            <p className="text-gray-300 mb-8">
              {language === 'en' 
                ? 'Empowering Ethiopian communities through transparent, secure, and AI-powered financial support.'
                : 'በግልጽነት፣ በደህንነት እና በ AI የተጎለበተ የገንዘብ ድጋፍ በኩል የኢትዮጵያ ማህበረሰቦችን ማብቃት።'
              }
            </p>
            <p className="text-gray-400">
              © 2025 HopeConnect. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      {/* Footer */}
      <Footer language={language} />
    </div>
  );
};

export default AboutPage;
