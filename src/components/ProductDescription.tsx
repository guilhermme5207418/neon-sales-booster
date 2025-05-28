
const ProductDescription = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            O Pack Mais Completo do Mercado Digital
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Criado especialmente para <span className="text-green-400 font-semibold">empreendedores digitais, afiliados, infoprodutores e iniciantes</span> que querem resultados reais no mundo digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-green-400">
              Por que este Pack vai revolucionar seus resultados?
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Arquivos Prontos para Usar</h4>
                  <p className="text-gray-400">Não perca tempo criando do zero. Tenha acesso a modelos validados e testados no mercado.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Estratégias Atualizadas 2025</h4>
                  <p className="text-gray-400">Ferramentas e técnicas que estão funcionando agora, não métodos ultrapassados.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Aplicação Imediata</h4>
                  <p className="text-gray-400">Baixe, customize e comece a vender no mesmo dia. Sem complicações.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-green-500/30 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="text-6xl mb-4">💎</div>
                <h4 className="text-2xl font-bold mb-4 text-green-400">Pack Dominação Digital</h4>
                <p className="text-gray-300 mb-6">
                  Mais de 15 ferramentas premium que custaram milhares para desenvolver, agora disponíveis por uma fração do preço.
                </p>
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">+347 pessoas</div>
                  <div className="text-green-400">já adquiriram o pack</div>
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
