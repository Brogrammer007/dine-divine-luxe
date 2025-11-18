import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Check, Clock, Users } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const Reservations = () => {
  const [date, setDate] = useState<Date>();
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "2",
    time: "",
    specialRequest: "",
  });

  const timeSlots = [
    "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
    "20:00", "20:30", "21:00", "21:30", "22:00"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    toast.success("Reservation confirmed!");

    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        guests: "2",
        time: "",
        specialRequest: "",
      });
      setDate(undefined);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Reserve Your <span className="text-gold">Table</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Secure your spot for an unforgettable dining experience at La Maison Dorée
          </p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {showSuccess ? (
              // Success Message
              <div className="text-center py-20 animate-fade-in-scale">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500/20 rounded-full mb-6">
                  <Check className="h-12 w-12 text-green-500 animate-fade-in-scale" />
                </div>
                <h2 className="font-serif text-4xl font-bold mb-4">Reservation Confirmed!</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We look forward to welcoming you to La Maison Dorée.
                  <br />
                  A confirmation email has been sent to your address.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Form */}
                <div className="bg-card rounded-3xl p-8 shadow-elegant animate-fade-in">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="mt-2"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                        className="mt-2"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="mt-2"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="guests">Number of Guests *</Label>
                        <select
                          id="guests"
                          value={formData.guests}
                          onChange={(e) =>
                            setFormData({ ...formData, guests: e.target.value })
                          }
                          className="w-full mt-2 h-10 px-4 rounded-lg border border-input bg-background"
                          required
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? "Guest" : "Guests"}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <Label htmlFor="time">Time *</Label>
                        <select
                          id="time"
                          value={formData.time}
                          onChange={(e) =>
                            setFormData({ ...formData, time: e.target.value })
                          }
                          className="w-full mt-2 h-10 px-4 rounded-lg border border-input bg-background"
                          required
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label>Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal mt-2",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(date) => date < new Date()}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <Label htmlFor="request">Special Request (Optional)</Label>
                      <Textarea
                        id="request"
                        value={formData.specialRequest}
                        onChange={(e) =>
                          setFormData({ ...formData, specialRequest: e.target.value })
                        }
                        className="mt-2"
                        placeholder="Allergies, dietary restrictions, special occasions..."
                        rows={3}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={!date}
                      className="w-full bg-gold hover:bg-gold-dark text-primary font-semibold py-6 rounded-full shadow-elegant hover:shadow-lift transition-all hover:scale-105"
                    >
                      Confirm Reservation
                    </Button>
                  </form>
                </div>

                {/* Info */}
                <div className="space-y-8 animate-slide-in-right">
                  {/* Image */}
                  <div className="relative h-80 rounded-3xl overflow-hidden shadow-elegant">
                    <img
                      src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                      alt="Restaurant interior"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  </div>

                  {/* Info Cards */}
                  <div className="space-y-4">
                    <div className="bg-secondary rounded-2xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-gold/20 rounded-full p-3">
                          <Clock className="h-6 w-6 text-gold" />
                        </div>
                        <div>
                          <h3 className="font-serif text-xl font-semibold mb-2">Hours</h3>
                          <p className="text-muted-foreground mb-1">
                            Monday - Friday: 5:00 PM - 11:00 PM
                          </p>
                          <p className="text-muted-foreground">
                            Saturday - Sunday: 12:00 PM - 11:00 PM
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-secondary rounded-2xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-gold/20 rounded-full p-3">
                          <Users className="h-6 w-6 text-gold" />
                        </div>
                        <div>
                          <h3 className="font-serif text-xl font-semibold mb-2">
                            Group Reservations
                          </h3>
                          <p className="text-muted-foreground">
                            For parties of 11 or more, please call us directly at{" "}
                            <span className="text-gold font-semibold">+1 (555) 123-4567</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Reservations;
