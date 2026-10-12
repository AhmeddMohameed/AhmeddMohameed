import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingCart, ArrowLeft, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const total = getCartTotal();

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel p-12 rounded-3xl inline-block"
        >
          <div className="w-24 h-24 bg-ai-darker rounded-full flex items-center justify-center mx-auto mb-6 border border-ai-primary/20 shadow-glow-primary">
            <ShoppingCart className="w-12 h-12 text-ai-primary" />
          </div>
          <h2 className="text-3xl font-black text-white mb-4">سلة المشتريات فارغة</h2>
          <p className="text-ai-muted mb-8 max-w-md mx-auto">
            يبدو أنك لم تقم بإضافة أي منتجات إلى السلة حتى الآن. تصفح متجرنا لاكتشاف أفضل البرامج والاشتراكات.
          </p>
          <Link to="/shop" className="btn-primary inline-flex items-center gap-2">
            العودة للمتجر <ArrowLeft className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-black text-white mb-10 border-b border-ai-primary/20 pb-4 inline-block">
        سلة المشتريات
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="glass-panel rounded-2xl overflow-hidden">
            <div className="hidden sm:grid grid-cols-12 gap-4 p-4 border-b border-white/5 text-ai-muted font-bold text-sm bg-ai-darker/50">
              <div className="col-span-6">المنتج</div>
              <div className="col-span-2 text-center">السعر</div>
              <div className="col-span-2 text-center">الكمية</div>
              <div className="col-span-2 text-center">الإجمالي</div>
            </div>

            <div className="p-4 space-y-4">
              <AnimatePresence>
                {cart.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center p-4 bg-ai-darker rounded-xl border border-white/5 hover:border-ai-primary/30 transition-colors group"
                  >

                    {/* Product Info */}
                    <div className="col-span-1 sm:col-span-6 flex items-center gap-4">
                      <div className="w-20 h-20 bg-white/5 rounded-lg p-2 flex-shrink-0 relative overflow-hidden">
                        <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                        <div className="absolute inset-0 bg-ai-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-bold text-white text-sm line-clamp-2">{item.title}</h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-400 hover:text-red-300 text-xs flex items-center gap-1 mt-2 transition-colors"
                        >
                          <Trash2 className="w-3 h-3" /> إزالة
                        </button>
                      </div>
                    </div>

                    {/* Price (Mobile & Desktop) */}
                    <div className="col-span-1 sm:col-span-2 flex justify-between sm:justify-center items-center">
                      <span className="sm:hidden text-ai-muted text-sm">السعر:</span>
                      <span className="font-bold text-white">{item.price.toFixed(2)} $</span>
                    </div>

                    {/* Quantity */}
                    <div className="col-span-1 sm:col-span-2 flex justify-between sm:justify-center items-center">
                      <span className="sm:hidden text-ai-muted text-sm">الكمية:</span>
                      <div className="flex items-center gap-2 bg-black/30 rounded-lg p-1 border border-white/10">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 text-ai-muted hover:text-white hover:bg-white/10 rounded transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-6 text-center font-bold text-white">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-ai-muted hover:text-white hover:bg-white/10 rounded transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="col-span-1 sm:col-span-2 flex justify-between sm:justify-center items-center">
                      <span className="sm:hidden text-ai-muted text-sm">الإجمالي:</span>
                      <span className="font-bold text-ai-primary">{(item.price * item.quantity).toFixed(2)} $</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="p-4 border-t border-white/5 bg-ai-darker/50 flex justify-end">
              <button
                onClick={clearCart}
                className="text-ai-muted hover:text-red-400 text-sm transition-colors flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4" /> إفراغ السلة
              </button>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="glass-panel p-6 rounded-2xl sticky top-28">
            <h2 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">ملخص الطلب</h2>

            <div className="space-y-4 mb-6 text-sm">
              <div className="flex justify-between text-ai-muted">
                <span>المجموع الفرعي</span>
                <span className="text-white">{total.toFixed(2)} $</span>
              </div>
              <div className="flex justify-between text-ai-muted">
                <span>الضرائب (0%)</span>
                <span className="text-white">0.00 $</span>
              </div>
              <div className="h-px bg-white/10 my-4"></div>
              <div className="flex justify-between items-end">
                <span className="text-white font-bold text-lg">الإجمالي النهائي</span>
                <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-ai-primary to-ai-accent">
                  {total.toFixed(2)} $
                </span>
              </div>
            </div>

            <button className="w-full btn-primary py-4 text-lg mb-4 flex justify-center items-center gap-2">
              إتمام الطلب الآن
            </button>

            <div className="flex items-start gap-3 p-4 bg-ai-darker rounded-xl border border-ai-primary/20">
              <ShieldCheck className="w-6 h-6 text-ai-primary flex-shrink-0 mt-0.5" />
              <p className="text-xs text-ai-muted leading-relaxed">
                معاملتك آمنة 100%. نستخدم تشفير متقدم لحماية بياناتك المالية. تفعيل فوري لمعظم المنتجات.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
