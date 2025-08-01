-- Sistema completo Chef Comanda
-- Criação das tabelas principais com RLS

-- Tabela de empresas
CREATE TABLE public.empresas (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  nome TEXT NOT NULL,
  cnpj TEXT,
  telefone TEXT,
  endereco TEXT,
  plano TEXT DEFAULT 'trial' CHECK (plano IN ('trial', 'mensal', 'anual')),
  status_assinatura TEXT DEFAULT 'ativa' CHECK (status_assinatura IN ('ativa', 'suspensa', 'cancelada')),
  data_vencimento TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Tabela de funcionários
CREATE TABLE public.funcionarios (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  empresa_id UUID NOT NULL REFERENCES public.empresas(id) ON DELETE CASCADE,
  nome TEXT NOT NULL,
  funcao TEXT NOT NULL CHECK (funcao IN ('garcom', 'cozinheiro', 'caixa', 'gerente')),
  ativo BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Tabela de mesas
CREATE TABLE public.mesas (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  empresa_id UUID NOT NULL REFERENCES public.empresas(id) ON DELETE CASCADE,
  numero INTEGER NOT NULL,
  status TEXT DEFAULT 'livre' CHECK (status IN ('livre', 'ocupada', 'aguardando_pagamento')),
  capacidade INTEGER DEFAULT 4,
  observacoes TEXT,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(empresa_id, numero)
);

-- Tabela de produtos
CREATE TABLE public.produtos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  empresa_id UUID NOT NULL REFERENCES public.empresas(id) ON DELETE CASCADE,
  nome TEXT NOT NULL,
  categoria TEXT NOT NULL,
  preco DECIMAL(10,2) NOT NULL,
  custo DECIMAL(10,2),
  descricao TEXT,
  ativo BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Tabela de comandas
CREATE TABLE public.comandas (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  empresa_id UUID NOT NULL REFERENCES public.empresas(id) ON DELETE CASCADE,
  mesa_id UUID NOT NULL REFERENCES public.mesas(id) ON DELETE CASCADE,
  funcionario_id UUID REFERENCES public.funcionarios(id),
  status TEXT DEFAULT 'aberta' CHECK (status IN ('aberta', 'fechada', 'cancelada')),
  total DECIMAL(10,2) DEFAULT 0,
  forma_pagamento TEXT CHECK (forma_pagamento IN ('dinheiro', 'cartao', 'pix')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  fechada_at TIMESTAMP WITH TIME ZONE
);

-- Tabela de itens da comanda
CREATE TABLE public.comanda_itens (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  comanda_id UUID NOT NULL REFERENCES public.comandas(id) ON DELETE CASCADE,
  produto_id UUID NOT NULL REFERENCES public.produtos(id) ON DELETE CASCADE,
  quantidade INTEGER NOT NULL DEFAULT 1,
  preco_unitario DECIMAL(10,2) NOT NULL,
  observacoes TEXT,
  status TEXT DEFAULT 'pendente' CHECK (status IN ('pendente', 'preparando', 'pronto', 'entregue')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Tabela de estoque
CREATE TABLE public.estoque (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  empresa_id UUID NOT NULL REFERENCES public.empresas(id) ON DELETE CASCADE,
  nome TEXT NOT NULL,
  categoria TEXT NOT NULL,
  quantidade_atual DECIMAL(10,2) DEFAULT 0,
  quantidade_minima DECIMAL(10,2) DEFAULT 0,
  unidade TEXT NOT NULL,
  preco_medio DECIMAL(10,2),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Tabela de entrada de estoque
CREATE TABLE public.entrada_estoque (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  estoque_id UUID NOT NULL REFERENCES public.estoque(id) ON DELETE CASCADE,
  quantidade DECIMAL(10,2) NOT NULL,
  preco_unitario DECIMAL(10,2),
  fornecedor TEXT,
  data_entrada TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Tabela de vendas (resumo diário)
CREATE TABLE public.vendas (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  empresa_id UUID NOT NULL REFERENCES public.empresas(id) ON DELETE CASCADE,
  comanda_id UUID NOT NULL REFERENCES public.comandas(id),
  total DECIMAL(10,2) NOT NULL,
  forma_pagamento TEXT NOT NULL,
  funcionario_id UUID REFERENCES public.funcionarios(id),
  data_venda TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar RLS em todas as tabelas
ALTER TABLE public.empresas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.funcionarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mesas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.produtos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.comandas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.comanda_itens ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.estoque ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.entrada_estoque ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vendas ENABLE ROW LEVEL SECURITY;

-- Função para obter empresa do usuário
CREATE OR REPLACE FUNCTION public.get_user_empresa_id()
RETURNS UUID AS $$
  SELECT id FROM public.empresas WHERE user_id = auth.uid();
$$ LANGUAGE SQL SECURITY DEFINER STABLE;

-- Políticas RLS para empresas
CREATE POLICY "Users can view their own empresa" ON public.empresas
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can insert their own empresa" ON public.empresas
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own empresa" ON public.empresas
  FOR UPDATE USING (user_id = auth.uid());

-- Políticas RLS para funcionários
CREATE POLICY "Users can manage funcionarios of their empresa" ON public.funcionarios
  FOR ALL USING (empresa_id = public.get_user_empresa_id());

-- Políticas RLS para mesas
CREATE POLICY "Users can manage mesas of their empresa" ON public.mesas
  FOR ALL USING (empresa_id = public.get_user_empresa_id());

-- Políticas RLS para produtos
CREATE POLICY "Users can manage produtos of their empresa" ON public.produtos
  FOR ALL USING (empresa_id = public.get_user_empresa_id());

-- Políticas RLS para comandas
CREATE POLICY "Users can manage comandas of their empresa" ON public.comandas
  FOR ALL USING (empresa_id = public.get_user_empresa_id());

-- Políticas RLS para comanda_itens
CREATE POLICY "Users can manage comanda_itens of their empresa" ON public.comanda_itens
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.comandas 
      WHERE comandas.id = comanda_itens.comanda_id 
      AND comandas.empresa_id = public.get_user_empresa_id()
    )
  );

-- Políticas RLS para estoque
CREATE POLICY "Users can manage estoque of their empresa" ON public.estoque
  FOR ALL USING (empresa_id = public.get_user_empresa_id());

-- Políticas RLS para entrada_estoque
CREATE POLICY "Users can manage entrada_estoque of their empresa" ON public.entrada_estoque
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.estoque 
      WHERE estoque.id = entrada_estoque.estoque_id 
      AND estoque.empresa_id = public.get_user_empresa_id()
    )
  );

-- Políticas RLS para vendas
CREATE POLICY "Users can manage vendas of their empresa" ON public.vendas
  FOR ALL USING (empresa_id = public.get_user_empresa_id());

-- Triggers para atualizar updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_empresas_updated_at
  BEFORE UPDATE ON public.empresas
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_mesas_updated_at
  BEFORE UPDATE ON public.mesas
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_estoque_updated_at
  BEFORE UPDATE ON public.estoque
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();