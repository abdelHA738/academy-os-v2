import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row font-sans">
      {/* Mobile Top Navigation */}
      <div className="md:hidden bg-slate-900 border-b border-slate-800 p-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 px-2.5 py-1 rounded-xl text-white font-bold text-sm">
            AOS
          </div>
          <span className="font-bold text-base">AcademyOS</span>
        </div>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 bg-slate-800 rounded-xl text-slate-200 focus:outline-none"
        >
          {isSidebarOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col justify-between
        transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div>
          <div className="hidden md:flex items-center gap-3 mb-8">
            <div className="bg-blue-600 px-3 py-1.5 rounded-xl text-white font-bold">
              AOS
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight">AcademyOS</h1>
              <p className="text-xs text-slate-400">Canadienne de l'Excellence</p>
            </div>
          </div>

          <nav className="space-y-2 mt-4 md:mt-0">
            <button 
              onClick={() => { setActiveTab('dashboard'); setIsSidebarOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                activeTab === 'dashboard' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800'
              }`}
            >
              📊 Tableau de bord
            </button>
            <button 
              onClick={() => { setActiveTab('students'); setIsSidebarOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                activeTab === 'students' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800'
              }`}
            >
              🎓 Étudiants
            </button>
            <button 
              onClick={() => { setActiveTab('courses'); setIsSidebarOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                activeTab === 'courses' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800'
              }`}
            >
              📚 Cours
            </button>
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-800">
          <p className="text-xs text-slate-500">AcademyOS v2.0 • Online</p>
        </div>
      </aside>

      {/* Overlay for Mobile Sidebar */}
      {isSidebarOpen && (
        <div 
          onClick={() => setIsSidebarOpen(false)} 
          className="fixed inset-0 bg-black/60 z-30 md:hidden"
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 md:h-20 bg-slate-900/50 border-b border-slate-800 px-4 md:px-8 flex items-center justify-between gap-4">
          <input 
            type="text" 
            placeholder="Rechercher..." 
            className="w-full max-w-xs bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-blue-500 text-white"
          />
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-white text-sm">
              AN
            </div>
            <span className="hidden sm:inline text-sm font-semibold">Admin</span>
          </div>
        </header>

        {/* Dashboard Body */}
        <div className="p-4 md:p-8 space-y-6 md:space-y-8 overflow-y-auto flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Système de Gestion</h2>
              <p className="text-xs md:text-sm text-slate-400">Plateforme d'administration AcademyOS</p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2.5 rounded-xl text-sm shadow-lg shadow-blue-600/20 w-full sm:w-auto text-center">
              + Nouvel Étudiant
            </button>
          </div>

          {/* Responsive Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-slate-900 border border-slate-800 p-5 md:p-6 rounded-2xl shadow-sm">
              <span className="text-slate-400 text-xs md:text-sm font-medium">Total Étudiants</span>
              <p className="text-2xl md:text-3xl font-bold mt-2">248</p>
              <span className="text-xs text-emerald-400 font-medium">+12% ce mois</span>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-5 md:p-6 rounded-2xl shadow-sm">
              <span className="text-slate-400 text-xs md:text-sm font-medium">Cours Actifs</span>
              <p className="text-2xl md:text-3xl font-bold mt-2">18</p>
              <span className="text-xs text-purple-400 font-medium">6 modules</span>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-5 md:p-6 rounded-2xl shadow-sm sm:col-span-2 lg:col-span-1">
              <span className="text-slate-400 text-xs md:text-sm font-medium">Taux de Présence</span>
              <p className="text-2xl md:text-3xl font-bold mt-2">94%</p>
              <span className="text-xs text-emerald-400 font-medium">Excellent</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
