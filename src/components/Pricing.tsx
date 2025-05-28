
import CTAButton from "./CTAButton";

const Pricing = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/80 to-black"></div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Oferta Especial de Lançamento
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Por tempo limitado, tenha acesso ao pack completo por uma fração do valor real
          </p>
        </div>

        {/* Main Pricing Card */}
        <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-green-500 rounded-3xl p-8 md:p-12 relative overflow-hidden mb-8">
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-400/5 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-block bg-gradient-to-r from-green-500 to-green-400 text-black font-bold px-6 py-2 rounded-full mb-6">
              🔥 93% DE DESCONTO
            </div>

            {/* Pricing */}
            <div className="mb-8">
              <div className="text-gray-400 text-xl mb-2">Valor normal do pack:</div>
              <div className="text-3xl text-red-400 line-through mb-4">R$ 297,00</div>
              
              <div className="text-gray-300 text-2xl mb-2">Seu investimento hoje:</div>
              <div className="text-6xl md:text-7xl font-bold text-green-400 mb-4">
                R$ 19<sup className="text-3xl">,90</sup>
              </div>
              
              <div className="text-green-300 text-lg font-semibold">
                ⚡ Menos que um lanche no shopping!
              </div>
            </div>

            {/* What's Included Summary */}
            <div className="bg-black/50 border border-green-500/30 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold text-white mb-4">✅ Você recebe TUDO isso:</h3>
              <div className="grid md:grid-cols-2 gap-2 text-left text-gray-300">
                <div>• +200 PLRs prontos</div>
                <div>• 54 Landing pages</div>
                <div>• +2.000 Criativos validados</div>
                <div>• Plugins premium</div>
                <div>• Modelos de presells</div>
                <div>• Elementor Pro</div>
                <div>• Estruturas de copy</div>
                <div>• E muito mais...</div>
              </div>
            </div>

            {/* CTA Button */}
            <CTAButton size="large" className="mb-6" />

            {/* Payment Info */}
            <div className="text-sm text-gray-400 space-y-2">
              <div>💳 Cartão, PIX ou Boleto • Parcelamento disponível</div>
              <div>🔒 Compra 100% segura e protegida</div>
              <div>⚡ Acesso imediato após aprovação do pagamento</div>
            </div>
          </div>
        </div>

        {/* Urgency Elements */}
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-green-500/30 rounded-xl p-4">
            <div className="text-2xl mb-2">⏰</div>
            <div className="text-sm text-gray-400">Oferta por tempo limitado</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black border border-green-500/30 rounded-xl p-4">
            <div className="text-2xl mb-2">🔥</div>
            <div className="text-sm text-gray-400">Preço pode subir a qualquer momento</div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-black border border-green-500/30 rounded-xl p-4">
            <div className="text-2xl mb-2">⚡</div>
            <div className="text-sm text-gray-400">Últimas unidades disponíveis</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
