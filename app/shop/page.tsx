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
      id: 1,
      name: "Modern Sofa",
      slug: "modern-sofa",
      description: "Comfortable premium sofa made for modern homes.",
      shortDescription: "Premium soft-touch sofa.",
      price: 34999,
      category: "Sofa",
      image: "https://i.pinimg.com/736x/47/c7/01/47c70124b7ae67deefe69ff6c45aaf67.jpg",
      colors: ["#d4a373", "#e9ecef"],
    },
    {
      id: 2,
      name: "Wooden Coffee Table",
      slug: "wooden-coffee-table",
      description: "Handcrafted wooden table perfect for living rooms.",
      shortDescription: "Handcrafted wooden table.",
      price: 8999,
      category: "Table",
      image: "https://i.pinimg.com/736x/c1/dc/e5/c1dce58027d968bbe810740eb21c4007.jpg",
      colors: ["#deb887"],
    },
    {
      id: 3,
      name: "Night Lamp",
      slug: "night-lamp",
      description: "Warm LED night lamp ideal for cozy bedrooms.",
      shortDescription: "Warm ambient lamp.",
      price: 1999,
      category: "Lighting",
      image: "https://i.pinimg.com/1200x/1d/e8/30/1de83077cf35c3a7daa16f9bd4c84b46.jpg",
      colors: ["#f4e1c1"],
    },
    {
      id: 4,
      name: "Ergonomic Office Chair",
      slug: "ergonomic-office-chair",
      description: "Ergonomic office chair with premium back support.",
      shortDescription: "Premium ergonomic chair.",
      price: 12999,
      category: "Chair",
      image: "https://i.pinimg.com/1200x/b7/79/97/b77997e5d806d9f56f83c2a0cc8c6935.jpg",
      colors: ["#c9ada7"],
    },
    {
      id: 5,
      name: "Soft Woven Rug",
      slug: "soft-woven-rug",
      description: "Soft rug ideal for living rooms & bedrooms.",
      shortDescription: "Soft premium rug.",
      price: 4999,
      category: "Decor",
      image: "https://i.pinimg.com/1200x/0b/4c/8e/0b4c8e8d410fb47d831849fb9e590450.jpg",
      colors: ["#e7d7c1"],
    },
    {
      id: 6,
      name: "Work Desk Pro",
      slug: "work-desk-pro",
      description: "Modern office desk perfect for productivity.",
      shortDescription: "Premium office work desk.",
      price: 14999,
      category: "Office Desk",
      image: "https://i.pinimg.com/736x/b3/21/e2/b321e2485da40c0dde2685c3a4fdcb56.jpg",
      colors: ["#c2b280"],
    },
    {
      id: 7,
      name: "Minimal Center Table",
      slug: "minimal-center-table",
      description: "Elegant center table for modern living spaces.",
      shortDescription: "Minimal premium center table.",
      price: 11999,
      category: "Table",
      image: "https://i.pinimg.com/1200x/76/5e/49/765e49ef4d72940c51b9b35c751e1946.jpg",
      colors: ["#c2b280"],
    },
    {
      id: 8,
      name: "Luxury Bed Frame",
      slug: "luxury-bed-frame",
      description: "Premium king-size wooden bed frame.",
      shortDescription: "Luxury wooden bed.",
      price: 45999,
      category: "Bed",
      image: "https://i.pinimg.com/1200x/5e/4c/11/5e4c112f562a1ebf7af5120a0610f7e0.jpg",
      colors: ["#c9b18a"],
    },
    {
      id: 9,
      name: "Classic Bookshelf",
      slug: "classic-bookshelf",
      description: "Tall wooden bookshelf with multiple compartments.",
      shortDescription: "Premium multi-rack shelf.",
      price: 16999,
      category: "Decor",
      image: "https://i.pinimg.com/1200x/61/6d/59/616d59157d3e1f6908dbf89a4f7a7ab2.jpg",
      colors: ["#a67b5b"],
    },
    {
      id: 10,
      name: "Dining Table Set",
      slug: "dining-table-set",
      description: "6-seater modern dining table set.",
      shortDescription: "Premium dining set.",
      price: 39999,
      category: "Table",
      image: "https://i.pinimg.com/736x/f4/53/a4/f453a4220b41d880cb9327ba0b7e8106.jpg",
      colors: ["#deb887"],
    },
    {
      id: 11,
      name: "Wall Shelf Trio",
      slug: "wall-shelf-trio",
      description: "Minimal floating wall shelf set of 3.",
      shortDescription: "Floating shelf pack.",
      price: 2599,
      category: "Decor",
      image: "https://i.pinimg.com/736x/7d/6d/0c/7d6d0c73862d7f62026dbf4987438f8d.jpg",
      colors: ["#e0c9a6"],
    },
    {
      id: 12,
      name: "Recliner Chair",
      slug: "recliner-chair",
      description: "Relaxing recliner chair ideal for living rooms.",
      shortDescription: "Soft recliner chair.",
      price: 22999,
      category: "Chair",
      image: "https://i.pinimg.com/736x/60/52/cf/6052cf4dfd6909fa222a56cd90a232aa.jpg",
      colors: ["#bfa6a0"],
    },
    {
      id: 13,
      name: "LED Ceiling Light",
      slug: "led-ceiling-light",
      description: "Stylish LED light for modern homes.",
      shortDescription: "Modern ceiling light.",
      price: 3499,
      category: "Lighting",
      image: "https://i.pinimg.com/736x/9b/32/51/9b325130e0c4694a985f3c32e5d9ae0d.jpg",
      colors: ["#f8f3e6"],
    },
    {
      id: 14,
      name: "Velvet Ottoman",
      slug: "velvet-ottoman",
      description: "Soft velvet ottoman perfect for living and bedroom.",
      shortDescription: "Premium ottoman stool.",
      price: 7999,
      category: "Decor",
      image: "https://i.pinimg.com/736x/1b/72/14/1b7214fd95c97fe5f3bbc326e8fdcdee.jpg",
      colors: ["#d8b4a6"],
    },
    {
      id: 15,
      name: "Compact Study Desk",
      slug: "compact-study-desk",
      description: "Space-saving study desk ideal for students.",
      shortDescription: "Minimal study desk.",
      price: 8999,
      category: "Office Desk",
      image: "https://i.pinimg.com/736x/6c/1e/16/6c1e16039e048e3f654eca23fe3b1619.jpg",
      colors: ["#cab89a"],
    },
  ];

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



