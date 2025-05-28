
const SocialProof = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Afiliado Digital",
      text: "Em 30 dias usando as landing pages do pack, aumentei minhas conversões em 340%. Valeu cada centavo!",
      rating: 5
    },
    {
      name: "Marina Costa",
      role: "Infoprodutora",
      text: "Os PLRs me permitiram criar 5 produtos novos em uma semana. Meu faturamento triplicou!",
      rating: 5
    },
    {
      name: "Roberto Lima",
      role: "Empreendedor Digital",
      text: "Nunca vi um pack tão completo. Os criativos validados me economizaram milhares em testes.",
      rating: 5
    }
  ];

  const stats = [
    { number: "347+", label: "Empreendedores usando", icon: "👥" },
    { number: "R$ 2.8M+", label: "Faturamento gerado", icon: "💰" },
    { number: "4.9/5", label: "Nota média", icon: "⭐" },
    { number: "95%", label: "Taxa de satisfação", icon: "✅" }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Usado por centenas de empreendedores com resultado
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Veja o que quem já adquiriu o pack está falando sobre os resultados
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900 to-black border border-green-500/30 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900 to-black border border-green-500/30 rounded-xl p-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-green-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-green-400 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-gradient-to-r from-green-500/10 to-green-400/10 border border-green-500/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-green-400">
            🛡️ Garantias e Segurança
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-4">🔒</div>
              <h4 className="font-semibold text-white mb-2">Compra Segura</h4>
              <p className="text-gray-400 text-sm">Pagamento protegido e criptografado</p>
            </div>
            <div>
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="font-semibold text-white mb-2">Acesso Imediato</h4>
              <p className="text-gray-400 text-sm">Receba tudo por email em segundos</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="font-semibold text-white mb-2">Suporte Incluso</h4>
              <p className="text-gray-400 text-sm">Tire suas dúvidas quando precisar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
