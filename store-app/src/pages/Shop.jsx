import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Cpu } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-black text-white mb-4 flex items-center justify-center gap-3">
          <Cpu className="w-10 h-10 text-ai-primary" />
          المتجر الرقمي
        </h1>
        <p className="text-ai-muted max-w-2xl mx-auto">
          تصفح مجموعتنا الواسعة من البرامج والاشتراكات الأصلية.
          استخدم أدوات التصفية للعثور على ما تحتاجه بسرعة.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* Sidebar / Filters */}
        <div className="lg:w-1/4">
          <div className="glass-panel p-6 rounded-2xl sticky top-28">

            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="ابحث عن منتج..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-ai-darker border border-ai-primary/30 rounded-xl py-3 px-4 pl-10 text-white focus:outline-none focus:border-ai-primary focus:shadow-glow-primary transition-all placeholder:text-gray-500"
                />
                <Search className="absolute left-3 top-3.5 w-5 h-5 text-ai-primary/50" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 border-b border-ai-primary/20 pb-2">
                <Filter className="w-5 h-5 text-ai-primary" />
                الأقسام
              </h3>
              <ul className="space-y-2">
                {categories.map(category => (
                  <li key={category.id}>
                    <button
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-right px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                        activeCategory === category.id
                          ? 'bg-gradient-to-r from-ai-primary/20 to-transparent text-ai-primary border-r-4 border-ai-primary'
                          : 'text-ai-muted hover:bg-ai-darker hover:text-white'
                      }`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="lg:w-3/4">
          <div className="mb-6 flex justify-between items-center text-ai-muted">
            <p>عرض {filteredProducts.length} منتجات</p>
          </div>

          <AnimatePresence mode="popLayout">
            {filteredProducts.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                {filteredProducts.map(product => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 glass-panel rounded-2xl"
              >
                <div className="w-24 h-24 mx-auto mb-6 bg-ai-darker rounded-full flex items-center justify-center">
                  <Search className="w-12 h-12 text-ai-muted" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">لم يتم العثور على منتجات</h3>
                <p className="text-ai-muted">جرب البحث بكلمات مختلفة أو اختر قسماً آخر.</p>
                <button
                  onClick={() => {setSearchQuery(''); setActiveCategory('all');}}
                  className="mt-6 btn-outline"
                >
                  إعادة ضبط الفلاتر
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
