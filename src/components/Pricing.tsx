import CTAButton from "./CTAButton";

const Pricing = () => {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-gray-900/50 via-gray-800 to-gray-900/50">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-green-400/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent uppercase">
          Oferta Especial Por Tempo Limitado
        </h2>

        {/* Price Comparison */}
        <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border-2 border-green-500/50 rounded-3xl p-12 mb-12">
          <div className="mb-8">
            <p className="text-gray-400 text-xl mb-4">Valor real deste pack:</p>
            <div className="text-gray-400 text-3xl line-through mb-4">R$ 297,00</div>
            <div className="text-6xl md:text-7xl font-bold text-green-400 mb-4">
              R$ 19,90
            </div>
            <div className="text-green-300 text-2xl font-semibold">
              🔥 Economia de R$ 277,10 (93% OFF)
            </div>
          </div>

          {/* Payment Methods */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <img src="https://packdominacaodigital.com/wp-content/uploads/2024/01/cartoes.png" alt="Cartões de Crédito" className="h-12 object-contain" />
            <img src="https://packdominacaodigital.com/wp-content/uploads/2024/01/boleto.png" alt="Boleto Bancário" className="h-12 object-contain" />
            <img src="https://packdominacaodigital.com/wp-content/uploads/2024/01/pix.png" alt="Pix" className="h-12 object-contain" />
          </div>

          {/* CTA Button */}
          <CTAButton size="large" />
        </div>

        {/* Guarantee Section */}
        <div className="bg-black/50 border border-green-500/30 rounded-2xl p-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img src="https://packdominacaodigital.com/wp-content/uploads/2024/01/selo-de-garantia.png" alt="Garantia de 7 dias" className="h-16 object-contain" />
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 uppercase">
                GARANTIA DE 7 DIAS
              </h3>
              <p className="text-gray-400">
                Sua compra é 100% segura e você tem 7 dias para testar o produto.
              </p>
            </div>
          </div>
          <p className="text-gray-400 text-center">
            Se por algum motivo você não estiver satisfeito, devolvemos seu dinheiro sem burocracia.
          </p>
        </div>
      </div>

      {/* Gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black"></div>
    </section>
  );
};

export default Pricing;
