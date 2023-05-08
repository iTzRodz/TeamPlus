
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export function LoginComponent() {

	return (
		<>
			<div className="flex flex-row justify-center items-center h-screen w-screen">

				<div className="min-h-[400px] w-2/5 border-black border-solid border-2  rounded">

					<div className="flex h-auto justify-center flex-col items-center m-auto place-content-center p-5">
						<h1 className={`font-bold text-6xl mt-5 uppercase ${inter.className}`}>Entrar</h1>
					</div>

					<div className="place-content-center ">
						<div className="px-10 content-center mt-5 aling-center ">
							<input className="border-none mb-3 w-full p-2 rounded-md mt-1 block shadow-lg outline-none font-inter hover:bg-gray-100 placeholder-[#000000B2]" type="text"
								placeholder="E-mail" />

							<input className="border-none mb-3 w-full p-2 rounded-md mt-8 block shadow-lg outline-none font-inter hover:bg-gray-100 placeholder-[#000000B2]"
								type="password" placeholder="Senha" />
						</div>

						<div className="flex items-start justify-start p-4 gap-7 mt-40">
							<div className='flex flex-col justify-start items-start justify-items-start	'>
								<span className='font-light text-3xl'>Não tem uma conta <span className='uppercase'>team+</span>?</span>
								<a className='font-semibold text-3xl' href="http://">Cadastre-se</a>
							</div>

							<button
								className={`px-9 text-2xl font-extrabold ${inter.className} text-black bg-gray-50 mb-4 shadow-lg rounded-xl p-2 hover:bg-gray-300 active:bg-gray-400 border`}>
								Entrar
							</button>
						</div>
					</div>
				</div>
			</div >
		</>
	)
}
