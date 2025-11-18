import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/types/menu";
import { useState } from "react";
import CheckoutForm from "./CheckoutForm";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

const Cart = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartProps) => {
  const [showCheckout, setShowCheckout] = useState(false);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const vat = subtotal * 0.1; // 10% VAT
  const total = subtotal + vat;

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-primary/60 backdrop-blur-sm z-50 animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Cart Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full md:w-[450px] bg-background shadow-lift z-50 animate-slide-in-right overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-6 w-6 text-gold" />
            <h2 className="font-serif text-2xl font-bold">Your Order</h2>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-30" />
              <p className="text-muted-foreground">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-secondary rounded-2xl p-4 flex gap-4 animate-fade-in"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{item.name}</h3>
                    <p className="text-gold font-bold">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 rounded-full bg-background hover:bg-gold hover:text-primary transition-colors flex items-center justify-center"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="font-semibold w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-full bg-background hover:bg-gold hover:text-primary transition-colors flex items-center justify-center"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="ml-auto text-destructive hover:text-destructive/80 transition-colors"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Summary */}
        {items.length > 0 && (
          <div className="border-t border-border p-6 bg-secondary/30">
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">VAT (10%)</span>
                <span className="font-semibold">${vat.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-3 border-t border-border">
                <span>Total</span>
                <span className="text-gold">${total.toFixed(2)}</span>
              </div>
            </div>
            <Button
              onClick={() => setShowCheckout(true)}
              className="w-full bg-gold hover:bg-gold-dark text-primary font-semibold py-6 rounded-full shadow-elegant hover:shadow-lift transition-all hover:scale-105"
            >
              Proceed to Checkout
            </Button>
          </div>
        )}
      </div>

      {/* Checkout Form Modal */}
      {showCheckout && (
        <CheckoutForm
          isOpen={showCheckout}
          onClose={() => setShowCheckout(false)}
          total={total}
          items={items}
          onSuccess={() => {
            setShowCheckout(false);
            onClearCart();
            onClose();
          }}
        />
      )}
    </>
  );
};

export default Cart;
