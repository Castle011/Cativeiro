import { useNavigate, useLocation } from 'react-router';
import { 
  BarChart3, 
  Users, 
  UserPlus, 
  Search, 
  Settings, 
  LogOut,
  Heart
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const MENU_ITEMS = [
  { icon: BarChart3, label: 'Dashboard', path: '/dashboard' },
  { icon: Search, label: 'Buscar Famílias', path: '/families' },
  { icon: UserPlus, label: 'Novo Cadastro', path: '/families/new' },
  { icon: Users, label: 'Voluntários', path: '/volunteers' },
  { icon: Settings, label: 'Configurações', path: '/settings' },
];

export function Sidebar({ onLogout }: { onLogout: () => void }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-64 border-r bg-[#0f172a] h-screen flex flex-col fixed left-0 top-0 z-40 hidden md:flex text-white" id="sidebar">
      <div className="p-6 flex items-center gap-3 border-b border-white/10">
        <div className="w-10 h-10 bg-[#10b981] rounded-lg flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
          <Heart size={24} fill="currentColor" />
        </div>
        <div>
          <h1 className="font-display font-bold text-lg leading-tight text-white">Cativeiro</h1>
          <p className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold">Projeto Social</p>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        <div className="px-4 mb-4 text-[10px] font-bold text-blue-400 uppercase tracking-widest">Menu Principal</div>
        {MENU_ITEMS.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all group relative",
                isActive 
                  ? "bg-white/10 text-white border-l-4 border-emerald-500 rounded-l-none" 
                  : "text-blue-100/70 hover:bg-white/5 hover:text-white"
              )}
            >
              <item.icon size={20} className={cn("transition-colors", isActive ? "text-emerald-400" : "group-hover:text-white")} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="p-6 border-t border-white/10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center text-xs font-bold">SF</div>
          <div>
            <p className="text-xs font-bold">Sara Freitas</p>
            <p className="text-[10px] text-blue-400">Administradora</p>
          </div>
        </div>
        <Button 
          variant="ghost" 
          className="w-full justify-start text-blue-200/60 hover:text-white hover:bg-white/5 px-4"
          onClick={onLogout}
        >
          <LogOut size={18} className="mr-3" />
          Sair do Sistema
        </Button>
      </div>
    </div>
  );
}
