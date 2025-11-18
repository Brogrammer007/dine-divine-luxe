import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
      alt: "Restaurant interior",
    },
    {
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      alt: "Elegant dining room",
    },
    {
      url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80",
      alt: "Gourmet dish",
    },
    {
      url: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
      alt: "Premium steak",
    },
    {
      url: "https://images.unsplash.com/photo-1476124369491-c7addf7a7aea?auto=format&fit=crop&w=800&q=80",
      alt: "Truffle risotto",
    },
    {
      url: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=800&q=80",
      alt: "Creme brulee",
    },
    {
      url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
      alt: "Signature cocktail",
    },
    {
      url: "https://images.unsplash.com/photo-1580959375944-0ac9e8e6d10b?auto=format&fit=crop&w=800&q=80",
      alt: "Sea bass",
    },
    {
      url: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      alt: "Foie gras",
    },
    {
      url: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80",
      alt: "Chef at work",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our <span className="text-gold">Gallery</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            A visual journey through our culinary artistry and elegant ambiance
          </p>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="break-inside-avoid group cursor-pointer animate-fade-in-scale"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedImage(image.url)}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-elegant hover:shadow-lift transition-all duration-500">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <>
          <div
            className="fixed inset-0 bg-primary/95 backdrop-blur-sm z-[60] animate-fade-in"
            onClick={() => setSelectedImage(null)}
          ></div>
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-primary-foreground hover:text-gold transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-[90vh] object-contain rounded-3xl shadow-lift animate-fade-in-scale"
            />
          </div>
        </>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Gallery;
