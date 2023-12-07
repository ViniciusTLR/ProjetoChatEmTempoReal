import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify"
import {CreateUsuariosController} from './controllers/CreateUsuariosController'
import { request } from "http"
import {ListUsuariosController} from './controllers/ListUsuariosController'

export async function routes(fastify:FastifyInstance, options:FastifyPluginOptions) {
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply ) => {
        return {ok:true}
    })

    fastify.post("/usuarios", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUsuariosController().handle(request, reply)
    })

    fastify.get("/usuarios", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListUsuariosController().handle(request, reply)
    })
}