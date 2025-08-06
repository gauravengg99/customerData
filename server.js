import express from 'express'
import dotenv from 'dotenv'
import { createCustomer } from './controller/customer.js'
import cors from 'cors'
dotenv.config({path:'.env'})

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extends:true}))
app.use(express.urlencoded({extended:true}))
const port = process.env.PORT || 4000

app.get('/',(req,res)=>{
    res.json({message:"server run successfully",status:"ok"})
})

app.post('/customer',createCustomer)

app.listen(port,()=>console.log(`http://localhost:${port}`))