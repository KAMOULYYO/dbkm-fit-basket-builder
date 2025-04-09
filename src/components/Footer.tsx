
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dbkm-black text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              DBKM<span className="text-dbkm">FIT</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Premium fitness supplements and apparel to help you achieve your best performance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-dbkm transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-dbkm transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-dbkm transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-dbkm transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-dbkm transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-dbkm transition-colors">About Us</a>
              </li>
              <li>
                <a href="#supplements" className="text-gray-300 hover:text-dbkm transition-colors">Supplements</a>
              </li>
              <li>
                <a href="#clothing" className="text-gray-300 hover:text-dbkm transition-colors">Apparel</a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Information</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-dbkm transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-dbkm transition-colors">Shipping Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-dbkm transition-colors">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-dbkm transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-dbkm" />
                <span>123 Fitness Street, Muscle City, MC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-dbkm" />
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-dbkm" />
                <span>info@dbkmfit.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} DBKM Fitness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
