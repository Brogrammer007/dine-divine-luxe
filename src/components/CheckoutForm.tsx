import { useState } from "react";
import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CartItem } from "@/types/menu";
import { toast } from "sonner";

interface CheckoutFormProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
  items: CartItem[];
  onSuccess: () => void;
}

const CheckoutForm = ({ isOpen, onClose, total, items, onSuccess }: CheckoutFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "card",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate order processing
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      toast.success("Order placed successfully!");

      setTimeout(() => {
        onSuccess();
        setShowSuccess(false);
      }, 2000);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-primary/80 backdrop-blur-sm z-[60] animate-fade-in"></div>

      {/* Modal */}
      <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
        <div className="bg-background rounded-3xl shadow-lift max-w-2xl w-full max-h-[90vh] overflow-hidden animate-fade-in-scale">
          {showSuccess ? (
            // Success Animation
            <div className="p-12 text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500/20 rounded-full mb-6 animate-fade-in-scale">
                <Check className="h-12 w-12 text-green-500" />
              </div>
              <h2 className="font-serif text-3xl font-bold mb-2">Order Confirmed!</h2>
              <p className="text-muted-foreground">
                Thank you for your order. We'll prepare it with care.
              </p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="p-6 border-b border-border flex items-center justify-between">
                <h2 className="font-serif text-2xl font-bold">Checkout</h2>
                <button
                  onClick={onClose}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                <div className="space-y-6">
                  {/* Order Summary */}
                  <div className="bg-secondary rounded-2xl p-4">
                    <h3 className="font-semibold mb-3">Order Summary</h3>
                    <div className="space-y-2 text-sm">
                      {items.map((item) => (
                        <div key={item.id} className="flex justify-between">
                          <span className="text-muted-foreground">
                            {item.quantity}x {item.name}
                          </span>
                          <span className="font-semibold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                      <div className="flex justify-between font-bold pt-2 border-t border-border text-base">
                        <span>Total</span>
                        <span className="text-gold">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Customer Information */}
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
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">Delivery Address *</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="payment">Payment Method *</Label>
                    <select
                      id="payment"
                      value={formData.paymentMethod}
                      onChange={(e) =>
                        setFormData({ ...formData, paymentMethod: e.target.value })
                      }
                      className="w-full mt-2 h-10 px-4 rounded-lg border border-input bg-background"
                      required
                    >
                      <option value="card">Credit/Debit Card</option>
                      <option value="paypal">PayPal</option>
                      <option value="cash">Cash on Delivery</option>
                    </select>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-6 bg-gold hover:bg-gold-dark text-primary font-semibold py-6 rounded-full shadow-elegant hover:shadow-lift transition-all hover:scale-105"
                >
                  {isSubmitting ? "Processing..." : `Place Order - $${total.toFixed(2)}`}
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
