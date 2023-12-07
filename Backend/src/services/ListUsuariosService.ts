import prismaClient from "../prisma";

class ListUsuariosService{
    async execute(){

        const usuarios = await prismaClient.usuario.findMany()
        return usuarios;
    }
    
}

export {ListUsuariosService}