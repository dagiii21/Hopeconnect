import React, { useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';

const AdminSupportPage = ({ language, setLanguage }) => {
  const translations = {
    en: {
      title: 'Support Tickets',
      open: 'open',
      closed: 'closed',
      all: 'all',
      user: 'User',
      priority: 'Priority',
      view: 'View',
      reply: 'Reply',
      close: 'Close',
      none: 'No tickets'
    },
    am: {
      title: 'የድጋፍ ቲኬቶች',
      open: 'ክፍት',
      closed: 'ተዘግቷል',
      all: 'ሁሉም',
      user: 'ተጠቃሚ',
      priority: 'ቅድሚያ',
      view: 'እይ',
      reply: 'መልስ',
      close: 'ዝጋ',
      none: 'ምንም ቲኬት የለ'
    }
  };
  const t = (k) => translations[language][k];
  const [tickets, setTickets] = useState([]);
  const [status, setStatus] = useState('open');

  useEffect(()=>{
    setTickets([
      { id:501, subject:'Unable to upload document', user:'Sarah W.', priority:'medium', status:'open', created: Date.now()-3600000 },
      { id:502, subject:'Donation not reflected', user:'John D.', priority:'high', status:'open', created: Date.now()-7200000 },
      { id:503, subject:'Incorrect verification status', user:'Bekele M.', priority:'low', status:'closed', created: Date.now()-8600000 }
    ]);
  },[]);

  const filtered = tickets.filter(t => status==='all'|| t.status===status);

  return (
    <AdminLayout language={language} setLanguage={setLanguage}>
    <h1 className="text-2xl font-bold mb-6">🎧 {t('title')}</h1>
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="flex gap-2 text-xs font-medium">
      {['open','closed','all'].map(s => <button key={s} onClick={()=>setStatus(s)} className={`px-3 py-1 rounded-full border ${status===s? 'bg-orange-500 border-orange-500 text-white':'border-gray-600 hover:bg-gray-800 text-gray-300'}`}>{t(s)}</button>)}
        </div>
      </div>
      <div className="space-y-4">
        {filtered.map(t => (
          <div key={t.id} className="p-4 rounded-xl bg-gray-900/50 border border-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="space-y-1">
              <div className="text-sm font-semibold text-gray-100">{t.subject}</div>
        <div className="text-xs text-gray-400">{t('user')}: {tk.user}</div>
        <div className="text-xs text-gray-500">{t('priority')}: <span className={`px-2 py-0.5 rounded-full ${tk.priority==='high'?'bg-red-600/30 text-red-300': tk.priority==='medium'?'bg-yellow-600/30 text-yellow-200':'bg-green-600/30 text-green-300'}`}>{tk.priority}</span></div>
            </div>
            <div className="flex items-center gap-2">
        <span className={`px-2 py-1 rounded-full text-xs ${tk.status==='open'?'bg-yellow-500/30 text-yellow-200':'bg-green-500/30 text-green-200'}`}>{t(tk.status)}</span>
        <button className="px-3 py-1 text-xs rounded bg-blue-600/60 hover:bg-blue-600">{t('view')}</button>
        <button className="px-3 py-1 text-xs rounded bg-green-600/60 hover:bg-green-600">{t('reply')}</button>
        <button className="px-3 py-1 text-xs rounded bg-gray-700 hover:bg-gray-600">{t('close')}</button>
            </div>
          </div>
        ))}
    {filtered.length===0 && <div className="text-sm text-gray-500 p-6 text-center border border-dashed border-gray-600 rounded-xl">{t('none')}</div>}
      </div>
    </AdminLayout>
  );
};

export default AdminSupportPage;
