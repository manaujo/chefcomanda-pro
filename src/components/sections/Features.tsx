import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Coffee, 
  Users, 
  Calculator, 
  BarChart3, 
  Smartphone, 
  Shield,
  Clock,
  Printer,
  Utensils,
  Package
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Coffee,
      title: "Gestão de Comandas",
      description: "Controle completo de mesas, comandas e pedidos com atualização em tempo real."
    },
    {
      icon: Users,
      title: "Controle de Acesso",
      description: "Diferentes níveis de usuário: administrador, garçom, caixa e estoque."
    },
    {
      icon: Calculator,
      title: "PDV Integrado",
      description: "Sistema de vendas com controle de caixa e fechamento por turno."
    },
    {
      icon: BarChart3,
      title: "Relatórios Detalhados",
      description: "Análises de vendas, CMV, produtos mais vendidos e muito mais."
    },
    {
      icon: Package,
      title: "Controle de Estoque",
      description: "Gestão completa de insumos com cálculo automático de CMV."
    },
    {
      icon: Utensils,
      title: "Cozinha Digital",
      description: "Painel específico para acompanhar pedidos e status de preparo."
    },
    {
      icon: Smartphone,
      title: "Cardápio QR Code",
      description: "Cardápio digital acessível via QR Code em cada mesa."
    },
    {
      icon: Printer,
      title: "Impressão Automática",
      description: "Comandas e recibos enviados automaticamente para impressora."
    },
    {
      icon: Clock,
      title: "Tempo Real",
      description: "Atualizações instantâneas entre cozinha, salão e caixa."
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Logs de auditoria e controle rigoroso de permissões."
    }
  ];

  return (
    <section id="funcionalidades" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Funcionalidades Completas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tudo que seu restaurante precisa para operar com máxima eficiência e controle total.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur border-border/50 hover:shadow-warm transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;