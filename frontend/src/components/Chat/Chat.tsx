import {useRef, useState, useEffect} from "react"
import io from 'socket.io-client'

export default function Chat(){
    
    const socket = io('http://localhost:3001');
    const messageRef = useRef<HTMLInputElement>(null)
    const [messageList, setmessageList] = useState([])

    useEffect(() =>{
        receive()
    }, [socket])

    const receive = () =>{
        socket.on('receive_message', (data) => {
            setmessageList((current) => [...current])
        })

        return() => socket.off('receive_message')
    }

    const handlesubmit = () =>{
        
        if(!messageRef.current?.value.trim()) return

        socket.emit('message', messageRef)
        clearInput()
        
    }

    const clearInput = () => {
        messageRef.current?.value == ''
    }

    return(
        <div className=" p-3 ">
            <h1>CHAT</h1>
            {
                messageList.map((message:any, index:any) =>(
                    <p key={index}>{message.author}: {message.text}</p>
                ))
            }
            <form className="bg-blue-400 p-1 m-[550px] flex h-12 box-border fixed">
            <input ref={messageRef} type="text" className="  p-3 rounded border-blue-400 border-solid"/>
            <button className="bg-blue-600 p-2 rounded" onClick={handlesubmit}>ENVIAR</button>
            </form>
        </div>
    )
}