import React, { useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';

const AdminReportsPage = ({ language, setLanguage }) => {
  const translations = {
    en: {
      title: 'Reports',
      searchPlaceholder: 'Search reports...',
      open: 'open',
      investigating: 'investigating',
      resolved: 'resolved',
      all: 'all',
      reason: 'Reason',
      reporter: 'Reporter',
      view: 'View',
      resolve: 'Resolve',
      escalate: 'Escalate',
      noMatch: 'No reports match filters'
    },
    am: {
      title: 'ሪፖርቶች',
      searchPlaceholder: 'ሪፖርቶችን ፈልግ...',
      open: 'ክፍት',
      investigating: 'በመመርመር ላይ',
      resolved: 'ተፈታ',
      all: 'ሁሉም',
      reason: 'ምክንያት',
      reporter: 'መዘገቢያ',
      view: 'እይ',
      resolve: 'ፍታ',
      escalate: 'ከፍ አድርግ',
      noMatch: 'ምንም ሪፖርቶች አልተገኙም'
    }
  };
  const t = (k) => translations[language][k];
  const [reports, setReports] = useState([]);
  const [filter, setFilter] = useState('open');
  const [search, setSearch] = useState('');

  useEffect(()=>{
    const data = [
      { id:101, type:'campaign', subject:'Water Well for Rural Community', reporter:'Anonymous', reason:'Potential duplicate', severity:'medium', status:'open', created: Date.now()-3600000 },
      { id:102, type:'user', subject:'Bekele M.', reporter:'System', reason:'Multiple failed verifications', severity:'high', status:'investigating', created: Date.now()-7200000 },
      { id:103, type:'campaign', subject:'Emergency Surgery for Almaz', reporter:'User123', reason:'Suspicious spikes in donations', severity:'high', status:'open', created: Date.now()-8600000 }
    ];
    setReports(data);
  },[]);

  const filtered = reports.filter(r => (filter==='all'|| r.status===filter) && (r.subject.toLowerCase().includes(search.toLowerCase()) || r.reason.toLowerCase().includes(search.toLowerCase())));

  return (
    <AdminLayout language={language} setLanguage={setLanguage}>
      <h1 className="text-2xl font-bold mb-6">🚨 {t('title')}</h1>
      <div className="flex flex-wrap gap-3 mb-6 items-center">
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder={t('searchPlaceholder')} className="px-3 py-2 rounded-lg bg-gray-900/40 border border-gray-700 text-sm focus:outline-none focus:border-orange-500" />
        <div className="flex gap-2 text-xs font-medium">
          {['open','investigating','resolved','all'].map(s => <button key={s} onClick={()=>setFilter(s)} className={`px-3 py-1 rounded-full border ${filter===s? 'bg-orange-500 border-orange-500 text-white':'border-gray-600 hover:bg-gray-800 text-gray-300'}`}>{t(s)}</button>)}
        </div>
      </div>
      <div className="grid gap-4">
        {filtered.map(r => (
          <div key={r.id} className="p-4 rounded-xl bg-gray-900/50 border border-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="space-y-1">
              <div className="text-sm font-semibold text-gray-100">{r.subject} <span className="text-xs font-normal text-gray-400">({r.type})</span></div>
              <div className="text-xs text-gray-400">{t('reason')}: {r.reason}</div>
              <div className="text-xs text-gray-500">{t('reporter')}: {r.reporter}</div>
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 rounded-full text-xs ${r.severity==='high'?'bg-red-600/30 text-red-300': r.severity==='medium'? 'bg-yellow-600/30 text-yellow-200':'bg-green-600/30 text-green-300'}`}>{r.severity}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${r.status==='open'?'bg-red-500/30 text-red-200': r.status==='investigating'? 'bg-yellow-500/30 text-yellow-200': r.status==='resolved'? 'bg-green-500/30 text-green-200':'bg-gray-500/30 text-gray-200'}`}>{t(r.status)}</span>
              <button className="px-3 py-1 text-xs rounded bg-blue-600/60 hover:bg-blue-600">{t('view')}</button>
              <button className="px-3 py-1 text-xs rounded bg-green-600/60 hover:bg-green-600">{t('resolve')}</button>
              <button className="px-3 py-1 text-xs rounded bg-gray-700 hover:bg-gray-600">{t('escalate')}</button>
            </div>
          </div>
        ))}
        {filtered.length===0 && <div className="text-sm text-gray-500 p-6 text-center border border-dashed border-gray-600 rounded-xl">{t('noMatch')}</div>}
      </div>
    </AdminLayout>
  );
};

export default AdminReportsPage;
