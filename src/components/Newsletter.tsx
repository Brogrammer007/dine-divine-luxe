import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Check } from "lucide-react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate subscription
    setIsSubscribed(true);
    toast.success("Successfully subscribed to our newsletter!");
    setEmail("");

    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gold/10 via-background to-gold/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/20 rounded-full mb-6 animate-fade-in-scale">
            <Mail className="h-8 w-8 text-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Stay <span className="text-gold">Connected</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in">
            Subscribe to receive exclusive offers, seasonal menu updates, and special
            event invitations.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto animate-fade-in-scale"
          >
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 px-6 rounded-full border-border focus:border-gold transition-colors"
              required
            />
            <Button
              type="submit"
              className="bg-gold hover:bg-gold-dark text-primary font-semibold px-8 h-12 rounded-full shadow-elegant hover:shadow-lift transition-all hover:scale-105 whitespace-nowrap"
              disabled={isSubscribed}
            >
              {isSubscribed ? (
                <>
                  <Check className="h-5 w-5 mr-2" />
                  Subscribed!
                </>
              ) : (
                "Subscribe"
              )}
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
