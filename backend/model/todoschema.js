const mongoose=require('mongoose')
const { Schema } = require('zod')



const todoschema= new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required: [true,'a todo must have a name '],
        
    },
    description:{
        type:String,
        required: [true,'a todo must have a description '],
    },
    completed:{
        type:Boolean,
        default:false
    }

})

const tododata= mongoose.model('todos',todoschema)

module.exports=tododata

