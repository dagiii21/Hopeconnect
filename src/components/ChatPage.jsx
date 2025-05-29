import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const ChatPage = ({ language, setLanguage }) => {
  const { contactName } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [user] = useState({ name: 'John Doe', type: 'donor' });
  const messagesEndRef = useRef(null);

  const translations = {
    en: {
      chatWith: "Chat with",
      backToMessages: "Back to Messages",
      typeMessage: "Type your message...",
      send: "Send",
      online: "Online",
      offline: "Offline",
      typing: "is typing...",
      
      // Message status
      delivered: "Delivered",
      read: "Read",
      
      // Moderation warnings
      messageFiltered: "Message filtered for inappropriate content",
      reportUser: "Report User",
      blockUser: "Block User",
      
      // Chat guidelines
      chatGuidelines: "Chat Guidelines",
      respectful: "• Be respectful and kind",
      noSpam: "• No spam or promotional content", 
      noPersonalInfo: "• Don't share personal financial information",
      reportAbuse: "• Report any abusive behavior",
      
      logo: "HopeConnect"
    },
    am: {
      chatWith: "ከ ጋር ይወያዩ",
      backToMessages: "ወደ መልዕክቶች መመለስ",
      typeMessage: "መልዕክትዎን ይተይቡ...",
      send: "ላክ",
      online: "መስመር ላይ",
      offline: "መስመር ውጭ", 
      typing: "እየተየበ ነው...",
      
      // Message status
      delivered: "ደርሷል",
      read: "ተነቧል",
      
      // Moderation warnings
      messageFiltered: "መልዕክት ተገቢ ላልሆነ ይዘት ተጣርቷል",
      reportUser: "ተጠቃሚ ሪፖርት ያድርጉ",
      blockUser: "ተጠቃሚ ያግዱ",
      
      // Chat guidelines
      chatGuidelines: "የመወያያ መመሪያዎች",
      respectful: "• ሞገስ እና ደግ ይሁኑ",
      noSpam: "• ስፓም ወይም የማስተዋወቂያ ይዘት የለም",
      noPersonalInfo: "• የግል የፋይናንስ መረጃ አያጋሩ",
      reportAbuse: "• ማንኛውንም አላግባብ መጠቀም ሪፖርት ያድርጉ",
      
      logo: "HopeConnect"
    }
  };

  const t = (key) => translations[language][key];

  useEffect(() => {
    // Mock chat data
    const mockMessages = [
      {
        id: 1,
        sender: contactName,
        message: 'Thank you so much for your donation! It means the world to me and my family.',
        timestamp: '2025-07-14T10:30:00Z',
        status: 'read'
      },
      {
        id: 2,
        sender: user.name,
        message: 'I\'m happy to help. How is your preparation for the surgery going?',
        timestamp: '2025-07-14T10:35:00Z',
        status: 'read'
      },
      {
        id: 3,
        sender: contactName,
        message: 'The doctors have scheduled it for August 15th. I have all the necessary tests done now.',
        timestamp: '2025-07-14T10:37:00Z',
        status: 'read'
      },
      {
        id: 4,
        sender: user.name,
        message: 'That\'s great news! I\'ll be keeping you in my thoughts and prayers.',
        timestamp: '2025-07-14T10:40:00Z',
        status: 'delivered'
      }
    ];

    setTimeout(() => {
      setMessages(mockMessages);
      setIsLoading(false);
    }, 1000);
  }, [contactName, user.name]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const filterMessage = (message) => {
    // Simple keyword filtering for inappropriate content
    const inappropriateWords = ['spam', 'scam', 'money transfer', 'bank account', 'password'];
    const lowerMessage = message.toLowerCase();
    
    return inappropriateWords.some(word => lowerMessage.includes(word));
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    // Check for inappropriate content
    if (filterMessage(newMessage)) {
      alert(t('messageFiltered'));
      setNewMessage('');
      return;
    }

    const message = {
      id: messages.length + 1,
      sender: user.name,
      message: newMessage,
      timestamp: new Date().toISOString(),
      status: 'delivered'
    };

    setMessages(prev => [...prev, message]);
    setNewMessage('');

    // Simulate typing indicator and response
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      
      // Mock auto-response
      const responses = [
        'Thank you for your message!',
        'I appreciate your support.',
        'This means so much to me.',
        'God bless you for your kindness.'
      ];
      
      const autoResponse = {
        id: messages.length + 2,
        sender: contactName,
        message: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date().toISOString(),
        status: 'delivered'
      };
      
      setMessages(prev => [...prev, autoResponse]);
    }, 2000 + Math.random() * 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-warm-beige via-gray-50 to-warm-gray flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading chat...</p>
        </div>
      </div>
    );
  }

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
              
              <Link to="/messages" className="text-white hover:text-orange-200 transition-colors">
                ← {t('backToMessages')}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Chat Container */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 overflow-hidden h-[600px] flex flex-col">
          
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-gray-100 to-gray-50 px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  {contactName.charAt(0)}
                </div>
                <div>
                  <h2 className="font-semibold text-gray-800">
                    {t('chatWith')} {contactName}
                  </h2>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-600">{t('online')}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="text-gray-500 hover:text-red-500 transition-colors text-sm">
                  {t('reportUser')}
                </button>
                <button className="text-gray-500 hover:text-red-500 transition-colors text-sm">
                  {t('blockUser')}
                </button>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message, index) => {
              const isOwn = message.sender === user.name;
              const showDate = index === 0 || 
                formatDate(message.timestamp) !== formatDate(messages[index - 1].timestamp);
              
              return (
                <div key={message.id}>
                  {/* Date separator */}
                  {showDate && (
                    <div className="text-center text-xs text-gray-500 my-4">
                      {formatDate(message.timestamp)}
                    </div>
                  )}
                  
                  {/* Message */}
                  <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                      isOwn 
                        ? 'bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-br-sm'
                        : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                    }`}>
                      <p className="text-sm whitespace-pre-wrap">{message.message}</p>
                      <div className={`flex items-center justify-end space-x-1 mt-1 text-xs ${
                        isOwn ? 'text-orange-100' : 'text-gray-500'
                      }`}>
                        <span>{formatTime(message.timestamp)}</span>
                        {isOwn && (
                          <span className="flex items-center">
                            {message.status === 'delivered' && '✓'}
                            {message.status === 'read' && '✓✓'}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-600 px-4 py-2 rounded-2xl rounded-bl-sm">
                  <div className="flex items-center space-x-1">
                    <span className="text-sm">{contactName} {t('typing')}</span>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-1 h-1 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex space-x-3">
              <div className="flex-1 relative">
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t('typeMessage')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-orange-500 resize-none max-h-24"
                  rows="1"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <span className="text-xs text-gray-400">
                    {newMessage.length}/500
                  </span>
                </div>
              </div>
              
              <button
                onClick={handleSendMessage}
                disabled={!newMessage.trim()}
                className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  newMessage.trim()
                    ? 'bg-gradient-to-r from-orange-400 to-orange-500 text-white hover:from-orange-500 hover:to-orange-600'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {t('send')} 📤
              </button>
            </div>
          </div>
        </div>

        {/* Chat Guidelines */}
        <div className="mt-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-3">{t('chatGuidelines')}</h3>
          <div className="text-sm text-gray-600 space-y-1">
            <p>{t('respectful')}</p>
            <p>{t('noSpam')}</p>
            <p>{t('noPersonalInfo')}</p>
            <p>{t('reportAbuse')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
