import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const VerificationPage = ({ language, setLanguage }) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [verificationData, setVerificationData] = useState({
    idType: '',
    idNumber: '',
    idFile: null,
    selfieFile: null,
    bankAccount: '',
    bankName: '',
    mobileMoneyAccount: '',
    mobileMoneyProvider: '',
    fullName: '',
    dateOfBirth: '',
    address: '',
    city: '',
    region: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState('pending'); // pending, approved, rejected

  const translations = {
    en: {
      verification: "Identity Verification",
      backToDashboard: "Back to Dashboard",
      verificationRequired: "Verification Required",
      verificationNote: "To create campaigns and receive funds, you must verify your identity according to Ethiopian financial regulations.",
      
      // Steps
      identityVerification: "Identity Verification",
      bankingDetails: "Banking Details", 
      reviewSubmit: "Review & Submit",
      
      // Step 1 - Identity
      governmentId: "Government-issued ID",
      selectIdType: "Select ID Type",
      nationalId: "National ID Card",
      passport: "Passport",
      drivingLicense: "Driving License",
      idNumber: "ID Number",
      idNumberPlaceholder: "Enter your ID number",
      uploadId: "Upload ID Document",
      uploadSelfie: "Upload Selfie with ID",
      selfieNote: "Take a clear selfie holding your ID next to your face",
      
      // Personal details
      personalDetails: "Personal Details",
      fullName: "Full Name",
      fullNamePlaceholder: "Enter your full name as on ID",
      dateOfBirth: "Date of Birth",
      address: "Address",
      addressPlaceholder: "Enter your full address",
      city: "City",
      cityPlaceholder: "Enter your city",
      region: "Region",
      selectRegion: "Select your region",
      
      // Step 2 - Banking
      bankAccount: "Bank Account Number",
      bankAccountPlaceholder: "Enter your bank account number",
      bankName: "Bank Name",
      selectBank: "Select your bank",
      mobileMoneyAccount: "Mobile Money Account (Optional)",
      mobileMoneyPlaceholder: "Enter your mobile money number",
      mobileMoneyProvider: "Mobile Money Provider",
      selectProvider: "Select provider",
      
      // Ethiopian regions
      addisAbaba: "Addis Ababa",
      afar: "Afar",
      amhara: "Amhara",
      benishangul: "Benishangul-Gumuz",
      dire: "Dire Dawa",
      gambela: "Gambela",
      harari: "Harari",
      oromia: "Oromia",
      sidama: "Sidama",
      snnp: "SNNP",
      somali: "Somali",
      tigray: "Tigray",
      
      // Ethiopian banks
      cbe: "Commercial Bank of Ethiopia",
      dashen: "Dashen Bank",
      awash: "Awash Bank",
      bank: "Bank of Abyssinia",
      wegagen: "Wegagen Bank",
      united: "United Bank",
      nib: "Nib International Bank",
      cooperative: "Cooperative Bank of Oromia",
      lion: "Lion International Bank",
      zemen: "Zemen Bank",
      
      // Mobile money providers
      telebirr: "Telebirr",
      mbirr: "M-Birr",
      helloWallet: "HelloWallet",
      
      // Navigation
      next: "Next",
      previous: "Previous",
      submit: "Submit for Verification",
      
      // Validation
      idTypeRequired: "Please select an ID type",
      idNumberRequired: "Please enter your ID number",
      idFileRequired: "Please upload your ID document",
      selfieRequired: "Please upload a selfie with your ID",
      nameRequired: "Please enter your full name",
      dobRequired: "Please enter your date of birth",
      addressRequired: "Please enter your address",
      cityRequired: "Please enter your city",
      regionRequired: "Please select your region",
      bankAccountRequired: "Please enter your bank account number",
      bankNameRequired: "Please select your bank",
      
      // Success/Status
      submissionSuccess: "Verification Submitted Successfully!",
      submissionNote: "Your verification documents have been submitted for review. You will receive a notification within 48 hours.",
      verificationPending: "Verification Pending",
      verificationApproved: "Verification Approved",
      verificationRejected: "Verification Rejected",
      
      // File upload
      chooseFile: "Choose File",
      noFileChosen: "No file chosen",
      fileSelected: "File selected",
      
      logo: "HopeConnect"
    },
    am: {
      verification: "የማንነት ማረጋገጫ",
      backToDashboard: "ወደ ዳሽቦርድ መመለስ",
      verificationRequired: "ማረጋገጫ ያስፈልጋል",
      verificationNote: "ዘመቻዎችን ለመፍጠር እና ገንዘብ ለመቀበል፣ የኢትዮጵያ የገንዘብ ህጎች መሰረት የማንነት ማረጋገጫ ማድረግ አለብዎት።",
      
      // Steps
      identityVerification: "የማንነት ማረጋገጫ",
      bankingDetails: "የባንክ ዝርዝሮች",
      reviewSubmit: "ይመልከቱ እና ያስገቡ",
      
      // Step 1 - Identity
      governmentId: "የመንግስት መታወቂያ",
      selectIdType: "የመታወቂያ ዓይነት ይምረጡ",
      nationalId: "ብሔራዊ መታወቂያ ካርድ",
      passport: "ፓስፖርት",
      drivingLicense: "የመንጃ ፈቃድ",
      idNumber: "የመታወቂያ ቁጥር",
      idNumberPlaceholder: "የመታወቂያ ቁጥርዎን ያስገቡ",
      uploadId: "የመታወቂያ ሰነድ ይላኩ",
      uploadSelfie: "ከመታወቂያ ጋር ሴልፊ ይላኩ",
      selfieNote: "መታወቂያዎን በጎንዎ ከፊትዎ አጠገብ ይዘው ግልጽ ሴልፊ ይስኑ",
      
      // Personal details
      personalDetails: "የግል ዝርዝሮች",
      fullName: "ሙሉ ስም",
      fullNamePlaceholder: "በመታወቂያ ላይ እንደተጻፈ ሙሉ ስምዎን ያስገቡ",
      dateOfBirth: "የልደት ቀን",
      address: "አድራሻ",
      addressPlaceholder: "ሙሉ አድራሻዎን ያስገቡ",
      city: "ከተማ",
      cityPlaceholder: "ከተማዎን ያስገቡ",
      region: "ክልል",
      selectRegion: "ክልልዎን ይምረጡ",
      
      // Step 2 - Banking
      bankAccount: "የባንክ ሂሳብ ቁጥር",
      bankAccountPlaceholder: "የባንክ ሂሳብ ቁጥርዎን ያስገቡ",
      bankName: "የባንክ ስም",
      selectBank: "ባንክዎን ይምረጡ",
      mobileMoneyAccount: "የሞባይል ገንዘብ ሂሳብ (አማራጭ)",
      mobileMoneyPlaceholder: "የሞባይል ገንዘብ ቁጥርዎን ያስገቡ",
      mobileMoneyProvider: "የሞባይል ገንዘብ አቅራቢ",
      selectProvider: "አቅራቢ ይምረጡ",
      
      // Ethiopian regions
      addisAbaba: "አዲስ አበባ",
      afar: "አፋር",
      amhara: "አማራ",
      benishangul: "ቤንሸንጉል ጉሙዝ",
      dire: "ድሬ ዳዋ",
      gambela: "ጋምቤላ",
      harari: "ሐረሪ",
      oromia: "ኦሮሚያ",
      sidama: "ሲዳማ",
      snnp: "ደቡብ ብሔሮች",
      somali: "ሶማሊ",
      tigray: "ትግራይ",
      
      // Ethiopian banks
      cbe: "የኢትዮጵያ ንግድ ባንክ",
      dashen: "ዳሽን ባንክ",
      awash: "አዋሽ ባንክ",
      bank: "የአቢሲኒያ ባንክ",
      wegagen: "ወጋገን ባንክ",
      united: "ዩናይትድ ባንክ",
      nib: "ኒብ ኢንተርናሽናል ባንክ",
      cooperative: "የኦሮሚያ ህብረት ባንክ",
      lion: "ላዮን ኢንተርናሽናል ባንክ",
      zemen: "ዘመን ባንክ",
      
      // Mobile money providers
      telebirr: "ቴሌ ብር",
      mbirr: "ኤም-ብር",
      helloWallet: "ሄሎ ዋሌት",
      
      // Navigation
      next: "ቀጣይ",
      previous: "ቀደምት",
      submit: "ለማረጋገጫ አስገባ",
      
      // Validation
      idTypeRequired: "እባክዎ የመታወቂያ ዓይነት ይምረጡ",
      idNumberRequired: "እባክዎ የመታወቂያ ቁጥርዎን ያስገቡ",
      idFileRequired: "እባክዎ የመታወቂያ ሰነድዎን ይላኩ",
      selfieRequired: "እባክዎ ከመታወቂያዎ ጋር ሴልፊ ይላኩ",
      nameRequired: "እባክዎ ሙሉ ስምዎን ያስገቡ",
      dobRequired: "እባክዎ የልደት ቀንዎን ያስገቡ",
      addressRequired: "እባክዎ አድራሻዎን ያስገቡ",
      cityRequired: "እባክዎ ከተማዎን ያስገቡ",
      regionRequired: "እባክዎ ክልልዎን ይምረጡ",
      bankAccountRequired: "እባክዎ የባንክ ሂሳብ ቁጥርዎን ያስገቡ",
      bankNameRequired: "እባክዎ ባንክዎን ይምረጡ",
      
      // Success/Status
      submissionSuccess: "ማረጋገጫ በተሳካ ሁኔታ ተላከ!",
      submissionNote: "የማረጋገጫ ሰነዶችዎ ለግምገማ ተላክተዋል። በ48 ሰአት ውስጥ ማሳወቂያ ይደርስዎታል።",
      verificationPending: "ማረጋገጫ በመጠበቅ ላይ",
      verificationApproved: "ማረጋገጫ ተፈቅዷል",
      verificationRejected: "ማረጋገጫ ተቀባይነት አላገኘም",
      
      // File upload
      chooseFile: "ፋይል ይምረጡ",
      noFileChosen: "ምንም ፋይል አልተመረጠም",
      fileSelected: "ፋይል ተመርጧል",
      
      logo: "HopeConnect"
    }
  };

  const t = (key) => translations[language][key];

  const ethiopianRegions = [
    'addisAbaba', 'afar', 'amhara', 'benishangul', 'dire', 
    'gambela', 'harari', 'oromia', 'sidama', 'snnp', 'somali', 'tigray'
  ];

  const ethiopianBanks = [
    'cbe', 'dashen', 'awash', 'bank', 'wegagen', 
    'united', 'nib', 'cooperative', 'lion', 'zemen'
  ];

  const mobileMoneyProviders = ['telebirr', 'mbirr', 'helloWallet'];

  const handleInputChange = (field, value) => {
    setVerificationData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (field, file) => {
    setVerificationData(prev => ({ ...prev, [field]: file }));
  };

  const validateStep = (stepNum) => {
    const errors = [];
    
    if (stepNum === 1) {
      if (!verificationData.idType) errors.push(t('idTypeRequired'));
      if (!verificationData.idNumber) errors.push(t('idNumberRequired'));
      if (!verificationData.idFile) errors.push(t('idFileRequired'));
      if (!verificationData.selfieFile) errors.push(t('selfieRequired'));
      if (!verificationData.fullName) errors.push(t('nameRequired'));
      if (!verificationData.dateOfBirth) errors.push(t('dobRequired'));
      if (!verificationData.address) errors.push(t('addressRequired'));
      if (!verificationData.city) errors.push(t('cityRequired'));
      if (!verificationData.region) errors.push(t('regionRequired'));
    }
    
    if (stepNum === 2) {
      if (!verificationData.bankAccount) errors.push(t('bankAccountRequired'));
      if (!verificationData.bankName) errors.push(t('bankNameRequired'));
    }
    
    return errors;
  };

  const handleNext = () => {
    const errors = validateStep(step);
    if (errors.length === 0) {
      setStep(prev => Math.min(prev + 1, 3));
    } else {
      alert(errors.join('\n'));
    }
  };

  const handlePrevious = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    const errors = validateStep(2);
    if (errors.length > 0) {
      alert(errors.join('\n'));
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setVerificationStatus('pending');
      alert(t('submissionSuccess') + '\n\n' + t('submissionNote'));
      navigate('/dashboard');
    }, 3000);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            {/* ID Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                {t('governmentId')} *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {['nationalId', 'passport', 'drivingLicense'].map(type => (
                  <label key={type} className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="idType"
                      value={type}
                      checked={verificationData.idType === type}
                      onChange={(e) => handleInputChange('idType', e.target.value)}
                      className="text-orange-500"
                    />
                    <span className="ml-3 font-medium">{t(type)}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* ID Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('idNumber')} *
              </label>
              <input
                type="text"
                value={verificationData.idNumber}
                onChange={(e) => handleInputChange('idNumber', e.target.value)}
                placeholder={t('idNumberPlaceholder')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              />
            </div>

            {/* Personal Details */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('personalDetails')}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('fullName')} *
                  </label>
                  <input
                    type="text"
                    value={verificationData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder={t('fullNamePlaceholder')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('dateOfBirth')} *
                  </label>
                  <input
                    type="date"
                    value={verificationData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                    max={new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split('T')[0]}
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('address')} *
                </label>
                <textarea
                  value={verificationData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder={t('addressPlaceholder')}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('city')} *
                  </label>
                  <input
                    type="text"
                    value={verificationData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    placeholder={t('cityPlaceholder')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('region')} *
                  </label>
                  <select
                    value={verificationData.region}
                    onChange={(e) => handleInputChange('region', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  >
                    <option value="">{t('selectRegion')}</option>
                    {ethiopianRegions.map(region => (
                      <option key={region} value={region}>{t(region)}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* File Uploads */}
            <div className="border-t pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('uploadId')} *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-500 transition-colors">
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={(e) => handleFileUpload('idFile', e.target.files[0])}
                      className="hidden"
                      id="id-upload"
                    />
                    <label htmlFor="id-upload" className="cursor-pointer">
                      <div className="text-4xl mb-2">📄</div>
                      <div className="text-sm text-gray-600">
                        {verificationData.idFile ? verificationData.idFile.name : t('chooseFile')}
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('uploadSelfie')} *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-500 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload('selfieFile', e.target.files[0])}
                      className="hidden"
                      id="selfie-upload"
                    />
                    <label htmlFor="selfie-upload" className="cursor-pointer">
                      <div className="text-4xl mb-2">🤳</div>
                      <div className="text-sm text-gray-600">
                        {verificationData.selfieFile ? verificationData.selfieFile.name : t('chooseFile')}
                      </div>
                    </label>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">{t('selfieNote')}</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            {/* Bank Details */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Bank Account Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('bankName')} *
                  </label>
                  <select
                    value={verificationData.bankName}
                    onChange={(e) => handleInputChange('bankName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  >
                    <option value="">{t('selectBank')}</option>
                    {ethiopianBanks.map(bank => (
                      <option key={bank} value={bank}>{t(bank)}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('bankAccount')} *
                  </label>
                  <input
                    type="text"
                    value={verificationData.bankAccount}
                    onChange={(e) => handleInputChange('bankAccount', e.target.value)}
                    placeholder={t('bankAccountPlaceholder')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>
            </div>

            {/* Mobile Money (Optional) */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Mobile Money (Optional)</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('mobileMoneyProvider')}
                  </label>
                  <select
                    value={verificationData.mobileMoneyProvider}
                    onChange={(e) => handleInputChange('mobileMoneyProvider', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  >
                    <option value="">{t('selectProvider')}</option>
                    {mobileMoneyProviders.map(provider => (
                      <option key={provider} value={provider}>{t(provider)}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('mobileMoneyAccount')}
                  </label>
                  <input
                    type="text"
                    value={verificationData.mobileMoneyAccount}
                    onChange={(e) => handleInputChange('mobileMoneyAccount', e.target.value)}
                    placeholder={t('mobileMoneyPlaceholder')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Review Your Information</h3>
            
            {/* Identity Information */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-800 mb-4">Identity Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">ID Type:</span>
                  <span className="ml-2">{t(verificationData.idType)}</span>
                </div>
                <div>
                  <span className="font-medium">ID Number:</span>
                  <span className="ml-2">{verificationData.idNumber}</span>
                </div>
                <div>
                  <span className="font-medium">Full Name:</span>
                  <span className="ml-2">{verificationData.fullName}</span>
                </div>
                <div>
                  <span className="font-medium">Date of Birth:</span>
                  <span className="ml-2">{verificationData.dateOfBirth}</span>
                </div>
                <div className="md:col-span-2">
                  <span className="font-medium">Address:</span>
                  <span className="ml-2">{verificationData.address}</span>
                </div>
                <div>
                  <span className="font-medium">City:</span>
                  <span className="ml-2">{verificationData.city}</span>
                </div>
                <div>
                  <span className="font-medium">Region:</span>
                  <span className="ml-2">{t(verificationData.region)}</span>
                </div>
              </div>
            </div>

            {/* Banking Information */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-800 mb-4">Banking Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Bank:</span>
                  <span className="ml-2">{t(verificationData.bankName)}</span>
                </div>
                <div>
                  <span className="font-medium">Account Number:</span>
                  <span className="ml-2">{verificationData.bankAccount}</span>
                </div>
                {verificationData.mobileMoneyProvider && (
                  <>
                    <div>
                      <span className="font-medium">Mobile Money:</span>
                      <span className="ml-2">{t(verificationData.mobileMoneyProvider)}</span>
                    </div>
                    <div>
                      <span className="font-medium">Mobile Number:</span>
                      <span className="ml-2">{verificationData.mobileMoneyAccount}</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Uploaded Files */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-800 mb-4">Uploaded Documents</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>ID Document: {verificationData.idFile?.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>Selfie with ID: {verificationData.selfieFile?.name}</span>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-2">⚠️ Important Notice</h4>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Your information will be kept secure and confidential</li>
                <li>• Verification typically takes 24-48 hours</li>
                <li>• You'll receive email notification once reviewed</li>
                <li>• Only verified users can create campaigns and receive funds</li>
              </ul>
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
                ← {t('backToDashboard')}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-700 to-orange-500 text-transparent bg-clip-text">
              🔒 {t('verification')}
            </h1>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h2 className="font-semibold text-blue-800 mb-2">{t('verificationRequired')}</h2>
              <p className="text-blue-700 text-sm">{t('verificationNote')}</p>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              {[1, 2, 3].map((stepNum) => (
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
                  {stepNum < 3 && (
                    <div className={`flex-1 h-1 rounded transition-all duration-300 ${
                      stepNum < step ? 'bg-green-500' : 'bg-gray-300'
                    }`} />
                  )}
                </React.Fragment>
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className={`text-xs text-center ${step === 1 ? 'text-orange-500 font-medium' : 'text-gray-500'}`}>
                {t('identityVerification')}
              </div>
              <div className={`text-xs text-center ${step === 2 ? 'text-orange-500 font-medium' : 'text-gray-500'}`}>
                {t('bankingDetails')}
              </div>
              <div className={`text-xs text-center ${step === 3 ? 'text-orange-500 font-medium' : 'text-gray-500'}`}>
                {t('reviewSubmit')}
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

              {step < 3 ? (
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
                    <>🔒 {t('submit')}</>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
