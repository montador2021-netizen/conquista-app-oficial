export enum NavItem {
    Resumos = 'Resumos',
    AdicionarVenda = 'AdicionarVenda',
    ResumoPedido = 'ResumoPedido'
}

export interface Sale {
    numeroPedido: string;
    valorProduto: number;
    valorAssistencia: number;
    valorImpermeabilizacao: number;
    total: number;
    bonusTotal: number;
    comissaoProduto: number;
    servicosExtras: string[];
    data: string;
    timestamp: number;
}

export interface Targets {
    product: number;
    assistance: number;
    waterproofing: number;
    levels: {
        [key: number]: { threshold: number; rate: number };
    };
}
