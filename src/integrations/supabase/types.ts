export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      comanda_itens: {
        Row: {
          comanda_id: string
          created_at: string
          id: string
          observacoes: string | null
          preco_unitario: number
          produto_id: string
          quantidade: number
          status: string | null
        }
        Insert: {
          comanda_id: string
          created_at?: string
          id?: string
          observacoes?: string | null
          preco_unitario: number
          produto_id: string
          quantidade?: number
          status?: string | null
        }
        Update: {
          comanda_id?: string
          created_at?: string
          id?: string
          observacoes?: string | null
          preco_unitario?: number
          produto_id?: string
          quantidade?: number
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comanda_itens_comanda_id_fkey"
            columns: ["comanda_id"]
            isOneToOne: false
            referencedRelation: "comandas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comanda_itens_produto_id_fkey"
            columns: ["produto_id"]
            isOneToOne: false
            referencedRelation: "produtos"
            referencedColumns: ["id"]
          },
        ]
      }
      comandas: {
        Row: {
          created_at: string
          empresa_id: string
          fechada_at: string | null
          forma_pagamento: string | null
          funcionario_id: string | null
          id: string
          mesa_id: string
          status: string | null
          total: number | null
        }
        Insert: {
          created_at?: string
          empresa_id: string
          fechada_at?: string | null
          forma_pagamento?: string | null
          funcionario_id?: string | null
          id?: string
          mesa_id: string
          status?: string | null
          total?: number | null
        }
        Update: {
          created_at?: string
          empresa_id?: string
          fechada_at?: string | null
          forma_pagamento?: string | null
          funcionario_id?: string | null
          id?: string
          mesa_id?: string
          status?: string | null
          total?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "comandas_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comandas_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comandas_mesa_id_fkey"
            columns: ["mesa_id"]
            isOneToOne: false
            referencedRelation: "mesas"
            referencedColumns: ["id"]
          },
        ]
      }
      empresas: {
        Row: {
          cnpj: string | null
          created_at: string
          data_vencimento: string | null
          endereco: string | null
          id: string
          nome: string
          plano: string | null
          status_assinatura: string | null
          telefone: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          cnpj?: string | null
          created_at?: string
          data_vencimento?: string | null
          endereco?: string | null
          id?: string
          nome: string
          plano?: string | null
          status_assinatura?: string | null
          telefone?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          cnpj?: string | null
          created_at?: string
          data_vencimento?: string | null
          endereco?: string | null
          id?: string
          nome?: string
          plano?: string | null
          status_assinatura?: string | null
          telefone?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      entrada_estoque: {
        Row: {
          data_entrada: string
          estoque_id: string
          fornecedor: string | null
          id: string
          preco_unitario: number | null
          quantidade: number
        }
        Insert: {
          data_entrada?: string
          estoque_id: string
          fornecedor?: string | null
          id?: string
          preco_unitario?: number | null
          quantidade: number
        }
        Update: {
          data_entrada?: string
          estoque_id?: string
          fornecedor?: string | null
          id?: string
          preco_unitario?: number | null
          quantidade?: number
        }
        Relationships: [
          {
            foreignKeyName: "entrada_estoque_estoque_id_fkey"
            columns: ["estoque_id"]
            isOneToOne: false
            referencedRelation: "estoque"
            referencedColumns: ["id"]
          },
        ]
      }
      estoque: {
        Row: {
          categoria: string
          empresa_id: string
          id: string
          nome: string
          preco_medio: number | null
          quantidade_atual: number | null
          quantidade_minima: number | null
          unidade: string
          updated_at: string
        }
        Insert: {
          categoria: string
          empresa_id: string
          id?: string
          nome: string
          preco_medio?: number | null
          quantidade_atual?: number | null
          quantidade_minima?: number | null
          unidade: string
          updated_at?: string
        }
        Update: {
          categoria?: string
          empresa_id?: string
          id?: string
          nome?: string
          preco_medio?: number | null
          quantidade_atual?: number | null
          quantidade_minima?: number | null
          unidade?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "estoque_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
        ]
      }
      funcionarios: {
        Row: {
          ativo: boolean | null
          created_at: string
          empresa_id: string
          funcao: string
          id: string
          nome: string
        }
        Insert: {
          ativo?: boolean | null
          created_at?: string
          empresa_id: string
          funcao: string
          id?: string
          nome: string
        }
        Update: {
          ativo?: boolean | null
          created_at?: string
          empresa_id?: string
          funcao?: string
          id?: string
          nome?: string
        }
        Relationships: [
          {
            foreignKeyName: "funcionarios_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
        ]
      }
      mesas: {
        Row: {
          capacidade: number | null
          empresa_id: string
          id: string
          numero: number
          observacoes: string | null
          status: string | null
          updated_at: string
        }
        Insert: {
          capacidade?: number | null
          empresa_id: string
          id?: string
          numero: number
          observacoes?: string | null
          status?: string | null
          updated_at?: string
        }
        Update: {
          capacidade?: number | null
          empresa_id?: string
          id?: string
          numero?: number
          observacoes?: string | null
          status?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "mesas_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
        ]
      }
      produtos: {
        Row: {
          ativo: boolean | null
          categoria: string
          created_at: string
          custo: number | null
          descricao: string | null
          empresa_id: string
          id: string
          nome: string
          preco: number
        }
        Insert: {
          ativo?: boolean | null
          categoria: string
          created_at?: string
          custo?: number | null
          descricao?: string | null
          empresa_id: string
          id?: string
          nome: string
          preco: number
        }
        Update: {
          ativo?: boolean | null
          categoria?: string
          created_at?: string
          custo?: number | null
          descricao?: string | null
          empresa_id?: string
          id?: string
          nome?: string
          preco?: number
        }
        Relationships: [
          {
            foreignKeyName: "produtos_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
        ]
      }
      vendas: {
        Row: {
          comanda_id: string
          data_venda: string
          empresa_id: string
          forma_pagamento: string
          funcionario_id: string | null
          id: string
          total: number
        }
        Insert: {
          comanda_id: string
          data_venda?: string
          empresa_id: string
          forma_pagamento: string
          funcionario_id?: string | null
          id?: string
          total: number
        }
        Update: {
          comanda_id?: string
          data_venda?: string
          empresa_id?: string
          forma_pagamento?: string
          funcionario_id?: string | null
          id?: string
          total?: number
        }
        Relationships: [
          {
            foreignKeyName: "vendas_comanda_id_fkey"
            columns: ["comanda_id"]
            isOneToOne: false
            referencedRelation: "comandas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vendas_empresa_id_fkey"
            columns: ["empresa_id"]
            isOneToOne: false
            referencedRelation: "empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vendas_funcionario_id_fkey"
            columns: ["funcionario_id"]
            isOneToOne: false
            referencedRelation: "funcionarios"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_empresa_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
