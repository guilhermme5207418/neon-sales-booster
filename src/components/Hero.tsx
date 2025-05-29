
import CTAButton from "./CTAButton";

const Hero = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute top-20 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Limited Time Offer */}
      <div className="absolute top-4 right-4 z-20">
        <div className="bg-gradient-to-r from-red-600 to-red-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold animate-pulse shadow-lg">
          ⏰ Oferta por tempo limitado
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-3 md:px-4 text-center">
        {/* Main Headline */}
        <h1 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-white via-green-100 to-green-400 bg-clip-text text-transparent leading-tight px-2">
          Acesse as ferramentas utilizadas pelos
          <span className="block text-green-400 drop-shadow-lg">grandes players do digital!</span>
        </h1>

        {/* VSL Video */}
        <div className="mb-6 md:mb-8">
          <div className="relative max-w-4xl mx-auto">
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg md:rounded-2xl border border-green-500/30 md:border-2 shadow-2xl shadow-green-500/20">
              <iframe
                src="https://www.youtube.com/embed/O6VRE0rxrBo"
                title="Pack Dominação Digital - VSL"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Price Highlight */}
        <div className="mb-6 md:mb-8">
          <div className="inline-block bg-gradient-to-r from-green-500/20 to-green-400/20 border border-green-500/50 rounded-xl md:rounded-2xl p-4 md:p-6">
            <div className="text-gray-400 text-sm md:text-lg line-through mb-1 md:mb-2">De R$ 297,00</div>
            <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-green-400 mb-1 md:mb-2">
              POR APENAS <span className="text-white">R$ 19,90</span>
            </div>
            <div className="text-green-300 font-semibold text-sm md:text-base">🔥 Desconto de 93% OFF</div>
          </div>
        </div>

        {/* CTA Button */}
        <CTAButton size="large" className="mb-6 md:mb-8" />

        {/* Subheadline */}
        <p className="text-base md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-10 max-w-4xl mx-auto leading-relaxed px-2">
          Você não precisa começar do zero. <span className="text-green-400 font-bold">Use o que já funciona</span> e acelere seus resultados com +15 ferramentas prontas!
        </p>

        {/* Trust Indicators */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6 text-xs md:text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span>✅ Acesso imediato</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span>🔒 Compra 100% segura</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span>⚡ Download instantâneo</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-12 h-12 md:w-20 md:h-20 border border-green-500/30 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-10 right-10 w-10 h-10 md:w-16 md:h-16 border border-green-400/20 rounded-full animate-ping"></div>
    </header>
  );
};

export default Hero;
