-- Corrigir funções com search_path para segurança
CREATE OR REPLACE FUNCTION public.get_user_empresa_id()
RETURNS UUID AS $$
  SELECT id FROM public.empresas WHERE user_id = auth.uid();
$$ LANGUAGE SQL SECURITY DEFINER STABLE SET search_path = '';

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = '';