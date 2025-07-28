import { ChefHat, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <ChefHat className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold text-accent">ChefComanda</span>
            </div>
            <p className="text-secondary-foreground/80 mb-4 max-w-md">
              Sistema profissional de gerenciamento para restaurantes, bares e lanchonetes. 
              Controle total, relatórios inteligentes e crescimento garantido.
            </p>
            <div className="flex space-x-4">
              <div className="p-2 bg-secondary-foreground/10 rounded-lg">
                <Mail className="h-5 w-5 text-accent" />
              </div>
              <div className="p-2 bg-secondary-foreground/10 rounded-lg">
                <Phone className="h-5 w-5 text-accent" />
              </div>
              <div className="p-2 bg-secondary-foreground/10 rounded-lg">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Sistema</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="text-secondary-foreground/80 hover:text-accent transition-smooth">
                  Fazer Login
                </Link>
              </li>
              <li>
                <Link to="/registro" className="text-secondary-foreground/80 hover:text-accent transition-smooth">
                  Criar Conta
                </Link>
              </li>
              <li>
                <Link to="#funcionalidades" className="text-secondary-foreground/80 hover:text-accent transition-smooth">
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link to="#planos" className="text-secondary-foreground/80 hover:text-accent transition-smooth">
                  Planos
                </Link>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Suporte</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:suporte@chefcomanda.com.br" className="text-secondary-foreground/80 hover:text-accent transition-smooth">
                  suporte@chefcomanda.com.br
                </a>
              </li>
              <li>
                <a href="tel:+5511999999999" className="text-secondary-foreground/80 hover:text-accent transition-smooth">
                  (11) 99999-9999
                </a>
              </li>
              <li>
                <span className="text-secondary-foreground/80">
                  Seg-Dom: 24h
                </span>
              </li>
              <li>
                <Link to="/ajuda" className="text-secondary-foreground/80 hover:text-accent transition-smooth">
                  Central de Ajuda
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-foreground/60 text-sm">
            © 2024 ChefComanda. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-secondary-foreground/60 mt-4 md:mt-0">
            <Link to="/termos" className="hover:text-accent transition-smooth">
              Termos de Uso
            </Link>
            <Link to="/privacidade" className="hover:text-accent transition-smooth">
              Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;