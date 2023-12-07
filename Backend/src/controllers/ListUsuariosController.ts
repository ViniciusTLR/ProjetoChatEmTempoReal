import { FastifyRequest, FastifyReply } from "fastify"
import { ListUsuariosService } from "../services/ListUsuariosService"

class ListUsuariosController{

    async handle(request:FastifyRequest ,reply:FastifyReply){
        const  listUsuariosService = new ListUsuariosService();

        const usuarios = await listUsuariosService.execute();

        reply.send(usuarios);
    }
}

export{ListUsuariosController}