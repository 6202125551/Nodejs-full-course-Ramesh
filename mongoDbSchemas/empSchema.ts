import mongoose, { model } from 'mongoose'

const eschema = new mongoose.Schema({
    empno:{
        type:Number
    },
    ename:{
        type:String
    },
    sal:{
        type:Number
    }
})

export const empSchema= mongoose.model('emp', eschema)