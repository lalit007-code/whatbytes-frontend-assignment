import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating?: number;
  brand?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface FilterState {
  category: string;
  priceRange: [number, number];
  searchQuery: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

interface FilterStore {
  filters: FilterState;
  setCategory: (category: string) => void;
  setPriceRange: (range: [number, number]) => void;
  setSearchQuery: (query: string) => void;
  resetFilters: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) => {
        const items = get().items;
        const existingItem = items.find(item => item.id === product.id);
        
        if (existingItem) {
          set({
            items: items.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          });
        } else {
          set({ items: [...items, { ...product, quantity: 1 }] });
        }
      },
      removeItem: (productId) => {
        set({ items: get().items.filter(item => item.id !== productId) });
      },
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        
        set({
          items: get().items.map(item =>
            item.id === productId ? { ...item, quantity } : item
          )
        });
      },
      clearCart: () => set({ items: [] }),
      getTotalItems: () => get().items.reduce((total, item) => total + item.quantity, 0),
      getTotalPrice: () => get().items.reduce((total, item) => total + (item.price * item.quantity), 0),
    }),
    {
      name: 'cart-storage',
    }
  )
);

export const useFilterStore = create<FilterStore>((set) => ({
  filters: {
    category: 'all',
    priceRange: [0, 1000],
    searchQuery: '',
  },
  setCategory: (category) => set((state) => ({
    filters: { ...state.filters, category }
  })),
  setPriceRange: (range) => set((state) => ({
    filters: { ...state.filters, priceRange: range }
  })),
  setSearchQuery: (query) => set((state) => ({
    filters: { ...state.filters, searchQuery: query }
  })),
  resetFilters: () => set({
    filters: {
      category: 'all',
      priceRange: [0, 1000],
      searchQuery: '',
    }
  }),
}));