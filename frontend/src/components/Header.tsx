"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslation } from "@/hooks/useTranslation";
import { Menu, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">

        {/* Main Header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold bg-nepal-gradient bg-clip-text text-transparent">
              NepalMart
            </h1>
            <span className="ml-2 text-xs bg-nepal-red text-white px-2 py-1 rounded-full">
              नेपाल
            </span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Input
                placeholder={t('search_placeholder')}
                className="pl-4 pr-12 py-3 rounded-md border-2 border-gray-200 focus:border-nepal-red transition-colors focus:outline-none outline-none"
              />
              <Button
                size="sm"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-md bg-gray-500 hover:bg-nepal-crimson"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />

            <Link href="/account">
              <Button
                variant="ghost"
                size="sm"
                className="hidden md:flex items-center gap-2"
              >
                <User className="h-5 w-5" />
                <span className="hidden lg:inline">{t("account")}</span>
              </Button>
            </Link>

            <Link href="/cart">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-nepal-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  2
                </span>
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Input
              placeholder={t("search_placeholder")}
              className="pl-4 pr-12 py-3 rounded-full border-2 border-gray-200"
            />
            <Button
              size="sm"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full bg-nepal-red hover:bg-nepal-crimson"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
