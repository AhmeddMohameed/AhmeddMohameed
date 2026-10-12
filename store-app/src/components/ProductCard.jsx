import { ShoppingCart, CheckCircle, Zap } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const isOutOfStock = product.outOfStock;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col group relative"
    >
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ai-primary via-ai-accent to-ai-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Badge */}
      {product.badge && (
        <div className={`absolute top-4 right-4 z-10 px-3 py-1 text-xs font-bold rounded-full backdrop-blur-md border
          ${isOutOfStock ? 'bg-red-500/20 text-red-400 border-red-500/50' : 'bg-ai-primary/20 text-ai-primary border-ai-primary/50'}`}>
          {isOutOfStock ? <Zap className="inline w-3 h-3 mr-1" /> : null}
          {product.badge}
        </div>
      )}

      {/* Image Container */}
      <div className="relative pt-[100%] bg-ai-darker/50 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className={`absolute top-0 left-0 w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-110 ${isOutOfStock ? 'grayscale opacity-50' : ''}`}
        />
        {/* Holographic overlay effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-ai-primary/0 to-ai-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-sm md:text-base font-bold text-white mb-2 line-clamp-2 min-h-[3rem] group-hover:text-ai-primary transition-colors">
          {product.title}
        </h3>

        <div className="flex items-center gap-2 mb-4 text-xs text-ai-muted">
          <CheckCircle className="w-4 h-4 text-green-400" />
          <span>تفعيل فوري</span>
        </div>

        <div className="mt-auto flex items-end justify-between">
          <div className="flex flex-col">
            {product.originalPrice && (
              <span className="text-xs text-ai-muted line-through mb-1">
                {product.originalPrice.toFixed(2)} $
              </span>
            )}
            <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-ai-primary to-ai-text">
              {product.price.toFixed(2)} $
            </span>
          </div>

          <button
            onClick={() => addToCart(product)}
            disabled={isOutOfStock}
            className={`flex items-center justify-center p-3 rounded-xl transition-all duration-300
              ${isOutOfStock
                ? 'bg-ai-darker text-gray-500 cursor-not-allowed border border-gray-700'
                : 'bg-ai-primary/10 text-ai-primary border border-ai-primary hover:bg-ai-primary hover:text-ai-darker hover:shadow-glow-primary'
              }`}
            title={isOutOfStock ? 'غير متوفر' : 'أضف للسلة'}
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
