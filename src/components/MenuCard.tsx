import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { MenuItem } from "@/types/menu";

interface MenuCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

const MenuCard = ({ item, onAddToCart }: MenuCardProps) => {
  return (
    <div className="group bg-card rounded-3xl overflow-hidden shadow-elegant hover:shadow-lift transition-all duration-500 animate-fade-in-scale">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-serif text-xl font-bold flex-1">{item.name}</h3>
          <span className="text-gold font-bold text-xl ml-2">${item.price}</span>
        </div>
        <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
          {item.description}
        </p>
        <Button
          onClick={() => onAddToCart(item)}
          className="w-full bg-gold hover:bg-gold-dark text-primary font-semibold rounded-full transition-all hover:scale-105"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add to Order
        </Button>
      </div>
    </div>
  );
};

export default MenuCard;
