"use client";

import Image from "next/image";
import { useState } from "react";
import { Product } from "@/data/products";
import { useCart } from "@/components/cart-context";

export default function ShopPage() {
  const { addToCart } = useCart();

  // ----------------------
  // PRODUCTS (20 ITEMS)
  // ----------------------

  const shopProducts: Product[] = [
    {
      id: 101,
      name: "Modern Sofa",
      slug: "modern-sofa",
      description: "Comfortable premium sofa made for modern Nepalese homes.",
      shortDescription: "Premium soft-touch sofa.",
      price: 34999,
      category: "Sofa",
      image:
        "https://i.pinimg.com/736x/47/c7/01/47c70124b7ae67deefe69ff6c45aaf67.jpg",
      colors: ["#d4a373", "#e9ecef"],
    },
    {
      id: 102,
      name: "Wooden Coffee Table",
      slug: "wooden-coffee-table",
      description: "Handcrafted wooden table perfect for living rooms.",
      shortDescription: "Handcrafted wooden table.",
      price: 8999,
      category: "Table",
      image:
        "https://i.pinimg.com/736x/c1/dc/e5/c1dce58027d968bbe810740eb21c4007.jpg",
      colors: ["#deb887"],
    },
    {
      id: 103,
      name: "Night Lamp",
      slug: "night-lamp",
      description: "Warm LED night lamp ideal for cozy bedrooms.",
      shortDescription: "Warm ambient lamp.",
      price: 1999,
      category: "Lighting",
      image:
        "https://i.pinimg.com/1200x/1d/e8/30/1de83077cf35c3a7daa16f9bd4c84b46.jpg",
      colors: ["#f4e1c1"],
    },
    {
      id: 104,
      name: "Ergonomic Office Chair",
      slug: "ergonomic-office-chair",
      description: "Comfortable office chair with back support.",
      shortDescription: "Premium ergonomic chair.",
      price: 12999,
      category: "Chair",
      image:
        "https://i.pinimg.com/1200x/b7/79/97/b77997e5d806d9f56f83c2a0cc8c6935.jpg",
      colors: ["#c9ada7"],
    },
    {
      id: 105,
      name: "Soft Woven Rug",
      slug: "soft-woven-rug",
      description: "Soft rug ideal for bedrooms and living rooms.",
      shortDescription: "Soft premium rug.",
      price: 4999,
      category: "Decor",
      image:
        "https://i.pinimg.com/1200x/0b/4c/8e/0b4c8e8d410fb47d831849fb9e590450.jpg",
      colors: ["#e7d7c1"],
    },
    {
      id: 106,
      name: "Work Desk Pro",
      slug: "work-desk-pro",
      description: "Modern work desk perfect for home offices.",
      shortDescription: "Premium office work desk.",
      price: 14999,
      category: "Office Desk",
      image:
        "https://i.pinimg.com/736x/b3/21/e2/b321e2485da40c0dde2685c3a4fdcb56.jpg",
      colors: ["#c2b280"],
    },
    {
      id: 107,
      name: "Center Table",
      slug: "Center Table",
      description: "Modern work desk perfect for home offices.",
      shortDescription: "Premium office work desk.",
      price: 14999,
      category: "Table",
      image:
        "https://i.pinimg.com/1200x/76/5e/49/765e49ef4d72940c51b9b35c751e1946.jpg",
      colors: ["#c2b280"],
    },

    

  // ----------------------
  // SEARCH + FILTER STATES
  // ----------------------

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("All");

  const categories = [
    "All",
    "Sofa",
    "Table",
    "Lighting",
    "Bed",
    "Office Desk",
    "Chair",
    "Decor",
  ];

  const priceFilters = ["All", "Under 5,000", "5,000 - 15,000", "Above 15,000"];

  // ----------------------
  // FILTERING LOGIC
  // ----------------------

  const filteredProducts = shopProducts.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || p.category === category;

    let matchPrice = true;
    if (priceRange === "Under 5,000") matchPrice = p.price < 5000;
    if (priceRange === "5,000 - 15,000")
      matchPrice = p.price >= 5000 && p.price <= 15000;
    if (priceRange === "Above 15,000") matchPrice = p.price > 15000;

    return matchSearch && matchCategory && matchPrice;
  });

  return (
    <div className="app-container py-10">
      <h1 className="text-3xl font-heading font-semibold mb-2">Shop</h1>
      <p className="text-textSecondary text-sm mb-8">
        Explore our modern premium furniture collection.
      </p>

      {/* ----------------------
          SEARCH + FILTER BAR
      ---------------------- */}
      <div className="bg-surface p-4 rounded-xl shadow-card mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Search Input */}
        <input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-11 px-3 rounded-lg border border-border text-sm"
        />

        {/* Category Filter */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="h-11 px-3 rounded-lg border border-border text-sm"
        >
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        {/* Price Filter */}
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="h-11 px-3 rounded-lg border border-border text-sm"
        >
          {priceFilters.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </div>

      {/* ----------------------
          PRODUCTS GRID
      ---------------------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-surface rounded-2xl shadow-card p-4 hover:-translate-y-1 transition"
          >
            <div className="rounded-xl overflow-hidden h-48 bg-bg">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="mt-3 font-semibold text-sm text-textPrimary">
              {product.name}
            </h3>

            <p className="text-xs text-textSecondary">
              {product.shortDescription}
            </p>

            <div className="font-heading font-semibold text-primary text-base mt-2">
              NPR {product.price.toLocaleString()}
            </div>

            <button
              onClick={() => addToCart(product, 1)}
              className="mt-3 w-full bg-primary text-white text-xs h-9 rounded-lg hover:bg-primary/90 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

