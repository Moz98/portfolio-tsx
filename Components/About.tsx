import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-28 uppercase tracking-[20px] text-gray-500 text-2xl">
        about
      </h3>

      <div className="space-y-10 px-0 md:px-10"></div>
      <h4 className="text-4xl font-semibold">
        Olá, eu me chamo Marcos, tenho 24 anos de idade e sou formado em
        Administração pelo Centro Universitário de Brasília
      </h4>
      <p className="text-sm">
        Sempre gostei da área de tecnologia e desde pequeno estou envolvido no
        meio digital. Após me formar decidi mudar o meu foco de carreira e
        começar a focar na área de desenovlvimento, mais especificamente em
        Front End. Desde de Abril/2022 venho aprendendo e desenovlvendo
        habilidades técnicas para me tornar um profissional de qualidade.
      </p>
    </div>
  );
}
