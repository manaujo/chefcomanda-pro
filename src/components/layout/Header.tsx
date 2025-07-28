import { Button } from "@/components/ui/button";
import { ChefHat, LogIn, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <ChefHat className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            ChefComanda
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="#funcionalidades" className="text-foreground hover:text-primary transition-smooth">
            Funcionalidades
          </Link>
          <Link to="#planos" className="text-foreground hover:text-primary transition-smooth">
            Planos
          </Link>
          <Link to="#contato" className="text-foreground hover:text-primary transition-smooth">
            Contato
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/login">
              <LogIn className="h-4 w-4" />
              Entrar
            </Link>
          </Button>
          <Button variant="hero" size="sm" asChild>
            <Link to="/registro">
              <UserPlus className="h-4 w-4" />
              Criar Conta
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;