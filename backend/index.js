const express = require('express')
const mongoose=require('mongoose')
const zod=require('zod')
const updatetodos=require('./inputformat')
const createtodo=require('./inputformat')
const tododata=require('./model/todoschema')
const cors=require('cors')
const app=express()
const port=8000

app.use(cors())
app.use(express.json())
mongoose.connect('mongodb+srv://priyanshupaul003:oAsGAjErBlExDHoa@cluster0.42q18en.mongodb.net/Todo-app?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('server connected')
})

app.post('/todo',async(req,res)=>{
    // const payload=req.body
    // const parsedata=createtodo.safeParse(payload)
    // if (!parsedata.success) {
    //     res.status(411).json({
    //         msg: "You sent the wrong inputs",
    //     })
    //     return;
    //}

    const newtodo=await tododata.create(req.body)
    res.status(200).json({
        msg: 'todo created',
        data: newtodo
    })

})

app.put('/completed',async(req,res)=>{
    const payload=updatetodos.safeParse(req.body)
    await tododata.update({
        _id: req.body.id,

    },{
        completed: true
    }
    )
})



app.get('/todos',async(req,res)=>{
    let alltodos = await tododata.find({})
    res.status(200).json({
        data: alltodos,
        msg: 'got all todos'
    })

})




app.listen(port,()=>{
    console.log("server has started")
})

