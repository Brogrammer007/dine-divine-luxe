import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/80"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-gold rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-gold rounded-full animate-float opacity-40" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-gold-light rounded-full animate-float opacity-50" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-gold rounded-full animate-float opacity-70" style={{ animationDelay: "0.5s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl animate-fade-in-scale">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
          An Exquisite
          <br />
          <span className="text-gold">Culinary Journey</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Where tradition meets innovation in every meticulously crafted dish
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/menu">
            <Button
              variant="gold"
              size="lg"
              className="text-lg px-8 py-6 rounded-full"
            >
              View Our Menu
            </Button>
          </Link>
          <Link to="/reservations">
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8 py-6 rounded-full"
            >
              Book a Table
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gold rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
