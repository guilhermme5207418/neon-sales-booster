
import CTAButton from "./CTAButton";

const Deliverables = () => {
  const mainDeliverables = [
    { icon: "📚", title: "Mais de 200 PLR's", description: "Produtos com direito de revenda para monetizar imediatamente" },
    { icon: "🎯", title: "54 modelos de landing page", description: "Páginas de alta conversão prontas para usar" },
    { icon: "🎨", title: "Mais de 2.000 criativos validados", description: "Imagens e vídeos testados e aprovados" },
    { icon: "💰", title: "Modelos de presells premium", description: "Estruturas que vendem antes mesmo do produto" },
    { icon: "🔧", title: "Plugin clonador de páginas", description: "Clone qualquer página de sucesso em segundos" },
    { icon: "⭐", title: "Plugins Premium", description: "Ferramentas avançadas para WordPress" },
    { icon: "🖼️", title: "Pacote de imagens PNG", description: "Banco de imagens profissionais" },
    { icon: "✍️", title: "Estruturas de copy", description: "Templates de textos que convertem" },
    { icon: "👥", title: "Guia para estudo de persona", description: "Entenda seu público-alvo como nunca" },
    { icon: "❌", title: "Lista de palavras negativas", description: "Otimize seus anúncios com exclusões certeiras" }
  ];

  const bonusDeliverables = [
    { icon: "🎨", title: "Elementor Pro", description: "Plugin premium para criar páginas incríveis" },
    { icon: "📋", title: "Checklist Business Manager", description: "Organize toda sua operação digital" },
    { icon: "🔥", title: "Esteira de aquecimento", description: "Para contas de anúncio performarem melhor" }
  ];

  return (
    <section className="py-12 md:py-24 px-3 md:px-4 relative">
      {/* Gradient separator */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-gray-900/50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent px-2">
            O que está incluso no Pack
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            Mais de <span className="text-green-400 font-bold">15 ferramentas e arquivos</span> que normalmente custariam milhares de reais separadamente
          </p>
        </div>

        {/* Main Deliverables */}
        <div className="mb-12 md:mb-20">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-16 text-green-400">
            🎯 Entregáveis Principais
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {mainDeliverables.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black border border-green-500/30 rounded-lg md:rounded-xl p-4 md:p-6 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">{item.icon}</div>
                <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-white">{item.title}</h4>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{item.description}</p>
                <div className="mt-4 md:mt-6 w-full h-1 bg-green-500/30 rounded"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Bonus Section */}
        <div className="relative mb-12 md:mb-16">
          {/* Background Effects for Bonus */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-green-400/30 to-green-500/20 rounded-2xl md:rounded-3xl blur-xl"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-green-400/10 border-2 border-green-500/60 rounded-2xl md:rounded-3xl shadow-2xl shadow-green-500/30"></div>
          
          <div className="relative z-10 p-6 md:p-12">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-block bg-gradient-to-r from-green-500 to-green-400 text-black font-bold px-4 py-2 md:px-8 md:py-4 rounded-full text-sm md:text-xl mb-4 md:mb-6">
                🎁 BÔNUS EXCLUSIVOS
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 px-2">
                Receba Também Estes Bônus Incríveis
              </h3>
              <p className="text-lg md:text-xl text-green-300 font-semibold">
                Valor adicional de R$ 197,00 - GRÁTIS por tempo limitado!
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 md:gap-8">
              {bonusDeliverables.map((item, index) => (
                <div key={index} className="bg-black/70 border-2 border-green-500/50 rounded-xl md:rounded-2xl p-4 md:p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/20">
                  <div className="text-4xl md:text-5xl mb-4 md:mb-6">{item.icon}</div>
                  <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-green-400">{item.title}</h4>
                  <p className="text-gray-300 text-sm md:text-base">{item.description}</p>
                  <div className="mt-4 md:mt-6 w-full h-2 bg-gradient-to-r from-green-500 to-green-400 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="text-center bg-gradient-to-br from-gray-900 to-black border border-green-500/30 rounded-xl md:rounded-2xl p-6 md:p-10">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-white">
            Valor real deste pack: <span className="text-red-400 line-through">R$ 297,00</span>
          </h3>
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-green-400 mb-6 md:mb-8">
            Seu investimento hoje: R$ 19,90
          </h4>
          <p className="text-gray-300 mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed text-sm md:text-base px-2">
            Economize mais de R$ 277 e tenha acesso a tudo que precisa para dominar o marketing digital
          </p>
          <CTAButton size="large" />
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
