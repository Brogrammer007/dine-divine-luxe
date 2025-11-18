import { Award, ChefHat, Star } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image with Parallax */}
          <div className="relative animate-fade-in">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-lift">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80"
                alt="Restaurant interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            </div>
            {/* Floating Awards Card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl shadow-elegant p-6 backdrop-blur-sm border border-border animate-slide-in-right">
              <div className="flex items-center gap-3 mb-2">
                <Award className="h-6 w-6 text-gold" />
                <span className="font-serif text-xl font-bold">15+ Awards</span>
              </div>
              <p className="text-sm text-muted-foreground">Excellence in Fine Dining</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="animate-slide-in-right">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our <span className="text-gold">Story</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Since 1995, La Maison Dorée has been a beacon of culinary excellence,
              where French tradition harmonizes with contemporary innovation. Our
              passion for perfection is reflected in every dish we create.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Under the guidance of our Michelin-starred chef, we source the finest
              seasonal ingredients to craft unforgettable dining experiences that
              delight all the senses.
            </p>

            {/* Chef Highlight */}
            <div className="bg-secondary rounded-2xl p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 rounded-full p-3">
                  <ChefHat className="h-8 w-8 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-2">Chef Pierre Dubois</h3>
                  <p className="text-muted-foreground mb-3">
                    30 years of culinary mastery combining classical French techniques
                    with modern artistry.
                  </p>
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Awards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-1">3</div>
                <div className="text-sm text-muted-foreground">Michelin Stars</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-1">28</div>
                <div className="text-sm text-muted-foreground">Years Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-1">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Guests</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
