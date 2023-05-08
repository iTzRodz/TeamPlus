import React from "react";
import Image from "next/image";

import { Button } from "primereact/button";
import logoTeamPlus from "../assets/LogoTeamPlus.svg";
import Vector from "../assets/Vector (1).svg";
import logoParceiros from "../assets/LogoParceiro.svg";
import cartao from "../assets/Cartao.svg";
import onibus from "../assets/Onibus.svg";
import raio from "../assets/Raio.svg";
import mobileTeamPlus from "../assets/MobileTeamPlus.svg";
import googlePlay from "../assets/GooglePlay.svg";
import appStore from "../assets/AppStore.svg";
export function LandingPage() {
  return (
    <div className="h-screen w-screen max-w-full">
      <div className=" bg-[#346DFF] flex items-center justify-around p-3 ">
        <Image src={logoTeamPlus} alt="Team Plus Logo" />

        <nav className="flex gap-4">
          <Button
            className="h-10 bg-black rounded-xl	text-white"
            label="Entrar"
          />
          <Button
            className="h-10 bg-black rounded-xl text-white border-solid border-black"
            label="Cadastrar-se"
          />
        </nav>
      </div>

      <div className="p-4 ml-20">
        <h1 className="font-extrabold text-8xl uppercase">
          encontre, venda e <br /> compre
        </h1>

        <div className="flex flex-col justify-end items-end	mr-32">
          <p className="w-4/12 h-52 font-light text-3xl  text-justify">
            No TEAM +, você explora nosso catálogo, gera pedidos, acompanha
            entregas, consulta faturas e acessa soluções e dados para seu
            estabelecimento. Tudo em um só lugar.
          </p>
          <p className="w-4/12	h-52 font-light text-3xl text-justify">
            Você explora nosso catálogo, gera pedidos, acompanha entregas,
            consulta faturas e acessa soluções e dados para seu estabelecimento.
            Tudo em um só lugar. Você explora nosso catálogo, gera pedidos,
            acompanha entregas, consulta faturas e soluções e dados para seu
            estabelecimento.
          </p>
        </div>
      </div>

      <div className=" bg-[#EDEDED] w-2/3 mx-auto mt-16">
        <div className=" flex  items-center justify-center gap-6">
          <Image
            src={mobileTeamPlus}
            alt="Team Plus Celular"
            width={125}
            height={173}
          />
          <span className="font-inter text-3xl font-semibold">Baixe o Team+ no seu celular</span>
          <Image src={googlePlay} alt="Google Play" width={180} height={106} />
          <Image src={appStore} alt="App Store" width={180} height={91} />
        </div>
      </div>

      <div className="">
        <div className="mt-24 flex flex-col items-center justify-center ">
          <h3 className="text-center font-semibold text-5xl">
            Como o TEAM+ funciona
          </h3>

          <div className="flex flex-row justify-center items-center gap-5 mb-14">
            <Image src={cartao} alt="Cartao" width={91} height={89} />

            <p className="text-start font-light text-3xl max-w-6xl ">
              Faça seu cadastro no TEAM + utilizando seu e-mail ou número de
              telefone. <br></br> Tenha acesso à nossa variedade de produtos.
            </p>
          </div>

          <div className="flex flex-row items-center gap-5 mb-14">
            <p className="text-end  font-light text-3xl max-w-6xl ">
              Encontre o que precisa para o seu negócio e faça seu pedido.
              <br />
              Confira o carrinho e o valor final do seu pedido para finalizar
              sua compra. <br />
              Pronto, é fácil e rápido!
            </p>

            <Image src={onibus} alt="Onibus" />
          </div>

          <div className="flex flex-col items-start mt-3 ml-72">
            <h3 className="font-semibold text-4xl text-start">
              Benefícios para o seu negócio:
            </h3>

            <span className="flex flex-row gap-5 mt-5 mb-5">
              <p className="text-justify w-6/12 font-light text-3xl">
                Faça seu pedido quando quiser e escolha a melhor data de entrega
                disponível para recebê-lo. <br></br>
                Tenha acesso a todas as marcas que vão movimentar o seu negócio.{" "}
                <br></br>
                Acompanhe o andamento e histórico dos seus pedidos e confira seu
                limite de crédito e faturas.
              </p>
              <Image src={raio} alt="raio" />
            </span>
            <Button
              className="h-10 bg-black rounded-xl text-white border-solid border-black"
              label="Cadastrar-se"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-20">
        <h3 className="font-semibold text-5xl ">Confira nossos parceiros</h3>
        <Image src={logoParceiros} alt="Parceiros Logo" />
      </div>

      <footer className="bg-black text-white">
        <div className="flex justify-center items-center">
          <span className="text-center font-normal text-5xl mt-5">
            Todos os direitos reservados - 2023
          </span>
        </div>

        <div className="flex justify-around mt-7 ">
          <div className="flex flex-col justify-start items-stretch border-r border-white border-solid p-5">
            <p className="text-center font-bold text-3xl mb-6 uppercase">
              Contatos
            </p>

            <span className="text-left font-normal">
              <i className="pi pi-phone mr-3"></i>
              (14)321-9876
            </span>

            <span className="text-left font-normal">
              <i className="pi pi-envelope mr-3"></i>
              support@teamplus.com
            </span>
            <span className="text-left font-normal">
              <i className="pi pi-github mr-3"></i>
              @iTzRodz/TeamPlus
            </span>
            <span className="text-left font-normal">
              <i className="pi pi-exclamation-circle mr-3"></i>
              Sobre nós
            </span>
          </div>

          <Image src={Vector} alt="Team Plus" width={600} height={273} />
        </div>
      </footer>
    </div>
  );
}
