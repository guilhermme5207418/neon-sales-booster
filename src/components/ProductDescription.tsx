
const ProductDescription = () => {
  return (
    <section className="py-12 md:py-20 px-3 md:px-4 relative">
      {/* Gradient separator */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent"></div>
      
      <div className="max-w-6xl mx-auto">
        {/* Floating Limited Time Banner */}
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-block bg-gradient-to-r from-red-600/20 to-red-500/20 border border-red-500/50 rounded-full px-4 py-2 animate-bounce">
            <span className="text-red-400 font-bold text-sm md:text-base">⏰ Oferta por tempo limitado</span>
          </div>
        </div>

        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent px-2">
            Até quando vai gastar seu tempo sem precisar?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2">
            Otimize o processo, <span className="text-green-400 font-semibold">elimine tarefas desnecessárias</span> e concentre-se apenas no que realmente importa para suas vendas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="px-2">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-green-400">
              Ferramentas usadas por quem realmente vive de marketing digital
            </h3>
            <div className="space-y-4 md:space-y-6">
              <div className="flex gap-3 md:gap-4">
                <div className="w-4 h-4 md:w-6 md:h-6 bg-green-500 rounded-full flex-shrink-0 mt-1 animate-pulse"></div>
                <div>
                  <h4 className="font-semibold text-base md:text-lg mb-2">Recursos Validados no Mercado</h4>
                  <p className="text-gray-400 text-sm md:text-base">Não teste às cegas. Use modelos que já geraram milhões em vendas.</p>
                </div>
              </div>
              <div className="flex gap-3 md:gap-4">
                <div className="w-4 h-4 md:w-6 md:h-6 bg-green-500 rounded-full flex-shrink-0 mt-1 animate-pulse"></div>
                <div>
                  <h4 className="font-semibold text-base md:text-lg mb-2">Estratégias dos Grandes Players</h4>
                  <p className="text-gray-400 text-sm md:text-base">Acesse as mesmas ferramentas dos maiores vendedores digitais.</p>
                </div>
              </div>
              <div className="flex gap-3 md:gap-4">
                <div className="w-4 h-4 md:w-6 md:h-6 bg-green-500 rounded-full flex-shrink-0 mt-1 animate-pulse"></div>
                <div>
                  <h4 className="font-semibold text-base md:text-lg mb-2">Implementação Instantânea</h4>
                  <p className="text-gray-400 text-sm md:text-base">Baixe, personalize e comece a vender no mesmo dia.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative px-2">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-green-500/30 rounded-xl md:rounded-2xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-green-500/10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="text-4xl md:text-6xl mb-3 md:mb-4 animate-bounce">💎</div>
                <h4 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 text-green-400">Pack Dominação Digital</h4>
                <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
                  Você pode continuar tentando sozinho... ou aproveitar agora centenas de recursos prontos e economizar meses de trabalho.
                </p>
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-3 md:p-4">
                  <div className="text-xl md:text-2xl font-bold text-white">+347 pessoas</div>
                  <div className="text-green-400 text-sm md:text-base">já economizaram meses de trabalho</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;
