"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

export default function BotaoVoltar() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.replace("/")}
      className="absolute start-2 top-2 flex items-center text-start gap-2 text-base font-medium text-gray-500 hover:text-gray-900 transition-colors mb-4 cursor-pointer"
      aria-label="Voltar para a página anterior"
    >
      <ChevronLeft />
      <p className="font-semibold">Voltar</p>
    </button>
  );
}