
import React from 'react';
import { X, ChevronDown, ChevronUp, ShoppingCart, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const Cart = () => {
  const { 
    cartItems, 
    isCartOpen, 
    closeCart, 
    removeFromCart, 
    updateQuantity, 
    cartTotal 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={closeCart}
      />
      
      {/* Cart Panel */}
      <div className={`absolute top-0 right-0 w-full max-w-md h-full bg-white shadow-xl transform ${isCartOpen ? 'animate-cart-slide-in' : 'translate-x-full'}`}>
        {/* Cart Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-xl font-bold flex items-center">
            <ShoppingCart className="mr-2" size={22} />
            Your Cart
          </h2>
          <button onClick={closeCart} className="p-1 rounded-full hover:bg-gray-100">
            <X size={24} />
          </button>
        </div>
        
        {/* Cart Items */}
        <div className="overflow-y-auto h-[calc(100%-12rem)]">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <ShoppingCart size={48} className="text-gray-300 mb-4" />
              <p className="text-lg font-medium text-gray-500">Your cart is empty</p>
              <p className="text-gray-400 mt-1">Add some items to get started</p>
              <button 
                onClick={closeCart}
                className="mt-6 btn-primary"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="divide-y">
              {cartItems.map(item => (
                <li key={item.product.id} className="px-6 py-4">
                  <div className="flex items-center">
                    {/* Product Image */}
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    
                    {/* Product Details */}
                    <div className="ml-4 flex-1">
                      <h3 className="text-sm font-medium text-gray-900">{item.product.name}</h3>
                      <p className="mt-1 text-sm text-gray-500">${item.product.price.toFixed(2)}</p>
                    </div>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center">
                      <div className="flex border rounded">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-gray-100"
                        >
                          <ChevronDown size={16} />
                        </button>
                        <span className="w-8 text-center py-1">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-gray-100"
                        >
                          <ChevronUp size={16} />
                        </button>
                      </div>
                      
                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="ml-2 text-gray-400 hover:text-red-500"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="px-6 py-4 border-t absolute bottom-0 left-0 right-0 bg-white">
            <div className="flex justify-between py-2">
              <span className="font-medium">Subtotal:</span>
              <span className="font-bold">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-500 mb-4">Shipping and taxes calculated at checkout</p>
            <button className="w-full btn-primary py-3">
              Proceed to Checkout
            </button>
            <button 
              onClick={closeCart}
              className="w-full text-center mt-2 text-sm text-dbkm hover:text-dbkm-dark"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
