import { FastifyRequest, FastifyReply} from 'fastify'
import { CreateUsuariosService } from '../services/CreateUsuariosService'

class CreateUsuariosController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const {email, usuario, senha} = request.body as {email: string, usuario: string, senha: string}


        const usuariosService = new CreateUsuariosService()

        const usuarios = await usuariosService.execute({email, usuario, senha});

        reply.send(usuarios)
    }
}

export {CreateUsuariosController}