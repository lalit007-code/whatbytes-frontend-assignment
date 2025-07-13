import { Product } from "./store";

// id , title , price, imageUrl,category , description, rating, brand



export const products: Product[] = [
  {
    id: "1",
    title: "Running Shoes",
    price: 99,
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "clothing",
    description:
      "High-performance running shoes with advanced cushioning technology for maximum comfort during your workouts.",
    rating: 4.5,
    brand: "SportMax",
  },
  {
    id: "2",
    title: "Wireless Headphones",
    price: 149,
    image:
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "electronics",
    description:
      "Premium wireless headphones with noise cancellation and 30-hour battery life.",
    rating: 4.8,
    brand: "SoundTech",
  },
  {
    id: "3",
    title: "Backpack",
    price: 129,
    image:
      "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "clothing",
    description:
      "Durable and spacious backpack perfect for travel, work, or daily commuting.",
    rating: 4.3,
    brand: "TravelPro",
  },
  {
    id: "4",
    title: "Smartwatch",
    price: 249,
    image:
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "electronics",
    description:
      "Advanced smartwatch with health monitoring, GPS, and smartphone connectivity.",
    rating: 4.6,
    brand: "TechTime",
  },
  {
    id: "5",
    title: "Sunglasses",
    price: 149,
    image:
      "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "clothing",
    description:
      "Stylish polarized sunglasses with UV protection and premium frame construction.",
    rating: 4.4,
    brand: "VisionStyle",
  },
  {
    id: "6",
    title: "Digital Camera",
    price: 499,
    image:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "electronics",
    description:
      "Professional-grade digital camera with high-resolution sensor and advanced features.",
    rating: 4.7,
    brand: "PhotoPro",
  },
  {
    id: "7",
    title: "T-shirt",
    price: 29,
    image:
      "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "clothing",
    description:
      "Comfortable cotton t-shirt with modern fit and breathable fabric.",
    rating: 4.2,
    brand: "ComfortWear",
  },
  {
    id: "8",
    title: "Smartphone",
    price: 699,
    image:
      "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "electronics",
    description:
      "Latest smartphone with advanced camera system, fast processor, and all-day battery life.",
    rating: 4.9,
    brand: "TechMobile",
  },
  {
    id: "9",
    title: "Coffee Maker",
    price: 179,
    image:
      "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "home",
    description:
      "Programmable coffee maker with built-in grinder and thermal carafe.",
    rating: 4.5,
    brand: "BrewMaster",
  },
  {
    id: "10",
    title: "Desk Lamp",
    price: 79,
    image:
      "https://images.pexels.com/photos/1166644/pexels-photo-1166644.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "home",
    description:
      "Modern LED desk lamp with adjustable brightness and USB charging port.",
    rating: 4.3,
    brand: "LightUp",
  },
];

export const categories = [
  { id: "all", name: "All" },
  { id: "electronics", name: "Electronics" },
  { id: "clothing", name: "Clothing" },
  { id: "home", name: "Home" },
];
