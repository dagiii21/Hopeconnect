import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PublicHeader from './PublicHeader';
import Footer from './Footer';

const LandingPage = ({ language, setLanguage }) => {
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

    // Observe scroll reveal elements
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
      title: "HopeConnect - Empowering Lives",
      subtitle: "Connecting Hope with Help Across Ethiopia",
      signupButton: "Get Started",
      aboutUsTitle: "About Us",
      aboutUsContent:
        "HopeConnect is a trusted platform that bridges individuals in need with compassionate donors. Our mission is to foster a transparent, secure, and accessible financial support ecosystem powered by AI-driven scam detection and Amharic accessibility.",
      logo: "HopeConnect",
      aboutUs: "About Us",
      contactUs: "Contact Us",
      login: "Login",
      signup: "Sign Up",
      amharic: "Amharic",
      featuresTitle: "Why Choose HopeConnect?",
      feature1: "Smart Fraud Protection",
      feature2: "Direct Communication",
      feature3: "Trusted Payment System",
      feature4: "Complete Accessibility",
      testimonialsTitle: "What Our Users Say",
      testimonial1: "HopeConnect changed my life. I received help when I needed it most.",
      testimonial2: "I feel safe donating knowing every campaign is verified.",
      testimonial3: "The AI system helped flag a fake campaign before anyone got hurt.",
      footerText: "© 2025 HopeConnect. All rights reserved.",
    },
    am: {
      title: "HopeConnect - የህይወት ኃይል መስጫ",
      subtitle: "የሆፉን ጥቅማታት በኢትዮጵያ ይገናኙ",
      signupButton: "መዝግብ",
      aboutUsTitle: "ስለ እኛ",
      aboutUsContent:
        "HopeConnect የሚያገናኙ ግንባታ ነው። የእድሜ የተሰራ የተለያዩ የሕክምና እና የትምህርት አገልግሎቶች፣ የቤተሰቦች እና የተለያዩ የፖለቲካ አገልግሎቶች የሚከተሉት አካላት እንዲያገናኙ ይረዳሉ።",
      logo: "HopeConnect",
      aboutUs: "ስለ እኛ",
      contactUs: "ያግኙን",
      login: "ግባ",
      signup: "ይመዝገቡ",
      amharic: "አማርኛ",
      featuresTitle: "ለምን ምርጫ ያደርጋሉ?",
      feature1: "ብልህ የተቃዋሚ መከላከያ",
      feature2: "ቀጥተኛ ግንኙነት",
      feature3: "የታመነ የክፍያ ስርዓት",
      feature4: "ሙሉ ተደራሽነት",
      testimonialsTitle: "የሚጠሩት ምን ይላሉ?",
      testimonial1: "HopeConnect የሕይወቴን መንገድ ለውጦ፤ በጣም እንደፈለግሁ ድጋፍ አገኘሁ።",
      testimonial2: "የገንዘብ ድጋፎቼ በደህንነት ይተካሱ ስላለው እጠብቃለሁ።",
      testimonial3: "ኤ.አይ. ስኪም የተሳሳተ መነሻ በፊት ሰዎች የተበላሸ ነበር እንዳለው ለማስታወስ ይረዱኛል።",
      footerText: "© 2025 HopeConnect. ፍቃዶች ሁሉ የተጠበቁ ናቸው።",
    },
  };

  const t = (key) => translations[language][key];

  return (
    <div className="font-sans bg-warm-beige text-charcoal overflow-x-hidden">
      {/* Header */}
      <PublicHeader language={language} setLanguage={setLanguage} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-warm-beige via-gray-50 to-warm-gray overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float delay-500"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float delay-1000"></div>
        </div>
        
        {/* Hero image background - hands reaching */}
        <div className="absolute inset-0 bg-cover bg-center opacity-10 z-0" 
             style={{backgroundImage: 'url("https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'}}></div>
        
        <div className="container mx-auto px-6 text-center relative z-20">
          <div className="animate-bounceIn">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight relative z-30">
              <span className="bg-gradient-to-r from-gray-700 via-gray-600 to-orange-500 text-transparent bg-clip-text">
                {t('title')}
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-3xl mb-10 text-warm-gray animate-fadeInUp delay-300 font-medium">
            {t('subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp delay-700">
            <Link to="/register" className="px-10 py-5 bg-gradient-to-r from-gray-700 via-gray-600 to-orange-500 text-white font-bold rounded-full shadow-2xl transform hover:scale-110 transition-all duration-500 animate-pulse-slow hover-glow-warm text-lg">
              {t('signupButton')}
            </Link>
          </div>

          {/* Floating stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fadeInUp delay-1000">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover-scale border border-warm-gray">
              <div className="text-3xl font-bold text-gray-600 animate-pulse-slow">1000+</div>
              <div className="text-warm-gray font-medium">Lives Changed</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover-scale border border-warm-gray">
              <div className="text-3xl font-bold text-orange-500 animate-pulse-slow">500K+</div>
              <div className="text-warm-gray font-medium">Birr Donated</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover-scale border border-warm-gray">
              <div className="text-3xl font-bold text-gray-600 animate-pulse-slow">100%</div>
              <div className="text-warm-gray font-medium">Verified Campaigns</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-br from-gray-50 to-warm-gray">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal" id="features-title">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">
              <span className="bg-gradient-to-r from-gray-700 to-orange-500 text-transparent bg-clip-text">
                {t('featuresTitle')}
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 scroll-reveal animate-slideInLeft border border-gray-200">
              <div className="text-6xl mb-6 group-hover:animate-float">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                  AI
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-charcoal">{t('feature1')}</h3>
              <p className="text-warm-gray leading-relaxed">
                {language === 'en' ? 'Our advanced AI system monitors every campaign 24/7, automatically detecting suspicious activities and protecting your donations from fraud before it happens.' : 'የእኛ የተላቀቀ AI ስርዓት በየቀኑ 24/7 ሁሉንም ዘመቻዎች ይቆጣጠራል።'}
              </p>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 scroll-reveal animate-slideInLeft delay-300 border border-gray-200">
              <div className="text-6xl mb-6 group-hover:animate-float">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg">
                  Chat
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-charcoal">{t('feature2')}</h3>
              <p className="text-warm-gray leading-relaxed">
                {language === 'en' ? 'Chat directly with campaign creators in real-time. Ask questions, get updates, and build trust through transparent communication before you donate.' : 'ከድጋፍ ሰሪዎች ጋር በቀጥታ ይነጋገሩ እና እምነት ይገንቡ।'}
              </p>
              <Link to="/register" className="mt-4 inline-flex items-center text-orange-500 font-medium group-hover:text-gray-600 transition-colors hover:underline">
                <span>Start chatting now</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 scroll-reveal animate-slideInRight delay-300 border border-gray-200">
              <div className="text-6xl mb-6 group-hover:animate-float">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center text-white text-lg shadow-lg">
                  Pay
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-charcoal">{t('feature3')}</h3>
              <p className="text-warm-gray leading-relaxed">
                {language === 'en' ? 'Make secure donations using Ethiopia\'s most trusted payment gateway. Your financial information is protected with bank-level encryption and instant confirmations.' : 'በኢትዮጵያ በጣም የተተማመነ የክፍያ አገልግሎት በመጠቀም ደህንነታቸው የተጠበቀ ልገሳዎችን ያድርጉ።'}
              </p>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 scroll-reveal animate-slideInRight border border-gray-200">
              <div className="text-6xl mb-6 group-hover:animate-float">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center text-white text-lg shadow-lg">
                  Lang
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-charcoal">{t('feature4')}</h3>
              <p className="text-warm-gray leading-relaxed">
                {language === 'en' ? 'Experience HopeConnect in your preferred language with full Amharic support, voice commands, and screen reader compatibility for all users.' : 'በእርስዎ የተመረጠ ቋንቋ HopeConnect ን ይለማመዱ።'}
              </p>
              <button onClick={() => setLanguage(language === 'en' ? 'am' : 'en')} className="mt-4 inline-flex items-center text-orange-500 font-medium group-hover:text-gray-600 transition-colors hover:underline">
                <span>{language === 'en' ? 'Try in Amharic' : 'Try in English'}</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Feature highlight section */}
          <div className="mt-20 bg-gradient-to-r from-gray-700 to-orange-500 rounded-3xl p-12 text-white text-center scroll-reveal">
            <h3 className="text-3xl font-bold mb-4">Join the Revolution</h3>
            <p className="text-xl mb-8 opacity-90">
              {language === 'en' 
                ? 'Be part of Ethiopia\'s most trusted financial support platform' 
                : 'የኢትዮጵያ በጣም የተተማመነ የገንዘብ ድጋፍ መድረክ አካል ይሁኑ'
              }
            </p>
            <Link to="/register" className="bg-white text-gray-700 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover-scale hover-glow">
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 -left-40 w-80 h-80 bg-gray-100 rounded-full opacity-30 animate-float"></div>
          <div className="absolute bottom-20 -right-40 w-96 h-96 bg-orange-100 rounded-full opacity-30 animate-float delay-500"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 scroll-reveal animate-slideInLeft">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Hands reaching out - HopeConnect community support" 
                  className="rounded-3xl shadow-2xl w-full object-cover hover-scale transition-transform duration-500" 
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-gray-600 to-orange-500 text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-lg font-bold">Trusted</div>
                  <div className="text-sm font-medium">Platform</div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 scroll-reveal animate-slideInRight delay-300">
              <div className="mb-6">
                <span className="bg-gradient-to-r from-gray-600 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Our Story
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
                <span className="bg-gradient-to-r from-gray-700 to-orange-500 text-transparent bg-clip-text">
                  {t('aboutUsTitle')}
                </span>
              </h2>
              
              <div className="w-16 h-1 bg-gradient-to-r from-gray-600 to-orange-500 mb-8 rounded-full"></div>
              
              <p className="text-lg text-warm-gray leading-relaxed mb-8 font-medium">
                {t('aboutUsContent')}
              </p>
              
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center bg-gray-50 rounded-2xl p-4 hover-scale border border-gray-200">
                  <div className="text-2xl font-bold text-gray-600">99.9%</div>
                  <div className="text-warm-gray text-sm">Success Rate</div>
                </div>
                <div className="text-center bg-orange-50 rounded-2xl p-4 hover-scale border border-orange-200">
                  <div className="text-2xl font-bold text-orange-500">24/7</div>
                  <div className="text-warm-gray text-sm">Support</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about" className="bg-gradient-to-r from-gray-700 to-orange-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-all duration-300 hover-scale hover-glow-warm">
                  Learn More
                </Link>
                <a href="#contact" className="border-2 border-gray-600 text-gray-700 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all duration-300 hover-scale">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gradient-to-br from-warm-beige via-gray-50 to-warm-gray relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 scroll-reveal">
            <span className="bg-gradient-to-r from-gray-600 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
              💬 Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">
              <span className="bg-gradient-to-r from-gray-700 to-orange-500 text-transparent bg-clip-text">
                {t('testimonialsTitle')}
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 scroll-reveal animate-fadeInUp border border-gray-200">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b1e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                  alt="Sarah's profile" 
                  className="w-16 h-16 rounded-full object-cover border-4 border-gray-200"
                />
                <div className="ml-4">
                  <div className="font-bold text-charcoal">Sarah M.</div>
                  <div className="text-warm-gray text-sm">Campaign Creator</div>
                </div>
                <div className="ml-auto">
                  <div className="flex text-orange-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
              </div>
              <blockquote className="text-warm-gray italic leading-relaxed mb-4 group-hover:text-charcoal transition-colors">
                "{t('testimonial1')}"
              </blockquote>
              <div className="flex items-center text-gray-600 font-medium">
                <span className="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
                Verified Campaign Creator
              </div>
            </div>

            <div className="group bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 scroll-reveal animate-fadeInUp delay-300 border border-gray-200">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                  alt="Michael's profile" 
                  className="w-16 h-16 rounded-full object-cover border-4 border-orange-200"
                />
                <div className="ml-4">
                  <div className="font-bold text-charcoal">Michael T.</div>
                  <div className="text-warm-gray text-sm">Regular Donor</div>
                </div>
                <div className="ml-auto">
                  <div className="flex text-orange-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
              </div>
              <blockquote className="text-warm-gray italic leading-relaxed mb-4 group-hover:text-charcoal transition-colors">
                "{t('testimonial2')}"
              </blockquote>
              <div className="flex items-center text-orange-500 font-medium">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Trusted Donor
              </div>
            </div>

            <div className="group bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 scroll-reveal animate-fadeInUp delay-500 border border-gray-200">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" 
                  alt="Almaz's profile" 
                  className="w-16 h-16 rounded-full object-cover border-4 border-gray-200"
                />
                <div className="ml-4">
                  <div className="font-bold text-charcoal">Almaz K.</div>
                  <div className="text-warm-gray text-sm">Community Leader</div>
                </div>
                <div className="ml-auto">
                  <div className="flex text-orange-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
              </div>
              <blockquote className="text-warm-gray italic leading-relaxed mb-4 group-hover:text-charcoal transition-colors">
                "{t('testimonial3')}"
              </blockquote>
              <div className="flex items-center text-gray-600 font-medium">
                <span className="w-2 h-2 bg-gray-600 rounded-full mr-2"></span>
                AI Safety Advocate
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center mt-16 scroll-reveal animate-fadeInUp delay-700">
            <h3 className="text-2xl font-bold mb-4 text-charcoal">
              {language === 'en' ? 'Ready to Make a Difference?' : 'ለመለወጥ ዝግጁ ነዎት?'}
            </h3>
            <p className="text-warm-gray mb-8 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Join thousands of Ethiopians who are already making a positive impact through HopeConnect.'
                : 'በHopeConnect በኩል አዎንታዊ ተጽዕኖ እያሳደሩ ያሉ በሺዎች የሚቆጠሩ ኢትዮጵያውያን ይቀላቀሉ።'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="bg-gradient-to-r from-gray-700 to-orange-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-all duration-300 hover-scale hover-glow-warm">
                Start Helping Today
              </Link>
              <Link to="/about" className="border-2 border-gray-600 text-gray-700 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all duration-300 hover-scale">
                Read More Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer language={language} />
    </div>
  );
};

export default LandingPage;
