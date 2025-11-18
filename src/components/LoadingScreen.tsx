import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-primary flex items-center justify-center animate-fade-out">
      <div className="text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary-foreground mb-4 animate-fade-in-scale">
          La Maison <span className="text-gold animate-glow">Dorée</span>
        </h1>
        <div className="flex gap-2 justify-center mt-8">
          <div className="h-3 w-3 bg-gold rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="h-3 w-3 bg-gold rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="h-3 w-3 bg-gold rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
