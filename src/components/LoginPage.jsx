import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = ({ language, setLanguage }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Translations
  const translations = {
    en: {
      title: "Welcome Back to HopeConnect",
      subtitle: "Sign in to continue helping Ethiopian communities",
      email: "Email Address",
      password: "Password",
      rememberMe: "Remember me",
      forgotPassword: "Forgot your password?",
      loginButton: "Sign In",
      noAccount: "Don't have an account?",
      signUp: "Sign up here",
      logo: "HopeConnect",
      backToHome: "Back to Home",
      orSignInWith: "Or sign in with",
      emailPlaceholder: "Enter your email",
      passwordPlaceholder: "Enter your password",
      invalidEmail: "Please enter a valid email address",
      passwordRequired: "Password is required",
      loginError: "Invalid email or password. Please try again.",
      secureLogin: "Secure Login",
      trustedPlatform: "Trusted by 1000+ users",
    },
    am: {
      title: "ወደ HopeConnect እንኳን ደህና መጡ",
      subtitle: "የኢትዮጵያ ማህበረሰቦችን ለመርዳት ይግቡ",
      email: "የኢሜይል አድራሻ",
      password: "የይለፍ ቃል",
      rememberMe: "አስታውሰኝ",
      forgotPassword: "የይለፍ ቃልዎን ረስተዋል?",
      loginButton: "ግባ",
      noAccount: "መለያ የለዎትም?",
      signUp: "እዚህ ይመዝገቡ",
      logo: "HopeConnect",
      backToHome: "ወደ መነሻ ገጽ",
      orSignInWith: "ወይም ይግቡ በ",
      emailPlaceholder: "ኢሜይልዎን ያስገቡ",
      passwordPlaceholder: "የይለፍ ቃልዎን ያስገቡ",
      invalidEmail: "ትክክለኛ የኢሜይል አድራሻ ያስገቡ",
      passwordRequired: "የይለፍ ቃል ያስፈልጋል",
      loginError: "ኢሜይል ወይም የይለፍ ቃል ትክክል አይደለም። እባክዎ እንደገና ይሞክሩ።",
      secureLogin: "ደህንነቱ የተጠበቀ መግቢያ",
      trustedPlatform: "በ1000+ ተጠቃሚዎች የተመከረ",
    },
  };

  const t = (key) => translations[language][key];

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

  const validateForm = () => {
    const newErrors = {};
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = t('invalidEmail');
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = t('invalidEmail');
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = t('passwordRequired');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock successful login
      console.log('Login successful:', formData);
      
      // Redirect to dashboard (for now, back to home)
      navigate('/');
    } catch (error) {
      setErrors({ general: t('loginError') });
    } finally {
      setIsLoading(false);
    }
  };

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

      <div className="max-w-md w-full space-y-8 relative z-10">
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
            
            {/* Trust indicators */}
            <div className="mt-4 flex justify-center space-x-6 text-xs text-gray-500">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                {t('secureLogin')}
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
                {t('trustedPlatform')}
              </div>
            </div>
          </div>

          {/* Login Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {errors.general && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-2xl text-sm animate-slideInDown">
                <div className="flex items-center">
                  <span className="mr-2">⚠️</span>
                  {errors.general}
                </div>
              </div>
            )}

            <div className="space-y-4">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('email')}
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
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
                  <p className="mt-1 text-sm text-red-600 animate-slideInDown">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('password')}
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
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
                  <p className="mt-1 text-sm text-red-600 animate-slideInDown">
                    {errors.password}
                  </p>
                )}
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="rememberMe"
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-orange-500 focus:ring-orange-400 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  {t('rememberMe')}
                </label>
              </div>

              <div className="text-sm">
                <Link to="/forgot-password" className="font-medium text-orange-500 hover:text-orange-400 transition-colors">
                  {t('forgotPassword')}
                </Link>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-2xl text-white bg-gradient-to-r from-gray-700 via-gray-600 to-orange-500 hover:from-gray-800 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 hover-scale hover-glow-warm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Signing in...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <span className="mr-2">🚀</span>
                    {t('loginButton')}
                  </div>
                )}
              </button>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  {t('orSignInWith')}
                </span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-2xl shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-all duration-300 hover-scale"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="ml-2">Google</span>
              </button>

              <button
                type="button"
                className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-2xl shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-all duration-300 hover-scale"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
                <span className="ml-2">Twitter</span>
              </button>
            </div>
          </form>

          {/* Sign Up Link */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              {t('noAccount')}{' '}
              <Link to="/register" className="font-medium text-orange-500 hover:text-orange-400 transition-colors">
                {t('signUp')}
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

export default LoginPage;
