import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-600 p-2 rounded-xl text-white font-bold">
              AOS
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight">AcademyOS</h1>
              <p className="text-xs text-slate-400">Canadienne de l'Excellence</p>
            </div>
          </div>

          <nav className="space-y-1">
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                activeTab === 'dashboard' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800'
              }`}
            >
              Tableau de bord
            </button>
            <button 
              onClick={() => setActiveTab('students')}
              className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                activeTab === 'students' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800'
              }`}
            >
              Étudiants
            </button>
            <button 
              onClick={() => setActiveTab('courses')}
              className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                activeTab === 'courses' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800'
              }`}
            >
              Cours
            </button>
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-800">
          <p className="text-xs text-slate-500">AcademyOS v2.0</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-20 bg-slate-900/50 border-b border-slate-800 px-8 flex items-center justify-between">
          <input 
            type="text" 
            placeholder="Rechercher..." 
            className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-blue-500 text-white"
          />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-white">
              AN
            </div>
            <span className="text-sm font-semibold">Admin</span>
          </div>
        </header>

        {/* Body */}
        <div className="p-8 space-y-8 overflow-y-auto flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Système de Gestion - AcademyOS</h2>
              <p className="text-sm text-slate-400">Bienvenue sur votre plateforme d'administration.</p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2.5 rounded-xl text-sm shadow-lg shadow-blue-600/20">
              + Nouvel Étudiant
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
              <span className="text-slate-400 text-sm font-medium">Total Étudiants</span>
              <p className="text-3xl font-bold mt-2">248</p>
              <span className="text-xs text-emerald-400 font-medium">+12% ce mois</span>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
              <span className="text-slate-400 text-sm font-medium">Cours Actifs</span>
              <p className="text-3xl font-bold mt-2">18</p>
              <span className="text-xs text-purple-400 font-medium">6 modules</span>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
              <span className="text-slate-400 text-sm font-medium">Taux de Présence</span>
              <p className="text-3xl font-bold mt-2">94%</p>
              <span className="text-xs text-emerald-400 font-medium">Excellent</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
