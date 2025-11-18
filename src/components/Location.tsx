import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Location = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Visit <span className="text-gold">Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're located in the heart of the culinary district
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-elegant animate-fade-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.682572647497!2d-73.98784368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant location"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="bg-card rounded-3xl p-8 shadow-elegant hover:shadow-lift transition-all duration-500">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gold/20 rounded-full p-3 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-2">Address</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    123 Gourmet Street
                    <br />
                    Culinary District, CD 12345
                    <br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gold/20 rounded-full p-3 flex-shrink-0">
                  <Phone className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-2">Phone</h3>
                  <a
                    href="tel:+15551234567"
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gold/20 rounded-full p-3 flex-shrink-0">
                  <Mail className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:info@lamaisondoree.com"
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    info@lamaisondoree.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gold/20 rounded-full p-3 flex-shrink-0">
                  <Clock className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-2">Hours</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p className="font-semibold text-foreground mb-2">
                      Opening Hours
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <span>Monday - Friday:</span>
                      <span>5:00 PM - 11:00 PM</span>
                      <span>Saturday - Sunday:</span>
                      <span>12:00 PM - 11:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
