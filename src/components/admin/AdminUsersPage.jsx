import React, { useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';

const AdminUsersPage = ({ language, setLanguage }) => {
  const translations = {
    en: {
      title: 'Users',
      search: 'Search users...',
      all: 'all',
      donor: 'donor',
      seeker: 'seeker',
      admin: 'admin',
      name: 'Name',
      email: 'Email',
      role: 'Role',
      verified: 'Verified',
      status: 'Status',
      actions: 'Actions',
      view: 'View',
      roleBtn: 'Role',
      suspend: 'Suspend',
      restore: 'Restore'
    },
    am: {
      title: 'ተጠቃሚዎች',
      search: 'ተጠቃሚዎችን ፈልግ...',
      all: 'ሁሉም',
      donor: 'ዶነር',
      seeker: 'ፈላጊ',
      admin: 'አስተዳዳሪ',
      name: 'ስም',
      email: 'ኢሜይል',
      role: 'ሚና',
      verified: 'ተረጋግጧል',
      status: 'ሁኔታ',
      actions: 'እርምጃዎች',
      view: 'እይ',
      roleBtn: 'ሚና',
      suspend: 'አገድ',
      restore: 'መመለስ'
    }
  };
  const t = (k) => translations[language][k];
  const [users, setUsers] = useState([]);
  const [role, setRole] = useState('all');
  const [search, setSearch] = useState('');

  useEffect(()=>{
    const data = [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'donor', verified:true, status:'active', donations:15 },
      { id: 2, name: 'Sarah Wilson', email: 'sarah@example.com', role: 'seeker', verified:false, status:'active', campaigns:2 },
      { id: 3, name: 'Admin User', email: 'admin@example.com', role: 'admin', verified:true, status:'active' },
      { id: 4, name: 'Michael Chen', email: 'michael@example.com', role: 'seeker', verified:true, status:'suspended', campaigns:1 }
    ];
    setUsers(data);
  },[]);

  const filtered = users.filter(u => (role==='all'||u.role===role) && (u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase())));

  return (
    <AdminLayout language={language} setLanguage={setLanguage}>
      <h1 className="text-2xl font-bold mb-6">👥 {t('title')}</h1>
      <div className="flex flex-wrap gap-3 mb-6 items-center">
        <input value={search} onChange={e=>setSearch(e.target.value)} placeholder={t('search')} className="px-3 py-2 rounded-lg bg-gray-900/40 border border-gray-700 text-sm focus:outline-none focus:border-orange-500" />
        <div className="flex gap-2 text-xs font-medium">
          {['all','donor','seeker','admin'].map(r => <button key={r} onClick={()=>setRole(r)} className={`px-3 py-1 rounded-full border ${role===r? 'bg-orange-500 border-orange-500 text-white':'border-gray-600 hover:bg-gray-800 text-gray-300'}`}>{t(r)}</button>)}
        </div>
      </div>
      <div className="overflow-x-auto bg-gray-900/40 border border-gray-700 rounded-xl">
        <table className="w-full text-sm">
          <thead className="bg-gray-800/60">
            <tr className="text-left">
              <th className="px-4 py-3">{t('name')}</th>
              <th className="px-4 py-3">{t('email')}</th>
              <th className="px-4 py-3">{t('role')}</th>
              <th className="px-4 py-3">{t('verified')}</th>
              <th className="px-4 py-3">{t('status')}</th>
              <th className="px-4 py-3">{t('actions')}</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(u => (
              <tr key={u.id} className="border-t border-gray-700/60 hover:bg-gray-800/40">
                <td className="px-4 py-3 font-medium text-gray-100">{u.name}</td>
                <td className="px-4 py-3 text-gray-300">{u.email}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 rounded bg-gray-700 text-gray-200 text-xs capitalize">{u.role}</span>
                </td>
                <td className="px-4 py-3">{u.verified ? '✅':'—'}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${u.status==='active'?'bg-green-600/30 text-green-300':'bg-red-600/30 text-red-300'}`}>{u.status}</span>
                </td>
                <td className="px-4 py-3 space-x-1 whitespace-nowrap">
                  <button className="px-2 py-1 text-xs rounded bg-gray-700 hover:bg-gray-600">{t('view')}</button>
                  <button className="px-2 py-1 text-xs rounded bg-blue-600/60 hover:bg-blue-600">{t('roleBtn')}</button>
                  <button className="px-2 py-1 text-xs rounded bg-red-600/60 hover:bg-red-600">{u.status==='active'? t('suspend'): t('restore')}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default AdminUsersPage;
