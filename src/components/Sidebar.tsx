import React from 'react';
import { NavItem } from '../tipos';
import { LayoutDashboard, Plus, BarChart3, X } from 'lucide-react';

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (c: boolean) => void;
  activeItem: NavItem;
  onSelect: (item: NavItem) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, setIsCollapsed, activeItem, onSelect }) => {
  return (
    <div className="h-full bg-white border-r border-gray-200 p-6 flex flex-col">
      <div className="flex justify-between items-center mb-10">
        <h2 className="font-black text-lg">Menu</h2>
        <button onClick={() => setIsCollapsed(true)} className="p-1"><X size={20} /></button>
      </div>
      
      <div className="space-y-4">
        {[
            { id: NavItem.Resumos, icon: LayoutDashboard, label: 'Resumo' },
            { id: NavItem.AdicionarVenda, icon: Plus, label: 'Nova Venda' },
        ].map((item) => (
            <button 
                key={item.id}
                onClick={() => onSelect(item.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl font-bold ${activeItem === item.id ? 'bg-purple-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
                <item.icon size={20} />
                {item.label}
            </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
