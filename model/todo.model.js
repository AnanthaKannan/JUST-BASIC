const mongoose = require("mongoose")

const todoSchema = new mongoose({
    tittle:{
        type:String,
        required:true
    },
    done:{
        type:Boolean,
        required:true
    }
})

const todoModel = mongoose.model("todo", todoSchema)
module.exports = todoModel