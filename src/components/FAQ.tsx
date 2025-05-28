import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como recebo o pack após a compra?",
      answer: "Após a confirmação do pagamento, você receberá automaticamente um email com todos os links de download. O acesso é imediato e vitalício."
    },
    {
      question: "Tem garantia?",
      answer: "Sim! Oferecemos 7 dias de garantia incondicional. Se não ficar satisfeito, devolvemos 100% do seu dinheiro."
    },
    {
      question: "Funciona para iniciantes?",
      answer: "Absolutamente! O pack foi criado pensando em iniciantes. Todos os arquivos são fáceis de usar e vêm com instruções simples."
    },
    {
      question: "Os PLRs podem ser revendidos?",
      answer: "Sim! Todos os PLRs inclusos possuem direitos de revenda, permitindo que você os venda e fique com 100% dos lucros."
    },
    {
      question: "Preciso de conhecimento técnico?",
      answer: "Não! Tudo foi desenvolvido para ser usado por qualquer pessoa, mesmo sem conhecimento técnico. É só baixar, personalizar e usar."
    },
    {
      question: "Por quanto tempo tenho acesso?",
      answer: "O acesso é vitalício! Você pode baixar os arquivos quantas vezes quiser, sem limite de tempo."
    }
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent uppercase">
          Perguntas Frequentes
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border border-green-500/30 rounded-xl overflow-hidden hover:border-green-500/50 transition-all duration-300"
            >
              <button
                className="w-full text-left p-8 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg md:text-xl font-semibold text-white pr-4 leading-relaxed">
                    {faq.question}
                  </h3>
                  <span className="text-green-400 text-2xl flex-shrink-0">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-8">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-900/50"></div>
    </section>
  );
};

export default FAQ;
