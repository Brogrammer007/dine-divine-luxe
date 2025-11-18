import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="col-span-1">
            <h3 className="font-serif text-3xl font-bold mb-4">
              La Maison <span className="text-gold">Dorée</span>
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Experience the art of fine dining where culinary excellence meets
              elegant ambiance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-gold transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="hover:text-gold transition-colors">
                  Reservations
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gold transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-4 text-gold">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                <span>123 Gourmet Street, Culinary District, CD 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gold" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gold" />
                <span>info@lamaisondoree.com</span>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-4 text-gold">Hours</h4>
            <div className="space-y-2 mb-6">
              <p>Monday - Friday: 5:00 PM - 11:00 PM</p>
              <p>Saturday - Sunday: 12:00 PM - 11:00 PM</p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/70">
            &copy; {new Date().getFullYear()} La Maison Dorée. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
