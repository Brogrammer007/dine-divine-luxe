import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  cartItemsCount?: number;
  onCartOpen?: () => void;
}

const Navigation = ({ cartItemsCount = 0, onCartOpen }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Reservations", path: "/reservations" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-2xl md:text-3xl font-bold text-foreground tracking-tight hover:text-gold transition-colors"
        >
          La Maison <span className="text-gold">Dorée</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-foreground hover:text-gold transition-colors font-medium relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <Button
            variant="outline"
            size="sm"
            className="relative border-gold text-gold hover:bg-gold hover:text-primary-foreground transition-all"
            onClick={onCartOpen}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Cart
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-primary text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                {cartItemsCount}
              </span>
            )}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground hover:text-gold transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border animate-slide-in-right">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-foreground hover:text-gold transition-colors font-medium text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="w-full border-gold text-gold hover:bg-gold hover:text-primary-foreground"
              onClick={() => {
                onCartOpen?.();
                setIsMobileMenuOpen(false);
              }}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Cart ({cartItemsCount})
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
