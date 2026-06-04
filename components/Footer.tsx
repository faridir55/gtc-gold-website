import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-glass-border pt-20 pb-10 px-4 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <Link href="/" className="flex justify-center mb-8">
          <img
            src="/MagicFX_pro.png"
            alt="MagicFX Pro Logo"
            className="h-24 w-auto object-contain"
          />
        </Link>

        <p className="text-xl text-text-muted mb-8 max-w-2xl mx-auto font-serif italic">
          &quot;The Element of Wealth, Mastered.&quot;
        </p>

        <div className="flex flex-col items-center justify-center mb-10">
          <h4 className="text-sm uppercase tracking-widest text-text-muted mb-4">Contact Us</h4>
          <a
            href="https://wa.me/+15019144353"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#25D366]/40 rounded-full text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 mb-6"
          >
            <MessageCircle size={20} />
            <span className="font-medium">WhatsApp Us</span>
          </a>

          {/* Language Switcher */}
          <div className="flex items-center gap-4 text-xs tracking-widest uppercase">
            <a
              href="https://tr.magicfx.pro"
              className="font-medium text-text-muted hover:text-text-color transition-colors duration-300 border-b border-transparent hover:border-text-muted/40 pb-0.5"
            >
              Türkçe (TR)
            </a>
            <span className="text-text-muted/20">|</span>
            <a
              href="https://magicfx.pro"
              className="font-semibold text-accent-color transition-colors duration-300 border-b border-accent-color pb-0.5"
            >
              English (EN)
            </a>
            <span className="text-text-muted/20">|</span>
            <a
              href="https://fa.magicfx.pro"
              className="font-medium text-text-muted hover:text-text-color transition-colors duration-300 border-b border-transparent hover:border-text-muted/40 pb-0.5"
            >
              Farsi (FA)
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 mt-10">
          <p className="text-xs text-text-muted/60 leading-relaxed max-w-3xl mx-auto mb-6">
            <strong className="text-text-muted">RISK DISCLOSURE:</strong> Trading foreign exchange and precious metals on margin carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Past performance is not indicative of future results. Before deciding to invest in foreign exchange or copy trading, you should carefully consider your investment objectives, level of experience, and risk appetite.
          </p>
          <p className="text-xs text-text-muted/40">
            &copy; {new Date().getFullYear()} Magic FX Pro. All rights reserved.
          </p>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-32 bg-accent-color/5 blur-3xl rounded-[100%]" />
    </footer>
  );
}
