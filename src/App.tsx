/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ShoppingBasket, 
  MapPin, 
  User, 
  CreditCard, 
  Phone, 
  Clock, 
  CheckCircle2, 
  ChevronRight,
  Search,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const PRODUCTS = [
  { id: 1, name: 'Premium Rice', price: 50, unit: 'kg', description: 'Fresh and high-quality long-grain rice.', category: 'Grains', image: 'https://picsum.photos/seed/rice/400/300' },
  { id: 2, name: 'Sugar', price: 45, unit: 'kg', description: 'Pure white premium quality sugar.', category: 'Essentials', image: 'https://picsum.photos/seed/sugar/400/300' },
  { id: 3, name: 'Cooking Oil', price: 120, unit: 'litre', description: 'Healthy refined sunflower oil for daily cooking.', category: 'Oils', image: 'https://picsum.photos/seed/oil/400/300' },
  { id: 4, name: 'Assorted Chocolates', price: 10, unit: 'piece', description: 'Delicious chocolates for a sweet treat.', category: 'Snacks', image: 'https://picsum.photos/seed/chocolate/400/300' },
  { id: 5, name: 'Utility Pipe', price: 80, unit: 'meter', description: 'Durable pipes for household and garden use.', category: 'Hardware', image: 'https://picsum.photos/seed/pipe/400/300' },
  { id: 6, name: 'Wheat Flour (Atta)', price: 40, unit: 'kg', description: 'Freshly ground whole wheat flour.', category: 'Grains', image: 'https://picsum.photos/seed/flour/400/300' },
  { id: 7, name: 'Toor Dal', price: 160, unit: 'kg', description: 'Unpolished protein-rich pulses.', category: 'Pulses', image: 'https://picsum.photos/seed/dal/400/300' },
  { id: 8, name: 'Salt', price: 20, unit: 'kg', description: 'Iodized crystal salt.', category: 'Essentials', image: 'https://picsum.photos/seed/salt/400/300' },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = ['Home', 'Products', 'Payment', 'Contact'];

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-stone-900 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <ShoppingBasket className="text-white w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight text-emerald-900">Deepak Devadiga</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                    activeTab === item ? 'text-emerald-600' : 'text-stone-500'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-stone-600">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-stone-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setActiveTab(item);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-3 text-base font-medium text-stone-600 hover:bg-emerald-50 hover:text-emerald-600 rounded-md"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
              Quality Groceries Since 2026
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-stone-900 leading-tight mb-6">
              Fresh Essentials for Your <span className="text-emerald-600">Daily Life</span>
            </h1>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Welcome to Deepak Devadiga Grocery Shop. We provide the finest quality grains, oils, and essentials directly to your kitchen in Kappinadka, Gandinagara.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setActiveTab('Products')}
                className="px-8 py-4 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 flex items-center gap-2"
              >
                Browse Products <ChevronRight className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-full border border-stone-200 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center">
                  <User className="w-5 h-5 text-stone-500" />
                </div>
                <div>
                  <p className="text-xs text-stone-400 font-medium uppercase tracking-tighter">Owner</p>
                  <p className="text-sm font-bold text-stone-800">Deepak Devadiga</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 -z-0 w-1/2 h-full hidden lg:block">
          <img 
            src="https://picsum.photos/seed/grocery/1200/1200?blur=2" 
            alt="Grocery Background" 
            className="w-full h-full object-cover opacity-10 rounded-l-[100px]"
            referrerPolicy="no-referrer"
          />
        </div>
      </header>

      {/* Info Cards */}
      <section className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 mb-1">Our Location</h3>
                <p className="text-sm text-stone-500">Kappinadka, Gandinagara, Thenkakaranduru</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 mb-1">Opening Hours</h3>
                <p className="text-sm text-stone-500">Mon - Sun: 8:00 AM - 9:00 PM</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-orange-50 rounded-xl text-orange-600">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 mb-1">Contact Us</h3>
                <p className="text-sm text-stone-500">+91 82961 39353</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-4">Our Grocery Products</h2>
              <p className="text-stone-500 max-w-xl">We source only the freshest and most reliable products for our customers. Quality is our top priority.</p>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input 
                type="text" 
                placeholder="Search products..." 
                className="pl-10 pr-4 py-2 bg-white border border-stone-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all w-full md:w-64"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl border border-stone-200 overflow-hidden hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-widest text-emerald-700 shadow-sm">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl text-stone-900">{product.name}</h3>
                    <div className="text-right">
                      <p className="text-emerald-600 font-bold text-lg">₹{product.price}</p>
                      <p className="text-[10px] text-stone-400 font-medium uppercase">per {product.unit}</p>
                    </div>
                  </div>
                  <p className="text-sm text-stone-500 mb-6 line-clamp-2">
                    {product.description}
                  </p>
                  <button className="w-full py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm font-semibold text-stone-700 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all flex items-center justify-center gap-2">
                    <ShoppingBasket className="w-4 h-4" /> Add to Order
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section id="payment" className="py-20 bg-emerald-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 border-4 border-white rounded-full" />
          <div className="absolute bottom-10 left-10 w-96 h-96 border-2 border-white rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/50 border border-emerald-700 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-6">
                <CreditCard className="w-3 h-3" /> Secure UPI Payment
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Quick & Easy <span className="text-emerald-400">Digital Payments</span></h2>
              <p className="text-emerald-100/80 text-lg mb-8 leading-relaxed">
                We support all major UPI apps including Google Pay, PhonePe, and Paytm. Simply scan the QR code to complete your payment instantly.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  'Instant payment confirmation',
                  'No hidden charges or convenience fees',
                  'Secure and encrypted transactions',
                  'Support for all major UPI providers'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-emerald-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="p-6 bg-emerald-800/30 border border-emerald-700 rounded-2xl backdrop-blur-sm">
                <p className="text-sm text-emerald-300 font-medium uppercase tracking-widest mb-1">UPI ID</p>
                <p className="text-2xl font-mono font-bold tracking-tight">deepak.devadiga@upi</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[40px] shadow-2xl shadow-emerald-950/50 relative"
              >
                <div className="absolute -top-4 -right-4 bg-emerald-500 text-white px-4 py-2 rounded-2xl font-bold text-sm shadow-lg">
                  Scan to Pay
                </div>
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=upi://pay?pa=deepak.devadiga@upi&pn=Deepak%20Tevarika&cu=INR" 
                  alt="UPI QR Code"
                  className="w-60 h-60"
                />
                <div className="mt-6 flex justify-center gap-4">
                  <div className="w-10 h-10 bg-stone-100 rounded-lg flex items-center justify-center grayscale opacity-50">GPay</div>
                  <div className="w-10 h-10 bg-stone-100 rounded-lg flex items-center justify-center grayscale opacity-50">Paytm</div>
                  <div className="w-10 h-10 bg-stone-100 rounded-lg flex items-center justify-center grayscale opacity-50">PhonePe</div>
                </div>
              </motion.div>
              <p className="mt-8 text-emerald-300 text-sm font-medium">Verified Merchant: Deepak Devadiga</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-emerald-600 p-2 rounded-lg">
                  <ShoppingBasket className="text-white w-5 h-5" />
                </div>
                <span className="font-bold text-xl tracking-tight text-white">Deepak Devadiga</span>
              </div>
              <p className="max-w-sm mb-6">
                Your trusted neighborhood grocery shop in Kappinadka. Providing quality essentials and fresh products for your daily needs since 2026.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer">FB</div>
                <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer">IG</div>
                <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer">WA</div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Home</a></li>
                <li><a href="#products" className="hover:text-emerald-500 transition-colors">Products</a></li>
                <li><a href="#payment" className="hover:text-emerald-500 transition-colors">Payment Methods</a></li>
                <li><a href="#" className="hover:text-emerald-500 transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Shop Info</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Kappinadka, Gandinagara, Thenkakaranduru</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>+91 82961 39353</span>
                </li>
                <li className="flex items-start gap-3">
                  <User className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Deepak Devadiga (Owner)</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>© 2026 Deepak Devadiga Grocery Shop. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
