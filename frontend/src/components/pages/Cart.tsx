"use client"

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Samsung Galaxy S24',
      price: 125000,
      originalPrice: 140000,
      quantity: 1,
      image: 'bg-gradient-to-br from-gray-800 to-black',
      inStock: true
    },
    {
      id: 2,
      name: 'Traditional Nepali Dhaka Topi',
      price: 850,
      originalPrice: 1200,
      quantity: 2,
      image: 'bg-gradient-to-br from-red-600 to-yellow-600',
      inStock: true
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((sum, item) => sum + ((item.originalPrice - item.price) * item.quantity), 0);
  const shipping = subtotal > 50000 ? 0 : 150;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen">
      
      <section className="bg-nepal-gradient py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Shopping Cart</h1>
            <p className="text-xl opacity-90">Review your items before checkout</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingCart className="h-16 w-16 mx-auto text-gray-400 mb-4" />
              <h2 className="text-2xl font-bold text-gray-600 mb-4">Your cart is empty</h2>
              <p className="text-gray-500 mb-8">Add some items to get started</p>
              <Button className="bg-nepal-red hover:bg-nepal-crimson">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold mb-6">Cart Items ({cartItems.length})</h2>
                  
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4 p-4 border border-gray-100 rounded-lg">
                        <div className={`${item.image} w-24 h-24 rounded-lg flex-shrink-0`}></div>
                        
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-lg font-bold text-nepal-red">
                              NPR {item.price.toLocaleString()}
                            </span>
                            <span className="text-sm text-gray-500 line-through">
                              NPR {item.originalPrice.toLocaleString()}
                            </span>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-8 text-center font-medium">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </Button>
                            </div>
                            
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeItem(item.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
                  <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>NPR {subtotal.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between text-green-600">
                      <span>You Save</span>
                      <span>-NPR {savings.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>
                        {shipping === 0 ? (
                          <span className="text-green-600">Free</span>
                        ) : (
                          `NPR ${shipping}`
                        )}
                      </span>
                    </div>
                    
                    <hr />
                    
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-nepal-red">NPR {total.toLocaleString()}</span>
                    </div>
                  </div>

                  {shipping > 0 && (
                    <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        Add NPR {(50000 - subtotal).toLocaleString()} more for free shipping
                      </p>
                    </div>
                  )}

                  <Button className="w-full mt-6 bg-nepal-red hover:bg-nepal-crimson text-lg py-3">
                    Proceed to Checkout
                  </Button>

                  <div className="mt-4 text-center">
                    <Button variant="ghost" className="text-nepal-blue">
                      Continue Shopping
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default Cart;
