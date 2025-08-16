import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Home } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a href="#" className="flex items-center">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                  HydProperty
                </span>
                <span className="ml-1 text-sm font-semibold text-gray-600">Predictor</span>
              </a>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Button variant="ghost" className="flex items-center gap-1">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
                  onClick={toggleMobileMenu}
                >
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;