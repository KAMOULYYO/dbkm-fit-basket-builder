
import React from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Navbar = () => {
  const { openCart, cartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <a href="#" className="text-2xl font-bold text-dbkm-black">
              DBKM<span className="text-dbkm">FIT</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-dbkm font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-dbkm font-medium">About</a>
            <a href="#supplements" className="text-gray-700 hover:text-dbkm font-medium">Supplements</a>
            <a href="#clothing" className="text-gray-700 hover:text-dbkm font-medium">Clothing</a>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center">
            <button 
              onClick={openCart}
              className="relative p-2 text-gray-700 hover:text-dbkm transition-colors"
              aria-label="Open shopping cart"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-dbkm text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="ml-4 p-2 md:hidden text-gray-700"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mt-4 pb-4 md:hidden animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-dbkm font-medium" onClick={toggleMobileMenu}>Home</a>
              <a href="#about" className="text-gray-700 hover:text-dbkm font-medium" onClick={toggleMobileMenu}>About</a>
              <a href="#supplements" className="text-gray-700 hover:text-dbkm font-medium" onClick={toggleMobileMenu}>Supplements</a>
              <a href="#clothing" className="text-gray-700 hover:text-dbkm font-medium" onClick={toggleMobileMenu}>Clothing</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
