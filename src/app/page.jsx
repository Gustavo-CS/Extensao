"use client";
import Link from "next/link";
import { Info, MapPin, Megaphone } from "lucide-react";

export default function HomePage() {
  const abas = [
    {
      titulo: "Acesso à Informação",
      descricao:
        "Informações úteis sobre benefícios sociais, documentos, programas e direitos.",
      icone: <Info className="w-8 h-8 text-purple-500" />,
      link: "/info",
      cor: "from-purple-200 to-white hover:from-purple-100",
    },
    {
      titulo: "Locais de Interesse",
      descricao:
        "Descubra ONGs, postos de saúde, faculdades e projetos próximos de você.",
      icone: <MapPin className="w-8 h-8 text-green-500" />,
      link: "/locais",
      cor: "from-green-200 to-white hover:from-green-100",
    },
    {
      titulo: "Painel de Avisos",
      descricao:
        "Fique por dentro das notícias, oportunidades e avisos da comunidade.",
      icone: <Megaphone className="w-8 h-8 text-yellow-500" />,
      link: "/avisos",
      cor: "from-yellow-200 to-white hover:from-yellow-100",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-yellow-50 to-white py-20 px-4">
      <h1 className="text-5xl font-bold text-gray-800 mb-6 text-center">
        Portal da Comunidade
      </h1>
      <p className="text-gray-600 text-center mb-12 max-w-2xl">
        Um espaço para fortalecer nossa comunidade com informação, conexão e
        oportunidades. Escolha uma das opções abaixo para começar:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {abas.map((aba, index) => (
          <Link
            key={index}
            href={aba.link}
            className={`rounded-2xl shadow-md border border-gray-100 p-6 bg-linear-to-b ${aba.cor} transition-transform transform hover:-translate-y-1 hover:shadow-lg`}
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-3 bg-white rounded-full shadow-sm">
                {aba.icone}
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                {aba.titulo}
              </h2>
              <p className="text-gray-600 text-sm">{aba.descricao}</p>
              <span className="text-sm text-yellow-600 font-medium mt-2 hover:underline">
                Acessar →
              </span>
            </div>
          </Link>
        ))}
      </div>

      <footer className="mt-16 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Portal Comunitário · Feito com 💛 para unir pessoas
      </footer>
    </main>
  );
}
