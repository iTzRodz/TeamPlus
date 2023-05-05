import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { Button } from 'primereact/button';

export function Login() {
  const [value, setValue] = useState<string>('')

  return (
    <>
      <div className="card flex flex-col justify-center items-center 	mt-36  p-4">
        <div className='max-w-5xl border-black border-solid border-2 w-2/4 h-2/4 flex flex-col justify-center items-center p-4'>
          <h1 className="font-bold text-6xl mt-5 uppercase">Entrar</h1>

          <div className="mt-14">
            <span className="p-float-label">
              <InputText
              className='w-96	p-inputtext-lg'
                id="username"
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setValue(e.target.value)
                }
              />
              <label className='font-bold text-xl' htmlFor="username">E-mail</label>
            </span>
           

            <span className="p-float-label mt-8">
              <Password
              className='w-96 p-inputtext-lg'
                inputId="password"
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setValue(e.target.value)
                }
              />
              <label htmlFor="password" className='text-xl font-bold'>Senha</label>
            </span>

            <div className='flex justify-start items-start gap-5 mt-40'>

            <span className='font-light text-3xl'>Não tem uma conta <span className='uppercase'>team+</span>?</span>
            <Button label="Entrar" outlined />

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
