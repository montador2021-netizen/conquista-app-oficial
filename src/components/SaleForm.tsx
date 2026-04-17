import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface SaleFormProps {
  onCancel: () => void;
  onSubmit: (data: any) => void;
}

const SaleForm: React.FC<SaleFormProps> = ({ onCancel, onSubmit }) => {
  const [formData, setFormData] = useState({ pedido: '', produto: 0, assistencia: 0, impermeabilizacao: 0 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const total = formData.produto + formData.assistencia + formData.impermeabilizacao;
    onSubmit({ ...formData, total, bonusTotal: total * 0.05, comissaoProduto: formData.produto * 0.02, servicosExtras: [] });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <button type="button" onClick={onCancel} className="flex items-center gap-2 text-gray-500 mb-6 font-bold"><ArrowLeft size={16}/> Voltar</button>
      
      <input type="text" placeholder="Nº Pedido" className="w-full p-4 rounded-xl border border-gray-200" onChange={e => setFormData({...formData, pedido: e.target.value})} />
      <input type="number" placeholder="Valor Produto" className="w-full p-4 rounded-xl border border-gray-200" onChange={e => setFormData({...formData, produto: Number(e.target.value)})} />
      <input type="number" placeholder="Valor Assistência" className="w-full p-4 rounded-xl border border-gray-200" onChange={e => setFormData({...formData, assistencia: Number(e.target.value)})} />
      
      <button type="submit" className="w-full bg-purple-600 text-white p-4 rounded-xl font-bold">Salvar Venda</button>
    </form>
  );
};

export default SaleForm;
