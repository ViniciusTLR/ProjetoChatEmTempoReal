import prismaClient from "../prisma";

interface CreateUsuariosProps{
    email: string,
    usuario: string,
    senha: string
}

class CreateUsuariosService{

    async execute({email, usuario, senha}: CreateUsuariosProps){

        if(!email || !usuario || !senha){
            throw new Error("Preencha todos os campos!")
        }

        const usuarios = await prismaClient.usuario.create({
            data:{
                email,
                usuario,
                senha
            }
        })
        console.log("Rota foi chamada!")

        return usuarios

    }

}

export { CreateUsuariosService }