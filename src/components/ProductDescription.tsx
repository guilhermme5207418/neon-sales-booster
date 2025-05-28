
const ProductDescription = () => {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-gray-900/50 via-gray-800 to-gray-900/50">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-green-400/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent uppercase">
          O Pack Mais Completo Do Mercado Digital
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Tudo que você precisa para <span className="text-green-400 font-bold">vender com autoridade</span> e 
          <span className="text-green-400 font-bold"> gerar resultados consistentes</span> no marketing digital.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-900/50 border border-green-500/20 rounded-2xl p-8 hover:border-green-500/40 transition-all duration-300">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-4 uppercase">Implementação Imediata</h3>
            <p className="text-gray-400 leading-relaxed">
              Todos os arquivos estão prontos para uso. Basta baixar, personalizar com sua marca e começar a vender hoje mesmo.
            </p>
          </div>

          <div className="bg-gray-900/50 border border-green-500/20 rounded-2xl p-8 hover:border-green-500/40 transition-all duration-300">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-4 uppercase">Estratégias Validadas</h3>
            <p className="text-gray-400 leading-relaxed">
              Cada ferramenta foi testada e aprovada por especialistas. Você não está comprando teoria, mas resultados comprovados.
            </p>
          </div>

          <div className="bg-gray-900/50 border border-green-500/20 rounded-2xl p-8 hover:border-green-500/40 transition-all duration-300">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-2xl font-bold text-white mb-4 uppercase">ROI Garantido</h3>
            <p className="text-gray-400 leading-relaxed">
              Com apenas uma venda usando nossos materiais, você já recupera o investimento e ainda tem lucro.
            </p>
          </div>
        </div>
      </div>

      {/* Gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black"></div>
    </section>
  );
};

export default ProductDescription;
