
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Como recebo o pack após a compra?",
      answer: "Imediatamente após a confirmação do pagamento, você recebe um email com o link de download e todas as instruções de acesso. O processo é 100% automático e instantâneo."
    },
    {
      question: "Tem garantia? E se eu não gostar?",
      answer: "Sim! Oferecemos 7 dias de garantia incondicional. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do valor investido, sem perguntas."
    },
    {
      question: "Funciona para iniciantes ou precisa de experiência?",
      answer: "Foi criado especialmente pensando em iniciantes! Todos os arquivos vêm com instruções simples e podem ser usados mesmo por quem está começando no marketing digital."
    },
    {
      question: "Posso usar os PLRs para vender como meus próprios produtos?",
      answer: "Sim! Os PLRs (Private Label Rights) inclusos permitem que você revenda como seus próprios produtos, personalize, altere e monetize da forma que preferir."
    },
    {
      question: "Os criativos funcionam em todas as plataformas?",
      answer: "Sim! Os mais de 2.000 criativos foram testados e validados em Facebook, Instagram, Google Ads, TikTok e outras principais plataformas de tráfego pago."
    },
    {
      question: "Preciso de conhecimento técnico para usar?",
      answer: "Não! Tudo foi desenvolvido para ser plug-and-play. Basta baixar, personalizar com suas informações e começar a usar. Incluímos tutoriais simples para facilitar ainda mais."
    },
    {
      question: "O pack será atualizado? Vou receber as atualizações?",
      answer: "Sim! O pack é constantemente atualizado com novas ferramentas e estratégias. Como cliente, você recebe todas as atualizações gratuitamente por 1 ano."
    },
    {
      question: "E se eu tiver dúvidas após adquirir?",
      answer: "Temos um suporte dedicado para tirar todas suas dúvidas. Você pode entrar em contato conosco através do email ou WhatsApp e responderemos em até 24 horas."
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-300">
            Tire suas principais dúvidas sobre o Pack Dominação Digital
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900 to-black border border-green-500/30 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-green-500/5 transition-colors duration-300"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="text-green-400 flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-green-400 flex-shrink-0" size={24} />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-green-500/20 pt-4">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-500/10 to-green-400/10 border border-green-500/50 rounded-2xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-300 mb-6">
              Entre em contato conosco! Estamos aqui para ajudar você a tomar a melhor decisão.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://packdominacaodigital.com/contato/"
                className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg border border-green-500/30 transition-colors duration-300"
              >
                💬 Falar no WhatsApp
              </a>
              <a
                href="mailto:contato@packdominacaodigital.com"
                className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg border border-green-500/30 transition-colors duration-300"
              >
                📧 Enviar Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
