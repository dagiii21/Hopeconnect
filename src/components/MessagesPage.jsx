import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthenticatedHeader from './AuthenticatedHeader';

const MessagesPage = ({ language, setLanguage }) => {
  const [conversations, setConversations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all'); // all, unread, donors, seekers

  const translations = {
    en: {
      messages: "Messages",
  // backToDashboard removed (header standardized)
      searchMessages: "Search conversations...",
      allMessages: "All Messages",
      unreadOnly: "Unread Only",
      fromDonors: "From Donors",
      fromSeekers: "From Seekers",
      
      // Message list
      noMessages: "No messages yet",
      startConversation: "Start a conversation by donating to a campaign",
      newMessage: "New message",
      lastSeen: "Last seen",
      online: "Online",
      offline: "Offline",
      unread: "unread",
      
      // Time formatting
      justNow: "Just now",
      minutesAgo: "minutes ago",
      hoursAgo: "hours ago",
      yesterday: "Yesterday",
      daysAgo: "days ago",
      
      logo: "HopeConnect"
    },
    am: {
      messages: "መልዕክቶች",
  // backToDashboard removed
      searchMessages: "ውይይቶችን ይፈልጉ...",
      allMessages: "ሁሉም መልዕክቶች",
      unreadOnly: "ያልተነበቡ ብቻ",
      fromDonors: "ከለጋሾች",
      fromSeekers: "ከጠያቂዎች",
      
      // Message list
      noMessages: "እስካሁን መልዕክቶች የሉም",
      startConversation: "ለዘመቻ በመለገስ ውይይት ይጀምሩ",
      newMessage: "አዲስ መልዕክት",
      lastSeen: "መጨረሻ የታየ",
      online: "መስመር ላይ",
      offline: "መስመር ውጭ",
      unread: "ያልተነበበ",
      
      // Time formatting
      justNow: "አሁን",
      minutesAgo: "ደቂቃዎች በፊት",
      hoursAgo: "ሰአታት በፊት",
      yesterday: "ትናንት",
      daysAgo: "ቀናት በፊት",
      
      logo: "HopeConnect"
    }
  };

  const t = (key) => translations[language][key];

  useEffect(() => {
    // Mock conversations data (instant load)
    const mockConversations = [
      {
        id: 1,
        contactName: 'Almaz Tesfaye',
        contactType: 'seeker',
        lastMessage: 'Thank you so much for your donation! The surgery is scheduled for August 15th.',
        timestamp: '2025-07-14T15:30:00Z',
        unreadCount: 2,
        isOnline: true,
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612c0bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
        campaignTitle: 'Emergency Surgery for Almaz'
      },
      {
        id: 2,
        contactName: 'Hope Orphanage',
        contactType: 'seeker',
        lastMessage: 'We have received your donation. The children are so grateful!',
        timestamp: '2025-07-14T12:45:00Z',
        unreadCount: 0,
        isOnline: false,
        lastSeen: '2025-07-14T14:20:00Z',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
        campaignTitle: 'School Fees for Orphaned Children'
      },
      {
        id: 3,
        contactName: 'Bekele Mamo',
        contactType: 'seeker',
        lastMessage: 'I will update you once I restart my business. Thank you for believing in me.',
        timestamp: '2025-07-13T18:15:00Z',
        unreadCount: 0,
        isOnline: false,
        lastSeen: '2025-07-14T09:30:00Z',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
        campaignTitle: 'Small Business Recovery'
      },
      {
        id: 4,
        contactName: 'Sarah Johnson',
        contactType: 'donor',
        lastMessage: 'I saw your campaign and wanted to help. How can I make a donation?',
        timestamp: '2025-07-13T16:20:00Z',
        unreadCount: 1,
        isOnline: true,
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
        campaignTitle: null
      }
    ];

  setConversations(mockConversations);
  }, []);

  const formatTime = (timestamp) => {
    const now = new Date();
    const messageTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now - messageTime) / (1000 * 60));
    
    if (diffInMinutes < 1) return t('justNow');
    if (diffInMinutes < 60) return `${diffInMinutes} ${t('minutesAgo')}`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours} ${t('hoursAgo')}`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays === 1) return t('yesterday');
    if (diffInDays < 7) return `${diffInDays} ${t('daysAgo')}`;
    
    return messageTime.toLocaleDateString();
  };

  const filteredConversations = conversations.filter(conv => {
    const matchesSearch = conv.contactName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         conv.lastMessage.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (!matchesSearch) return false;
    
    switch (filter) {
      case 'unread':
        return conv.unreadCount > 0;
      case 'donors':
        return conv.contactType === 'donor';
      case 'seekers':
        return conv.contactType === 'seeker';
      default:
        return true;
    }
  });

  const totalUnreadCount = conversations.reduce((total, conv) => total + conv.unreadCount, 0);

  // Removed loading spinner – messages show instantly

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-beige via-gray-50 to-warm-gray">
      {/* Unified Authenticated Header */}
      <AuthenticatedHeader language={language} setLanguage={setLanguage} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Page Header */}
          <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-700 to-orange-500 text-transparent bg-clip-text flex items-center">
              <span className="mr-2">💬</span>{t('messages')}
            </h1>
            {totalUnreadCount > 0 && (
              <div className="bg-red-500/90 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-semibold shadow">
                {totalUnreadCount} {t('unread')}
              </div>
            )}
          </div>

          {/* Search and Filters */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* Search */}
              <div className="md:col-span-2">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={t('searchMessages')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                />
              </div>
              
              {/* Filters */}
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'all'
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t('allMessages')}
              </button>
              
              <button
                onClick={() => setFilter('unread')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'unread'
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t('unreadOnly')}
              </button>
              
              <button
                onClick={() => setFilter('seekers')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === 'seekers'
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t('fromSeekers')}
              </button>
            </div>
          </div>

          {/* Messages List */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {filteredConversations.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  {t('noMessages')}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t('startConversation')}
                </p>
                <Link 
                  to="/dashboard"
                  className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:from-orange-500 hover:to-orange-600 transition-all duration-300"
                >
                  Browse Campaigns
                </Link>
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {filteredConversations.map(conversation => (
                  <Link
                    key={conversation.id}
                    to={`/chat/${conversation.contactName}`}
                    className="block hover:bg-gray-50 transition-colors"
                  >
                    <div className="p-6">
                      <div className="flex items-center space-x-4">
                        {/* Avatar */}
                        <div className="relative">
                          <img
                            src={conversation.avatar}
                            alt={conversation.contactName}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          {conversation.isOnline && (
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                          )}
                          {conversation.unreadCount > 0 && (
                            <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                              {conversation.unreadCount}
                            </div>
                          )}
                        </div>

                        {/* Conversation Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center space-x-2">
                              <h3 className={`font-semibold truncate ${
                                conversation.unreadCount > 0 ? 'text-gray-900' : 'text-gray-700'
                              }`}>
                                {conversation.contactName}
                              </h3>
                              
                              {/* User type badge */}
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                conversation.contactType === 'donor'
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-green-100 text-green-800'
                              }`}>
                                {conversation.contactType === 'donor' ? '💝 Donor' : '📋 Seeker'}
                              </span>
                            </div>
                            
                            <span className="text-sm text-gray-500">
                              {formatTime(conversation.timestamp)}
                            </span>
                          </div>
                          
                          {/* Campaign title if applicable */}
                          {conversation.campaignTitle && (
                            <p className="text-xs text-gray-500 mb-1">
                              Campaign: {conversation.campaignTitle}
                            </p>
                          )}
                          
                          {/* Last message */}
                          <p className={`text-sm truncate ${
                            conversation.unreadCount > 0 ? 'text-gray-900 font-medium' : 'text-gray-600'
                          }`}>
                            {conversation.lastMessage}
                          </p>
                          
                          {/* Online/offline status */}
                          <div className="flex items-center space-x-2 mt-1">
                            <div className={`w-2 h-2 rounded-full ${
                              conversation.isOnline ? 'bg-green-500' : 'bg-gray-400'
                            }`}></div>
                            <span className="text-xs text-gray-500">
                              {conversation.isOnline 
                                ? t('online')
                                : conversation.lastSeen 
                                  ? `${t('lastSeen')} ${formatTime(conversation.lastSeen)}`
                                  : t('offline')
                              }
                            </span>
                          </div>
                        </div>

                        {/* Chevron */}
                        <div className="text-gray-400">
                          →
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Chat Guidelines */}
          <div className="mt-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">💡 Chat Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">For Donors:</h4>
                <ul className="space-y-1">
                  <li>• Ask about campaign progress</li>
                  <li>• Request updates on fund usage</li>
                  <li>• Share words of encouragement</li>
                  <li>• Report any suspicious behavior</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">For Seekers:</h4>
                <ul className="space-y-1">
                  <li>• Thank your donors personally</li>
                  <li>• Share campaign updates</li>
                  <li>• Be transparent about fund usage</li>
                  <li>• Respond to messages promptly</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
