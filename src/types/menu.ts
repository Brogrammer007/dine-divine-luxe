export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "starters" | "mains" | "desserts" | "drinks";
  image: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}
