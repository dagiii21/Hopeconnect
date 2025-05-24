import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Dashboard from './components/Dashboard';
import CreateCampaign from './components/CreateCampaign';
import CampaignDetails from './components/CampaignDetails';
import DonatePage from './components/DonatePage';
import ChatPage from './components/ChatPage';
import MessagesPage from './components/MessagesPage';
import VerificationPage from './components/VerificationPage';
import ProfilePage from './components/ProfilePage';
import SettingsPage from './components/SettingsPage';
import AdminDashboard from './components/AdminDashboard';
import SupportPage from './components/SupportPage';
import AboutPage from './components/AboutPage';
import CampaignsPage from './components/CampaignsPage';
import MyDonationsPage from './components/MyDonationsPage';
import MyCampaignsPage from './components/MyCampaignsPage';
import WhyHopeConnectPage from './components/WhyHopeConnectPage';
import ContactUsPage from './components/ContactUsPage';

const App = () => {
  const [language, setLanguage] = useState('en');

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<LandingPage language={language} setLanguage={setLanguage} />} 
        />
        <Route 
          path="/login" 
          element={<LoginPage language={language} setLanguage={setLanguage} />} 
        />
        <Route 
          path="/register" 
          element={<RegisterPage language={language} setLanguage={setLanguage} />} 
        />
        <Route 
          path="/dashboard" 
          element={<Dashboard language={language} setLanguage={setLanguage} />} 
        />
        <Route 
          path="/create-campaign" 
          element={<CreateCampaign language={language} setLanguage={setLanguage} />} 
        />
        <Route 
          path="/campaign/:id" 
          element={<CampaignDetails language={language} setLanguage={setLanguage} />} 
        />
        <Route 
          path="/campaign/:id/donate" 
          element={<DonatePage language={language} setLanguage={setLanguage} />} 
        />
        <Route 
          path="/chat/:contactName" 
          element={<ChatPage language={language} setLanguage={setLanguage} />} 
        />
        <Route 
          path="/messages" 
          element={<MessagesPage language={language} setLanguage={setLanguage} />} 
        />
        <Route 
          path="/verification" 
          element={<VerificationPage language={language} setLanguage={setLanguage} />} 
        />
        <Route 
          path="/profile" 
          element={<ProfilePage language={language} setLanguage={setLanguage} />} 
        />
        <Route 
          path="/settings" 
          element={<SettingsPage language={language} setLanguage={setLanguage} />} 
        />
        <Route 
          path="/admin" 
          element={<AdminDashboard language={language} setLanguage={setLanguage} />} 
        />
        <Route 
          path="/support" 
          element={<SupportPage language={language} setLanguage={setLanguage} />} 
        />
        <Route 
          path="/about" 
          element={<AboutPage language={language} setLanguage={setLanguage} />} 
        />
        <Route 
          path="/why-hopeconnect" 
          element={<WhyHopeConnectPage language={language} setLanguage={setLanguage} />} 
        />
        <Route 
          path="/contact" 
          element={<ContactUsPage language={language} setLanguage={setLanguage} />} 
        />
        
        {/* Additional routes for future pages */}
        <Route 
          path="/campaigns" 
          element={<CampaignsPage language={language} setLanguage={setLanguage} />} 
        />
        <Route 
          path="/my-campaigns" 
          element={<MyCampaignsPage language={language} setLanguage={setLanguage} />} 
        />
        <Route 
          path="/donations" 
          element={<MyDonationsPage language={language} setLanguage={setLanguage} />} 
        />
        <Route 
          path="/old-profile" 
          element={<Dashboard language={language} setLanguage={setLanguage} />} 
        />
      </Routes>
    </Router>
  );
};

export default App;