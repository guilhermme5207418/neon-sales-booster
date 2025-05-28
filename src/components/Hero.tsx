
import { useState, useEffect } from "react";
import CTAButton from "./CTAButton";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute top-20 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Timer */}
        <div className="mb-8 inline-flex items-center gap-4 bg-gray-900/50 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-3">
          <span className="text-green-400 font-semibold">⏰ OFERTA EXPIRA EM:</span>
          <div className="flex gap-2">
            <span className="bg-green-500 text-black px-3 py-1 rounded font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="text-green-400">:</span>
            <span className="bg-green-500 text-black px-3 py-1 rounded font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="text-green-400">:</span>
            <span className="bg-green-500 text-black px-3 py-1 rounded font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-green-100 to-green-400 bg-clip-text text-transparent leading-tight">
          Por tempo limitado, acesse agora o
          <span className="block text-green-400 drop-shadow-lg">Pack mais poderoso</span>
          para vender todos os dias no digital
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Mais de <span className="text-green-400 font-bold">15 ferramentas e arquivos prontos</span> para acelerar suas vendas online. 
          PLRs, landing pages, criativos validados e muito mais!
        </p>

        {/* Price Highlight */}
        <div className="mb-8">
          <div className="inline-block bg-gradient-to-r from-green-500/20 to-green-400/20 border border-green-500/50 rounded-2xl p-6">
            <div className="text-gray-400 text-lg line-through mb-2">De R$ 297,00</div>
            <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
              POR APENAS <span className="text-white">R$ 19,90</span>
            </div>
            <div className="text-green-300 font-semibold">🔥 Desconto de 93% OFF</div>
          </div>
        </div>

        {/* CTA Button */}
        <CTAButton size="large" className="mb-8" />

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span>✅ Acesso imediato</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span>🔒 Compra 100% segura</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span>⚡ Download instantâneo</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-green-500/30 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border border-green-400/20 rounded-full animate-ping"></div>
    </header>
  );
};

export default Hero;
