
import CTAButton from "./CTAButton";

const Hero = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute top-20 left-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* VSL Video */}
        <div className="mb-12">
          <div className="relative max-w-4xl mx-auto">
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl border-2 border-green-500/30 shadow-2xl shadow-green-500/20">
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

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-green-100 to-green-400 bg-clip-text text-transparent leading-tight">
          Por tempo limitado, acesse agora o
          <span className="block text-green-400 drop-shadow-lg">Pack mais poderoso</span>
          para vender todos os dias no digital
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
          Mais de <span className="text-green-400 font-bold">15 ferramentas e arquivos prontos</span> para acelerar suas vendas online. 
          PLRs, landing pages, criativos validados e muito mais!
        </p>

        {/* Price Highlight */}
        <div className="mb-10">
          <div className="inline-block bg-gradient-to-r from-green-500/20 to-green-400/20 border border-green-500/50 rounded-2xl p-6">
            <div className="text-gray-400 text-lg line-through mb-2">De R$ 297,00</div>
            <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
              POR APENAS <span className="text-white">R$ 19,90</span>
            </div>
            <div className="text-green-300 font-semibold">🔥 Desconto de 93% OFF</div>
          </div>
        </div>

        {/* CTA Button */}
        <CTAButton size="large" className="mb-10" />

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
