import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Cpu } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { getCartCount, getCartTotal } = useCart();
  const cartCount = getCartCount();

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'المتجر', path: '/shop' },
    { name: 'من نحن', path: '#' },
    { name: 'تواصل معنا', path: '#' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-panel border-b-0 rounded-b-2xl mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 group">
              <Cpu className="h-8 w-8 text-ai-primary group-hover:text-ai-accent transition-colors duration-300" />
              <span className="font-black text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-ai-primary to-ai-accent">
                KEYS STORE
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8 rtl:space-x-reverse">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-ai-text hover:text-ai-primary font-semibold transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ai-primary transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Cart & Mobile menu button */}
          <div className="flex items-center gap-4">

            <Link to="/cart" className="relative flex items-center gap-2 p-2 rounded-full hover:bg-ai-darker transition-colors group">
              <div className="relative">
                <ShoppingCart className="h-6 w-6 text-ai-primary group-hover:text-ai-accent transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-ai-secondary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:block font-bold text-ai-primary group-hover:text-ai-accent transition-colors">
                {getCartTotal().toFixed(2)} $
              </span>
            </Link>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-ai-text hover:text-ai-primary p-2"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-x-0 border-b-0"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-ai-text hover:text-ai-primary hover:bg-ai-darker transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
