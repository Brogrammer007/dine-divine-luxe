import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Recommendation {
  name: string;
  description: string;
  image: string;
  chef: string;
}

const ChefRecommendations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const recommendations: Recommendation[] = [
    {
      name: "Seared Wagyu with Truffle Jus",
      description:
        "Our signature A5 Wagyu beef, perfectly seared and served with black truffle reduction and seasonal vegetables. A masterpiece of flavor and texture.",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
      chef: "Chef Pierre Dubois",
    },
    {
      name: "Mediterranean Sea Bass en Papillote",
      description:
        "Wild-caught sea bass cooked in parchment with Mediterranean herbs, cherry tomatoes, and white wine. Light yet incredibly flavorful.",
      image: "https://images.unsplash.com/photo-1580959375944-0ac9e8e6d10b?auto=format&fit=crop&w=800&q=80",
      chef: "Chef Pierre Dubois",
    },
    {
      name: "Lobster Thermidor",
      description:
        "Classic French preparation with fresh lobster, cognac cream sauce, and Gruyère cheese. A timeless celebration of luxury.",
      image: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?auto=format&fit=crop&w=800&q=80",
      chef: "Chef Pierre Dubois",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % recommendations.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [recommendations.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + recommendations.length) % recommendations.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % recommendations.length);
  };

  const currentRec = recommendations[currentIndex];

  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gold/20 rounded-full px-4 py-2 mb-4">
            <ChefHat className="h-5 w-5 text-gold" />
            <span className="text-gold font-semibold">Chef's Selection</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Recommended <span className="text-gold">This Week</span>
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Handpicked by our Michelin-starred chef for the ultimate dining experience
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-lift animate-fade-in-scale">
              <img
                key={currentIndex}
                src={currentRec.image}
                alt={currentRec.name}
                className="w-full h-full object-cover animate-fade-in-scale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="animate-slide-in-right">
              <h3 className="font-serif text-4xl font-bold mb-6 text-gold animate-fade-in">
                {currentRec.name}
              </h3>
              <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8 animate-fade-in">
                {currentRec.description}
              </p>
              <div className="flex items-center gap-4 mb-8 animate-fade-in">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                  <ChefHat className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-lg">{currentRec.chef}</p>
                  <p className="text-primary-foreground/60 text-sm">Executive Chef</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-4">
                <Button
                  onClick={goToPrevious}
                  size="icon"
                  className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-none"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>

                <div className="flex gap-2">
                  {recommendations.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex ? "w-8 bg-gold" : "w-2 bg-primary-foreground/30"
                      }`}
                    ></button>
                  ))}
                </div>

                <Button
                  onClick={goToNext}
                  size="icon"
                  className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-none"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommendations;
