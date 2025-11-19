"use client";
import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import BotaoVoltar from "@/components/botao";

export default function FAQPage() {
  const faqs = [
    {
      "question": "Quais são os contatos de emergência?",
      "answer": "Os contatos de emergência são números que devem ser acionados em situações urgentes. No Brasil, os principais são:\n\n• 190 – Polícia Militar (em caso de crimes, assaltos, violência ou situações de perigo imediato)\n• 192 – SAMU (emergências médicas e remoção de pacientes)\n• 193 – Corpo de Bombeiros (incêndios, resgates, acidentes)\n• 199 – Defesa Civil (desastres naturais, enchentes, desabamentos)\n• 180 – Central de Atendimento à Mulher (violência doméstica e orientação)\n• 181 – Disque Denúncia (denúncias anônimas de crimes)\n• 100 – Disque Direitos Humanos (violação de direitos de crianças, idosos, pessoas com deficiência, etc.)\n• 136 – Ministério da Saúde (informações sobre o SUS e saúde pública)\n• 191 – Polícia Rodoviária Federal (ocorrências em rodovias federais)\n• 188 – CVV (Centro de Valorização da Vida – apoio emocional e prevenção do suicídio)\n• 125 – Defesa Civil Estadual (em alguns estados)\n\nTambém é importante manter atualizados os contatos pessoais de emergência, como:\n• Familiares e amigos próximos\n• Contato do plano de saúde\n• Médico de confiança\n• Escola dos filhos (se aplicável)",
      "category": "Segurança e Emergências"
    },
    {
      "question": "Como falar com a Ouvidoria do Recanto das Emas (reclamações ou sugestões)?",
      "answer": "Você pode ligar gratuitamente para o número 162, acessar o site 'participa.df.gov.br' ou ir pessoalmente na Administração Regional (Avenida Recanto das Emas, Centro Urbano, Quadra 206/300).",
      "category": "Serviços e Atendimento"
    },
    {
      "question": "O que é o Cadastro Único (CadÚnico) e para que serve?",
      "answer": "O Cadastro Único é a principal porta de entrada para os programas sociais do Governo Federal. Ele é um registro que permite ao governo saber quem são e como vivem as famílias de baixa renda no Brasil.",
      "category": "Cadastro e Renda Básica"
    },
    {
      "question": "Como sei se tenho direito ao Bolsa Família?",
      "answer": "Você precisa estar com o Cadastro Único atualizado e ter uma renda familiar por pessoa dentro do limite estabelecido pelo programa. A seleção é feita automaticamente pelo sistema.",
      "category": "Cadastro e Renda Básica"
    },
    {
      "question": "Onde eu faço ou atualizo meu Cadastro Único?",
      "answer": "Você deve procurar o CRAS (Centro de Referência de Assistência Social) mais próximo da sua casa ou um posto de atendimento do CadÚnico na sua cidade. É preciso levar documentos de todos que moram na casa.",
      "category": "Cadastro e Renda Básica"
    },
    {
      "question": "O que é o BPC (Benefício de Prestação Continuada)?",
      "answer": "É um benefício de um salário mínimo por mês para idosos acima de 65 anos ou pessoas com deficiência de qualquer idade, desde que comprovem ter baixa renda e não receber outro benefício.",
      "category": "Cadastro e Renda Básica"
    },
    {
      "question": "O que é a Tarifa Social de Energia Elétrica?",
      "answer": "É um desconto na conta de luz para famílias de baixa renda inscritas no CadÚnico ou que recebem o BPC. O desconto é aplicado automaticamente pela companhia de energia.",
      "category": "Moradia e Contas"
    },
    {
      "question": "Se estou no CadÚnico e não tenho a Tarifa Social, o que faço?",
      "answer": "Você deve ir até a companhia de energia elétrica da sua cidade levando seu NIS (Número de Identificação Social) e documentos pessoais para solicitar a inclusão na Tarifa Social.",
      "category": "Moradia e Contas"
    },
    {
      "question": "Existe Tarifa Social para a conta de água?",
      "answer": "Sim, muitas companhias estaduais de água e esgoto oferecem a Tarifa Social de Água. É preciso verificar os requisitos (geralmente estar no CadÚnico) e solicitar diretamente na empresa.",
      "category": "Moradia e Contas"
    },
    {
      "question": "O que é o programa Minha Casa, Minha Vida?",
      "answer": "É um programa do governo que facilita a compra da casa própria para famílias de baixa renda (Faixa 1 e 2), com subsídios e taxas de juros reduzidas.",
      "category": "Moradia e Contas"
    },
    {
      "question": "O que é o ID Jovem?",
      "answer": "É um documento digital gratuito para jovens de 15 a 29 anos de baixa renda (com CadÚnico atualizado). Ele garante meia-entrada em eventos culturais e esportivos, e viagens interestaduais gratuitas ou com desconto.",
      "category": "Juventude e Oportunidades"
    },
    {
      "question": "Como eu emito meu ID Jovem?",
      "answer": "Você pode gerar seu ID Jovem diretamente pelo aplicativo 'ID Jovem' ou pelo site oficial, usando seu número do NIS.",
      "category": "Juventude e Oportunidades"
    },
    {
      "question": "O que é o programa CNH Social (ou CNH Gratuita)?",
      "answer": "É um programa, geralmente estadual (varia em cada estado), que oferece a primeira carteira de motorista (categorias A ou B) de graça para pessoas de baixa renda, inscritas no CadÚnico.",
      "category": "Juventude e Oportunidades"
    },
    {
      "question": "Como me inscrevo na CNH Social?",
      "answer": "Você precisa acompanhar os editais e o site do DETRAN do seu estado. A seleção não é contínua, ela abre em períodos específicos e os requisitos (como idade e escolaridade) podem variar.",
      "category": "Juventude e Oportunidades"
    },
    {
      "question": "O que é o Programa Pé-de-Meia?",
      "answer": "É um incentivo financeiro (uma poupança) para estudantes de baixa renda do Ensino Médio público. O objetivo é incentivar a permanência na escola e a conclusão dos estudos.",
      "category": "Juventude e Oportunidades"
    },
    {
      "question": "Como tirar a segunda via de documentos (RG, Certidão) de graça?",
      "answer": "Pessoas inscritas no CadÚnico ou que assinem uma declaração de pobreza (hipossuficiência) têm direito à gratuidade na emissão da 2ª via de documentos. Procure o CRAS ou o órgão emissor (Polícia Civil, Cartório).",
      "category": "Acesso a Direitos"
    },
    {
      "question": "Preciso de um advogado e não posso pagar. O que faço?",
      "answer": "Você deve procurar a Defensoria Pública do seu estado. Eles oferecem assistência jurídica gratuita para quem comprovar baixa renda e precisar de serviços de advocacia.",
      "category": "Acesso a Direitos"
    },
    {
      "question": "Como faço para ter o Cartão do SUS?",
      "answer": "Você pode solicitar seu Cartão Nacional de Saúde (Cartão SUS) em qualquer Unidade Básica de Saúde (Posto de Saúde) ou na Secretaria de Saúde do seu município. Leve seus documentos pessoais (RG, CPF) e um comprovante de residência.",
      "category": "Saúde"
    },
    {
      "question": "O que o Posto de Saúde (UBS) oferece de graça?",
      "answer": "A UBS (Unidade Básica de Saúde) oferece consultas com clínico geral, pediatra e ginecologista, vacinas, curativos, testes rápidos (gravidez, HIV, sífilis), acompanhamento de doenças (diabetes, hipertensão) e alguns medicamentos básicos.",
      "category": "Saúde"
    },
    {
      "question": "Como funciona o programa Farmácia Popular?",
      "answer": "Com sua receita médica, RG e CPF, você pode retirar alguns medicamentos de graça (para diabetes, hipertensão, asma) ou com grande desconto em farmácias conveniadas, que têm o selo 'Aqui tem Farmácia Popular'.",
      "category": "Saúde"
    },
    {
      "question": "Quando devo chamar o SAMU (192)?",
      "answer": "O SAMU deve ser chamado em emergências médicas graves, como acidentes de trânsito, infartos (dor no peito), derrames (AVC), falta de ar intensa, queimaduras graves e paradas cardíacas.",
      "category": "Saúde"
    },
    {
      "question": "O que é o SINE e como ele me ajuda a arrumar emprego?",
      "answer": "O SINE (Sistema Nacional de Emprego) é um órgão do governo que cadastra trabalhadores e vagas de emprego. Você pode ir a um posto do SINE na sua cidade para ver as vagas disponíveis e se candidatar gratuitamente.",
      "category": "Trabalho e Qualificação"
    },
    {
      "question": "Como faço para ter a Carteira de Trabalho Digital?",
      "answer": "Basta baixar o aplicativo 'Carteira de Trabalho Digital' no seu celular e acessá-lo usando sua conta Gov.br. Ela substitui a carteira de trabalho de papel para a maioria dos fins.",
      "category": "Trabalho e Qualificação"
    },
    {
      "question": "Fui demitido. Como sei se tenho direito ao Seguro-Desemprego?",
      "answer": "Você precisa ter sido demitido sem justa causa, ter trabalhado por um período mínimo (varia de 6 a 12 meses, dependendo se é a 1ª, 2ª ou 3ª vez) e não estar recebendo outro benefício do INSS, exceto pensão por morte ou auxílio-acidente.",
      "category": "Trabalho e Qualificação"
    },
    {
      "question": "Trabalho por conta própria. O que é o MEI?",
      "answer": "O MEI (Microempreendedor Individual) é uma forma simples de legalizar seu negócio. Pagando uma taxa mensal baixa (DAS), você ganha um CNPJ e passa a ter direitos como aposentadoria, auxílio-doença e salário-maternidade.",
      "category": "Trabalho e Qualificação"
    },
    {
      "question": "O que é o Auxílio Gás (Vale Gás)?",
      "answer": "É um benefício pago a cada dois meses para famílias de baixa renda (inscritas no CadÚnico) para ajudar na compra do gás de cozinha. O valor é depositado geralmente junto com o Bolsa Família.",
      "category": "Alimentação e Assistência"
    },
    {
      "question": "O que é o Restaurante Popular?",
      "answer": "São restaurantes administrados pelo governo (municipal ou estadual) que oferecem refeições completas e nutritivas a preços muito baixos (geralmente R$ 1,00 ou R$ 2,00) para a população de baixa renda.",
      "category": "Alimentação e Assistência"
    },
    {
      "question": "Não terminei os estudos na idade certa. Como posso voltar a estudar?",
      "answer": "Você pode se matricular no EJA (Educação de Jovens e Adultos) ou no CEEBJA/CENSU. É um programa gratuito que permite concluir o Ensino Fundamental ou Médio mais rapidamente. Procure a escola pública mais próxima.",
      "category": "Educação"
    },
    {
      "question": "Como conseguir uma vaga em creche pública para meu filho?",
      "answer": "Você deve procurar a Secretaria de Educação do seu município ou o CRAS para saber como funciona a fila de espera. Geralmente é preciso fazer um cadastro e apresentar documentos da criança e comprovantes de renda e residência.",
      "category": "Educação"
    },
    {
      "question": "Como entrar na faculdade sendo de baixa renda?",
      "answer": "Você pode usar sua nota do ENEM para tentar o Prouni (que dá bolsas de 50% ou 100% em faculdades particulares) ou o Sisu (para vagas em universidades públicas federais e estaduais).",
      "category": "Educação"
    },
    {
      "question": "O que é o Ligue 180?",
      "answer": "É a Central de Atendimento à Mulher em Situação de Violência. A ligação é gratuita e funciona 24 horas. Eles oferecem escuta, orientação e encaminham denúncias.",
      "category": "Assistência Específica"
    },
    {
      "question": "O que é o Disque 100 (Disque Direitos Humanos)?",
      "answer": "É um canal para denunciar violações de direitos humanos, como violência contra crianças e adolescentes, pessoas idosas, pessoas com deficiência, população LGBT+ e outras.",
      "category": "Assistência Específica"
    }
  ]

  const [openIndex, setOpenIndex] = useState(null);
  const [busca, setBusca] = useState("");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqsFiltrados = faqs.filter((info) =>
    info.question.toLowerCase().includes(busca.toLowerCase()) ||
    info.category.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-yellow-50 to-white flex flex-col items-center py-16 px-4">
      <BotaoVoltar />

      <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center tracking-tight">
        Acesso à Informação
      </h1>

      {/* Campo de busca */}
      <div className="w-full max-w-3xl mb-8 flex items-center bg-white rounded-full shadow-md px-4 py-2 border border-gray-100">
        <Search className="w-5 h-5 text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Buscar por informações"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      <div className="w-full max-w-3xl space-y-4">
        {faqsFiltrados.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-3 cursor-pointer transition-all duration-200"
          >
            <div
              onClick={() => toggleFAQ(index)}
              className="flex flex-col py-4"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h2>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </div>
              <div className="w-min whitespace-nowrap mt-1 py-1 px-3 text-black bg-amber-200 rounded-2xl">{faq.category}</div>
            </div>
            <div
              className={`transition-all duration-300 overflow-hidden ${openIndex === index ? "max-h-120 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              <p className="text-gray-600 pb-4 whitespace-pre-line">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
