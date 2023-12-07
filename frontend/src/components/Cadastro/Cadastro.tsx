import { useRef, FormEvent } from 'react'
import { api } from "../../services/api"

function Cadastro(){

    const emailRef = useRef<HTMLInputElement>(null)
  const usuarioRef = useRef<HTMLInputElement>(null)
  const senhaRef = useRef<HTMLInputElement>(null)

  async function handlesubmit(event: FormEvent) {
    event.preventDefault();

    if (!emailRef.current?.value || !usuarioRef.current?.value || !senhaRef.current?.value) return;

    const response = await api.post("/usuarios", {
      email: emailRef.current?.value,
      usuario: usuarioRef.current?.value,
      senha: senhaRef.current?.value
    })

    console.log(response.data);

    emailRef.current.value = ""
    usuarioRef.current.value = ""
    senhaRef.current.value = ""

  }


  return (
    <div className="w-full min-h-screen bg-gray-900 flex justify-center px-4">
      <main className="my-10 w-full md:max-w-2xl  rounded border-solid border-2 border-slate-500 ">
        <h1 className="text-4xl font-medium text-white flex justify-center">Cadastro</h1>

        <form className="flex flex-col my-6 ml-44 mr-36" onSubmit={handlesubmit}>

          <label className="font-medium text-white">Email</label>
          <input
            type="text"
            placeholder="Digite seu Email"
            className="w-80 mb-5 p-2 rounded"
            ref={emailRef}></input>
            

          <label className="font-medium text-white">Usuario</label>
          <input
            type="text"
            placeholder="Digite seu Usuario"
            className="w-80 mb-5 p-2 rounded"
            ref={usuarioRef}></input>

          <label className="font-medium text-white">Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            className="w-80 mb-5 p-2 rounded"
            ref={senhaRef}></input>
            

          <input
            type="submit"
            value="Cadastrar"
            className="cursor-pointer w-80 p-2 bg-green-500 rounded font-medium"></input>

        </form>

        <div>
          <a href='http://localhost:5173/login' className='text-white flex flex-col my-6 ml-64 mr-36'>Voltar para tela de login</a>
        </div>




      </main>
    </div>
  )
}

export default Cadastro;