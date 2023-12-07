import Fastify from "fastify";
import cors from "@fastify/cors"
import { routes } from "./routes";
import { text } from "stream/consumers";
const app = require("express")()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {cors: {origin: 'http://localhost:5173/chat'}})

const PORT = 3001

io.on('connection', (socket:any) => {
    console.log('usuario conectado: ', socket.id);

    socket.on('disconnect', (reason:any) => {
        console.log('Usuario desconectado', socket.id)
    })

    socket.on('set_email', (email:any) => {
        socket.data.email = email
    })

    socket.on('message', (message:any) =>{
        io.emit('receive_message', 
            text,
            'authorId'=== socket.id,
            'author'=== socket.data.email
        )
    })
  });

server.listen(PORT,() => console.log('Server funcionando porta 3001'))

const appl = Fastify({logger: true})


const start = async () => {

    await appl.register(cors);
    await appl.register(routes);

    try{
        await appl.listen({ port: 3000 })
    }catch(err){
        process.exit(1)
    }
}

start();