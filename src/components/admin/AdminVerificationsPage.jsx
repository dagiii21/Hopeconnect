import React, { useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';

const AdminVerificationsPage = ({ language, setLanguage }) => {
  const translations = {
    en: {
      title: 'Verification Requests',
      loading: 'Loading...',
      applicant: 'Applicant',
      email: 'Email',
      document: 'Document',
      preview: 'Document preview mock',
      selectPrompt: 'Select a request to review',
      approve: 'Approve',
      reject: 'Reject',
      pending: 'pending'
    },
    am: {
      title: 'የማረጋገጫ ጥያቄዎች',
      loading: 'በመጫን ላይ...',
      applicant: 'እጩ',
      email: 'ኢሜይል',
      document: 'ሰነድ',
      preview: 'የሰነድ ቅድሚያ ዕይታ ሞክ',
      selectPrompt: 'ለማጥናት ጥያቄ ይምረጡ',
      approve: 'አጽድቅ',
      reject: 'ውድቅ',
      pending: 'በመጠባበቅ'
    }
  };
  const t = (k) => translations[language][k];
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const data = [
      { id: 11, user: 'Sara W.', email: 'sara@example.com', docType: 'National ID', submitted: Date.now()-3600000, status: 'pending' },
      { id: 12, user: 'Michael C.', email: 'michael@example.com', docType: 'Passport', submitted: Date.now()-7200000, status: 'pending' }
    ];
    setTimeout(()=>{ setItems(data); setLoading(false); }, 400);
  }, []);

  return (
    <AdminLayout language={language} setLanguage={setLanguage}>
  <h1 className="text-2xl font-bold mb-6">✅ {t('title')}</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {loading ? <div className="text-gray-400">{t('loading')}</div> : items.map(r => (
            <button key={r.id} onClick={()=>setSelected(r)} className={`w-full text-left p-4 rounded-xl border transition-colors ${selected?.id===r.id? 'border-orange-500 bg-gray-800/60':'border-gray-700 bg-gray-900/40 hover:border-gray-600'}`}>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-gray-100">{r.user}</p>
                  <p className="text-xs text-gray-400">{r.email}</p>
                  <p className="text-xs text-gray-500 mt-1">{r.docType}</p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-yellow-600/30 text-yellow-200">{t(r.status)}</span>
              </div>
            </button>
          ))}
        </div>
        <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 min-h-[280px]">
          {selected ? (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-100">{t('applicant')}: {selected.user}</h2>
              <p className="text-sm text-gray-400">{t('email')}: {selected.email}</p>
              <p className="text-sm text-gray-400">{t('document')}: {selected.docType}</p>
              <div className="h-40 flex items-center justify-center border border-dashed border-gray-600 rounded-lg text-gray-500 text-sm">{t('preview')}</div>
              <div className="flex gap-3 pt-2">
                <button className="flex-1 bg-green-600/70 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm">{t('approve')}</button>
                <button className="flex-1 bg-red-600/70 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm">{t('reject')}</button>
              </div>
            </div>
          ) : (
            <div className="text-gray-500 text-sm h-full flex items-center justify-center">{t('selectPrompt')}</div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminVerificationsPage;
