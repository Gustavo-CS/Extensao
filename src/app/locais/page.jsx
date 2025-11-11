"use client";
import { useState } from "react";
import { MapPin, ChevronDown, ExternalLink, Search } from "lucide-react";

export default function LocaisDeInteresse() {
  const locais = [
    {
      "nome": "CRAS - Centro de Referência de Assistência Social",
      "tipo": "Assistência Social",
      "descricao": "Principal ponto de atendimento para programas sociais. É o local para fazer ou atualizar o Cadastro Único (CadÚnico).",
      "endereco": "Av. Principal, 100 - Bairro da Cidadania (Endereço Fictício)",
      "projetos": [
        {
          "titulo": "Cadastro Único (CadÚnico)",
          "utilidade": "Necessário para Bolsa Família, BPC, Tarifa Social, ID Jovem, Auxílio Gás, etc.",
        },
        {
          "titulo": "Acompanhamento Familiar",
          "utilidade": "Orientação sobre direitos e deveres e encaminhamento para outros serviços.",
        }
      ]
    },
    {
      "nome": "UBS - Unidade Básica de Saúde (Posto de Saúde)",
      "tipo": "Saúde Pública",
      "descricao": "Local para atendimento médico primário, vacinação, retirada de remédios básicos e acompanhamento de saúde.",
      "endereco": "Rua da Saúde, 50 - Vila Esperança (Endereço Fictício)",
      "projetos": [
        {
          "titulo": "Emissão do Cartão SUS",
          "utilidade": "Necessário para qualquer atendimento na rede pública de saúde.",
        },
        {
          "titulo": "Vacinação e Consultas",
          "utilidade": "Acesso a consultas (clínico geral, pediatra) e ao calendário nacional de vacinação.",
        }
      ]
    },
    {
      "nome": "Caixa Econômica Federal",
      "tipo": "Banco Público",
      "descricao": "Agência bancária responsável pelo pagamento da maioria dos benefícios sociais e por programas habitacionais.",
      "endereco": "Av. Brasil, 1000 - Centro (Endereço Fictício)",
      "projetos": [
        {
          "titulo": "Pagamento de Benefícios",
          "utilidade": "Saque do Bolsa Família, Auxílio Gás, Seguro-Desemprego e BPC.",
        },
        {
          "titulo": "Minha Casa, Minha Vida",
          "utilidade": "Informações e financiamento para programas habitacionais do governo.",
        }
      ]
    },
    {
      "nome": "SINE - Agência do Trabalhador",
      "tipo": "Emprego e Renda",
      "descricao": "Órgão público que cadastra trabalhadores para vagas de emprego e administra o Seguro-Desemprego.",
      "endereco": "Rua do Trabalhador, 300 - Centro (Endereço Fictício)",
      "projetos": [
        {
          "titulo": "Vagas de Emprego",
          "utilidade": "Intermediação de mão de obra entre empresas e trabalhadores.",
        },
        {
          "titulo": "Seguro-Desemprego",
          "utilidade": "Entrada e acompanhamento do benefício para trabalhadores demitidos.",
        }
      ]
    },
    {
      "nome": "Defensoria Pública Estadual",
      "tipo": "Acesso à Justiça",
      "descricao": "Oferece assistência jurídica gratuita (advogado gratuito) para pessoas que não podem pagar por um.",
      "endereco": "Praça da Justiça, S/N - Centro Cívico (Endereço Fictício)",
      "projetos": [
        {
          "titulo": "Assistência Jurídica Gratuita",
          "utilidade": "Ações de pensão alimentícia, divórcio, guarda, defesa em processos, etc.",
        },
        {
          "titulo": "Direito à Documentação",
          "utilidade": "Ajuda para conseguir 2ª via gratuita de certidões e documentos.",
        }
      ]
    },
    {
      "nome": "DETRAN - Departamento Estadual de Trânsito",
      "tipo": "Serviços",
      "descricao": "Responsável pela emissão de carteiras de motorista (CNH) e programas sociais relacionados.",
      "endereco": "Av. das Américas, 2000 - Setor de Serviços (Endereço Fictício)",
      "projetos": [
        {
          "titulo": "CNH Social / CNH Gratuita",
          "utilidade": "Inscrição no programa (quando disponível no estado) para tirar a CNH de graça.",
        }
      ]
    },
    {
      "nome": "Restaurante Popular Municipal",
      "tipo": "Alimentação",
      "descricao": "Oferece refeições completas, balanceadas e de qualidade a preços muito baixos (subsidiados).",
      "endereco": "Praça da Matriz, 10 - Centro (Endereço Fictício)",
      "projetos": [
        {
          "titulo": "Refeição a Baixo Custo",
          "utilidade": "Garante a segurança alimentar com almoços e, às vezes, cafés da manhã.",
        }
      ]
    },
    {
      "nome": "Escola Municipal/Estadual (Polo EJA)",
      "tipo": "Educação",
      "descricao": "Escola pública que oferece turmas de Educação de Jovens e Adultos (EJA) para quem não terminou os estudos.",
      "endereco": "Rua da Escola, 500 - Bairro das Escolas (Endereço Fictício)",
      "projetos": [
        {
          "titulo": "Matrícula no EJA",
          "utilidade": "Permite concluir o Ensino Fundamental ou Médio em menos tempo.",
        }
      ]
    },
    {
      "nome": "ONG Ação Comunitária",
      "tipo": "ONG / Terceiro Setor",
      "descricao": "Organização não governamental focada em reforço escolar, profissionalização e distribuição de alimentos.",
      "endereco": "Travessa dos Voluntários, 10 - Bairro Novo (Endereço Fictício)",
      "projetos": [
        {
          "titulo": "Cursos Profissionalizantes",
          "utilidade": "Oferece cursos gratuitos de informática, corte e costura, ou panificação.",
        },
        {
          "titulo": "Pré-Vestibular Comunitário",
          "utilidade": "Ajuda jovens de baixa renda a se prepararem para o ENEM (Prouni/Sisu).",
        }
      ]
    },
    {
      "nome": "Universidade (Núcleo de Prática Jurídica / Clínica-Escola)",
      "tipo": "Educação / Extensão",
      "descricao": "Faculdades que oferecem serviços gratuitos à comunidade prestados por alunos supervisionados.",
      "endereco": "Campus Universitário, Prédio 5 - Bairro Universitário (Endereço Fictício)",
      "projetos": [
        {
          "titulo": "Atendimento Jurídico Gratuito",
          "utilidade": "Alternativa à Defensoria Pública para casos cíveis e de família.",
        },
        {
          "titulo": "Atendimento Psicológico Social",
          "utilidade": "Sessões de terapia a baixo custo ou gratuitas (Clínica de Psicologia).",
        }
      ]
    },
    {
      "nome": "DEAM - Delegacia da Mulher / Centro de Referência da Mulher",
      "tipo": "Proteção",
      "descricao": "Local especializado para acolhimento, denúncia e proteção de mulheres em situação de violência.",
      "endereco": "Rua das Marias, 80 - Centro (Endereço Fictício)",
      "projetos": [
        {
          "titulo": "Denúncia (Ligue 180)",
          "utilidade": "Registro de Boletim de Ocorrência e solicitação de medida protetiva.",
        },
        {
          "titulo": "Acolhimento Psicológico e Social",
          "utilidade": "Apoio para sair do ciclo de violência.",
        }
      ]
    }
  ]

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [busca, setBusca] = useState("");

  const locaisFiltrados = locais.filter((local) =>
    local.nome.toLowerCase().includes(busca.toLowerCase()) ||
    local.tipo.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-linear-to-br from-yellow-50 to-white flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center tracking-tight">
        Locais de Interesse
      </h1>

      {/* Campo de busca */}
      <div className="w-full max-w-4xl mb-8 flex items-center bg-white rounded-full shadow-md px-4 py-2 border border-gray-100">
        <Search className="w-5 h-5 text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Buscar por locais de interesse"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      <div className="w-full max-w-4xl space-y-6">
        {locaisFiltrados.map((local, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300"
          >
            <div
              className="flex justify-between items-center p-5 cursor-pointer"
              onClick={() => toggle(index)}
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-yellow-500" />
                  {local.nome}
                </h2>
                <p className="text-sm text-gray-500 mt-1">{local.tipo}</p>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === index ? "rotate-180" : ""
                  }`}
              />
            </div>

            {openIndex === index && (
              <div className="px-5 pb-5 border-t border-gray-100 transition-all duration-300">
                <p className="text-gray-600 mt-3">{local.descricao}</p>
                <p className="text-sm text-gray-500 mt-2">
                  📍 <span className="italic">{local.endereco}</span>
                </p>

                <h3 className="text-lg font-semibold text-gray-700 mt-4">
                  Projetos e Utilidades
                </h3>
                <ul className="mt-2 space-y-3">
                  {local.projetos.map((projeto, i) => (
                    <li
                      key={i}
                      className="bg-gray-50 rounded-xl p-3 border border-gray-100 hover:shadow-sm transition"
                    >
                      <p className="font-medium text-gray-800">
                        {projeto.titulo}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        {projeto.utilidade}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
