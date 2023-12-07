
import { useRef, FormEvent } from 'react'
import io from 'socket.io-client'

export default function Login() {

    const socket = io('http://localhost:3001');
    const emailRef = useRef<HTMLInputElement>(null)
    const senhaRef = useRef<HTMLInputElement>(null)
  
    async function handlesubmit(event: FormEvent) {
        event.preventDefault();
      
  
      if (!emailRef.current?.value || !senhaRef.current?.value) return;
        socket.connect()
        socket.emit('set_email', emailRef.current?.value )
    }

    return (
        <div className="w-full min-h-screen bg-gray-900 flex justify-center px-4">
            <main className="my-10 w-full md:max-w-2xl  rounded border-solid border-2 border-slate-500 ">
                <h1 className="text-4xl font-medium text-white flex justify-center">Login</h1>

                <form className="flex flex-col my-6 ml-44 mr-36" onSubmit={handlesubmit}>

                    <label className="font-medium text-white" >Email</label>
                    <input

                        placeholder="Digite seu email"
                        className="w-80 mb-5 p-2 rounded"
                        type="text"
                        ref={emailRef}
                    ></input>


                    <label className="font-medium text-white" >Senha</label>
                    <input

                        placeholder="Digite sua senha"
                        className="w-80 mb-5 p-2 rounded"
                        type="password"
                        ref={senhaRef}></input>

                    <input
                        type="submit"
                        value="Entrar"
                        className="cursor-pointer w-80 p-2 bg-green-500 rounded font-medium mt-5"
                        onClick={handlesubmit}></input>
                    
                </form>

                <div>
                    <a className="text-white flex flex-col my-6 ml-72 mr-36" href="http://localhost:5173/cadastro">Cadastrar-se!</a>
                </div>

                <div>
                    <a className="text-white flex flex-col my-6 ml-72 mr-36" href="http://localhost:5173/chat">CHAT!</a>
                </div>
                
            </main>
        </div>

    )
}