"use client";

import Link from "next/link";
import { useCart } from "./cart-context";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const { items } = useCart();
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-bg/80 backdrop-blur border-b border-border">
      <nav className="app-container flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-xl bg-primary flex items-center justify-center text-white font-bold">
            D
          </span>
          <span className="font-heading font-semibold text-lg">
            Furniture-Homes Nepal
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm text-textSecondary">
          <b><Link href="/">Home</Link></b>
          <b><Link href="/shop">Shop</Link></b>
          <b><Link href="#collections">Collections</Link></b>
          <b><Link href="/about">About</Link></b>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Cart Icon */}
          <Link href="/cart" className="relative">
            <ShoppingBag className="w-6 h-6 text-textPrimary" />

            {count > 0 && (
              <span className="absolute -top-2 -right-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-secondary text-[11px] text-white">
                {count}
              </span>
            )}
          </Link>

          {/* Hamburger Mobile Btn */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-bg border-t border-border px-6 py-4 space-y-4 text-textPrimary font-medium">
          <Link href="/" onClick={() => setOpen(false)} className="block">Home</Link>
          <Link href="/shop" onClick={() => setOpen(false)} className="block">Shop</Link>
          <Link href="#collections" onClick={() => setOpen(false)} className="block">Collections</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block">About</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
