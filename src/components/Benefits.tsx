
const Benefits = () => {
  const benefits = [
    {
      icon: "⚡",
      title: "Economize tempo",
      description: "Pare de criar tudo do zero. Use modelos prontos e validados pelo mercado.",
      highlight: "Ganhe horas do seu dia"
    },
    {
      icon: "📈",
      title: "Copie estruturas validadas",
      description: "Acesse fórmulas que já geraram milhões em vendas para outros empreendedores.",
      highlight: "Resultados comprovados"
    },
    {
      icon: "🚀",
      title: "Ferramentas com aplicação imediata",
      description: "Baixe, customize e implemente no mesmo dia. Sem curva de aprendizado.",
      highlight: "Resultados desde o dia 1"
    },
    {
      icon: "💰",
      title: "Monetização instantânea",
      description: "PLRs prontos para revenda. Comece a lucrar imediatamente com produtos digitais.",
      highlight: "ROI garantido"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Benefícios que vão transformar seu negócio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubra como este pack vai acelerar seus resultados e economizar meses de trabalho
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-green-500/30 rounded-2xl p-8 h-full hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-start gap-6">
                  <div className="text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <div className="inline-block bg-green-500/20 border border-green-500/50 rounded-full px-3 py-1 text-sm text-green-400 font-semibold mb-4">
                      {benefit.highlight}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
                
                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500/0 via-green-500/50 to-green-500/0 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Benefits Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-500/10 to-green-400/10 border border-green-500/50 rounded-2xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-green-400">
              🎯 Perfeito para quem quer:
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-300">Iniciar no marketing digital</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-300">Escalar vendas rapidamente</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-300">Ter múltiplas fontes de renda</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-300">Automatizar processos</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-300">Copiar fórmulas de sucesso</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-300">Economizar tempo e dinheiro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
