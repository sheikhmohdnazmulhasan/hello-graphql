// Categories dataset
const categories = [
  { id: "f95b4a76-e3f1-489e-8bb7-35f3f7e5f1c6", name: "Shelter" },
  { id: "f5a1c3e2-baf7-4783-a3e9-6bdf9c721c5a", name: "Sleeping Gear" },
  { id: "c37d2c0e-fb54-49a2-babe-b3a2ffb1dd4b", name: "Gear" },
  { id: "7d4f58e5-6d9f-4523-9e23-3f9f5a1c1237", name: "Cooking" },
];

// Products dataset with corrected category references
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
  {
    id: "1e06dcd8-67bb-4f56-a2b4-4a258a5d3dc3",
    name: "Portable Stove",
    image: "https://example.com/images/stove.jpg",
    description:
      "A compact and efficient portable stove for easy cooking outdoors.",
    price: 45.0,
    quantity: 20,
    onStock: false,
    categoryId: "7d4f58e5-6d9f-4523-9e23-3f9f5a1c1237",
  },
  {
    id: "b59fa98e-dde8-49f2-b7a6-4b6e7f9a24c4",
    name: "LED Lantern",
    image: "https://example.com/images/lantern.jpg",
    description:
      "A bright and energy-efficient LED lantern with adjustable brightness.",
    price: 25.99,
    quantity: 75,
    onStock: true,
    categoryId: "c37d2c0e-fb54-49a2-babe-b3a2ffb1dd4b",
  },
  {
    id: "3de00d28-b982-451e-9c27-d2c0c6b7f3b1",
    name: "Insulated Water Bottle",
    image: "https://example.com/images/water_bottle.jpg",
    description:
      "A double-walled, vacuum-insulated water bottle that keeps drinks hot or cold.",
    price: 18.49,
    quantity: 200,
    onStock: true,
    categoryId: "c37d2c0e-fb54-49a2-babe-b3a2ffb1dd4b", // Changed to valid categoryId ID
  },
  {
    id: "a8dd79bc-b23d-4ec2-988c-59ae2a6d44a1",
    name: "First Aid Kit",
    image: "https://example.com/images/first_aid_kit.jpg",
    description:
      "A comprehensive first aid kit for emergencies while traveling.",
    price: 34.95,
    quantity: 40,
    onStock: true,
    categoryId: "c37d2c0e-fb54-49a2-babe-b3a2ffb1dd4b",
  },
  {
    id: "c3ed3143-f429-4dc3-8ff6-66b911ff5997",
    name: "Camping Chair",
    image: "https://example.com/images/camping_chair.jpg",
    description: "A foldable camping chair with a durable steel frame.",
    price: 39.5,
    quantity: 60,
    onStock: true,
    categoryId: "f95b4a76-e3f1-489e-8bb7-35f3f7e5f1c6", // Changed to valid categoryId ID
  },
  {
    id: "0cf0630c-7ed5-4a69-b0ae-19c56899c94a",
    name: "Binoculars",
    image: "https://example.com/images/binoculars.jpg",
    description:
      "Compact binoculars with high-definition lenses for wildlife observation.",
    price: 59.99,
    quantity: 15,
    onStock: false,
    categoryId: "c37d2c0e-fb54-49a2-babe-b3a2ffb1dd4b", // Changed to valid categoryId ID
  },
  {
    id: "f93a007e-6906-46bb-b9e5-2e203736a1b3",
    name: "Fire Starter Kit",
    image: "https://example.com/images/fire_starter.jpg",
    description:
      "A reliable fire starter kit for quick and easy ignition in any condition.",
    price: 12.99,
    quantity: 90,
    onStock: true,
    categoryId: "c37d2c0e-fb54-49a2-babe-b3a2ffb1dd4b",
  },
];

export const db = {
  categories,
  products,
};
