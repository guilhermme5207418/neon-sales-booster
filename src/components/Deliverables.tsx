import CTAButton from "./CTAButton";

const Deliverables = () => {
  const mainDeliverables = [
    {
      icon: "🚀",
      title: "Templates de Landing Pages",
      description: "Páginas de alta conversão para você divulgar seus produtos e serviços."
    },
    {
      icon: "🎨",
      title: "Pacote de Criativos",
      description: "Artes prontas para usar nas suas redes sociais e anúncios online."
    },
    {
      icon: "📚",
      title: "E-books e Guias",
      description: "Conteúdo estratégico para atrair e educar seus clientes."
    },
    {
      icon: "📊",
      title: "Planilhas de Controle",
      description: "Organize suas finanças e acompanhe seus resultados de forma eficiente."
    },
    {
      icon: "📧",
      title: "Templates de E-mail Marketing",
      description: "Sequências de e-mails persuasivos para nutrir seus leads e aumentar suas vendas."
    },
    {
      icon: "🤖",
      title: "Chatbots",
      description: "Automatize o atendimento ao cliente e economize tempo."
    },
  ];

  const bonusDeliverables = [
    {
      icon: "🎁",
      title: "Pack de Presets",
      description: "Edite suas fotos com qualidade profissional em poucos cliques."
    },
    {
      icon: "🎬",
      title: "Templates de Vídeos",
      description: "Crie vídeos incríveis para o YouTube, Instagram e TikTok."
    },
    {
      icon: "💎",
      title: "Banco de Imagens Premium",
      description: "Tenha acesso a milhares de imagens de alta resolução para seus projetos."
    },
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-green-400/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent uppercase">
          Você Recebe Tudo Isso:
        </h2>
        
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
          Mais de <span className="text-green-400 font-bold">15 ferramentas profissionais</span> que vão transformar sua operação digital
        </p>

        {/* Main Deliverables */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {mainDeliverables.map((item, index) => (
            <div key={index} className="bg-gray-900/50 border border-green-500/20 rounded-2xl p-6 text-center hover:border-green-500/40 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Bonus Section with Enhanced Design */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-green-400/5 to-green-500/10 rounded-3xl blur-xl"></div>
          <div className="relative bg-gradient-to-r from-gray-900/80 via-gray-800/80 to-gray-900/80 border-2 border-green-500/50 rounded-3xl p-12">
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-green-500 to-green-400 text-black font-bold px-8 py-3 rounded-full text-lg mb-6 animate-pulse-soft">
                🎁 BÔNUS EXCLUSIVOS
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase">
                E Ainda Leva De Brinde
              </h3>
              <p className="text-xl text-green-400 font-bold">
                Valor adicional de R$ 197,00 - TOTALMENTE GRÁTIS!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {bonusDeliverables.map((item, index) => (
                <div key={index} className="bg-black/50 border border-green-500/30 rounded-2xl p-6 text-center hover:border-green-500/60 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="inline-block bg-gradient-to-r from-yellow-500/20 to-yellow-400/20 border border-yellow-500/50 rounded-2xl px-8 py-4">
                <p className="text-yellow-400 font-bold text-lg">
                  ⚡ Acesso vitalício a todos os bônus sem custo adicional
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-24">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 uppercase">
            Não Perca Essa Oportunidade!
          </h3>
          <p className="text-xl text-gray-300 mb-12">
            Adquira agora o Pack Dominação Digital e comece a transformar seus resultados.
          </p>
          <CTAButton size="large" />
        </div>
      </div>

      {/* Gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-900/50"></div>
    </section>
  );
};

export default Deliverables;
