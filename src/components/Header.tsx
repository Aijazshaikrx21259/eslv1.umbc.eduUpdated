"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

// Updated navigation links to match screenshot exactly
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Digital Nutrition Label", href: "/nutrition-label" },
  { name: "Search App", href: "/search" },
  { name: "Terms Decoder", href: "/terms-decoder" },
  { name: "About", href: "/about" },
];

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar - UMBC Branding */}
      <div className="bg-black text-white py-2">
        <div className="umbc-container flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-[#f6b90e]">UMBC</span>
          </Link>

          <div className="hidden md:flex items-center space-x-5">
            <Link href="https://facebook.com/umbcpage" target="_blank" className="text-white hover:text-[#f6b90e]">
              <span className="sr-only">Facebook</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </Link>
            <Link href="https://twitter.com/umbc" target="_blank" className="text-white hover:text-[#f6b90e]">
              <span className="sr-only">Twitter</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
            <Link href="https://www.instagram.com/umbclife" target="_blank" className="text-white hover:text-[#f6b90e]">
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>
            <Link href="https://www.youtube.com/user/UMBCtube" target="_blank" className="text-white hover:text-[#f6b90e]">
              <span className="sr-only">YouTube</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                <path d="m10 15 5-3-5-3z"></path>
              </svg>
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            <button onClick={() => setIsSearchOpen(true)} aria-label="Search" className="text-white hover:text-[#f6b90e]">
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Header - Title and Navigation */}
      <div className="bg-[#f6b90e] text-black py-3">
        <div className="umbc-container">
          <div className="flex flex-col">
            <div>
              <p className="text-sm font-medium mb-1">
                College of Engineering and Information Technology
              </p>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="text-2xl md:text-3xl font-bold">
                <Link href="/">The Ethical Software Lab</Link>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation - Simplified to match screenshot */}
      <div className="bg-black">
        <div className="umbc-container flex justify-between items-center">
          <nav className="hidden md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white px-5 py-3 hover:bg-[#333] transition-colors text-base font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Sheet>
            <SheetTrigger asChild className="block md:hidden py-3">
              <Button variant="outline" size="icon" className="bg-transparent border-none text-white hover:bg-[#333]">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium px-2 py-3 hover:bg-secondary hover:text-white rounded-md transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
