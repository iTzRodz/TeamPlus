import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logoParceiros from './assets/testeParceiros.svg'
import logoTeamPlus from './assets/logoTeamPlus.svg'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
// import './App.css';
import { Button } from 'primereact/button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-screen max-w-full'>
      <div className=' bg-[#346DFF] flex items-center	 justify-around	 p-3 '>
        <a href="https://vitejs.dev" target="_blank" className=''>
          <img src={logoTeamPlus} className="logo" alt="Vite logo" />
        </a>

        <nav className='flex gap-4'>
          <Button className='h-10 bg-black rounded-xl	text-white' label="Entrar" />
          <Button className='h-10 bg-black rounded-xl text-white border-solid border-black' label="Cadastrar-se" />
        </nav>

        {/* <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>

      <div className='p-4 ml-20'>
        <h1 className='font-extrabold	text-8xl'>ENCONTRE, VENDA E <br /> COMPRE</h1>
        <div className='flex flex-col	justify-end	items-end	mr-20'>
          <p className='w-4/12 h-52 font-light text-3xl text-start'>No TEAM +, você explora nosso catálogo, gera pedidos, acompanha entregas, consulta faturas e acessa soluções e dados para seu estabelecimento. Tudo em um só lugar.</p>
          <p className='w-4/12	h-52 font-light text-3xl text-justify'>Você explora nosso catálogo, gera pedidos, acompanha entregas, consulta faturas e acessa soluções e dados para seu estabelecimento. Tudo em um só lugar. Você explora nosso catálogo, gera pedidos, acompanha entregas, consulta faturas e soluções e dados para seu estabelecimento.</p>
        </div>
      </div>

      <div className=''>
        <div className='mt-24 flex flex-col items-center justify-center '>
          <h3 className='text-center font-semibold text-5xl'>Como o TEAM+ funciona</h3>

          <p className='text-start font-light text-3xl max-w-6xl mb-14'>Faça seu cadastro no TEAM + utilizando seu e-mail ou número de telefone. Tenha acesso à nossa variedade de produtos.</p>
          <p className='text-end  font-light text-3xl max-w-6xl mb-14'>Encontre o que precisa para o seu negócio e faça seu pedido. Confira o carrinho e o valor final do seu pedido para finalizar sua compra. Pronto, é fácil e rápido!</p>

        
          <h3 className='font-semibold text-4xl text-start'>Benefícios para o seu negócio:</h3>
          <p className='text-justify w-6/12 font-light text-3xl'>Faça seu pedido quando quiser e escolha a melhor data de entrega disponível para recebê-lo.
            Tenha acesso a todas as marcas que vão movimentar o seu negócio.
            Acompanhe o andamento e histórico dos seus pedidos e confira seu limite de crédito e faturas.</p>
          <Button className='h-10 bg-black rounded-xl text-white border-solid border-black' label="Cadastrar-se" />

        </div>
      </div>

      <div className='flex flex-col justify-center items-center mt-20'>
        <h3 className='font-semibold text-5xl '>Confira nossos parceiros</h3>
        <img src={logoParceiros} alt="" />
      </div>

      <div>
        
      </div>
    </div>
  )
}

export default App
