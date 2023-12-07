import { type } from 'os'
import {z} from 'zod'

const ValidacaoSchema = z.object({
    email: z.string().email("Email precisa ser valido"),
    senha: z.string().min(4,"A senha deve ter 4 ou mais caracteres")
})

type Valid = z.infer<typeof ValidacaoSchema>

const result = ValidacaoSchema.safeParse({
    email: "vinivini@hotmail.com",
    senha: "12345678"
})

if(result.success){
    const valid: Valid = result.data 
    console.log(valid)
}

