import { Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="glass-panel border-t border-ai-primary/20 mt-20 rounded-t-3xl">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <Cpu className="h-8 w-8 text-ai-primary" />
              <span className="font-black text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-ai-primary to-ai-accent">
                KEYS STORE
              </span>
            </Link>
            <p className="text-ai-muted text-sm leading-relaxed">
              متجرك الرقمي الأول للبرامج والبطاقات الأصلية. نحن نقدم لك تجربة تسوق مدعومة بالذكاء الاصطناعي لتسهيل وصولك لأفضل العروض.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-ai-primary/30 pb-2 inline-block">
              روابط مهمة
            </h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-ai-muted hover:text-ai-primary transition-colors text-sm">من نحن</Link></li>
              <li><Link to="#" className="text-ai-muted hover:text-ai-primary transition-colors text-sm">طريقة الشراء</Link></li>
              <li><Link to="#" className="text-ai-muted hover:text-ai-primary transition-colors text-sm">سياسة الخصوصية</Link></li>
              <li><Link to="#" className="text-ai-muted hover:text-ai-primary transition-colors text-sm">الأسئلة الشائعة</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-ai-primary/30 pb-2 inline-block">
              الأقسام
            </h3>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-ai-muted hover:text-ai-primary transition-colors text-sm">مايكروسوفت</Link></li>
              <li><Link to="/shop" className="text-ai-muted hover:text-ai-primary transition-colors text-sm">برامج الحماية</Link></li>
              <li><Link to="/shop" className="text-ai-muted hover:text-ai-primary transition-colors text-sm">اشتراكات LinkedIn</Link></li>
              <li><Link to="/shop" className="text-ai-muted hover:text-ai-primary transition-colors text-sm">باقات التوفير</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-ai-primary/30 pb-2 inline-block">
              تواصل معنا
            </h3>
            <div className="flex space-x-4 rtl:space-x-reverse mb-6">
              <a href="#" className="text-ai-muted hover:text-ai-primary transition-colors transform hover:scale-110">
                Facebook
              </a>
              <a href="#" className="text-ai-muted hover:text-ai-primary transition-colors transform hover:scale-110">
                Twitter
              </a>
              <a href="#" className="text-ai-muted hover:text-ai-secondary transition-colors transform hover:scale-110">
                Instagram
              </a>
              <a href="#" className="text-ai-muted hover:text-red-500 transition-colors transform hover:scale-110">
                Youtube
              </a>
            </div>
            <p className="text-ai-muted text-sm">
              <span className="text-ai-primary">البريد الإلكتروني:</span> sales@kysstore.com
            </p>
          </div>

        </div>

        <div className="border-t border-ai-primary/20 mt-12 pt-8 text-center flex flex-col md:flex-row justify-between items-center">
          <p className="text-ai-muted text-sm">
            &copy; {new Date().getFullYear()} Keys Store. جميع الحقوق محفوظة.
          </p>
          <div className="mt-4 md:mt-0 flex gap-2">
            {/* Payment Icons Placeholder */}
            <div className="h-8 w-12 bg-white/10 rounded flex items-center justify-center text-xs">Visa</div>
            <div className="h-8 w-12 bg-white/10 rounded flex items-center justify-center text-xs">Master</div>
            <div className="h-8 w-12 bg-white/10 rounded flex items-center justify-center text-xs">PayPal</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
