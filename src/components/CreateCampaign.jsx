import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CreateCampaign = ({ language, setLanguage }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    goal: '',
    deadline: '',
    category: '',
    images: [],
    documents: [],
    bankAccount: '',
    mobileMoneyAccount: '',
    urgencyReason: '',
    detailedBudget: ''
  });
  const [aiFlags, setAiFlags] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const translations = {
    en: {
      createCampaign: "Create Campaign",
      basicInfo: "Basic Information",
      mediaDocuments: "Media & Documents",
      fundingDetails: "Funding Details",
      review: "Review & Submit",
      
      // Step 1
      campaignTitle: "Campaign Title",
      titlePlaceholder: "Enter a clear, compelling title for your campaign",
      campaignDescription: "Campaign Description",
      descriptionPlaceholder: "Tell your story in detail. Be honest and specific about your situation.",
      category: "Category",
      selectCategory: "Select a category",
      medical: "Medical",
      education: "Education",
      business: "Business",
      emergency: "Emergency",
      
      // Step 2
      campaignImages: "Campaign Images",
      uploadImages: "Upload Images",
      supportingDocuments: "Supporting Documents",
      uploadDocuments: "Upload Documents",
      documentNote: "Upload relevant documents like medical bills, school fees, business permits, etc.",
      
      // Step 3
      fundingGoal: "Funding Goal (ETB)",
      goalPlaceholder: "Enter the amount you need",
      deadline: "Campaign Deadline",
      bankAccount: "Bank Account Number",
      bankPlaceholder: "Your verified bank account for fund disbursement",
      mobileAccount: "Mobile Money Account",
      mobilePlaceholder: "Your mobile money account (optional)",
      urgencyReason: "Why is this urgent?",
      urgencyPlaceholder: "Explain why this funding is time-sensitive",
      detailedBudget: "Detailed Budget Breakdown",
      budgetPlaceholder: "Show how you'll use the funds",
      
      // Navigation
      next: "Next",
      previous: "Previous",
      submit: "Submit Campaign",
      draft: "Save as Draft",
      
      // AI Flags
      aiDetection: "AI Content Review",
      aiWarning: "Our AI detected potential issues:",
      flaggedKeywords: "Flagged keywords found",
      duplicateContent: "Similar content detected",
      suspiciousPatterns: "Suspicious patterns identified",
      
      // Success
      submissionSuccess: "Campaign Submitted Successfully!",
      pendingReview: "Your campaign is now pending admin review. You'll be notified within 48 hours.",
      
      // Validation
      titleRequired: "Campaign title is required",
      descriptionRequired: "Campaign description is required",
      categoryRequired: "Please select a category",
      goalRequired: "Funding goal is required",
      deadlineRequired: "Campaign deadline is required",
      accountRequired: "Bank account is required for fund disbursement",
      
      logo: "HopeConnect"
    },
    am: {
      createCampaign: "ዘመቻ ፍጠር",
      basicInfo: "መሰረታዊ መረጃ",
      mediaDocuments: "ሚዲያ እና ሰነዶች",
      fundingDetails: "የገንዘብ ዝርዝሮች",
      review: "ይመልከቱ እና ያስገቡ",
      
      // Step 1
      campaignTitle: "የዘመቻ ርዕስ",
      titlePlaceholder: "ለዘመቻዎ ግልጽ እና አሳማኝ ርዕስ ያስገቡ",
      campaignDescription: "የዘመቻ መግለጫ",
      descriptionPlaceholder: "ታሪክዎን በዝርዝር ይንገሩ። ስለ ሁኔታዎ ታማኝ እና ልዩ ይሁኑ።",
      category: "ምድብ",
      selectCategory: "ምድብ ይምረጡ",
      medical: "ሕክምና",
      education: "ትምህርት",
      business: "ንግድ",
      emergency: "አጣዳፊ",
      
      // Step 2
      campaignImages: "የዘመቻ ምስሎች",
      uploadImages: "ምስሎችን ይላኩ",
      supportingDocuments: "ድጋፍ ሰነዶች",
      uploadDocuments: "ሰነዶችን ይላኩ",
      documentNote: "እንደ የሕክምና ሂሳቦች፣ የትምህርት ክፍያዎች፣ የንግድ ፈቃዶች ያሉ ተዛማጅ ሰነዶችን ይላኩ።",
      
      // Step 3
      fundingGoal: "የገንዘብ ግብ (ብር)",
      goalPlaceholder: "የሚፈልጉትን መጠን ያስገቡ",
      deadline: "የዘመቻ ቀነ-ገደብ",
      bankAccount: "የባንክ ሂሳብ ቁጥር",
      bankPlaceholder: "ለገንዘብ ማደራጃ የተረጋገጠ የባንክ ሂሳብዎ",
      mobileAccount: "የሞባይል ገንዘብ ሂሳብ",
      mobilePlaceholder: "የሞባይል ገንዘብ ሂሳብዎ (አማራጭ)",
      urgencyReason: "ይህ ለምን አስቸኳይ ነው?",
      urgencyPlaceholder: "ይህ ገንዘብ ለምን በጊዜ የተገደበ እንደሆነ ያብራሩ",
      detailedBudget: "ዝርዝር የበጀት ክፍፍል",
      budgetPlaceholder: "ገንዘቡን እንዴት እንደሚጠቀሙ ያሳዩ",
      
      // Navigation
      next: "ቀጣይ",
      previous: "ቀደምት",
      submit: "ዘመቻ አስገባ",
      draft: "እንደ ረቂቅ አስቀምጥ",
      
      // AI Flags
      aiDetection: "AI የይዘት ግምገማ",
      aiWarning: "AI የእኛ ሊሆኑ የሚችሉ ችግሮችን አወቀ:",
      flaggedKeywords: "የተሰየሙ ቁልፍ ቃላት ተገኝተዋል",
      duplicateContent: "ተመሳሳይ ይዘት ተገኝቷል",
      suspiciousPatterns: "አጠራጣሪ ንድፎች ተለይተዋል",
      
      // Success
      submissionSuccess: "ዘመቻ በተሳካ ሁኔታ ተላከ!",
      pendingReview: "ዘመቻዎ አሁን በአስተዳዳሪ ግምገማ ላይ ነው። በ 48 ሰአት ውስጥ ማሳወቂያ ይደርስዎታል።",
      
      // Validation
      titleRequired: "የዘመቻ ርዕስ ያስፈልጋል",
      descriptionRequired: "የዘመቻ መግለጫ ያስፈልጋል",
      categoryRequired: "እባክዎ ምድብ ይምረጡ",
      goalRequired: "የገንዘብ ግብ ያስፈልጋል",
      deadlineRequired: "የዘመቻ ቀነ-ገደብ ያስፈልጋል",
      accountRequired: "ለገንዘብ ማደራጃ የባንክ ሂሳብ ያስፈልጋል",
      
      logo: "HopeConnect"
    }
  };

  const t = (key) => translations[language][key];

  // AI Scam Detection Simulation
  const runAIDetection = (data) => {
    const flags = [];
    const suspiciousKeywords = ['urgent', 'guaranteed', 'emergency', 'immediately', 'crisis', 'dying'];
    const titleWords = data.title.toLowerCase().split(' ');
    const descWords = data.description.toLowerCase().split(' ');
    
    // Check for suspicious keywords
    const foundKeywords = suspiciousKeywords.filter(keyword => 
      titleWords.includes(keyword) || descWords.includes(keyword)
    );
    
    if (foundKeywords.length > 2) {
      flags.push({
        type: 'keywords',
        message: t('flaggedKeywords'),
        details: foundKeywords
      });
    }
    
    // Check for duplicate content patterns (simplified)
    if (data.description.length < 50) {
      flags.push({
        type: 'content',
        message: t('suspiciousPatterns'),
        details: ['Description too short']
      });
    }
    
    // Check unrealistic goals
    if (parseInt(data.goal) > 1000000) {
      flags.push({
        type: 'amount',
        message: t('suspiciousPatterns'),
        details: ['Unusually high funding goal']
      });
    }
    
    return flags;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (field, files) => {
    setFormData(prev => ({ ...prev, [field]: Array.from(files) }));
  };

  const validateStep = (stepNum) => {
    const errors = [];
    
    if (stepNum === 1) {
      if (!formData.title) errors.push(t('titleRequired'));
      if (!formData.description) errors.push(t('descriptionRequired'));
      if (!formData.category) errors.push(t('categoryRequired'));
    }
    
    if (stepNum === 3) {
      if (!formData.goal) errors.push(t('goalRequired'));
      if (!formData.deadline) errors.push(t('deadlineRequired'));
      if (!formData.bankAccount) errors.push(t('accountRequired'));
    }
    
    return errors;
  };

  const handleNext = () => {
    const errors = validateStep(step);
    if (errors.length === 0) {
      if (step === 1) {
        // Run AI detection after basic info
        const flags = runAIDetection(formData);
        setAiFlags(flags);
      }
      setStep(prev => Math.min(prev + 1, 4));
    } else {
      alert(errors.join('\n'));
    }
  };

  const handlePrevious = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    const errors = validateStep(3);
    if (errors.length > 0) {
      alert(errors.join('\n'));
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert(t('submissionSuccess') + '\n\n' + t('pendingReview'));
      navigate('/dashboard');
    }, 2000);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('campaignTitle')} *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder={t('titlePlaceholder')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                maxLength={100}
              />
              <div className="text-right text-xs text-gray-500 mt-1">
                {formData.title.length}/100
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('campaignDescription')} *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder={t('descriptionPlaceholder')}
                rows={8}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                maxLength={2000}
              />
              <div className="text-right text-xs text-gray-500 mt-1">
                {formData.description.length}/2000
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('category')} *
              </label>
              <select
                value={formData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              >
                <option value="">{t('selectCategory')}</option>
                <option value="medical">{t('medical')}</option>
                <option value="education">{t('education')}</option>
                <option value="business">{t('business')}</option>
                <option value="emergency">{t('emergency')}</option>
              </select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('campaignImages')}
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-500 transition-colors">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => handleFileUpload('images', e.target.files)}
                  className="hidden"
                  id="images-upload"
                />
                <label htmlFor="images-upload" className="cursor-pointer">
                  <div className="text-4xl mb-2">📸</div>
                  <div className="text-sm text-gray-600">{t('uploadImages')}</div>
                  <div className="text-xs text-gray-500 mt-1">PNG, JPG up to 5MB each</div>
                </label>
              </div>
              {formData.images.length > 0 && (
                <div className="mt-2 text-sm text-green-600">
                  {formData.images.length} files selected
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('supportingDocuments')}
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-500 transition-colors">
                <input
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.jpg,.png"
                  onChange={(e) => handleFileUpload('documents', e.target.files)}
                  className="hidden"
                  id="documents-upload"
                />
                <label htmlFor="documents-upload" className="cursor-pointer">
                  <div className="text-4xl mb-2">📄</div>
                  <div className="text-sm text-gray-600">{t('uploadDocuments')}</div>
                  <div className="text-xs text-gray-500 mt-1">PDF, DOC, JPG up to 10MB each</div>
                </label>
              </div>
              <div className="text-xs text-gray-600 mt-2">
                {t('documentNote')}
              </div>
              {formData.documents.length > 0 && (
                <div className="mt-2 text-sm text-green-600">
                  {formData.documents.length} files selected
                </div>
              )}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('fundingGoal')} *
                </label>
                <input
                  type="number"
                  value={formData.goal}
                  onChange={(e) => handleInputChange('goal', e.target.value)}
                  placeholder={t('goalPlaceholder')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  min="1000"
                  max="10000000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('deadline')} *
                </label>
                <input
                  type="date"
                  value={formData.deadline}
                  onChange={(e) => handleInputChange('deadline', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('bankAccount')} *
              </label>
              <input
                type="text"
                value={formData.bankAccount}
                onChange={(e) => handleInputChange('bankAccount', e.target.value)}
                placeholder={t('bankPlaceholder')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('mobileAccount')}
              </label>
              <input
                type="text"
                value={formData.mobileMoneyAccount}
                onChange={(e) => handleInputChange('mobileMoneyAccount', e.target.value)}
                placeholder={t('mobilePlaceholder')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('urgencyReason')}
              </label>
              <textarea
                value={formData.urgencyReason}
                onChange={(e) => handleInputChange('urgencyReason', e.target.value)}
                placeholder={t('urgencyPlaceholder')}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('detailedBudget')}
              </label>
              <textarea
                value={formData.detailedBudget}
                onChange={(e) => handleInputChange('detailedBudget', e.target.value)}
                placeholder={t('budgetPlaceholder')}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            {/* AI Detection Results */}
            {aiFlags.length > 0 && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                  ⚠️ {t('aiDetection')}
                </h3>
                <p className="text-yellow-700 mb-3">{t('aiWarning')}</p>
                <ul className="space-y-2">
                  {aiFlags.map((flag, index) => (
                    <li key={index} className="text-sm text-yellow-700">
                      • {flag.message}: {flag.details.join(', ')}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Campaign Preview */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Campaign Preview</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700">Title:</h4>
                  <p className="text-gray-900">{formData.title}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700">Description:</h4>
                  <p className="text-gray-900 whitespace-pre-wrap">{formData.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-700">Category:</h4>
                    <p className="text-gray-900 capitalize">{formData.category}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Goal:</h4>
                    <p className="text-gray-900">{parseInt(formData.goal).toLocaleString()} ETB</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700">Deadline:</h4>
                  <p className="text-gray-900">{formData.deadline}</p>
                </div>
                
                {formData.urgencyReason && (
                  <div>
                    <h4 className="font-medium text-gray-700">Urgency Reason:</h4>
                    <p className="text-gray-900">{formData.urgencyReason}</p>
                  </div>
                )}
                
                {formData.detailedBudget && (
                  <div>
                    <h4 className="font-medium text-gray-700">Budget Breakdown:</h4>
                    <p className="text-gray-900 whitespace-pre-wrap">{formData.detailedBudget}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

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
                ← Dashboard
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-700 to-orange-500 text-transparent bg-clip-text">
                {t('createCampaign')}
              </h1>
              <div className="text-sm text-gray-600">
                Step {step} of 4
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {[1, 2, 3, 4].map((stepNum) => (
                <React.Fragment key={stepNum}>
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                    stepNum === step 
                      ? 'bg-orange-500 border-orange-500 text-white' 
                      : stepNum < step
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'bg-white border-gray-300 text-gray-500'
                  }`}>
                    {stepNum < step ? '✓' : stepNum}
                  </div>
                  {stepNum < 4 && (
                    <div className={`flex-1 h-1 rounded transition-all duration-300 ${
                      stepNum < step ? 'bg-green-500' : 'bg-gray-300'
                    }`} />
                  )}
                </React.Fragment>
              ))}
            </div>
            
            <div className="grid grid-cols-4 gap-4 mt-2">
              <div className={`text-xs text-center ${step === 1 ? 'text-orange-500 font-medium' : 'text-gray-500'}`}>
                {t('basicInfo')}
              </div>
              <div className={`text-xs text-center ${step === 2 ? 'text-orange-500 font-medium' : 'text-gray-500'}`}>
                {t('mediaDocuments')}
              </div>
              <div className={`text-xs text-center ${step === 3 ? 'text-orange-500 font-medium' : 'text-gray-500'}`}>
                {t('fundingDetails')}
              </div>
              <div className={`text-xs text-center ${step === 4 ? 'text-orange-500 font-medium' : 'text-gray-500'}`}>
                {t('review')}
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-8">
            {renderStepContent()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={handlePrevious}
                disabled={step === 1}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  step === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                ← {t('previous')}
              </button>

              <div className="flex space-x-3">
                <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  💾 {t('draft')}
                </button>
                
                {step < 4 ? (
                  <button
                    onClick={handleNext}
                    className="px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-lg font-medium hover:from-orange-500 hover:to-orange-600 transition-all duration-300"
                  >
                    {t('next')} →
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-gray-400 text-white cursor-not-allowed'
                        : 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>✅ {t('submit')}</>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;
