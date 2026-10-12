import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Zap, Clock, ChevronLeft } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const bundleProducts = products.filter(p => p.category === 'bundles').slice(0, 4);

  return (
    <div className="space-y-24">

      {/* Hero Section */}
      <section className="relative px-4 pt-10 pb-20 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Background glowing orbs */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-ai-primary/20 rounded-full blur-[100px] -translate-y-1/2 -z-10"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-ai-accent/20 rounded-full blur-[100px] -translate-y-1/2 -z-10"></div>

        <div className="text-center max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              ارتقِ بتجربتك الرقمية مع <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ai-primary via-white to-ai-accent">
                الذكاء الاصطناعي
              </span>
            </h1>
            <p className="text-xl text-ai-muted mb-10 max-w-2xl mx-auto leading-relaxed">
              تعبت من الكراكات؟ احصل على برامجك المفضلة بتراخيص أصلية وتفعيل فوري. مضمونة، آمنة، وبأسعار لا تقبل المنافسة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop" className="btn-primary text-lg flex items-center justify-center gap-2">
                تصفح المتجر
                <Zap className="w-5 h-5" />
              </Link>
              <Link to="#features" className="btn-outline text-lg">
                لماذا نحن؟
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 glass-panel border-x-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div whileHover={{ scale: 1.05 }} className="p-6 rounded-2xl bg-ai-darker/50 border border-ai-primary/10">
              <div className="w-16 h-16 mx-auto bg-ai-primary/20 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-ai-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">ضمان حقيقي</h3>
              <p className="text-ai-muted">جميع منتجاتنا أصلية 100% ومضمونة لمدة عام كامل على الأقل.</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="p-6 rounded-2xl bg-ai-darker/50 border border-ai-accent/10">
              <div className="w-16 h-16 mx-auto bg-ai-accent/20 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-ai-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">تسليم فوري</h3>
              <p className="text-ai-muted">استلم مفتاح التفعيل الخاص بك فور إتمام عملية الدفع مباشرة.</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="p-6 rounded-2xl bg-ai-darker/50 border border-ai-primary/10">
              <div className="w-16 h-16 mx-auto bg-ai-primary/20 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-ai-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">أسعار تنافسية</h3>
              <p className="text-ai-muted">نقدم أفضل العروض والخصومات على جميع المنتجات الرقمية.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10 border-b border-ai-primary/20 pb-4">
          <div>
            <h2 className="text-3xl font-black text-white flex items-center gap-3">
              <span className="w-2 h-8 bg-ai-primary rounded-full"></span>
              المنتجات الأكثر مبيعاً
            </h2>
          </div>
          <Link to="/shop" className="text-ai-primary hover:text-ai-accent flex items-center gap-1 font-semibold transition-colors">
            عرض الكل <ChevronLeft className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Bundles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex justify-between items-end mb-10 border-b border-ai-accent/20 pb-4">
          <div>
            <h2 className="text-3xl font-black text-white flex items-center gap-3">
              <span className="w-2 h-8 bg-ai-accent rounded-full"></span>
              باقات التوفير الذكية
            </h2>
            <p className="text-ai-muted mt-2">عروض مجمعة صممت خصيصاً لتوفير أموالك</p>
          </div>
          <Link to="/shop?category=bundles" className="text-ai-accent hover:text-ai-primary flex items-center gap-1 font-semibold transition-colors">
            تصفح الباقات <ChevronLeft className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bundleProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

    </div>
  );
}
