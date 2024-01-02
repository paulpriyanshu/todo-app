const express = require('express')
const zod=require('zod')
const updatetodos=require('./inputformat')
const createtodo=require('./inputformat')
const cors=require('cors')
const app=express()
const port=8000

app.use(express.json())
app.post('/todo',(req,res)=>{
    createtodo.parse(req.body)

})

app.get('/todos',(req,res)=>{

})

app.put


app.listen(port,()=>{
    console.log(`listening on ports ${port}`)
})

