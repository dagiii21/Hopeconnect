import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = ({ language, setLanguage }) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Step 2: Account Details
    password: '',
    confirmPassword: '',
    userType: 'donor', // donor or campaigner
    
    // Step 3: Additional Info
    city: '',
    region: '',
    dateOfBirth: '',
    agreeToTerms: false,
    agreeToMarketing: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Translations
  const translations = {
    en: {
      title: "Join HopeConnect Today",
      subtitle: "Create your account and start making a difference",
      step: "Step",
      of: "of",
      
      // Step 1
      basicInfo: "Basic Information",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      phone: "Phone Number",
      
      // Step 2
      accountDetails: "Account Details",
      password: "Password",
      confirmPassword: "Confirm Password",
      userType: "I want to",
      donor: "Make Donations",
      campaigner: "Create Campaigns",
      
      // Step 3
      additionalInfo: "Additional Information",
      city: "City",
      region: "Region",
      dateOfBirth: "Date of Birth",
      agreeToTerms: "I agree to the Terms of Service and Privacy Policy",
      agreeToMarketing: "I want to receive updates about HopeConnect",
      
      // Buttons
      nextStep: "Next Step",
      previousStep: "Previous",
      createAccount: "Create Account",
      
      // Links
      haveAccount: "Already have an account?",
      signIn: "Sign in here",
      backToHome: "Back to Home",
      logo: "HopeConnect",
      
      // Placeholders
      firstNamePlaceholder: "Enter your first name",
      lastNamePlaceholder: "Enter your last name",
      emailPlaceholder: "Enter your email",
      phonePlaceholder: "+251 9xx xxx xxx",
      passwordPlaceholder: "Create a strong password",
      confirmPasswordPlaceholder: "Confirm your password",
      cityPlaceholder: "Select your city",
      regionPlaceholder: "Select your region",
      
      // Validation
      firstNameRequired: "First name is required",
      lastNameRequired: "Last name is required",
      emailRequired: "Email is required",
      invalidEmail: "Please enter a valid email address",
      phoneRequired: "Phone number is required",
      passwordRequired: "Password is required",
      passwordTooShort: "Password must be at least 8 characters",
      passwordMismatch: "Passwords do not match",
      cityRequired: "City is required",
      regionRequired: "Region is required",
      termsRequired: "You must agree to the terms and conditions",
      registrationError: "Registration failed. Please try again.",
      
      // Success
      welcomeMessage: "Welcome to HopeConnect!",
      accountCreated: "Your account has been created successfully",
      
      // Features
      secureRegistration: "Secure Registration",
      aiProtected: "AI Protected",
      trustedPlatform: "Trusted Platform",
    },
    am: {
      title: "ዛሬ HopeConnect ይቀላቀሉ",
      subtitle: "መለያዎን ይፍጠሩ እና ለውጥ ማምጣት ይጀምሩ",
      step: "ደረጃ",
      of: "ከ",
      
      // Step 1
      basicInfo: "መሰረታዊ መረጃ",
      firstName: "ስም",
      lastName: "የአባት ስም",
      email: "የኢሜይል አድራሻ",
      phone: "ስልክ ቁጥር",
      
      // Step 2
      accountDetails: "የመለያ ዝርዝሮች",
      password: "የይለፍ ቃል",
      confirmPassword: "የይለፍ ቃል ያረጋግጡ",
      userType: "እኔ እፈልጋለሁ",
      donor: "ገንዘብ ለመለገስ",
      campaigner: "ዘመቻ ለመፍጠር",
      
      // Step 3
      additionalInfo: "ተጨማሪ መረጃ",
      city: "ከተማ",
      region: "ክልል",
      dateOfBirth: "የልደት ቀን",
      agreeToTerms: "የአገልግሎት ውሎችን እና የግላዊነት ፖሊሲን እስማማለሁ",
      agreeToMarketing: "ስለ HopeConnect ዝማኔዎችን መቀበል እፈልጋለሁ",
      
      // Buttons
      nextStep: "ቀጣይ ደረጃ",
      previousStep: "ቀዳሚ",
      createAccount: "መለያ ፍጠር",
      
      // Links
      haveAccount: "ቀድሞውኑ መለያ አለዎት?",
      signIn: "እዚህ ይግቡ",
      backToHome: "ወደ መነሻ ገጽ",
      logo: "HopeConnect",
      
      // Placeholders
      firstNamePlaceholder: "ስምዎን ያስገቡ",
      lastNamePlaceholder: "የአባትዎን ስም ያስገቡ",
      emailPlaceholder: "ኢሜይልዎን ያስገቡ",
      phonePlaceholder: "+251 9xx xxx xxx",
      passwordPlaceholder: "ጠንካራ የይለፍ ቃል ይፍጠሩ",
      confirmPasswordPlaceholder: "የይለፍ ቃልዎን ያረጋግጡ",
      cityPlaceholder: "ከተማዎን ይምረጡ",
      regionPlaceholder: "ክልልዎን ይምረጡ",
      
      // Validation
      firstNameRequired: "ስም ያስፈልጋል",
      lastNameRequired: "የአባት ስም ያስፈልጋል",
      emailRequired: "ኢሜይል ያስፈልጋል",
      invalidEmail: "ትክክለኛ የኢሜይል አድራሻ ያስገቡ",
      phoneRequired: "ስልክ ቁጥር ያስፈልጋል",
      passwordRequired: "የይለፍ ቃል ያስፈልጋል",
      passwordTooShort: "የይለፍ ቃል ቢያንስ 8 ቁምፊዎች ሊኖሩት ይገባል",
      passwordMismatch: "የይለፍ ቃሎች አይገናኙም",
      cityRequired: "ከተማ ያስፈልጋል",
      regionRequired: "ክልል ያስፈልጋል",
      termsRequired: "ውሎችና ሁኔታዎችን መቀበል አለቦት",
      registrationError: "ምዝገባ አልተሳካም። እባክዎ እንደገና ይሞክሩ።",
      
      // Success
      welcomeMessage: "ወደ HopeConnect እንኳን በደህና መጡ!",
      accountCreated: "መለያዎ በተሳካ ሁኔታ ተፈጥሯል",
      
      // Features
      secureRegistration: "ደህንነቱ የተጠበቀ ምዝገባ",
      aiProtected: "በAI የተጠበቀ",
      trustedPlatform: "የተመከረ መድረክ",
    },
  };

  const t = (key) => translations[language][key];

  const ethiopianRegions = [
    'Addis Ababa', 'Afar', 'Amhara', 'Benishangul-Gumuz', 'Dire Dawa', 
    'Gambela', 'Harari', 'Oromia', 'Sidama', 'SNNP', 'Somali', 'Tigray'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      // Basic Info validation
      if (!formData.firstName.trim()) newErrors.firstName = t('firstNameRequired');
      if (!formData.lastName.trim()) newErrors.lastName = t('lastNameRequired');
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email) {
        newErrors.email = t('emailRequired');
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = t('invalidEmail');
      }
      
      if (!formData.phone.trim()) newErrors.phone = t('phoneRequired');
    }
    
    if (step === 2) {
      // Account Details validation
      if (!formData.password) {
        newErrors.password = t('passwordRequired');
      } else if (formData.password.length < 8) {
        newErrors.password = t('passwordTooShort');
      }
      
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = t('passwordMismatch');
      }
    }
    
    if (step === 3) {
      // Additional Info validation
      if (!formData.city.trim()) newErrors.city = t('cityRequired');
      if (!formData.region.trim()) newErrors.region = t('regionRequired');
      if (!formData.agreeToTerms) newErrors.agreeToTerms = t('termsRequired');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const previousStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(3)) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Mock successful registration
      console.log('Registration successful:', formData);
      
      // Show success message and redirect
      alert(t('accountCreated'));
      navigate('/login');
    } catch (error) {
      setErrors({ general: t('registrationError') });
    } finally {
      setIsLoading(false);
    }
  };

  const renderStep1 = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
            {t('firstName')}
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-2xl bg-gray-50 focus:bg-white focus:outline-none transition-all duration-300 ${
              errors.firstName ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-orange-500'
            }`}
            placeholder={t('firstNamePlaceholder')}
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
            {t('lastName')}
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-2xl bg-gray-50 focus:bg-white focus:outline-none transition-all duration-300 ${
              errors.lastName ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-orange-500'
            }`}
            placeholder={t('lastNamePlaceholder')}
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          {t('email')}
        </label>
        <div className="relative">
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-2xl bg-gray-50 focus:bg-white focus:outline-none transition-all duration-300 ${
              errors.email ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-orange-500'
            }`}
            placeholder={t('emailPlaceholder')}
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-400">📧</span>
          </div>
        </div>
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          {t('phone')}
        </label>
        <div className="relative">
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-2xl bg-gray-50 focus:bg-white focus:outline-none transition-all duration-300 ${
              errors.phone ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-orange-500'
            }`}
            placeholder={t('phonePlaceholder')}
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-400">📱</span>
          </div>
        </div>
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
        )}
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          {t('userType')}
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className={`p-4 border-2 rounded-2xl cursor-pointer transition-all duration-300 hover-scale ${
              formData.userType === 'donor' 
                ? 'border-orange-500 bg-orange-50' 
                : 'border-gray-200 bg-gray-50 hover:border-gray-300'
            }`}
            onClick={() => setFormData(prev => ({ ...prev, userType: 'donor' }))}
          >
            <div className="flex items-center">
              <input
                type="radio"
                name="userType"
                value="donor"
                checked={formData.userType === 'donor'}
                onChange={handleInputChange}
                className="sr-only"
              />
              <div className="text-2xl mr-3">❤️</div>
              <div>
                <div className="font-medium text-gray-700">{t('donor')}</div>
                <div className="text-sm text-gray-500">Help Ethiopian communities</div>
              </div>
            </div>
          </div>

          <div
            className={`p-4 border-2 rounded-2xl cursor-pointer transition-all duration-300 hover-scale ${
              formData.userType === 'campaigner' 
                ? 'border-orange-500 bg-orange-50' 
                : 'border-gray-200 bg-gray-50 hover:border-gray-300'
            }`}
            onClick={() => setFormData(prev => ({ ...prev, userType: 'campaigner' }))}
          >
            <div className="flex items-center">
              <input
                type="radio"
                name="userType"
                value="campaigner"
                checked={formData.userType === 'campaigner'}
                onChange={handleInputChange}
                className="sr-only"
              />
              <div className="text-2xl mr-3">📢</div>
              <div>
                <div className="font-medium text-gray-700">{t('campaigner')}</div>
                <div className="text-sm text-gray-500">Request financial support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
          {t('password')}
        </label>
        <div className="relative">
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-2xl bg-gray-50 focus:bg-white focus:outline-none transition-all duration-300 ${
              errors.password ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-orange-500'
            }`}
            placeholder={t('passwordPlaceholder')}
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-400">🔒</span>
          </div>
        </div>
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password}</p>
        )}
      </div>

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
          {t('confirmPassword')}
        </label>
        <div className="relative">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-2xl bg-gray-50 focus:bg-white focus:outline-none transition-all duration-300 ${
              errors.confirmPassword ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-orange-500'
            }`}
            placeholder={t('confirmPasswordPlaceholder')}
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-400">🔐</span>
          </div>
        </div>
        {errors.confirmPassword && (
          <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
        )}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
            {t('city')}
          </label>
          <input
            id="city"
            name="city"
            type="text"
            value={formData.city}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-2xl bg-gray-50 focus:bg-white focus:outline-none transition-all duration-300 ${
              errors.city ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-orange-500'
            }`}
            placeholder={t('cityPlaceholder')}
          />
          {errors.city && (
            <p className="mt-1 text-sm text-red-600">{errors.city}</p>
          )}
        </div>

        <div>
          <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2">
            {t('region')}
          </label>
          <select
            id="region"
            name="region"
            value={formData.region}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-2 rounded-2xl bg-gray-50 focus:bg-white focus:outline-none transition-all duration-300 ${
              errors.region ? 'border-red-300 focus:border-red-500' : 'border-gray-200 focus:border-orange-500'
            }`}
          >
            <option value="">{t('regionPlaceholder')}</option>
            {ethiopianRegions.map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
          {errors.region && (
            <p className="mt-1 text-sm text-red-600">{errors.region}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
          {t('dateOfBirth')}
        </label>
        <input
          id="dateOfBirth"
          name="dateOfBirth"
          type="date"
          value={formData.dateOfBirth}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border-2 rounded-2xl bg-gray-50 focus:bg-white focus:outline-none transition-all duration-300 border-gray-200 focus:border-orange-500"
        />
      </div>

      <div className="space-y-3">
        <div className="flex items-start">
          <input
            id="agreeToTerms"
            name="agreeToTerms"
            type="checkbox"
            checked={formData.agreeToTerms}
            onChange={handleInputChange}
            className="h-4 w-4 text-orange-500 focus:ring-orange-400 border-gray-300 rounded mt-1"
          />
          <label htmlFor="agreeToTerms" className="ml-3 block text-sm text-gray-700">
            {t('agreeToTerms')}
          </label>
        </div>
        {errors.agreeToTerms && (
          <p className="text-sm text-red-600">{errors.agreeToTerms}</p>
        )}

        <div className="flex items-start">
          <input
            id="agreeToMarketing"
            name="agreeToMarketing"
            type="checkbox"
            checked={formData.agreeToMarketing}
            onChange={handleInputChange}
            className="h-4 w-4 text-orange-500 focus:ring-orange-400 border-gray-300 rounded mt-1"
          />
          <label htmlFor="agreeToMarketing" className="ml-3 block text-sm text-gray-700">
            {t('agreeToMarketing')}
          </label>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige via-gray-50 to-warm-gray flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float delay-500"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float delay-1000"></div>
      </div>

      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-5" 
           style={{backgroundImage: 'url("https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'}}></div>

      <div className="max-w-2xl w-full space-y-8 relative z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-200 animate-fadeInUp">
          {/* Header */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center text-2xl font-bold text-gray-700 hover:text-orange-500 transition-colors animate-float">
              <span className="mr-2 text-3xl">🤝</span>
              {t('logo')}
            </Link>
            <h2 className="mt-6 text-3xl font-extrabold bg-gradient-to-r from-gray-700 to-orange-500 text-transparent bg-clip-text">
              {t('title')}
            </h2>
            <p className="mt-2 text-sm text-warm-gray">
              {t('subtitle')}
            </p>
            
            {/* Progress indicator */}
            <div className="mt-6 flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">{t('step')} {currentStep} {t('of')} 3</span>
              </div>
              <div className="flex space-x-2">
                {[1, 2, 3].map(step => (
                  <div
                    key={step}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      step <= currentStep ? 'bg-orange-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Trust indicators */}
            <div className="mt-4 flex justify-center space-x-6 text-xs text-gray-500">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                {t('secureRegistration')}
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                {t('aiProtected')}
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
                {t('trustedPlatform')}
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit}>
            {errors.general && (
              <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-2xl text-sm animate-slideInDown">
                <div className="flex items-center">
                  <span className="mr-2">⚠️</span>
                  {errors.general}
                </div>
              </div>
            )}

            {/* Step Content */}
            <div className="mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-6">
                {currentStep === 1 && t('basicInfo')}
                {currentStep === 2 && t('accountDetails')}
                {currentStep === 3 && t('additionalInfo')}
              </h3>

              {currentStep === 1 && renderStep1()}
              {currentStep === 2 && renderStep2()}
              {currentStep === 3 && renderStep3()}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={previousStep}
                  className="px-6 py-3 border border-gray-300 rounded-2xl text-gray-700 font-medium hover:bg-gray-50 transition-all duration-300 hover-scale"
                >
                  ← {t('previousStep')}
                </button>
              ) : (
                <div></div>
              )}

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-3 bg-gradient-to-r from-gray-700 via-gray-600 to-orange-500 text-white font-medium rounded-2xl hover:from-gray-800 hover:to-orange-600 transition-all duration-300 hover-scale hover-glow-warm"
                >
                  {t('nextStep')} →
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-3 bg-gradient-to-r from-gray-700 via-gray-600 to-orange-500 text-white font-medium rounded-2xl hover:from-gray-800 hover:to-orange-600 transition-all duration-300 hover-scale hover-glow-warm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Creating...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <span className="mr-2">🚀</span>
                      {t('createAccount')}
                    </div>
                  )}
                </button>
              )}
            </div>
          </form>

          {/* Sign In Link */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              {t('haveAccount')}{' '}
              <Link to="/login" className="font-medium text-orange-500 hover:text-orange-400 transition-colors">
                {t('signIn')}
              </Link>
            </p>
          </div>

          {/* Language Toggle */}
          <div className="flex justify-center mt-6">
            <button 
              onClick={() => setLanguage(language === 'en' ? 'am' : 'en')} 
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-all duration-300 hover-scale"
            >
              {language === 'en' ? '🇪🇹 አማርኛ' : '🇺🇸 English'}
            </button>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-4">
            <Link to="/" className="text-sm text-gray-500 hover:text-gray-700 transition-colors flex items-center justify-center">
              <span className="mr-1">←</span>
              {t('backToHome')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
