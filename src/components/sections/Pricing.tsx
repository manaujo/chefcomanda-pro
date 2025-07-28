import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const features = [
    "Gestão completa de comandas",
    "Controle de mesas e garçons",
    "PDV integrado com caixa",
    "Controle de estoque e CMV",
    "Relatórios detalhados",
    "Cardápio via QR Code",
    "Painel da cozinha",
    "Impressão automática",
    "Múltiplos usuários",
    "Suporte 24/7",
    "Backups automáticos",
    "Atualizações incluídas"
  ];

  return (
    <section id="planos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Plano Único e Transparente
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Acesso completo a todas as funcionalidades. Sem limitações, sem surpresas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Plano Mensal */}
          <Card className="relative bg-card border-border hover:shadow-warm transition-all duration-300">
            <CardHeader className="text-center pb-8">
              <div className="flex justify-center mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Plano Mensal</CardTitle>
              <CardDescription className="text-base">
                Ideal para começar rapidamente
              </CardDescription>
              <div className="flex items-baseline justify-center mt-4">
                <span className="text-4xl font-bold text-primary">R$ 120</span>
                <span className="text-muted-foreground ml-2">/mês</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-4 w-4 text-success mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" size="lg" className="w-full" asChild>
                <Link to="/registro?plano=mensal">
                  Começar Teste Grátis
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Plano Anual */}
          <Card className="relative bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 hover:shadow-glow transition-all duration-300 scale-105">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-primary text-primary-foreground px-4 py-1">
                <Crown className="h-3 w-3 mr-1" />
                Mais Popular
              </Badge>
            </div>
            
            <CardHeader className="text-center pb-8">
              <div className="flex justify-center mb-4">
                <Crown className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Plano Anual</CardTitle>
              <CardDescription className="text-base">
                Economize 10% pagando anualmente
              </CardDescription>
              <div className="flex items-baseline justify-center mt-4">
                <span className="text-4xl font-bold text-primary">R$ 108</span>
                <span className="text-muted-foreground ml-2">/mês</span>
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="line-through">R$ 1.440</span> R$ 1.296 por ano
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-4 w-4 text-success mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero" size="lg" className="w-full" asChild>
                <Link to="/registro?plano=anual">
                  Começar Teste Grátis
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            🎯 <strong>Teste grátis por 14 dias</strong> • Cancele quando quiser • Sem taxa de setup
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;