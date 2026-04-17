import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Plus, Zap, Wifi, WifiOff } from 'lucide-react';

// --- CONFIGURAÇÃO SUPABASE (O SEU BANCO) ---
// Certifique-se de configurar essas variáveis na Vercel (Settings > Environment Variables)
// VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY

const App: React.FC = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    window.addEventListener('online', () => setIsOnline(true));
    window.addEventListener('offline', () => setIsOnline(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="h-20 flex items-center justify-between px-6 sticky top-0 z-40 bg-white border-b border-gray-200">
         <div className="flex items-center gap-2">
            <Zap className="text-purple-600" />
            <h1 className="text-xl font-black text-gray-900 tracking-tighter uppercase italic">V&C Hub</h1>
         </div>
         <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase ${isOnline ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {isOnline ? <Wifi size={12} /> : <WifiOff size={12} />}
            {isOnline ? 'Online' : 'Offline'}
         </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1 p-6 flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm max-w-sm w-full text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Bem-vindo ao Conquista Hub</h2>
            <p className="text-gray-500 text-sm mb-6">O sistema está pronto e totalmente limpo.</p>
            <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2">
                <Plus size={20} /> Nova Ação
            </button>
        </div>
      </main>
    </div>
  );
};

export default App;
