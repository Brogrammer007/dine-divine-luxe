import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const InstagramFeed = () => {
  // Placeholder Instagram posts
  const posts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80",
      likes: 2847,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80",
      likes: 3256,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1476124369491-c7addf7a7aea?auto=format&fit=crop&w=600&q=80",
      likes: 2134,
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=600&q=80",
      likes: 1923,
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80",
      likes: 2567,
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
      likes: 4123,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-pink-500/10 rounded-full px-4 py-2 mb-4">
            <Instagram className="h-5 w-5 text-pink-500" />
            <span className="text-pink-500 font-semibold">@lamaisondoree</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Follow Our <span className="text-gold">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay connected with our daily specials and behind-the-scenes moments
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {posts.map((post, index) => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-elegant hover:shadow-lift transition-all duration-500 animate-fade-in-scale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4">
                <div className="flex items-center gap-2 text-primary-foreground font-semibold">
                  <Instagram className="h-5 w-5" />
                  <span>{post.likes.toLocaleString()}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Follow Button */}
        <div className="text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 rounded-full shadow-elegant hover:shadow-lift transition-all hover:scale-105"
            >
              <Instagram className="h-5 w-5 mr-2" />
              Follow us on Instagram
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
