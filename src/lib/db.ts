// Categories dataset
const categories = [
  { id: "f95b4a76-e3f1-489e-8bb7-35f3f7e5f1c6", name: "Shelter" },
  { id: "f5a1c3e2-baf7-4783-a3e9-6bdf9c721c5a", name: "Sleeping Gear" },
  { id: "c37d2c0e-fb54-49a2-babe-b3a2ffb1dd4b", name: "Gear" },
  { id: "7d4f58e5-6d9f-4523-9e23-3f9f5a1c1237", name: "Cooking" },
];

// Products dataset
const products = [
  {
    id: "f14a0b9e-3a91-4d70-8f56-d66b62e024d8",
    name: "Camping Tent",
    image: "https://example.com/images/tent.jpg",
    description:
      "A durable and lightweight camping tent suitable for all weather conditions.",
    price: 120.99,
    quantity: 50,
    onStock: true,
    categoryId: "f95b4a76-e3f1-489e-8bb7-35f3f7e5f1c6",
  },
  {
    id: "7cdd19b8-8fc4-4e71-8c70-9e013c04a9af",
    name: "Sleeping Bag",
    image: "https://example.com/images/sleeping_bag.jpg",
    description:
      "A comfortable and insulated sleeping bag for outdoor adventures.",
    price: 79.49,
    quantity: 100,
    onStock: true,
    categoryId: "f5a1c3e2-baf7-4783-a3e9-6bdf9c721c5a",
  },
  {
    id: "92c30760-9e39-44b5-8743-57a6823d1f79",
    name: "Hiking Backpack",
    image: "https://example.com/images/backpack.jpg",
    description: "A spacious and ergonomic backpack designed for long hikes.",
    price: 89.99,
    quantity: 30,
    onStock: true,
    categoryId: "c37d2c0e-fb54-49a2-babe-b3a2ffb1dd4b",
  },
];

// Reviews dataset
const reviews = [
  {
    id: "a1b2c3d4-e5f6-7890-abcd-1234567890ef",
    productId: "f14a0b9e-3a91-4d70-8f56-d66b62e024d8",
    user: "John Doe",
    rating: 5,
    comment: "Excellent tent! Very durable and easy to set up.",
    date: "2024-02-10",
  },
  {
    id: "b2c3d4e5-f678-9012-bcde-2345678901fa",
    productId: "f14a0b9e-3a91-4d70-8f56-d66b62e024d8",
    user: "Jane Smith",
    rating: 4,
    comment: "Good quality but a bit small for 4 people.",
    date: "2024-01-22",
  },
  {
    id: "c3d4e5f6-7890-1234-cdef-3456789012fb",
    productId: "7cdd19b8-8fc4-4e71-8c70-9e013c04a9af",
    user: "Alex Johnson",
    rating: 5,
    comment: "Super warm and comfortable! Perfect for cold weather.",
    date: "2024-02-05",
  },
  {
    id: "d4e5f678-9012-3456-def0-4567890123fc",
    productId: "92c30760-9e39-44b5-8743-57a6823d1f79",
    user: "Emily Davis",
    rating: 4,
    comment: "Great backpack but could use more padding on straps.",
    date: "2024-01-30",
  },
  {
    id: "e5f67890-1234-5678-ef01-5678901234fd",
    productId: "92c30760-9e39-44b5-8743-57a6823d1f79",
    user: "Michael Lee",
    rating: 5,
    comment: "Spacious, lightweight, and very comfortable for long hikes!",
    date: "2024-02-12",
  },
];

export const db = {
  categories,
  products,
  reviews,
};
