import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MenuCard from "@/components/MenuCard";
import Cart from "@/components/Cart";
import WhatsAppButton from "@/components/WhatsAppButton";
import { menuItems } from "@/data/menuItems";
import { MenuItem, CartItem } from "@/types/menu";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categories = [
    { id: "all", label: "All Dishes" },
    { id: "starters", label: "Starters" },
    { id: "mains", label: "Main Dishes" },
    { id: "desserts", label: "Desserts" },
    { id: "drinks", label: "Drinks" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartOpen={() => setIsCartOpen(true)}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our <span className="text-gold">Menu</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Discover our carefully curated selection of exquisite dishes, crafted with
            passion and precision
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                  activeCategory === category.id
                    ? "bg-gold text-primary shadow-elegant"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map((item, index) => (
              <div key={item.id} style={{ animationDelay: `${index * 50}ms` }}>
                <MenuCard item={item} onAddToCart={handleAddToCart} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />

      {/* Cart */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
};

export default Menu;
