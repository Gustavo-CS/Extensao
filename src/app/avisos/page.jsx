"use client";
import { useState } from "react";
import { Megaphone, Search, Flame, Users } from "lucide-react";
import BotaoVoltar from "@/components/botao";

export default function PainelDeAvisos() {
  const [busca, setBusca] = useState("");

  const avisos = [
    {
      "titulo": "ÚLTIMA CHAMADA: Atualização do CadÚnico",
      "descricao": "Famílias com NIS final 1, 2 e 3 devem atualizar o Cadastro Único no CRAS até o dia 30/11. Quem não atualizar pode ter o Bolsa Família bloqueado.",
      "categoria": "Programas Sociais",
      "data": "30/11/2025",
      "urgencia": "alta"
    },
    {
      "titulo": "Campanha de Vacinação contra Pólio e Sarampo",
      "descricao": "Leve seus filhos menores de 5 anos ao Posto de Saúde (UBS) para a vacinação. Proteja quem você ama! Levar caderneta e Cartão SUS.",
      "categoria": "Saúde",
      "data": "25/11/2025",
      "urgencia": "alta"
    },
    {
      "titulo": "Inscrições Abertas: CNH Social",
      "descricao": "O DETRAN abriu as inscrições para a CNH Social (Gratuita). Vagas limitadas. Inscrições apenas pelo site do DETRAN até sexta-feira.",
      "categoria": "Programas Sociais",
      "data": "14/11/2025",
      "urgencia": "alta"
    },
    {
      "titulo": "Mutirão de Limpeza Comunitário",
      "descricao": "Participe do mutirão para revitalizar a praça do bairro! Traga sua energia e vontade de ajudar. Ponto de encontro na quadra.",
      "categoria": "Comunidade",
      "data": "15/11/2025",
      "urgencia": "media"
    },
    {
      "titulo": "Risco de Desabamento: Muro do Centro Comunitário",
      "descricao": "O muro dos fundos do Centro Comunitário precisa de reparo urgente. Procuramos um engenheiro ou pedreiro voluntário para avaliar a situação.",
      "categoria": "Ajuda Comunitária",
      "data": "20/11/2025",
      "urgencia": "alta"
    },
    {
      "titulo": "Vaga de Emprego: Atendente de Padaria",
      "descricao": "A Padaria 'Pão Quente' (próxima à UBS) está contratando atendente para o período da tarde. Deixar currículo com Dona Sônia.",
      "categoria": "Oportunidade",
      "data": "18/11/2025",
      "urgencia": "media"
    },
    {
      "titulo": "AVISO: Falta de Água Programada",
      "descricao": "A companhia de saneamento informa que o bairro terá o fornecimento de água interrompido na quarta-feira (12/11) das 8h às 17h para manutenção.",
      "categoria": "Aviso",
      "data": "12/11/2025",
      "urgencia": "media"
    },
    {
      "titulo": "Ofereço: Aulas de Reforço Escolar",
      "descricao": "Sou estudante de Pedagogia (UF) e ofereço aulas de reforço gratuitas de matemática para crianças do 1º ao 5º ano. Contato: (61) 99999-9999.",
      "categoria": "Educação",
      "data": "01/12/2025",
      "urgencia": "baixa"
    },
    {
      "titulo": "Vagas Abertas: Curso de Informática Gratuito",
      "descricao": "A ONG 'Esperança Viva' está com matrículas abertas para o curso de Informática Básica para Adultos e Idosos. Vagas limitadas.",
      "categoria": "Educação",
      "data": "05/12/2025",
      "urgencia": "media"
    },
    {
      "titulo": "Precisa-se: Doação de Fraldas Geriátricas",
      "descricao": "Estamos arrecadando fraldas geriátricas (tamanhos M e G) para os idosos acamados assistidos pelo CRAS. Ponto de coleta no Salão Paroquial.",
      "categoria": "Ajuda Comunitária",
      "data": "10/12/2025",
      "urgencia": "baixa"
    }
  ]

  const avisosFiltrados = avisos.filter((aviso) =>
    aviso.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  const corUrgencia = (nivel) => {
    switch (nivel) {
      case "alta":
        return "bg-red-100 text-red-700 border-red-300";
      case "media":
        return "bg-yellow-100 text-yellow-700 border-yellow-300";
      default:
        return "bg-green-100 text-green-700 border-green-300";
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-yellow-50 to-white flex flex-col items-center py-16 px-4">
      <BotaoVoltar />

      <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center tracking-tight">
        Painel de Avisos
      </h1>

      {/* Campo de busca */}
      <div className="w-full max-w-3xl mb-8 flex items-center bg-white rounded-full shadow-md px-4 py-2 border border-gray-100">
        <Search className="w-5 h-5 text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Buscar por avisos"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Destaques */}
      {false &&
        (<div className="w-full max-w-3xl mb-5">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
            <Flame className="w-5 h-5 text-red-500" />
            Avisos Mais Latentes
          </h2>
          {avisos
            .filter((a) => a.urgencia === "alta")
            .map((a, i) => (
              <div
                key={i}
                className="bg-red-50 border border-red-200 p-4 rounded-xl mb-3"
              >
                <h3 className="text-red-800 font-semibold">{a.titulo}</h3>
                <p className="text-sm text-red-700">{a.descricao}</p>
              </div>
            ))}
        </div>)}

      {/* Avisos */}
      <div className="w-full max-w-3xl space-y-5">
        {/* <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
          <Megaphone className="w-5 h-5 text-yellow-500" />
          Outros avisos
        </h2> */}
        {avisosFiltrados.map((aviso, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <Megaphone className="w-5 h-5 text-yellow-500" />
                  {aviso.titulo}
                </h2>
                <p className="text-gray-600 mt-2">{aviso.descricao}</p>
                <p className="text-sm text-gray-500 mt-3">
                  🗓 {aviso.data} | Categoria: {aviso.categoria}
                </p>
              </div>
              <span
                className={`text-xs font-medium px-3 py-1 rounded-full border ${corUrgencia(
                  aviso.urgencia
                )}`}
              >
                {aviso.urgencia === "alta"
                  ? "Aviso Urgente"
                  : aviso.urgencia === "media"
                    ? "Importante"
                    : "Informativo"}
              </span>
            </div>
          </div>
        ))}

        {avisosFiltrados.length === 0 && (
          <p className="text-gray-500 text-center italic">
            Nenhum aviso encontrado.
          </p>
        )}
      </div>
    </div>
  );
}
