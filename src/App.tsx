import React, { useState } from 'react';
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  Search, 
  Plus, 
  LayoutDashboard, 
  Settings, 
  Bell
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-600 p-2 rounded-xl text-white">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight">AcademyOS</h1>
              <p className="text-xs text-slate-400">Canadienne de l'Excellence</p>
            </div>
          </div>

          <nav className="space-y-1">
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                activeTab === 'dashboard' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              Tableau de bord
            </button>
            <button 
              onClick={() => setActiveTab('students')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                activeTab === 'students' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <Users className="w-5 h-5" />
              Étudiants
            </button>
            <button 
              onClick={() => setActiveTab('courses')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                activeTab === 'courses' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              Cours
            </button>
            <button 
              onClick={() => setActiveTab('schedule')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                activeTab === 'schedule' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <Calendar className="w-5 h-5" />
              Emploi du temps
            </button>
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-800">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition-colors">
            <Settings className="w-5 h-5" />
            Paramètres
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-20 bg-slate-900/50 border-b border-slate-800 px-8 flex items-center justify-between backdrop-blur-md">
          <div className="relative w-96">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Rechercher un étudiant, cours..." 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-500"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-slate-200 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full"></span>
            </button>
            <div className="h-8 w-px bg-slate-800"></div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-white">
                AN
              </div>
              <div>
                <p className="text-sm font-semibold">Admin</p>
                <p className="text-xs text-slate-400">Académie</p>
              </div>
            </div>
          </div>
        </header>

        {/* View Body */}
        <div className="p-8 space-y-8 overflow-y-auto flex-1">
          {/* Top Actions & Banner */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Système de Gestion - AcademyOS</h2>
              <p className="text-sm text-slate-400">Bienvenue sur votre plateforme d'administration.</p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2.5 rounded-xl flex items-center gap-2 text-sm transition-colors shadow-lg shadow-blue-600/20">
              <Plus className="w-4 h-4" />
              Nouvel Étudiant
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
              <div className="flex justify-between items-start mb-4">
                <span className="text-slate-400 text-sm font-medium">Total Étudiants</span>
                <div className="p-2 bg-blue-500/10 text-blue-400 rounded-xl">
                  <Users className="w-5 h-5" />
                </div>
              </div>
              <p className="text-3xl font-bold">248</p>
              <span className="text-xs text-emerald-400 font-medium">+12% ce mois</span>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
              <div className="flex justify-between items-start mb-4">
                <span className="text-slate-400 text-sm font-medium">Cours Actifs</span>
                <div className="p-2 bg-purple-500/10 text-purple-400 rounded-xl">
                  <BookOpen className="w-5 h-5" />
                </div>
              </div>
              <p className="text-3xl font-bold">18</p>
              <span className="text-xs text-purple-400 font-medium">6 modules disponibles</span>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
              <div className="flex justify-between items-start mb-4">
                <span className="text-slate-400 text-sm font-medium">Taux de Présence</span>
                <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-xl">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>
              <p className="text-3xl font-bold">94%</p>
              <span className="text-xs text-emerald-400 font-medium">Excellent niveau</span>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
              <div className="flex justify-between items-start mb-4">
                <span className="text-slate-400 text-sm font-medium">Sessions / Semaine</span>
                <div className="p-2 bg-amber-500/10 text-amber-400 rounded-xl">
                  <Calendar className="w-5 h-5" />
                </div>
              </div>
              <p className="text-3xl font-bold">32</p>
              <span className="text-xs text-slate-400 font-medium">Salles A & B</span>
            </div>
          </div>

          {/* Table Sample */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4">Inscriptions Récentes</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 font-medium">
                    <th className="pb-3">Nom complet</th>
                    <th className="pb-3">Niveau / Programme</th>
                    <th className="pb-3">Statut</th>
                    <th className="pb-3">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr>
                    <td className="py-4 font-semibold">Sarah Alami</td>
                    <td className="py-4 text-slate-400">Bac libre - Module Anglais</td>
                    <td className="py-4"><span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-semibold">Actif</span></td>
                    <td className="py-4 text-slate-400">Aujourd'hui</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-semibold">Youssef Benali</td>
                    <td className="py-4 text-slate-400">Communication & Workflows</td>
                    <td className="py-4"><span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-semibold">Actif</span></td>
                    <td className="py-4 text-slate-400">Hier</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
