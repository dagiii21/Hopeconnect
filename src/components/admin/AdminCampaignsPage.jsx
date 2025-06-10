import React, { useState, useEffect } from 'react';
import AdminLayout from './AdminLayout';

const AdminCampaignsPage = ({ language, setLanguage }) => {
  const translations = {
    en: {
      moderation: 'Campaign Moderation',
      active: 'active',
      pending: 'pending',
      flagged: 'flagged',
      all: 'all',
      title: 'Title',
      owner: 'Owner',
      progress: 'Progress',
      severity: 'Severity',
      verified: 'Verified',
      reports: 'Reports',
      status: 'Status',
      actions: 'Actions',
      view: 'View',
      approve: 'Approve',
      reject: 'Reject',
      loading: 'Loading campaigns...'
    },
    am: {
      moderation: 'የዘመቻ አስተባባሪ',
      active: 'ንቁ',
      pending: 'በመጠባበቅ',
      flagged: 'ተሰናክሏል',
      all: 'ሁሉም',
      title: 'አርእስት',
      owner: 'ባለቤት',
      progress: 'እድገት',
      severity: 'ጥንቃቄ',
      verified: 'ተረጋግጧል',
      reports: 'ሪፖርቶች',
      status: 'ሁኔታ',
      actions: 'እርምጃዎች',
      view: 'እይ',
      approve: 'አጽድቅ',
      reject: 'ውድቅ',
      loading: 'ዘመቻዎች በመጫን ላይ...'
    }
  };
  const t = (k) => translations[language][k];
  const [tab, setTab] = useState('active');
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // mock campaigns
    const data = [
      { id: 1, title: 'Emergency Surgery for Almaz', owner: 'Almaz T.', raised: 185000, goal: 250000, verified: true, status: 'active', severity: 5, reports: 0 },
      { id: 2, title: 'School Fees for Orphaned Children', owner: 'Hope Orphanage', raised: 85000, goal: 150000, verified: true, status: 'active', severity: 4, reports: 1 },
      { id: 3, title: 'Small Business Recovery', owner: 'Bekele M.', raised: 25000, goal: 75000, verified: false, status: 'pending', severity: 3, reports: 0 },
      { id: 4, title: 'Water Well for Rural Community', owner: 'Rural NGO', raised: 35000, goal: 100000, verified: true, status: 'flagged', severity: 3, reports: 2 }
    ];
    setTimeout(() => { setCampaigns(data); setLoading(false); }, 500);
  }, []);

  const filtered = campaigns.filter(c => {
    if (tab === 'active') return c.status === 'active';
    if (tab === 'pending') return c.status === 'pending';
    if (tab === 'flagged') return c.status === 'flagged';
    return true;
  });

  return (
    <AdminLayout language={language} setLanguage={setLanguage}>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">🎯 {t('moderation')}</h1>
        <div className="flex gap-2 text-sm">
          {['active','pending','flagged','all'].map(key => (
            <button key={key} onClick={() => setTab(key)} className={`px-3 py-1 rounded-full border ${tab===key? 'bg-orange-500 border-orange-500 text-white':'border-gray-600 hover:bg-gray-700'}`}>{t(key)}</button>
          ))}
        </div>
      </div>

  {loading ? (
    <div className="text-gray-400">{t('loading')}</div>
      ) : (
        <div className="overflow-x-auto bg-gray-900/40 border border-gray-700 rounded-xl">
          <table className="w-full text-sm">
            <thead className="bg-gray-800/60">
              <tr className="text-left">
        <th className="px-4 py-3">{t('title')}</th>
        <th className="px-4 py-3">{t('owner')}</th>
        <th className="px-4 py-3">{t('progress')}</th>
        <th className="px-4 py-3">{t('severity')}</th>
        <th className="px-4 py-3">{t('verified')}</th>
        <th className="px-4 py-3">{t('reports')}</th>
        <th className="px-4 py-3">{t('status')}</th>
        <th className="px-4 py-3">{t('actions')}</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(c => {
                const pct = Math.min(100, Math.round((c.raised / c.goal) * 100));
                return (
                  <tr key={c.id} className="border-t border-gray-700/60 hover:bg-gray-800/40">
                    <td className="px-4 py-3 font-medium text-gray-100">{c.title}</td>
                    <td className="px-4 py-3 text-gray-300">{c.owner}</td>
                    <td className="px-4 py-3">
                      <div className="w-40">
                        <div className="flex justify-between text-[11px] text-gray-400 mb-1"><span>{pct}%</span><span>{c.raised}/{c.goal}</span></div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-orange-500 to-pink-500" style={{width: pct+'%'}}></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3"><span className="px-2 py-1 rounded bg-gray-700 text-gray-200 text-xs">{c.severity}</span></td>
                    <td className="px-4 py-3">{c.verified ? '✅':'—'}</td>
                    <td className="px-4 py-3">{c.reports > 0 ? <span className="text-red-400 font-semibold">{c.reports}</span> : '0'}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${c.status==='active'?'bg-green-600/30 text-green-300': c.status==='pending'?'bg-yellow-600/30 text-yellow-300': c.status==='flagged'?'bg-red-600/30 text-red-300':'bg-gray-600/30 text-gray-300'}`}>{c.status}</span>
                    </td>
                    <td className="px-4 py-3 space-x-1 whitespace-nowrap">
          <button className="px-2 py-1 text-xs rounded bg-gray-700 hover:bg-gray-600">{t('view')}</button>
          <button className="px-2 py-1 text-xs rounded bg-green-600/60 hover:bg-green-600">{t('approve')}</button>
          <button className="px-2 py-1 text-xs rounded bg-red-600/60 hover:bg-red-600">{t('reject')}</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminCampaignsPage;
