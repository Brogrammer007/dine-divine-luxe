import { Button } from "@/components/ui/button";
import { Clock, Flame } from "lucide-react";
import { Link } from "react-router-dom";

const DailySpecials = () => {
  const specials = [
    {
      name: "Truffle Risotto",
      description: "Creamy Arborio rice with black truffle shavings and Parmigiano-Reggiano",
      price: "$42",
      image: "https://images.unsplash.com/photo-1476124369491-c7addf7a7aea?auto=format&fit=crop&w=600&q=80",
      badge: "Chef's Choice",
    },
    {
      name: "Seared Scallops",
      description: "Pan-seared scallops with cauliflower purée and crispy prosciutto",
      price: "$38",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80",
      badge: "Limited",
    },
    {
      name: "Wagyu Tenderloin",
      description: "A5 Wagyu with truffle butter, asparagus and potato gratin",
      price: "$85",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80",
      badge: "Premium",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gold/10 rounded-full px-4 py-2 mb-4">
            <Flame className="h-5 w-5 text-gold" />
            <span className="text-gold font-semibold">Today's Specials</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gold">Dishes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked creations by our chef, available for a limited time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {specials.map((special, index) => (
            <div
              key={special.name}
              className="group relative bg-card rounded-3xl overflow-hidden shadow-elegant hover:shadow-lift transition-all duration-500 animate-fade-in-scale"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={special.image}
                  alt={special.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-gold text-primary text-xs font-bold px-3 py-1 rounded-full">
                  {special.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-serif text-2xl font-bold">{special.name}</h3>
                  <span className="text-gold font-bold text-xl">{special.price}</span>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {special.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Available today only</span>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/menu">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-dark text-primary font-semibold px-8 rounded-full shadow-elegant hover:shadow-lift transition-all hover:scale-105"
            >
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DailySpecials;
