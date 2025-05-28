
const Footer = () => {
  return (
    <footer className="bg-black border-t border-green-500/30 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Disclaimer */}
        <div className="mb-12 p-8 bg-gray-900/50 border border-gray-700 rounded-xl">
          <p className="text-gray-400 text-sm leading-relaxed mb-6 text-center">
            Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed text-center">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais. Nós não vendemos o seu e-mail ou qualquer informação para terceiros. Jamais fazemos nenhum tipo de spam. Se você tiver alguma dúvida, sinta-se à vontade para usar o link de contato e falar conosco em horário comercial de Segunda a Sextas das 09h00 às 18h00. Lemos e respondemos todas as mensagens por ordem de chegada.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a
            href="https://packdominacaodigital.com/contato/"
            className="text-green-400 hover:text-green-300 transition-colors duration-300"
          >
            Contato
          </a>
          <span className="text-gray-600">|</span>
          <a
            href="https://packdominacaodigital.com/termos-de-uso/"
            className="text-green-400 hover:text-green-300 transition-colors duration-300"
          >
            Termos de Uso
          </a>
          <span className="text-gray-600">|</span>
          <a
            href="https://packdominacaodigital.com/politica-de-privacidade/"
            className="text-green-400 hover:text-green-300 transition-colors duration-300"
          >
            Política de Privacidade
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            Copyright © 2024 Pack Dominação Digital. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
